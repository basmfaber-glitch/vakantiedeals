async function searchFlights() {
    const dest = document.getElementById('destination').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const res = await fetch(`http://localhost:5000/api/flights?destination=${dest}&maxPrice=${maxPrice}`);
    const data = await res.json();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (data.length === 0) {
        resultsDiv.innerHTML = '<p>Geen vluchten gevonden.</p>';
        return;
    }
    data.forEach(flight => {
        const div = document.createElement('div');
        div.className = 'flight';
        div.innerHTML = `<strong>${flight.destination}</strong> - €${flight.price} <br> Datum: ${flight.date}`;
        resultsDiv.appendChild(div);
    });
}
