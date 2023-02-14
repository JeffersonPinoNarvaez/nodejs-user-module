const express = require('express')

const { connection } = require('../database/config')
const { User } = require('../routes')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.users = '/api/users';
        this.database();
        this.router();

    }

    async database() {
        await connection();
    }

    router(){
        this.app.use(this.users, User)
    }
    
    create() {
        this.app.listen(this.port, () => {
            console.log("App running on port: " + this.port);
        });
    }
}

module.exports = Server
