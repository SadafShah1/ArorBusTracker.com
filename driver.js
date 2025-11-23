const db = firebase.database();
let watchId = null;

// START SHARING
window.startSharing = function () {
    const phone = localStorage.getItem("driverPhone");
    const route = document.getElementById("routeSelector").value;

    if (!phone) {
        alert("Driver not logged in");
        return;
    }

    if (!route) {
        alert("Please select your route");
        return;
    }

    if (!navigator.geolocation) {
        alert("Location not supported");
        return;
    }

    watchId = navigator.geolocation.watchPosition(pos => {

        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        db.ref("drivers/" + phone).update({
            route: route,
            lat: lat,
            lng: lng,
            sharing: true
        });

    }, err => {
        console.log(err);
    }, {
        enableHighAccuracy: true
    });
};


// STOP SHARING
window.stopSharing = function () {
    const phone = localStorage.getItem("driverPhone");

    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
    }

    db.ref("drivers/" + phone).update({
        sharing: false
    });

    watchId = null;
    alert("Tracking stopped");
};
