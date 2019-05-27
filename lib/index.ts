import { ObjectInBrowserStorage } from '@writetome51/object-in-browser-storage';


/*****************************
 This class' difference from its parent:

 Represents an object or array stored in the browser's `localStorage`.

 The constructor takes 2 arguments: `key` and `value`.
 *****************************/

export class ObjectInLocalStorage extends ObjectInBrowserStorage {


	constructor(
		key = '',
		value: Object | any[] = undefined
	) {
		super(localStorage, key, value);
	}


}
