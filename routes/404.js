var dateUtils = require('./utils/date_utils');

module.exports = function (app) {
    app.get('*', function (req, res) {
        res.render('404', {
            title: "Error 404",
            copyright: dateUtils.getCopyright()
        });
    });
};