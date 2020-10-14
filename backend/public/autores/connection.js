function log_data(data) {
  var http = new XMLHttpRequest();
  var url = config[environment].backend;
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
    }
  }

  var payload = JSON.stringify(data);

  http.send(payload);
}
