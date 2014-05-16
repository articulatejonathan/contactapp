define([
    'jquery',
    'underscore',
    'marionette',
    'models/contact-model'
], function (
    $,
    _,
    Marionette,
    ContactModel
) {

    return Backbone.Collection.extend({
        model: ContactModel
    });

});
