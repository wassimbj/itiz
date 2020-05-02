(function () {
    "use strict";

    // Check the environment
    const itiz = typeof require == 'function' ? require('../itiz.min.js') : window.itiz;

    QUnit.module('contains()');


    QUnit.test('array contains something ?', function(assert){

        assert.ok(itiz([5, 25, '85']).contains(25), 'Yess the array contains');
        
        assert.notOk(itiz(['js', 'css', 'html']).contains('php'), 'Nope ! the array doesnt contain php');

    });

    QUnit.test('string contains something ?', function(assert){

        assert.ok(itiz('my cat is cute').contains('cute'), '"my cat is cute": Yep, the string contains "cute"');
        
        assert.notOk(itiz('I love javascript').contains('c++'), '"I love javascript": Nope ! the string doesnt contain "c++"');
        
        assert.ok(itiz('Hello world').contains('w'), '"Hello world": Yes ! the string contains "w"');

    });

}())