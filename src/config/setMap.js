import userMarker from "./userMarker";
import nearbySearch from "./nearbySearch";
import store from "../store/index";

export default function setMap(pos, google) {
    /* Stock l'instance de la map dans la variable "map" */
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: pos
    });

    let data = {
        map,
        google
    }

    store.dispatch('setMapAndGoogle', data).then(() => {
        userMarker(pos);
        nearbySearch();
    })

}