define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.add = exports.msg = void 0;
    exports.msg = 'Hello World File 1';
    function add(num1, num2) {
        console.log(num1 + num2);
    }
    exports.add = add;
});
define("file2", ["require", "exports", "file1"], function (require, exports, file1_1) {
    "use strict";
    exports.__esModule = true;
    file1_1.add(10, 6);
    console.log(file1_1.msg);
});
