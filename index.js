const express = require('express');
const basicAuth = require('express-basic-auth')
const app = express();

app.use(basicAuth({
    users: { 'admin': 'xoxo' },
    challenge: true,
    realm: 'foo',
}))

app.get('/', (req, res) => {
    console.log("hello")
    var response = ""
    response += "user-agent: " + req.headers["user-agent"] + "<br>"
    response += "x-mudah-hd: " + req.headers["x-mudah-hd"] + "<br>"
    response += "x-user-token: " + req.headers["x-user-token"] + "<br>"

    res.send(response);
});

app.listen(3000, () => console.log('server started'));