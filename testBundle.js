(() => {
  "use strict";

  var __webpack_modules__ = ({
    /** external "React" */
    "react": ((module) => {
      module.exports = React;
    }),
    /** external ReactDOM */
    "react-dom": ((module) => {
      module.exports = ReactDOM;
    }),
  });

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create new module (and put in into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }
})()