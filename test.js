var metaget = require("../metaget");
metaget.fetch('https://wordpress.com', function (err, meta_response) {
	if(err){
		console.log(err);
	}else{
		console.log(meta_response);
	}
});