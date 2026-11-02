const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Bouncer (CORS) on kar diya - aage chal kar frontend ko data block nahi karega
app.use(cors());
app.use(express.json());

// Database (Godown): Humari dummy songs ki list
const songs = [
  {
    id: 1,
    title: "Tu Chahiye",
    artist: "Atif Aslam",
    coverImage: "https://c.saavncdn.com/269/Bajrangi-Bhaijaan-Hindi-2015-500x500.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  {
    id: 2,
    title: "Khat",
    artist: "Guru Randhawa",
    coverImage: "https://c.saavncdn.com/131/Khat-Punjabi-2015-500x500.jpg", 
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

// API Endpoint (Waiter): Jab koi /api/songs mangega, toh hum songs bhej denge
app.get('/api/songs', (req, res) => {
  res.json(songs);
});
// Server ko bolna ki main URL (/) par index.html file bhejni hai
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Server (Kitchen) ko start karne ka code
app.listen(port, () => {
  console.log(`Backend is running! Waiter is ready at http://localhost:${port}`);
});