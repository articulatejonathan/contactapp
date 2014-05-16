define([
    'jquery',
    'underscore',
    'marionette',
    'views/contact-edit-view',
    'text!templates/new-contact-template.html'
], function (
    $,
    _,
    Marionette,
    ContactEditView,
    newContactTemplate
) {

    return ContactEditView.extend({
        template: _.template(newContactTemplate),

        events: {
            'click .save': 'saveClicked'
        },

        saveClicked: function() {
            ContactEditView.prototype.setFormDataToModel.call(this);
            this.trigger('new-contact:saved', this.model);
        }
    });
});
