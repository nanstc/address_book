import express from 'express'; 
import schema from './schema';
import Contacts from './data/contacts';
import includes from 'lodash/includes';
import forEach from 'lodash/forEach';
import graphqlHTTP from 'express-graphql'; 
//import bodyParser from 'body-parser';
const port = 3001; 
const app = express();

const root = {
  contacts: () => {
    return Contacts
  },
  editContact: function ({id, contact}) { 
    const index = Contacts.findIndex(Contact => Contact.contactId === parseInt(id));
    var Contact = null; 
    if (index !== -1) {
      console.log("\n found contact\n");
      Contact = Contacts[index]; 
      Contact.firstname = contact.firstname; 
      Contact.lastname = contact.lastname; 
      Contact.phone = contact.phone; 
      Contact.address = contact.address;
      Contact.email = contact.email;
    }
    return Contact;
  },
}

app.use('/graphql', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods','POST, OPTIONS')
  res.header('Allow', 'POST, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  }
  next()
  },
)


app.use('/graphql', graphqlHTTP( (req)=> {
  console.log(req.body)
  return { 
  schema: schema,
  rootValue: root, 
  graphiql: true,
}}));

const server = app.listen(port, () => 
    { console.log(`\n Express listening at port ${port} \n`)})


