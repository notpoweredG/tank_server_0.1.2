# Tank Control System

A web-based control panel for managing a tank's movement, built with Node.js (Express) for the backend and vanilla JavaScript for the frontend.

## Features
- Control tank tracks individually (Left/Right) or simultaneously (All)
- Real-time state updates every 5 seconds
- Visual feedback for active movements
- Simple REST API backend
- CORS-enabled secure communication

## Technologies
- **Backend**: Express.js
- **Frontend**: Vanilla JavaScript + HTML/CSS
- **Middleware**: CORS handling
- **Tooling**: Nodemon for development

## Installation

1. Clone repository:
   ```bash
   git clone https://github.com/your-username/tank-control-system.git
   cd tank-control-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start servers:
   ```bash
   npm run api  # Starts API server on port 3000
   npm run user # Starts static server on port 9000
   ```

4. Access control panel at:  
   http://127.0.0.1:9000

## API Documentation

### Endpoints

#### GET `/api/state`
- Returns current tank state
- **Response**:
  ```json
  {
    "left": -1|0|1,
    "right": -1|0|1,
    "isMoving": boolean
  }
  ```

#### POST `/api/control`
- Send movement commands
- **Parameters**:
  ```json
  {
    "side": "L|R|A",
    "direction": "forward|back|stop"
  }
  ```
- **Response**: Updated tank state

## Project Structure

```
tank-control-system/
├── api_server.js        # Tank API server
├── user_server.js       # Static file server
├── public/
│   ├── index.html       # Control panel UI
│   ├── style.css        # Styling
│   └── script.js        # Client-side logic
├── package.json         # Configuration
└── README.md            
```

## Development

1. Install Nodemon for live reloading:
   ```bash
   npm install -D nodemon
   ```

2. Start development servers:
   ```bash
   npm run dev_api  # Auto-restarts on API server changes
   npm run dev_user # Auto-restarts on static server changes
   ```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Andrey:

Telegramm  -  @n0tpowered

email - voroshilin.andrey@mail.ru

Project Link: [https://github.com/notpoweredG/tank-control-system](https://github.com/your-username/tank-control-system)
```