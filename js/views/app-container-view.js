define([
    'jquery',
    'underscore',
    'marionette',
    'models/contact-model',
    'views/contact-list-view',
    'views/contact-detail-view',
    'views/contact-edit-view',
    'views/contact-new-view',
    'text!templates/app-container-template.html'
], function (
    $,
    _,
    Marionette,
    ContactModel,
    ContactListView,
    ContactDetailView,
    ContactEditView,
    ContactNewView,
    appContainerTemplate
) {

    var Container = Marionette.Layout.extend({
        template: _.template(appContainerTemplate),

        regions: {
            sidebarSection: '.sidebar-section',
            bodySection: '.body-section'
        },

        initialize: function() {
            this.contactListView = new ContactListView();
            this.contactDetailView = new ContactDetailView();
            this.contactEditView = new ContactEditView();
            this.contactNewView = new ContactNewView();

            this.listenTo(this.contactListView, 'contact:selected', _.bind(function(model) {
                this.showContactDetails(model);
            }, this));

            this.listenTo(this.contactListView, 'contact:new', _.bind(function() {
                this.showNewContactForm();
            }, this));
            
            this.listenTo(this.contactDetailView, 'contact-detail:edit', _.bind(function(model) {
                this.showEditContactForm(model);
            }, this));
               
            this.listenTo(this.contactNewView, 'new-contact:saved', _.bind(function(model) {
                this.contactListView.addContact(model);
            }, this));

        },

        onRender: function() {
            this.sidebarSection.show(this.contactListView);
        },

        showContactDetails: function(contactModel) {
            this.contactDetailView.model = contactModel;
            this.bodySection.show(this.contactDetailView);
            this.contactDetailView.delegateEvents();
        },
        
        showEditContactForm: function(contactModel) {
            this.contactEditView.model = contactModel;
            this.bodySection.show(this.contactEditView);
            this.contactEditView.delegateEvents();
        },

        showNewContactForm: function() {
            this.contactNewView.model = new ContactModel();
            this.bodySection.show(this.contactNewView);
            this.contactNewView.delegateEvents();
        }
    });
    
    return new Container();
});
