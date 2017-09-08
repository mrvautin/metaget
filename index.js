// A module to fetch HTML meta tags from a remote URL
var cheerio = require('cheerio');
var request = require('request');

module.exports = {
	fetch: function (uri, user_options, callback) {
		var options = {
			url: uri,
			timeout: 5000,
			headers: {
				'User-Agent': 'request'
			}
		};

		//  setup the args/user_options
		var user_args = [];
		for (var i = 0; i < arguments.length; i++) {
			user_args.push(arguments[i]);
		}

		// remove these from arg array
		uri = user_args.shift();
		callback = user_args.pop();

		// get user_options if specified
		if (user_args.length > 0) {
			user_options = user_args.shift();
		} else {
			user_options = null;
		}

		// override default headers
		if (user_options) {
			options.headers = user_options.headers;
		}

		request.get(options, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				var $ = cheerio.load(body);
				var meta = $('meta');
				var keys = Object.keys(meta);
				var meta_obj = {};
				keys.forEach(function (key) {
					if (meta[key].attribs != undefined) {
						if (meta[key].attribs.property && meta[key].attribs.content) {
							meta_obj[meta[key].attribs.property] = meta[key].attribs.content;
						}
						if (meta[key].attribs.name && meta[key].attribs.content) {
							meta_obj[meta[key].attribs.name] = meta[key].attribs.content;
						}
					}
				});

				callback(null, meta_obj);
			} else {
				if (request) {
					if (typeof response.statusCode !== 'undefined') {
						callback('Response code: ' + response.statusCode, null);
					} else {
						callback(error, null);
					}
				} else {
					callback(error, null)
				}
			}
		});
	}
};