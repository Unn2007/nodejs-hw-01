import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log(`Successfully deleted all contacts.`);
  } catch (err) {
    console.error('Error deleting contacts:', err);
  }
};

removeAllContacts();
