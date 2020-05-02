(function(){
    "use strict";

    // You can refer to this wikipedia article that talks about how valid and invalid emails looks like
    // https://en.wikipedia.org/wiki/Email_address

    // Check the environment
    const itiz = typeof require == 'function' ? require('../itiz.min.js') : window.itiz;

    QUnit.module('email()');
    
    
    // Testing the valid emails
    const valid_emails = [
        'emailexample@bla.com',
        'joe.doe@mail.net',
        'disposable.style.email.with+symbol@example.com',
        'other.email-with-hyphen@example.com',
        'fully-qualified-domain@example.com',
        'user.name+tag+sorting@example.com',
        'x@example.com',
        'example-indeed@strange-example.com',
        'example@s.example',
        'mailhost!username@example.org',
        'user%example.com@example.org'
    ];
    QUnit.test('test valid emails', function(assert){
        assert.expect(valid_emails.length);

        for(var i=0; i < valid_emails.length; i++){
            let email = itiz(valid_emails[i]).email() ? true : false;

            assert.ok(email, `${valid_emails[i]} is ${email ? 'Valid' : 'Not Valid'}`);
        }
    
    });
    
    // Testing the invalid emails
    const invalid_emails = [
        'emailex ample@mail.com',
        'Abc.example.com',
        'A@b@c@example.com',
        'a"b(c)d,e:f;g<h>i[j\k]l@example.com',
        'just"not"right@example.com',
        'this is"not\allowed@example.com',
        'this\ still\"not\\allowed@example.com',
        '1234567890123456789012345678901234567890123456789012345678901234+x@example.com' // label is > 64 char
    ];

    QUnit.test('test invalid emails', function(assert){
        assert.expect(invalid_emails.length);

        for(var i=0; i < invalid_emails.length; i++){
            let email = itiz(invalid_emails[i]).email() ? true : false;

            assert.notOk(email, `${invalid_emails[i]} is ${email ? 'Valid' : 'Not Valid'}`);
        }
    
    });

}())
