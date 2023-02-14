const express = require('express')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

    }
    create () {
        this.app.listen(this.port, () => {
            console.log("Running on port: " + this.port);
        });
    }
}

module.exports = Server
