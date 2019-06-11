import expressSession from 'express-session'
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
    uri: "mongodb://student:student123@cluster0-shard-00-00-r7urd.mongodb.net:27017,cluster0-shard-00-01-r7urd.mongodb.net:27017,cluster0-shard-00-02-r7urd.mongodb.net:27017/kanban?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", //CHANGE ME!!!!!!
    collection: "Sessions"
});

store.on("error", function (err) {
    console.log("[SESSION ERROR]", err);
});


export default class Session {
    express = expressSession({
        secret: "Dont cr0s$ th3 5tre@m22!!!", //CHANGE ME!!!!
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
        },
        store,
        resave: true,
        saveUninitialized: true
    })
}