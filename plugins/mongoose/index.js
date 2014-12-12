var mongoose = require('mongoose');
module.exports.mongoose = function(app, conf){
    connect = function() {
        mongoose.connect(conf.db, conf.connectOptions);
    };
    connect();
    mongoose.connection.on('error', yog.log.fatal);
    mongoose.connection.on('disconnect', conf.autoReconnect ? connect : yog.log.warning);
};
