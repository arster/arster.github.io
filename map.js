function initMap() {
  var myLatLng = {lat: 59.345300, lng: 18.023515};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng,
	disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
	icon: 'media/img/map_marker.png'
  });
}