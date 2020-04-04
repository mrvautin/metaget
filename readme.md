# metaget

A Node.js module to fetch HTML meta tags (including Open Graph) from a remote URL

## Installation

```
npm install metaget --save
```

## Usage

Promise:
``` javascript
const metaget = require('metaget');
try{
    const metaResponse = await metaget.fetch('https://wordpress.com');
    console.log('metaResponse', metaResponse);
}catch(ex){
    console.log('Fail', ex);
}
```

Callback:
``` javascript
const metaget = require('metaget');
metaget.fetch('https://wordpress.com', (err, metaResponse) => {
    if(err){
        console.log(err);
    }else{
        console.log(metaResponse);
    }
});
```

Response will be an Object containing all the meta tags from the URL. All tags are output in the example above. Some tags with illegal characters can be accessed by:

``` javascript
metaResponse['og:title'];
```

## Options

It's possible to set any HTTP headers in the request. This can be done by specifying them as options in the call. If no options are provided the only default header is a User-Agent of "request".

This is how you would specify a "User-Agent" of a Google Bot:

``` javascript
try{
    const metaResponse = await metaget.fetch('https://wordpress.com', { headers: { 'User-Agent': 'Googlebot' } });
    console.log('metaResponse', metaResponse);
}catch(ex){
    console.log('Fail', ex);
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
