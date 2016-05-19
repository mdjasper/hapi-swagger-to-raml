var request = require('request'),
    swaggerToRamlO = require('swagger-to-raml-object'),
    ramlOtoRaml = require('raml-object-to-raml'),
    fs = require('fs');

module.exports = function(swaggerPath, saveDirectory) {

    request(swaggerPath, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var swaggerJSON = JSON.parse(body);

            fs.writeFile(saveDirectory + '/swagger.json', JSON.stringify(swaggerJSON), function (err) {
                if (err) {
                    console.log('error writing raml file');
                } else {

                    swaggerToRamlO(saveDirectory + '/swagger.json', function (filename, done) {
                        return fs.readFile(filename, 'utf8', done);
                    }, function (err, ramlObject) {
                        if (err) {
                            console.log(err);
                        } else {

                            fs.writeFile(saveDirectory + '/api.raml', ramlOtoRaml(ramlObject), function (err) {
                                if (err) {
                                    console.log('error writing raml file');
                                } else {
                                    console.log('Raml file created at ' + saveDirectory + '/api.raml');
                                }
                            });
                        }

                    });
                }
            });
        }
    })
};