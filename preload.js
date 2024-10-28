const { contextBridge, ipcRenderer } = require('electron');

// Specify the allowed channels for IPC communication
const validChannels = ["exampleChannel", "anotherChannel"]; // Add your allowed channels here

contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    if (validChannels.includes(channel)) { // Check if the channel is valid
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    if (validChannels.includes(channel)) { // Check if the channel is valid
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});
