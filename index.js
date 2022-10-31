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
    res.send(req.headers["user-agent"] + "<br>" + req.headers["xoxo-user-token"]);
});

app.listen(3000, () => console.log('server started'));