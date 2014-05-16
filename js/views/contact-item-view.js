define([
    'jquery',
    'underscore',
    'marionette',
    'text!templates/contact-item-template.html'
], function (
    $,
    _,
    Marionette,
    contactItemTemplate
) {

    return Marionette.ItemView.extend({
        template: _.template(contactItemTemplate),
        events: {
            'click .contact-item': 'contactClicked'
        },

        initialize: function() {
            this.model.on('change:name', _.bind(function() {
	        this.render();
		this.$el.addClass('highlight');
	    }, this));
        },

        onClose: function() {
            this.model.off('change:name');
        },

        contactClicked: function(e) {
            this.trigger('contact:selected');
        }
    });
});
