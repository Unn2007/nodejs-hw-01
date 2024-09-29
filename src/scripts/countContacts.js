import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await getAllContacts();
    const countOfContacts = contacts.length;
    console.log(`Successfully counteded contacts.`);
    return countOfContacts;
  } catch (err) {
    console.error('Error counting contacts:', err);
  }
};

console.log(await countContacts());
