const Gpio = require('onoff').Gpio;
const { io } = require("socket.io-client");

const hostname = 'http://129.154.35.194/';
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
    socket.on(light, state => {
        if (state === "on") {
            console.log(`${light} is on`);
            lights[light].writeSync(1);
        } else {
            console.log(`${light} is off`);
            lights[light].writeSync(0);
        }
    });
    console.log("\n");
});
