const { response } = require('express')

const post = (req, resp = response) => {

    try {
        resp.status(200).json({
            msg: "todo ok"
        })
        
    } catch (error) {
        
    }

}

module.exports = {
    post
}