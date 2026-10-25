const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Healthy', timestamp: new Date() });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
