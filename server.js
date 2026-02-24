const express = require('express');
const app = express();
const port = process.env.PORT  3000;

const startTime = new Date();

app.use(express.static('public'));

app.get('health', (req, res) = {
    res.json({ status UP, timestamp new Date() });
});

app.get('version', (req, res) = {
    res.json({
        app DevOps Dashboard,
        version process.env.APP_VERSION  v1.0,
        environment process.env.ENVIRONMENT  development
    });
});

app.get('uptime', (req, res) = {
    const uptime = process.uptime();
    res.json({ uptime_seconds uptime });
});

app.listen(port, () = {
    console.log(`Server running on port ${port}`);
});