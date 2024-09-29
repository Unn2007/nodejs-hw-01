import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    const data = JSON.parse(buffer);
   

    return data;

    
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

