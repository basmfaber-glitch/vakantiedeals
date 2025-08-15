const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy flight data
const flights = [
    { destination: 'Barcelona', price: 75, date: '2025-09-12' },
    { destination: 'Rome', price: 90, date: '2025-09-18' },
    { destination: 'London', price: 60, date: '2025-10-02' },
    { destination: 'Bali', price: 550, date: '2025-11-20' }
];

app.get('/api/flights', (req, res) => {
    const { destination, maxPrice } = req.query;
    let results = flights;
    if (destination) {
        results = results.filter(f => f.destination.toLowerCase().includes(destination.toLowerCase()));
    }
    if (maxPrice) {
        results = results.filter(f => f.price <= parseFloat(maxPrice));
    }
    res.json(results);
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
