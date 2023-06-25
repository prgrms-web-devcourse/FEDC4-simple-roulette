import { storage } from '../utils/storage.js';
import { ITEM_LISTS } from '../constants/storageKeys.js';

class ListStorage {
  getLists = () => storage.getItem(ITEM_LISTS, []);
  clearLists = () => storage.clearItem(ITEM_LISTS);
}

export default ListStorage;
