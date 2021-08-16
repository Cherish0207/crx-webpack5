(() => {
  "use strict";
  var __webpack_modules__ = {
    "./src/module1.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        fn1: () => /* binding */ fn1,
      });

      var _module2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./module2 */ "./src/module2.js"
      );

      function fn1() {
        console.log("fn1");
      }
      function fn2() {
        console.log("fn2");
        (0, _module2__WEBPACK_IMPORTED_MODULE_0__.fn3)();
      }
    },

    "./src/module2.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        fn3: () => /* binding */ fn3,
      });

      function fn3() {
        console.log("fn3");
      }
      function fn4() {
        console.log("fn4");
      }
    },
  };

  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  var __webpack_exports__ = {};

  (() => {
    var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module1 */ "./src/module1.js"
    );

    console.log(_module1__WEBPACK_IMPORTED_MODULE_0__.fn1);
  })();
})();
