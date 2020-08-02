import setMap from "./setMap";

export default function setUserPos(google) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var coords = pos.coords;
    const userPos = {
      lat: coords.latitude,
      lng: coords.longitude
    };
    setMap(userPos, google);
  }

  function error(err) {
    const userPos = {
      lat: 47.323,
      lng: 5.034
    };
    setMap(userPos, google);
    console.warn(`ERREUR (${err.code}): ${err.message}`);

    /* PRODUCTION: Activer cette alerte */
    /* setTimeout(function() {
      alert(
        "Pour une meilleure experience utilisateur, veuillez autoriser l'accès à votre géolocalisation"
      );
    }, 3000); */
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}