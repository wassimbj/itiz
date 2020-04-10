(function () {
    "use strict";

    // Check the environment
    const its = typeof require == 'function' ? require('../its') : window.its;

    QUnit.module('url()');


    // Testing valid urls
    const valid_urls = [
        'facebook.com',
        'goo-gle.com',
        'http://hhhh.cc',
        'http://face.cc/ff5/ff',
        'www.face.co',
        'www.coding.space/welcome/page.html',
        'www.oka.com?msg=good',
        'z.com',
    ];
    QUnit.test('valid urls', function(assert){

        for(var i=0; i < valid_urls.length; i++){
            let is_valid = its(valid_urls[i]).url() ? true : false;
            assert.ok(is_valid, `${valid_urls[i]} is valid`);
        }

    });

    // Testing in-valid urls
    const invalid_urls = [
        'face book.com',
        'h://hhh.cc',
        'http://myblog.cc/article//25',
        'www.face.',
        'http://face.',
        '.com',
        'www..com',
    ];
    QUnit.test('in-valid urls', function(assert){

        for(var i=0; i < invalid_urls.length; i++){
            let is_valid = its(invalid_urls[i]).url() ? true : false;
            assert.notOk(is_valid, `${invalid_urls[i]} is NOT valid`);
        }

    });

    // Testing Strict parameter, (user must include the protocol)
    // you just pass true to the url() method
    const invalid_strict_urls = [
        'http://face book.com',
        'h://hhh.cc',
        'http://myblog.cc/article//25',
        'http:/www.face.',
        'http://face.',
    ];

    QUnit.test('in-valid strict urls', function(assert){

        for(var i=0; i < invalid_strict_urls.length; i++){
            let is_valid = its(invalid_strict_urls[i]).url(true) ? true : false;
            assert.notOk(is_valid, `${invalid_strict_urls[i]} is NOT valid`);
        }

    });

    // Testing Strict parameter, (user must include the protocol)
    // you just pass true to the url() method
    const valid_strict_urls = [
        'http://face-book.com',
        'https://wtfisthis.co',
        'http://helloworld.code/article/25',
    ];

    QUnit.test('valid strict urls', function(assert){

        for(var i=0; i < valid_strict_urls.length; i++){
            let is_valid = its(valid_strict_urls[i]).url(true) ? true : false;
            assert.ok(is_valid, `${valid_strict_urls[i]} is valid`);
        }

    });

}())