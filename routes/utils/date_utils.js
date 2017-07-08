module.exports = {

    getCurrentFormattedTime: function() {
        var date = new Date();
        return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    },

    getCopyright: function () {
        return '&copy; 2016-' + new Date().getFullYear();
    }
};