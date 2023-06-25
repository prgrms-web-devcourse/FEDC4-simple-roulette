import { storage } from './storage.js';
import { ITEM_ID } from '../constants/storageKeys.js';
import { defaultItemId } from '../stores/itemListStore.js';

class ItemIdStorage {
  getItemId = () => storage.getItem(ITEM_ID, defaultItemId);
  setItemId = itemId => storage.setItem(ITEM_ID, JSON.stringify(itemId));
  clearItemId = () => storage.clearItem(ITEM_ID);
}

export default ItemIdStorage;
