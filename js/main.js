require.config({
    paths: {
        baseUrl: 'static/js',
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min',
        marionette: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.6.4-bundled/backbone.marionette',
        templates: '../templates',
    },
    shim: {
        underscore: {
            exports: '_'
        },
 
        backbone : {
            deps : [ 'underscore', 'jquery' ],
            exports : 'Backbone'
        },
 
        bootstrap: {
            deps: ['jquery']
        },
        
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
    }
});

require([
    'app'
], function(
    app
){
    app.start();
});
