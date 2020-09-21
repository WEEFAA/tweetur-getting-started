const Tweetur = require('tweetur')
const express = require('express')
const dotenv = require('dotenv')

// intialize environment variables
// for things such as PORT & SECRET KEYS 
dotenv.config()

//initialize the Tweetur object...
//along with your keys
const {
    CONSUMER_KEY, 
    CONSUMER_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
} = process.env

const app = new Tweetur({
    consumer_key: CONSUMER_KEY, // required **
    consumer_secret: CONSUMER_SECRET, // required **
    access_token: ACCESS_TOKEN, // required **
    access_token_secret: ACCESS_TOKEN_SECRET, // required **
}) 

app.authenticate(async function(err, data){
    if(err) throw err 
    // authenticated, make sure that you're keys are correct
    // and doesn't include whitespaces.
    console.log("> Tweetur Authenticated")
})

// env
const { PORT = 8080 } = process.env
// create an express server
const server = express()

// routes 
server.get('/', async (req,res) => {
    const data = await app.get('users/show.json', { screen_name: "aelfestijo" })
    res.json(data)
})

server.get('/:who', async (req,res) => {
    const { params: { who } } = req 
    const data = await app.get('statuses/user_timeline.json', { screen_name: who })
    res.json(data)
})

server.listen(PORT, () => console.log(`> Server created at http://localhost:${PORT}`))