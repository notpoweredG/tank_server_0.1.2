const express = require("express");
const path = require("path");
const cors = require("cors");

const port = 9000;
const app = express();

// Serve static files from 'public' directory
app.use(express.static("public"));

// Middleware for parsing JSON (not needed for static server but harmless)
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// Explicit root route with proper error handling
app.get("/", (req, res, next) => {
    res.sendFile(
        path.join(__dirname, "public/index.html"),
        (err) => err && next(err) // Handle file-sending errors
    );
});

app.listen(port, () => {
    console.log(`User-server started at http://127.0.0.1:${port}`);
});