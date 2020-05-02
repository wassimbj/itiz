(function () {
    "use strict";

    // Check the environment
    const itiz = typeof require == 'function' ? require('../itiz.min.js') : window.itiz;

    QUnit.module('lowerCase()');

    // Testing if all the string is lower case
    QUnit.test('is it all lower case ?', function(assert){
        const is_it_all_lower = itiz('hello this lower case').lowerCase() ? true : false;
        assert.ok(is_it_all_lower, '"hello this lower case": its all lower');
        
        const itiz_not_all_lower = itiz('this Is upper').lowerCase() ? true : false;
        assert.notOk(itiz_not_all_lower, '"this Is upper": its NOT all lower case');
    });

    // Testing it with parameters
    QUnit.test('is index lower ?', function(assert){
        const index_is_lower = itiz('cute cat').lowerCase({index: 0}) ? true : false;
        assert.ok(index_is_lower, '"cute cat": index[0] is lower');
        
        const indexes_are_not_lower = itiz('Mr Bean').lowerCase({index: [0, 3]}) ? true : false;
        assert.notOk(indexes_are_not_lower, '"Mr Bean": index[0] and index[3] are not lower');
 
    });

}());