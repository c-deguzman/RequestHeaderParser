
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response){
  
  var ip = request.get("X-Forwarded-For").split(",")[0];
  var lang = request.get("Accept-Language").split(",")[0];
  var better_os = require('useragent').parse(request.get("User-Agent")).os.toString();
  
  
  response.send({"ip": ip,
                 "language": lang,
                 "os": better_os});
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
