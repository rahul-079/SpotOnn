# SpotOnn
SpotOnn is a web application that allows users to explore and review urban locations by adding pins on an interactive map.

## Features
- **User Authentication**: Secure login and registration system.
- **Interactive Map**: Seamless integration with Mapbox for an intuitive mapping experience.
- **Pin Management**: Users can add, edit, and delete location markers.
- **Review System**: Rate and review places added by other users.
- **Navigation Assistance**: Get navigation directions based on your current location.
- **Responsive Design**: Optimized for all screen sizes and devices.

## Technologies Used
- **Frontend**: React, Mapbox GL JS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS and Material-UI (for icons)

## Installation
To run SpotOnn locally, follow these steps:

### 1. Clone the repository:
```sh
git clone https://github.com/rahul-079/SpotOnn.git
```

### 2. Install dependencies for both frontend and backend:
```sh
cd SpotOnn
cd frontend && npm install
cd ../backend && npm install
```

### 3. Configure environment variables:
#### Backend (`backend/.env`):
```env
SECRET_KEY="your_secret_key"
MONGO_URL="your_mongodb_connection_url"
PORT="your_preferred_port_number"
```

#### Frontend (`frontend/.env`):
```env
REACT_APP_MAPBOX="your_mapbox_api_key"
REACT_APP_BACKEND_URL="your_backend_url"
```
> Get your Mapbox API key from [Mapbox](https://www.mapbox.com/).

### 4. Start the backend server:
```sh
cd backend && npm start
```

### 5. Start the frontend development server:
```sh
cd frontend && npm start
```

### 6. Access the application:
Open your browser and go to:
```sh
http://localhost:3000
```

## Deployment
SpotOnn is deployed and accessible at: **[SpotOnn](#)** (https://spotonn.netlify.app/)

## Screenshots
(Add relevant screenshots showcasing the application features)

## Contributions
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Submit a pull request.

---
### Notes:
- Replace placeholders (`your_secret_key`, `your_mongodb_connection_url`, `your_backend_url`, `your_mapbox_api_key`) with actual values.


Feel free to modify and enhance this README to better suit your project needs! 🚀

