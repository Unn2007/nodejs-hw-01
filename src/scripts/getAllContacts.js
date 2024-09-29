import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Successfully readed contacts.`);
    return contacts;
  } catch (err) {
    console.error('Error readinging contacts:', err);
  }
};

console.log(await getAllContacts());
