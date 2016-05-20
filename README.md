# hapi-swagger-to-raml

This module will create a Raml file based on your api documentation from hapi-swagger.

##Usage

To install this module, run:

    npm i hapi-swagger-to-raml --save

The funtion accepts two parameters: the path to the swagger.json which is output by the documentation, and a folder path that the `api.raml` file will be output to on server start


    let generateRaml = require('hapi-swagger-to-raml');
    generateRaml(server.info.uri + '/path-to-swagger-json', './export');

To expose the `api.raml` file as a static file, you can configure a route, similar to this:

    {
        method: 'GET',
        path: '/missionary-api/raml',                                       
        handler: function(request,reply){ 
            return reply.file('./export/api.raml').header('Content-Type', 'application/raml+yaml');
        }
    }


##Changelog

- 1.0.4 - error handle for the initial swagger.json request
- 1.0.3 - documentation formatting
- 1.0.2 - documentation formatting
- 1.0.1 - added documentation
- 1.0.0 - initial version

---

##Contributors:

- Michael Jasper <mdjasper@gmail.com>
- Brooke Frandsen <brookefrandsen@gmail.com>