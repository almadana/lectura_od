function log_data(data) {
  var http = new XMLHttpRequest();
  var url = 'http://192.168.122.144:3000';
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      console.log("response", http.responseText);
    }
  }

  var payload = JSON.stringify(data);

  http.send(payload);
}
