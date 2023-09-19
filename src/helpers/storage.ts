import { OnProgressProps } from 'react-player/base';
import log from 'loglevel';

type LocalStorageKey = string;

const save = (key: LocalStorageKey, value: OnProgressProps): void => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    log.error('Unable to set property');
  }
};

const load = (key: LocalStorageKey): OnProgressProps | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    log.error('Unable to get property');
    return undefined;
  }
};

const remove = (key: LocalStorageKey): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    log.error('Unable to delete property');
  }
};

const storage = {
  save,
  load,
  remove,
};
export default storage;
