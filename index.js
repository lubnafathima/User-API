import express from 'express';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv'
const app = express();
const port = 3000;

// middleware
dotenv.config();

app.get("/name", async (req, res) => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com'
        }
    };
    
    const fetchApi = await fetch('https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?format=json&gender=b&cc=all&email=gmail.com%2Cyahoo.com&pwlen=12&ip=a&phone=l%2Ct%2Co&seed=helloworld&count=50&maxage=40&minage=20&uuid=1&color=1&lic=1&images=1', options)
    
    const nameResponse = await fetchApi.json();
    // console.log(nameResponse);
    res.json(nameResponse);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/`);
});