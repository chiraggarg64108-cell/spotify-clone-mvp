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
    title: "Vibe Track 1", 
    artist: "AI Studio", 
    coverImage: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80", 
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  { 
    id: 2, 
    title: "Chill Lofi", 
    artist: "Vibe Coder", 
    coverImage: "https://images.unsplash.com/photo-1493225457124-a1a2a5956013?w=300&q=80", 
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
  }
];

// API Endpoint (Waiter): Jab koi /api/songs mangega, toh hum songs bhej denge
app.get('/api/songs', (req, res) => {
  res.json(songs);
});

// Server (Kitchen) ko start karne ka code
app.listen(port, () => {
  console.log(`Backend is running! Waiter is ready at http://localhost:${port}`);
});