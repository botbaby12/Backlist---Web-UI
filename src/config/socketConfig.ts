// Socket.io configuration for car deal alerts
// Replace SOCKET_SERVER_URL with your production WebSocket server URL

export const SOCKET_CONFIG = {
  // Production WebSocket server
  serverUrl: "http://159.223.113.123:3000",
  
  // Reconnection settings
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  
  // Event names
  events: {
    newAlert: "new_alert",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
} as const;
