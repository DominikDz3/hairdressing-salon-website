function dropdown() {
    if(document.getElementsByClassName("dropdown-content")[0].style.display == "block") {
        document.getElementsByClassName("dropdown-content")[0].style.display = "none";
    }
    else {
        document.getElementsByClassName("dropdown-content")[0].style.display = "block";
    }
    
}

function initMap() {
    const salon = { lat: 50.253788, lng: 22.421994 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: salon,
    });
    const marker = new google.maps.Marker({
      position: salon,
      map: map,
    });
  }
  
  window.initMap = initMap;