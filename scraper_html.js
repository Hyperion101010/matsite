var req = require('request');

var cheer = require('cheerio');

req('https://www.naukri.com', function (error, response, html){
    if(!error && response.statusCode == 200 ){
        var data = cheer.load(html);
        console.log(html);
    }
});


