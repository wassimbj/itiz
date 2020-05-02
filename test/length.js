(function () {
    "use strict";

    // Check the environment
    const itiz = typeof require == 'function' ? require('../itiz.min.js') : window.itiz;

    QUnit.module('length()');

    // Validating with only min parameter
    QUnit.test('with min only', function(assert){

        const is_min_length = itiz('hello world').length({min: 5}) ? true : false;
        assert.ok(is_min_length, '"hello world": minimum length is valid');

        const is_not_min_length = itiz('this a short one').length({min: 20}) ? true : false;
        assert.notOk(is_not_min_length, '"this a short text": minimum length is not valid');

    });

    // Validating with only max parameter
    QUnit.test('with max only', function(assert){

        const is_max_length = itiz('a short text').length({max: 20}) ? true : false;
        assert.ok(is_max_length, '"a short text": maximum length is valid');

        const is_not_max_length = itiz('this is a very long text').length({max: 20}) ? true : false;
        assert.notOk(is_not_max_length, '"this is a very long text": maximum length is not valid');

    });

    // Validating with both parameter, {min, max}
    QUnit.test('with both min and max', function(assert){

        const is_min_max_length = itiz('medium text').length({min: 5, max: 20}) ? true : false;
        assert.ok(is_min_max_length, '"medium text": length is valid');

        const is_not_min_length = itiz('short text').length({min: 30, max: 50}) ? true : false;
        assert.notOk(is_not_min_length, '"short text": minimum length must be 30 (not valid)');

        const is_not_max_length = itiz('this is a very very very long text').length({min: 10, max: 18}) ? true : false;
        assert.notOk(is_not_max_length, '"this is a very very very long text": maximum length must be 18 (not valid)');

    });



}());