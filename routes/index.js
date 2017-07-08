var dateUtils = require('./utils/date_utils');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: null,
            copyright: dateUtils.getCopyright()
        });
    });
};