import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  {first: 'Zac', last: 'Knoebel', address: 'Some place in Hawaii', telephone: '8081112345', email: 'zknoebel@hawaii.edu'},
  {first: 'Dave', last: 'Wilson', address: 'Some other place in Hawaii', telephone: '3451112345', email: 'dwilson@hawaii.edu'},
  {first: 'John', last: 'Marcos', address: 'Some place in Kansas', telephone: '4531112345', email: 'jmarcos@hawaii.edu'},
  {first: 'Tyler', last: 'Warren', address: 'Some place in Texas', telephone: '6741112345', email: 'twarren@hawaii.edu'},
  {first: 'Samael', last: 'Hope', address: 'Some place in Washington', telephone: '9871112345', email: 'shope@hawaii.edu'},
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(contacts) {
    Contacts.insert(contacts);
  });
}
