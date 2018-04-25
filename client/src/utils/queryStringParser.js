// a small parser to parse url query string params
// returns first name and last name defined in query string
// CONSTRAINTS: only accepts digits and alphabets in the names 
const queryStringParser = (queryString) => {
  const searchedFirstName = queryString.match(/(?:^firstname=)(\w+|\d+)/) 
  const searchedLastName = String(queryString).match(/(?:&lastname=)(\w+|\d+)$/)
  const firstname = (searchedFirstName === null? " " : searchedFirstName[1])
  const lastname = (searchedLastName === null? " ":  searchedLastName[1])
  return {firstname, lastname} 
}

export default queryStringParser

