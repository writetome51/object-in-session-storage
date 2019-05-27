import { ObjectInBrowserStorage } from '@writetome51/object-in-browser-storage';
/*****************************
Represents an object or array stored in the browser's `localStorage`.
You may want to have a different class instance for each item you store.
*****************************/
export declare class ObjectInLocalStorage extends ObjectInBrowserStorage {
    constructor(key?: string, value?: Object | any[]);
}
