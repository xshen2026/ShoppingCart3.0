
var source, destination;
 
function GetRoute() {
 
    //*********DIRECTIONS AND ROUTE**********************//
    source = document.getElementById("address1").value;
    destination = document.getElementById("address").value;
 
 
    //*********DISTANCE AND DURATION**********************//
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            var distance1 = response.rows[0].elements[0].distance.value;
            var dvDistance = document.getElementById("dvDistance");
            dvDistance.innerHTML = "";
            dvDistance.innerHTML += "Distance: " + distance + "<br />";
            dvDistance.innerHTML += "Duration:" + duration;
            var dis = document.getElementById("dis");
            dis.value = distance1;
        } else {
            alert("Unable to find the distance via road.");
        }
    });
}