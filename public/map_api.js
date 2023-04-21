const initMap = () => {
  const coordOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    const options = {
      key: "Gm8Ysb41VP3VXxnhIOst1y1HIQTrBPm6",
      verbose: true,

      lat: crd.latitude,
      lon: crd.longitude,
      zoom: 5,
    };

    windyInit(options, (windyAPI) => {
      const { map } = windyAPI;

      L.popup()
        .setLatLng([crd.latitude, crd.longitude])
        .setContent("Hello World")
        .openOn(map);
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, coordOptions);
};

initMap();
