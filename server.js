var express = require('express');
var app = express();
var dateUtils = require('./routes/utils/date_utils');

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

require('./routes')(app);

var port = 80;
app.listen(port, function () {
    console.log('[%s INFO]: Starting Node server on *:%s', dateUtils.getCurrentFormattedTime(), port)
});