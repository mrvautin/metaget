// A module to fetch HTML meta tags from a remote URL
var cheerio = require('cheerio');
var request = require('request');

module.exports = {
	fetch: function (uri, callback) {
		var options = {
			url: uri,
			headers: {
				'User-Agent': 'request'
			}
		};
		request.get(options, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var $ = cheerio.load(body);
				var meta = $('meta');
				var keys = Object.keys(meta);

				var meta_obj = {};
				keys.forEach(function (key) {
					if (meta[key].attribs != undefined) {
						if (meta[key].attribs.property && meta[key].attribs.content) {
							var property = meta[key].attribs.property.replace(":", "_");
							var content = meta[key].attribs.content;
							meta_obj[property] = content;
						}
					}
				});

				callback(null, meta_obj);
			} else {
				callback(new Error('Bad Request'));
			}
		});
	}
};