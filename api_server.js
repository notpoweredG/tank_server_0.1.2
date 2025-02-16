const express = require("express");
const cors = require("cors");

class Tank {
    constructor() {
        this.right = 0;
        this.left = 0;
        this.isMoving = false;
    }

    setDirection(side, direction) {
        const value = { forward: 1, back: -1, stop: 0 }[direction];

        if (side === 'A') {
            if (value === 0) {
                this.left = this.right = 0;
            } else {
                if (value === this.left && value === this.right) {
                    this.left = this.right = 0;
                } else {
                    this.right = this.left = value;
                }
            }
        }
        if (side === 'R') {
            if (value === this.right) {
                this.right = 0;
            } else {
                this.right = value !== undefined ? value : 0;
            }
        }
        if (side === 'L') {
            if (value === this.left) {
                this.left = 0;
            } else {
                this.left = value !== undefined ? value : 0;
            }
        }

        // Corrected isMoving logic
        this.isMoving = this.left !== 0 || this.right !== 0;
    }

    getState() {
        return { left: this.left, right: this.right, isMoving: this.isMoving };
    }
}

const tank = new Tank();
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://127.0.0.1:9000", "http://localhost:9000"], // Разрешить оба origin
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
}));

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// Added 'next' parameter to handle errors
app.post('/api/control', (req, res, next) => {
    try {
        const { side, direction } = req.body;

        if (!['L', 'R', 'A'].includes(side?.toUpperCase())) {
            return res.status(400).json({ error: 'Invalid side parameter' });
        }

        if (!['forward', 'back', 'stop'].includes(direction)) {
            return res.status(400).json({ error: 'Invalid direction parameter' });
        }

        tank.setDirection(side.toUpperCase(), direction);
        res.json(tank.getState());
    } catch (error) {
        next(error);
    }
});

app.get('/api/state', (req, res) => {
    res.json(tank.getState());
});

app.listen(port, () => {
    console.log(`Api-server started at http://127.0.0.1:${port}`);
});