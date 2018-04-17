import Contacts from './data/contacts';
import find from 'lodash/find';
import filter from 'lodash/filter';
import {
  graphql, 
  buildSchema
} from 'graphql';

const schema = buildSchema(`
  input ContactInput {
    firstname: String
    lastname: String
    phone: String
    address: String
    email: String
  }
  type Contact {
    contactId: ID
    firstname: String
    lastname: String
    phone: String
    address: String
    email: String
  }
  type Query {
    contacts(name: String): [Contact]
  }
  type Mutation {
    editContact(id: ID!, contact: ContactInput): Contact
  }
`)

export default schema;

