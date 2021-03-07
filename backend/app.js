const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({ origin: '*' }))

app.get('/jobs', (req, res) => {
    fetch('https://jobs.github.com/positions.json')
        .then(res => res.json())
        .then(resJson => res.status(200).json(resJson))
        .catch(e => console.error(e))
})

app.get('/jobs/:id', (req, res) => {
    const id = req.params.id;
    fetch(`https://jobs.github.com/positions/${id}.json`)
        .then(res => res.json())
        .then(resJson => res.status(200).json(resJson))
        .catch(e => console.error(e))
})

app.get((req, res) => {
    res.status(404).send('404')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))