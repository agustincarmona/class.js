/*
File: Class.js
Date: 2016/08/21
*/

var exports = exports || window || {};
(function(namespace){

    extendobj = jQuery;
    extendfn = jQuery.extend;

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

}(exports));
