# address_book
a simple address book with GraphQL, React + Redux, and Express. 

- To run the app: run both client and server
1. Nevigate to address_book/server, and run command line `npm start` 
2. Nevigate to address_book/client, and run command line `npm start` 
The browser should open at http://localhost:3001/contact with the address book. 

- To add data to the contacts: 
The app stores the contacts in the server/src/data/contact.js file; simply add/delete contact info in the style provided by the example. 

- To find contact via URL: 
The app accepts the following search format: 
`contacts/firstname=[yourfirstname]&lastname=[yourlastname]` 
Replace [yourfirstname] and [yourlastname] to find the correct contact. 
The main view window displays no contact when none could be found.

