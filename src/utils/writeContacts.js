import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно записані у файл.');
     
  
} catch (err) {
    console.error('Помилка запису у файл:', err);
}};
