var http = require("https");
var Destination = ['37.8267,-122.4233','51.165691,10.451526','40.463667,-3.74922','35.907757,127.766922','9.081999,8.675277',
'51.919438,19.145136','60.128161,18.643501'];
var value = Math.floor(Math.random() * (Destination.length));
var country = Destination[value];
http.get("https://api.darksky.net/forecast/923919c56d72b1925feb89006442d5b2/" + country,function(response){

	var info = "";
	response.on("data",function(chunk){
		info += chunk;
	});

    response.on("end",function(){
    	if (response.statusCode){
    		try{
    			var data = JSON.parse(info);
    			console.log("Weather is "+ data.currently.summary + " in " + data.timezone + ".")
    		}catch(error){
    			console.log("oops!..Sorry something went wrong")
    		}
    	}else{
    		console.log("oops!..Sorry something went wrong")
    	}
    });
});