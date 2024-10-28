// Import the io function from socket.io-client
import { io } from 'socket.io-client';

// Create a socket connection, defaulting to localhost if no server URL is provided
const socket = io(process.env.REACT_APP_SERVER_URL || 'http://localhost:5000');

// Handle connection events
socket.on('connect', () => {
    console.log('Connected to the server');
});

// Handle connection error events
socket.on('connect_error', (error) => {
    console.error('Connection Error:', error);
});

// Listen for specific events
socket.on('message', (message) => {
    console.log('New message:', message);
});

// Function to send a message to the server
export const sendMessage = (message) => {
    if (socket.connected) {
        socket.emit('message', message);
    } else {
        console.error('Socket is not connected. Message not sent:', message);
    }
};

// Function to disconnect the socket
export const disconnectSocket = () => {
    if (socket.connected) {
        socket.disconnect();
        console.log('Disconnected from the server');
    } else {
        console.warn('Socket was already disconnected');
    }
};

// Add any additional events you need to listen for here

// Export the socket instance for use in other parts of the application
export default socket;
