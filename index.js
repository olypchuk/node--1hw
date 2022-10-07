const contacts = require('./contacts')

const { listContacts,getContactById ,addContact,removeContact} = require('./contacts')

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
           const allContacts = await contacts.listContacts()
          console.table(allContacts)
      break;

      case "get":
         const oneContact= await getContactById(id)
        console.table(oneContact);
  
      break;

    case "add":
          const addedContact = await addContact(name, email, phone)
          console.table(addedContact);
      break;

    case "remove":
      const removedContact = await removeContact(id)
      console.log('removedContact :>> ', removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
