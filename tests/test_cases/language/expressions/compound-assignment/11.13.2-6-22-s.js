// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.13.2-6-22-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier arguments
    appear as the LeftHandSideExpression of a Compound Assignment
    operator(|=)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";
        var blah = arguments;
        try {
            eval("arguments |= 20;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && blah === arguments;
        }
    }
runTestCase(testcase);
