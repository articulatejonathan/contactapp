define([
    'jquery',
    'underscore',
    'marionette',
    'text!templates/edit-contact-template.html'
], function (
    $,
    _,
    Marionette,
    editContactTemplate
) {

    return Marionette.ItemView.extend({
        template: _.template(editContactTemplate),
        events: {
            'click .save': 'saveClicked'
        },

        saveClicked: function() {
            this.setFormDataToModel();
            this.trigger('contact-edit:saved', this.model);
        },

        setFormDataToModel: function() {
            this.$("input[data='']").each(_.bind(function(index, e) {
                var $e = $(e);
                this.model.set($e.attr('name'), $e.val());
            }, this));
            
            var addressProperties = {};
            this.$("input[data='address']").each(_.bind(function(index, e) {
                var $e = $(e);
                addressProperties[$e.attr('name')] =  $e.val();
            }, this));
            this.model.set('address', addressProperties); 
            this.$('.message').show();
        }
    });
});
