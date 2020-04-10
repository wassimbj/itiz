(function () {
    "use strict";

    // Check the environment
    const its = typeof require == 'function' ? require('../its') : window.its;

    QUnit.module('same()');

    QUnit.test('values are the same ?', function(assert){

        const same = its(['1', '1']).same() ? true : false;
        assert.ok(same, `"${['1', '1'].join(' and ')}" are the same`);
        
        const not_same = its(['hey', 'hello']).same() ? true : false;
        assert.notOk(not_same, `"${['hey', 'hello'].join(' and ')}" are the NOT the same`)
        

        const multiple_vals_not_same = its(['hey', 'hello', 'hola', 'hallo', 'bonjour']).same() ? true : false;
        assert.notOk(multiple_vals_not_same, `"${['hey', 'hello', 'hola', 'hallo', 'bonjour'].join(', ')}" are the NOT the same`)
        
        const multiple_vals_are_same = its(['r', 'r', 'r', 'r', 'r']).same() ? true : false;
        assert.ok(multiple_vals_are_same, `"${['r', 'r', 'r', 'r', 'r'].join(', ')}" are the same`)
        
        // not gonna be fooled with upper case and lower case 
        const not_same_vals = its(['Mr','mr']).same() ? true : false;
        assert.notOk(not_same_vals, `"${['Mr', 'mr'].join(' and ')}" are NOT the same`)

    });


}());