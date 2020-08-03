import store from "../store/index";

export default function setMarkers() {
  const map = store.state.map;
  const google = store.state.google;

  let markers = [];

  function addMarker(pos, name) {
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: name,
      animation: google.maps.Animation.DROP,
      icon: 'http://maps.google.com/mapfiles/kml/pal2/icon40.png'
    });

    markers.push(marker);
  }
  if (store.state.markers) {
    store.state.markers.forEach(marker => {
      marker.setMap(null);
    });
  }


  store.dispatch('setMarkers', null)

  store.state.restaurants.forEach(restaurant => {
    const position = {
      lat: restaurant.geometry.location.lat(),
      lng: restaurant.geometry.location.lng()
    }

    addMarker(position, restaurant.name);
  });

  store.dispatch('setMarkers', markers)
}