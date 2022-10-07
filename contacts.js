const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname,"./db/contacts.json")
const {nanoid}=require('nanoid')

async function listContacts() {
  const res = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(res)

}

async function getContactById(contactId) {
  const contacts = await listContacts()
  const needestContact = contacts.find(contact => Number(contact.id) === contactId)
  return needestContact||null
}

async function removeContact(contactId) {
  const contacts = await listContacts()
  const index = contacts.findIndex(item => Number(item.id) === contactId)
   if(index === -1){
        return null;
    }
  const [res] = contacts.splice(index, 1)
  fs.writeFile(contactsPath, JSON.stringify(contacts,null,2))
  return res

}

async function addContact(name, email, phone) {
  const contacts = await listContacts()
  const newContact = {
    id:String(nanoid()),name,email,phone
  }
  contacts.push(newContact)
  fs.writeFile(contactsPath, JSON.stringify(contacts,null,2))
  return newContact 

  
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}