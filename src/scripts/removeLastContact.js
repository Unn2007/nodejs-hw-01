import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log(`Successfully deleted last contact.`);
    } else {
      console.log('No Contacts');
    }
  } catch (err) {
    console.error('Error deleting last contact:', err);
  }
};

removeLastContact();
