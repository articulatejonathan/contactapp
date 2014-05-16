define([
    'jquery',
    'underscore',
    'marionette',
    'views/app-container-view',
    'views/contact-list-view'
], function (
    $,
    _,
    Marionette,
    appContainerView,
    ContactListView
) {

    var app = new Marionette.Application();

    app.addRegions({
        containerSection: '#app-container',
    });

    app.addInitializer(function() {
        app.containerSection.show(appContainerView);
    });
  
    app.on('initialize:after', function() {
        if (Backbone.history) {
            Backbone.history.start({pushState: true});
        }
    });
    
    return app;
});
