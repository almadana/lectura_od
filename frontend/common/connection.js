function log_data(endpoint, data) {
  var url = `${config[environment].backend}/${endpoint}`;
//  var http = new XMLHttpRequest();
//  http.open('POST', url, true);
//
//  //Send the proper header information along with the request
//  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//
//  http.onreadystatechange = function() {
//    if(http.readyState == 4 && http.status == 200) {
//    }
//  }
//
//  var payload = JSON.stringify(data);
//
//  http.send(payload)
  return fetch(url,{
    method: "POST",
    headers: {'Content-type': 'application/x-www-form-urlencoded'},
    body: JSON.stringify(data)
  })
}

function get_data(endpoint) {
  var url = `${config[environment].backend}/${endpoint}`;
  return fetch(url,{
    method: "GET",
  })
}
