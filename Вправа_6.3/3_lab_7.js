const http = require('http');
var filer = require('fs');

function getResponseForRequest(response)
{
	response.writeHead(200,{'Content-Type': 'text/html'});
	filer.readFile("3_lab_7.html",null, function(error, information)
	{
		if(error)
		{
			response.writeHead(404);
			response.write('Sorry! But file not found!');
		}
		else
		{
			response.write(information);
		}
		response.end();
	});
}
http.createServer(getResponseForRequest).listen(3000);