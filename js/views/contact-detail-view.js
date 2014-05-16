define([
    'jquery',
    'underscore',
    'marionette',
    'text!templates/contact-detail-template.html'
], function (
    $,
    _,
    Marionette,
    contactDetailTemplate
) {

    return Marionette.ItemView.extend({
        template: _.template(contactDetailTemplate),

        events: {
            'click .edit': 'editClicked'
        },

        editClicked: function() {
            this.trigger('contact-detail:edit', this.model);
        }
    });
});
