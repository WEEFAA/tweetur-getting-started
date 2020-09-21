const Tweetur = require('tweetur')

//initialize the Tweetur object...
//along with your keys
const app = new Tweetur({
    consumer_key : "my_consumer_key", // required **
    consumer_secret: "my_consumer_secret", // required **
    access_token: "app_access_token", // required **
    access_token_secret: "app_access_token_secret", // required **
    // sub: "api",
    // api_version: "1.1"
}) 

app.authenticate(async function(err, data){
    if(err) throw err 
    // authenticated, make sure that you're keys are correct
    // and doesn't include whitespaces.
    console.log("> Tweetur Authenticated")
})