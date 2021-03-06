//warning this may trigger multiple times for one press
//...usually triggers twice based on testing for each press
var dash_button = require('node-dash-button');
var address = process.env.DASH_ADDRESS || '';
var dash = dash_button(address, null, null, 'all');

var IncomingWebhook = require('@slack/client').IncomingWebhook;
var url = process.env.SLACK_WEBHOOK_URL || '';
var webhook = new IncomingWebhook(url);

dash.on("detected", function (){
	payload={
		"text": "Fresh pot of coffee is ready! :coffee:"
	}

	webhook.send(payload, function(err, res) {
	    if (err) {
	        console.log('Error:', err);
	    } else {
	        console.log('Message sent: ', res);
	    }
	});    
});
