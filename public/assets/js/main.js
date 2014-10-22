requirejs.config({
    paths: {
        bower_components: '/bower_components',
        modules: '/assets/js/modules'
    }
});

require([
    "bower_components/jquery/dist/jquery.min",
    "bower_components/socket.io-client/socket.io",
    "modules/field"
    ], function($, io, field) {

    console.log('start');
    console.log('field', field.get);

    var socket = io();
});