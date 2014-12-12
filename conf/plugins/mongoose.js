module.exports.mongoose = {
    db: "mongodb://127.0.0.1/dbname",
    autoReconnect: true,
    connectOptions : {server: {socketOptions: {keepAlive: 1}}}
};
