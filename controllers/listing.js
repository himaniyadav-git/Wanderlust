const Listing = require("../models/listing.js");

//added this for map
const axios = require("axios");

//geocoding helper - converts address to lat/lng using OpenStreetMap
async function geocodeLocation(location) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
  const response = await axios.get(url, {
    headers: { "User-Agent": "wanderlust-app" }
  });
  if (!response.data.length) {
    throw new Error("Location not found. Try a more specific address.");
  }
  const { lat, lon } = response.data[0];
  return { type: "Point", coordinates: [parseFloat(lon), parseFloat(lat)] };
}

//for index route
module.exports.index = async (req, res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

//for new route
module.exports.renderNewFrom = (req,res)=>{
    //console.log(req.user);
    
    res.render("listings/new.ejs");
};


//for show route
module.exports.showListing = async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({path : "reviews", 
        populate : {
            path: "author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    //console.log(listing);
    res.render("listings/show.ejs", {listing});
};


//for create route
module.exports.createListing = async (req, res, next)=>{
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; //info of user saved by passort in req.user
    newListing.image = {url , filename};

    try {
        newListing.geometry = await geocodeLocation(
            `${req.body.listing.location}, ${req.body.listing.country}`
        );
    } catch (err) 
    {
        req.flash("error", "Could not find that location. Please check the spelling.");
        return res.redirect("/listings/new");
    }
    await newListing.save();
    req.flash("success", "new listing created");
    res.redirect("/listings");

};



//for edit route
module.exports.renderEditForm = async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    let originalImgUrl = listing.image.url;
    originalImgUrl = originalImgUrl.replace("/upload", "/upload/h_200,w_250");
    res.render("listings/edit.ejs", {listing, originalImgUrl});
};


//for update route
module.exports.updateListing = async (req, res) => {
    
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = {url , filename};
        await listing.save();
    }
    

    req.flash("success", " listing updated");
    res.redirect(`/listings/${id}`);
};


//for delete route
module.exports.destroylisting = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "listing deleted");
    res.redirect("/listings");
};