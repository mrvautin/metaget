# metaget

A Node.js module to fetch HTML meta tags (including Open Graph) from a remote URL

## Installation

```
npm install metaget --save
```

## Usage

``` javascript
var metaget = require("metaget");
metaget.fetch('https://wordpress.com', function (err, meta_response) {
	if(err){
		console.log(err);
	}else{
		console.log(meta_response);
	}
});
```

Response will be a Javascript Object containing all the meta tags from the URL. All tags are output in the example above. Some tags with illegal characters can be accessed by:

``` javascript
meta_response["og:title"];
```

## Options

It's possible to set any HTTP headers in the request. This can be done by specifying them as options in the call. If no options are provided the only default header is a User-Agent of "request".

This is how you would specify a "User-Agent" of a Google Bot:

``` javascript
var metaget = require("metaget");
metaget.fetch('https://wordpress.com',{headers:{"User-Agent": "Googlebot"}}, function (err, meta_response) {
	if(err){
		console.log(err);
	}else{
		console.log(meta_response);
	}
});
```



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT)

Copyright (c) 2011-2015 Twitter, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.