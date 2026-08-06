
  // map.js - handles listing map rendering
function initMap(coordinates, title) {
  const map = L.map('map' , { zoomControl: false }).setView([coordinates[1], coordinates[0]], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);


  // home icon using Font Awesome (already loaded in boilerplate.ejs)
  const homeIcon = L.divIcon({
    html: '<div class="marker-highlight"><i class="fa-solid fa-house" ></i>',
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
    className: 'home-marker-icon'
  });


  // airbnb icon shown on hover/touch
  const airbnbIcon = L.divIcon({
    html: '<div class="marker-highlight"><i class="fa-brands fa-airbnb" style="color:#FF385C; font-size:30px;"></i>',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'home-marker-icon'
  });


  const marker = L.marker([coordinates[1], coordinates[0]], { icon: homeIcon })
    .addTo(map)
    .bindPopup(`<h4>${title}</h4>Exact location will be provided after booking`)
    .openPopup();



    // mouse hover (desktop)
    marker.on('mouseover', () => {
      console.log("hover detected");
      marker.setIcon(airbnbIcon)
    });

    marker.on('mouseout', () => {
      console.log("mouseout detected");
      marker.setIcon(homeIcon)
    });

  // touch devices (mobile)
  marker.on('touchstart', () => marker.setIcon(airbnbIcon));
  marker.on('touchend', () => marker.setIcon(homeIcon));

}