const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });//initializing where images while be stored

//router.route combine same path requests--> here it combine index and create route
router
    .route("/")
    .get( wrapAsync(listingController.index))//index route
    .post( //create route
        isLoggedIn , 
        upload.single("listing[image]"),
        validateListing, 
        wrapAsync(listingController.createListing)
    );


 //new route
router.get("/new", isLoggedIn, 
    listingController.renderNewFrom
);


//combining show route, update route and delete route
router
    .route("/:id")
    .get( 
        wrapAsync(
            listingController.showListing
        )
    )
    .put( 
        isLoggedIn, 
        isOwner,
        upload.single("listing[image]"),
        validateListing, 
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isLoggedIn, isOwner ,
        wrapAsync(listingController.destroylisting)
   );
    
   

//edit route
router.get("/:id/edit", isLoggedIn, 
    isOwner , wrapAsync(listingController.renderEditForm)
);

// //delete route
// router.delete("/:id", isLoggedIn, isOwner ,
//    wrapAsync(listingController.destroylisting)
 //);


module.exports = router;