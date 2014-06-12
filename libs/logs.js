var winston = require('winston'),
    config = require('./config');

function getLogger(module) {
    var path = module.filename.split('/').slice(-2).join('/');

    return new winston.Logger({
        transports : [
            new winston.transports.Console({
                colorize:   true,
                level:      config.get('log:level'),
                label:      path
            })
        ]
    });
}

module.exports = getLogger;
