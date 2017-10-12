document.getElementsByName("cityName")[0].addEventListener('change', handleInputChange);

function handleInputChange() {
    var value = this.value;
    fetch('http://localhost:4000/zips/' + value).then(function(response) {
        response.json().then(function(object) {
            console.log(object);
            var zipCodes = '';
            for(var i = 0; i < object.length; i ++) {
                zipCodes += (object[i]["Code"]) + "\n";
            }
            document.getElementById('display').innerHTML = zipCodes;
        });

    });
}