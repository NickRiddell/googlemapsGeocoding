var geocoder,
    latInput = document.getElementById('latitude'),
    lngInput = document.getElementById('longitude');
function initialize() {
  geocoder = new google.maps.Geocoder();
  latInput.style.backgroundColor = "rgb(235,235,228)";
  lngInput.style.backgroundColor = "rgb(235,235,228)";
};

function codeAddress() {
  var address,
    lat,
    lng;
  address = document.getElementById("addressBox").value;

  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
      console.log(results);
      lat = results[0].geometry.location.lat();
      lng = results[0].geometry.location.lng();
      latInput.style.backgroundColor = "#fff";
      lngInput.style.backgroundColor = "#fff";
      latInput.value = lat;
      lngInput.value = lng;
    } else alert("Invalid address");
  });
};

function handleKeyPress(e) {
  if (e.keyCode === 13) {
    codeAddress();
  }
};
