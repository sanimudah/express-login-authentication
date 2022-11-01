const express = require('express');
const basicAuth = require('express-basic-auth')
const app = express();

app.use(basicAuth({
    users: { 'user': 'password' },
    challenge: true,
    realm: 'foobar',
}))

app.get('/', (req, res) => {
    const headers = JSON.stringify(req.headers)

    var response = headers + "<br>"
    response += "user-agent: " + req.headers["user-agent"] + "<br>"
    response += "x-mudah-hd: " + req.headers["x-mudah-hd"] + "<br>"
    response += "x-user-token: " + req.headers["x-user-token"] + "<br>"

    res.send(response);
});

app.listen(3000, () => console.log('server started'));

function combineHeaderValueToString(total, header) {
    return total + "<br> Name: " + header.name + " Value: " + header.value;
}