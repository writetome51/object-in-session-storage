"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var object_in_browser_storage_1 = require("@writetome51/object-in-browser-storage");
/*****************************
 This class' difference from its parent:

 Represents an object or array stored in the browser's `localStorage`.

 The constructor takes 2 arguments: `key` and `value`.
 *****************************/
var ObjectInLocalStorage = /** @class */ (function (_super) {
    __extends(ObjectInLocalStorage, _super);
    function ObjectInLocalStorage(key, value) {
        if (key === void 0) { key = ''; }
        if (value === void 0) { value = undefined; }
        return _super.call(this, localStorage, key, value) || this;
    }
    return ObjectInLocalStorage;
}(object_in_browser_storage_1.ObjectInBrowserStorage));
exports.ObjectInLocalStorage = ObjectInLocalStorage;
