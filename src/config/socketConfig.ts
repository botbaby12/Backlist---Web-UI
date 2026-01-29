// Socket.io configuration for car deal alerts
// Replace SOCKET_SERVER_URL with your production WebSocket server URL

export const SOCKET_CONFIG = {
  // TODO: Update this with your production server URL
  serverUrl: "https://your-alerts-server.com",
  
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
