/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */
hw2.define([
    'hw2!{PATH_JS_LIB}common/include.js'
], function () {
    $ = this;
    $.Object = $.Class({members: [
            {
                a: "public", n: "__destruct", v: function () {
                }
            },
            {
                a: ["public","static"], n: "clone", v: function (obj) {
                    return JSON.parse(JSON.stringify(obj));
                }
            },
            {
                /**
                 * helper method to create a singleton for this class
                 * you should declare the private static "instance" variable in your class
                 */
                a: ["public","static"], n: "I", v: function (makeNew, params) {
                    if (makeNew || !this._s.instance) {
                        this._s.instance = this.s.__createInstance.apply(null,params);
                    }

                    return this._s.instance;
                }
            }
        ]
    });
});



