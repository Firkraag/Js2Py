// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.4.5.2-4-8
description: >
    [[Construct]] - length of parameters of 'target' is 0, length of
    'boundArgs' is 1, length of 'ExtraArgs' is 1
includes: [runTestCase.js]
---*/

function testcase() {
        var func = function () {
            return new Boolean(arguments.length === 2 && arguments[0] === 1 && arguments[1] === 2);
        };

        var NewFunc = Function.prototype.bind.call(func, {}, 1);

        var newInstance = new NewFunc(2);

        return newInstance.valueOf() === true;
    }
runTestCase(testcase);
