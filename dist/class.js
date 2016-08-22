/*
File: Class.js
Date: 2016/08/21
*/

(function(){

    namespace = {};
    if (typeof exports != "undefined") {
        namespace = exports;
    } else if (typeof window != "undefined") {
        namespace = window;
    }

    extendobj = Object.assign == undefined ? jQuery : Object;
    extendfn = Object.assign == undefined ? jQuery.extend : Object.assign;

    namespace.Class = function () {
        return this._init.apply(this, arguments);
    };

    namespace.Class.prototype.className = 'Class';
    
    namespace.Class.prototype._init = function () {
        return this._constructor.apply(this, arguments);
    };

    namespace.Class.prototype._constructor = function (options) {
        this.options = namespace.Class.extend(this.options, options);
        return this;
    }

    if (namespace.Class.extend == undefined) {
        namespace.Class.extend = function() {
            cloned = function () {
                return this._init.apply(this, arguments);
            };
            var args = Array.prototype.slice.call(arguments);
            args.unshift(namespace.Class.prototype);
            args.unshift(cloned.prototype);
            extendfn.apply(extendobj, args);
            return cloned;
        }
    }

}());
