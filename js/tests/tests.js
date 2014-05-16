define(function(require) {
    var chai = require('chai');
    var expect = chai.expect;
    var ContactListView = require('views/contact-list-view');
    var containerView = require('views/app-container-view'); 
    var ContactModel = require('models/contact-model');

    describe('unit test', function(){
        describe('contact list view', function(){
            it('should render 3 initial records', function(){
                var contactListView = new ContactListView();
                contactListView.render();
                expect(contactListView.$('.contact-item').length).to.equal(3);
            });
            it('should render a new record when a new contact is added', function(){
                var contactListView = new ContactListView();
                contactListView.render();
                expect(contactListView.$('.contact-item').length).to.equal(3);
                
                var contactModel = new ContactModel({name: 'james'});
                contactListView.addContact(contactModel);
                contactListView.render();
                expect(contactListView.$('.contact-item').length).to.equal(4);
            });
        });
        describe('container view', function(){
            it('should render contact list view', function(){
                containerView.render();
                expect(containerView.$('.contacts-container').length).to.equal(1);
            });
            it('should be able to display a contact detail', function(){
                var contactModel = new ContactModel({name: 'james', 
                                                     sex: 'male', 
                                                     age: '30',
                                                     birthday: '1/1/84',
                                                     email: 'james@gmail.com',
                                                     phone: '555-555-5555',
                                                     address: {
                                                        street: '',
                                                        city: '',
                                                        state: '',
                                                        postcode: ''
                                                     }});
                containerView.render();
                containerView.showContactDetails(contactModel);
                expect(containerView.$('.contact-details-container').length).to.equal(1);
                expect(containerView.$('.contact-details-container .name').html()).to.equal('james');
            });
            it('should be able to display an edit contact form', function(){
                var contactModel = new ContactModel({name: 'james', 
                                                     sex: 'male', 
                                                     age: '30',
                                                     birthday: '1/1/84',
                                                     email: 'james@gmail.com',
                                                     phone: '555-555-5555',
                                                     address: {
                                                        street: '',
                                                        city: '',
                                                        state: '',
                                                        postcode: ''
                                                     }});
                containerView.render();
                containerView.showEditContactForm(contactModel);
                expect(containerView.$('.edit-details-container').length).to.equal(1);
                expect(containerView.$('input[name="name"]').val()).to.equal('james');
            });
            it('should be able to display a new contact form', function(){
                containerView.render();
                containerView.showNewContactForm();
                expect(containerView.$('.new-contact-container').length).to.equal(1);
            });
        });
    });
});

