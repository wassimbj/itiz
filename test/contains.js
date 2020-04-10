(function () {
    "use strict";

    // Check the environment
    const its = typeof require == 'function' ? require('../its') : window.its;

    QUnit.module('contains()');


    QUnit.test('array contains something ?', function(assert){

        assert.ok(its([5, 25, '85']).contains(25), 'Yess the array contains');
        
        assert.notOk(its(['js', 'css', 'html']).contains('php'), 'Nope ! the array doesnt contain php');

    });

    QUnit.test('string contains something ?', function(assert){

        assert.ok(its('my cat is cute').contains('cute'), '"my cat is cute": Yep, the string contains "cute"');
        
        assert.notOk(its('I love javascript').contains('c++'), '"I love javascript": Nope ! the string doesnt contain "c++"');
        
        assert.ok(its('Hello world').contains('w'), '"Hello world": Yes ! the string contains "w"');

    });

}())