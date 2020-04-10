(function () {
    "use strict";

    // Check the environment
    const its = typeof require == 'function' ? require('../its') : window.its;

    QUnit.module('notEmpty()');
    
    // is an array/object full of items ?
    QUnit.test('is array not empty ?', function(assert){
        
        const is_arr_not_empty = its(['hello', 'hola']).notEmpty() ? true : false;
        assert.ok(is_arr_not_empty, 'Array is not empty');


        const is_obj_not_empty = its({name: 'bob', age: 25}).notEmpty() ? true : false;
        assert.ok(is_obj_not_empty, 'Object is not empty');
        
    });


    QUnit.module('empty()');

    // is an array/object full of items ?
    QUnit.test('is array empty ?', function(assert){

        const is_arr_empty = its([]).empty() ? true : false;
        assert.ok(is_arr_empty, 'Array is empty');
        
        const is_obj_empty = its({}).empty() ? true : false;
        assert.ok(is_obj_empty, 'Object is empty');
        
    });


}())