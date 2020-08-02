import store from "../store/index";

export default function userMarker(pos) {
  const map = store.state.map;
  const google = store.state.google;
  /* Place un marker sur la position de l'utilisateur */
  new google.maps.Marker({
    position: pos,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: "http://maps.google.com/mapfiles/kml/paddle/blu-circle.png"
  });
}