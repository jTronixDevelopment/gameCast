# GameCast

## Development

Clone this repository:

```sh
git clone https://github.com/jTronixDevelopment/projectX.js
cd projectX
```

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:3000`](http://localhost:3000).

```sh
npm start
```

## Testing
Starting the test Server
```sh
npm start
```

## Development

Inside landingPage directory uncomment
```sh
var socket = io.connect(window.location.hostname + ":5000"); // Dev
and comment
var socket = io.connect(window.location.hostname); // Prod

```
in the projectX directory run
```sh
npm run-script build
```
then
```sh
npm start
```
Finally in the server directory run
```sh
node index
```


## Production

Inside landingPage directory comment
```sh
var socket = io.connect(window.location.hostname + ":5000"); // Dev
and uncomment
var socket = io.connect(window.location.hostname); // Prod

```
