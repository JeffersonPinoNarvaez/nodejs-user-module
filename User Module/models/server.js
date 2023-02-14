const express = require('express')

const { connection } = require('../database/config')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.database();

    }
    async database() {
        await connection();
    }
    create() {
        this.app.listen(this.port, () => {
            console.log("App running on port: " + this.port);
        });
    }
}

module.exports = Server
