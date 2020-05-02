(function () {
    "use strict";

    // Check the environment
    const itiz = typeof require == 'function' ? require('../itiz.min.js') : window.itiz;

    QUnit.module('upperCase()');

    // Testing if all the string is upper case
    QUnit.test('is it all upper case ?', function (assert) {

        const is_it_all_upper = itiz('JAVASCRIPT IS GREAT').upperCase() ? true : false;
        assert.ok(is_it_all_upper, '"JAVASCRIPT IS GREAT": its all upper');

        const itiz_not_all_upper = itiz('HELLO WOrLD').upperCase() ? true : false;
        assert.notOk(itiz_not_all_upper, '"HELLO WOrLD": its NOT all upper case');

    });

    // Testing it with parameters
    QUnit.test('is index upper ?', function (assert) {

        const index_is_upper = itiz('Cute').upperCase({ index: 0 }) ? true : false;
        assert.ok(index_is_upper, '"Cute": index[0] is upper');

        const indexes_are_not_upper = itiz('WRONg TUrN').upperCase({ index: [4, 8] }) ? true : false;
        assert.notOk(indexes_are_not_upper, '"WRONg TUrN": index[4] and index[8] are not upper');


    });

}());