module.exports = function (app) {
    require('./routes/index')(app);
    require('./routes/404')(app); // This one must be always at the button!
};