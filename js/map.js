let map;
let marker;

function initMap() {
  map = L.map('map').setView([27.5295, 68.7582], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
}

function shareLocation() {
  initMap();
  const route = document.getElementById('routeSelector').value;
  if (!route) return alert('Select a route first!');

  navigator.geolocation.watchPosition(pos => {
    const { latitude, longitude } = pos.coords;
    if (marker) marker.setLatLng([latitude, longitude]);
    else marker = L.marker([latitude, longitude]).addTo(map);
    map.setView([latitude, longitude]);
    db.ref(`drivers/${route}`).set({ lat: latitude, lng: longitude });
  }, err => alert('Location access denied!'), { enableHighAccuracy: true });
}

function loadBusLocation() {
  initMap();
  const route = document.getElementById('routeSelector').value;
  if (!route) return alert('Select route first!');

  db.ref(`drivers/${route}`).on('value', snapshot => {
    const data = snapshot.val();
    if (!data) return alert('No active driver for this route');
    if (marker) marker.setLatLng([data.lat, data.lng]);
    else marker = L.marker([data.lat, data.lng]).addTo(map);
    map.setView([data.lat, data.lng]);
  });
}
