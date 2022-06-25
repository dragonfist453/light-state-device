const Gpio = require('onoff').Gpio;
const { io } = require("socket.io-client");

const hostname = 'http://localhost:8080';
const socket = io(hostname);

const lights = {
    hallCorner: new Gpio(1, 'out'),
    hallShortEdge: new Gpio(2, 'out'),
    hallLongEdge: new Gpio(3, 'out'),
    hallSmallLight: new Gpio(4, 'out'),
    roomLight: new Gpio(5, 'out'),
    hallRgb: new Gpio(6, 'out'),
    roomRgb: new Gpio(7, 'out')
};

Object.keys(lights).forEach(light => {
    console.log(light);
})