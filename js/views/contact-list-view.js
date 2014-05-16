define([
    'jquery',
    'underscore',
    'marionette',
    'collections/contact-collection',
    'views/contact-item-view',
    'text!templates/contact-list-template.html',
    'data'
], function (
    $,
    _,
    Marionette,
    ContactCollection,
    ContactItemView,
    contactListTemplate,
    data
) {

    return Marionette.CompositeView.extend({
        template: _.template(contactListTemplate),
        itemView: ContactItemView,
        itemViewContainer: '.contacts-container',

        events: {
            'click .new-button button': 'newClicked'
        },

        initialize: function() {
            this.collection = new ContactCollection(data);
            this.on('itemview:contact:selected', _.bind(function(childview) {
                this.trigger('contact:selected', childview.model);
                this.clearHighlight();
                childview.$('.contact-item').addClass('highlight');
            }, this));
        },
        
        newClicked: function() {
            this.clearHighlight();
            this.trigger('contact:new');
        },

        addContact: function(contactModel) {
            this.collection.add(contactModel);
            var childview = this.children.findByModel(contactModel);
            console.log(this.children, this.collection);
            childview.$('.contact-item').addClass('highlight');
        },

        clearHighlight: function() {
            this.children.each(function(view) {
                view.$('.contact-item').removeClass('highlight');
            });
        },

        onClose: function() {
            this.off();
        }
    });
});
