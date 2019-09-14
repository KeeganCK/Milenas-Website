let http = require('http');
let fs = require('fs');
let index = fs.readFileSync('MilenaTea.html');

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});








// import json
// import bottle
// import os
//
//
// @bottle.route('/static/MilenaTea.html')
// def index():
//     return bottle.static_file('MilenaTea.html', route="../MilenaTea.html")
//
// application = bottle.default_app()
//
// if __name__ == '__main__':
//     bottle.run(
//         application,
//         host=os.getenv('IP', '0.0.0.0'),
//         port=os.getenv('PORT', '8080'),
//         debug=os.getenv('DEBUG', True)
//     )
