
/**
 * version: 1.0.0
 * (c) 2020 wassim ben jdida, <- github/wassimbj
 * Its, may be freely distributed under the MIT license.
*/

(function(global, factory){
    "use strict";

    // checking the export format used
    if(typeof exports === 'object' && typeof module !== 'undefined'){

        module.exports = factory(global);

    }else if(typeof define === 'function' && define.amd){

        define('its', factory(global));

    }else{

        global.its = factory(global);

    }

}(typeof window !== 'undefined' ? window : this, function (global) {
    "use strict";

    // local copy of "its"
    const Its = function (params) {

        // the Its function constructor
        return new Its.init(params);

    }

    // Helper
    // a simple helper function to throw errors
    function throw_error(error_msg) {
        throw new Error(error_msg);
    }

    // Helper
    // is a given variable an object ?
    function isObject(obj){
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj
    }
    
    // Helper
    // is a given variable an array ?
    function isArray(obj){
        if (typeof Array.isArray === 'undefined') {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }else{
            return Array.isArray(obj);
        }
    }

    // is this email valid or not ?
    // email is considered valid only: if it has some charsafter and before the "@", (e.g: somename@blabla)
    // and some chars before and after the "dot" (e.g: blabla.co)
    var invalid_email_special_chars = [
        String.fromCharCode(92), // "\"
        '"',
        "(",
        ")",
        ",",
        ":",
        ";",
        "<",
        ">",
        "[",
        "]",
    ];
    function itsAnEmail() {
        var email = this.params;

        if (typeof email !== "string")
            throw_error('the email your provided is not a type of string');

        if(email.indexOf(' ') !== -1)
            return false;

        // there is more the one @ in the email string: this is wrong
        if (email.indexOf('@') < email.lastIndexOf('@')){
            return false;
        }

        // before the the "@" wich is the local part
        var before_the_at =
            email.indexOf('@') == -1 ? false
                : email.slice(0, email.indexOf('@'));

        // after the "@", e.g: "mail", "gmail"...
        var after_the_at = !before_the_at ? false
            : email.slice(email.indexOf('@') + 1, email.lastIndexOf('.'));

        // After the "." wich is the domain, e.g: "com", "edu"...
        var after_the_dot = email.lastIndexOf('.') == -1 || !after_the_at ? false
            : email.slice(email.lastIndexOf('.') + 1);


        if (!before_the_at || !after_the_at || !after_the_dot)
            return false;

        // If the the local name/label have those special chars then its not a valid email
        for(var i=0; i<invalid_email_special_chars.length; i++){
            if(before_the_at.indexOf(invalid_email_special_chars[i]) >= 0){
                return false;
            }
        }

        if (before_the_at && before_the_at.length > 64){
            return false;
        }

        if (after_the_dot && after_the_dot.length > 63){
            return false;
        }

        // To inherit the other methods in the object
        return this
    }

    // is this string's length ok ?
    function length(min_max) {

        if (!min_max)
            throw_error('Please provide the minimun or the maximum length you want to be checked in the length method')

        if (min_max == null || typeof min_max !== 'object')
            throw_error('length parameter must be of type object');

        var { min, max } = min_max;
        var result = false;

        if (min && !max)
            result = String(this.params).length >= min ? this : false;
        else if (!min && max)
            result = String(this.params).length <= max ? this : false;
        else
            result = String(this.params).length >= min && String(this.params).length <= max ? this : false;

        // return the object or false
        return result;

    }

    // are those values the same ?
    function same() {

        var arr = this.params;

        if (!isArray(arr))
            throw_error('the parameter you passed to the its function must be an array');

        var i = 0,
            test_passed = true;

        // I used while loop, so it stops whenever the test is not passed and do not continue looping
        do {
            test_passed = arr[i] == arr[i + 1];
            i = i + 1;
        } while (test_passed && i < arr.length - 1);

        return test_passed ? this : false;
    }

    // does an array contains a value ?
    function contains(item){

        // This must be an array or string
        var object_to_check_into = this.params;
        
        if (typeof object_to_check_into !== 'string' && !isArray(object_to_check_into)){
            throw_error('The parameter you passed to the its function must be an array or a string');
        }
        
        return object_to_check_into.indexOf(item) >= 0;
    }

    // is it a valid url ?
    // it accepts an optinal parameter to check wether the url must contain the http/https (default is false)
    var valid_protocols = ['http', 'https'];
    function url(strict) {

        // the url
        var url = this.params;

        if (typeof url !== "string"){
            throw_error(`the url you passed to the its function must be a string you gave ${typeof url}`);
        }


        if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
            return false;
        }

        if(url.indexOf('mailto:') === 0){
            return false;
        }

        if ((url.split('.')).includes('')){
            return false;
        }

        var protocol, origin;

        // expecting it to be like this: e.g: ['http', 'blaaa.com'] || this: ['https', 'blabla.com/article/25'] ...
        // it can be also like this ['blablow.me'] <- if no protocol is provided
        var protocol_and_host_arr = url.split('://');
        
        // e.g: http / https
        protocol = protocol_and_host_arr.length == 2 ? protocol_and_host_arr[0].toLowerCase() : '';

        // e.g: facebook.com || facebook.com/article/25 || app.blabla.com
        origin = protocol_and_host_arr.length == 1 ? protocol_and_host_arr[0] : protocol_and_host_arr[1];

        // Start checking if my expectations are correct

        // url can be like this : "http://dddd://vfvfv" <- this is wrong
        if (protocol_and_host_arr.length > 2) {
            return false;
        }

        // if there is a protocol but its not valid
        if (protocol && valid_protocols.indexOf(protocol) === -1 ){
            return false;
        }

        // check if user wants the url to have the protocol
        if(strict){
            if (protocol_and_host_arr.length == 1 || valid_protocols.indexOf(protocol) === -1 ) {
                return false;
            }
        }

        // e.g: facebook.com || app.netlify.com
        var host = origin.indexOf('/') >= 0 ? origin.slice(0, origin.indexOf('/')) : origin;

        var pathname = origin.slice(origin.indexOf('/')); // e.g: /article/25
        
        // check if there is a domain
        // e.g: facebook.com
        var host_to_arr = host.split(/\./g);

        if (host_to_arr.length == 1){
            return false
        }

        // console.log('Host: ', host, ' | host_to_arr: ', host_to_arr)

        // check for something like this
        // www.blabla.
        if (host_to_arr[host_to_arr.length-1] == ""){
            return false
        }

        // check if pathname is correct
        // e.g: /article//vfv///vfv <- this is wrong
        if(pathname.indexOf('//') >= 0){
            return false
        }

        // else if everything is ok
        return this;

        

    }

    // is this object/array have items ?
    function notEmpty() {
        var obj = this.params;

        if (typeof obj !== 'object') {
            throw_error('Please provide an array or an object to the its function');
        }

        if(obj == null){
            return false;
        }

        // obj is an Array
        if (isArray(obj) && obj.length === 0) {
            return false;
        }

        // obj is an Object
        if (isObject(obj)) {
            if(Object.keys(obj).length == 0){
                return false;
            }
        }

        // else obj is not empty
        return this;

    }

    // is this object/array empty ?
    function empty(){
        return this.notEmpty() ? false : this;
    }

    // is a string upper case ?
    // option for specifications, specify the index, it can be an array of indexes
    // option is optional :)
    function upperCase(option){
        let str = this.params;
        // console.log(str)

        if(typeof str !== 'string'){
            throw_error('Please provide a string to the "its" function');
        }

        if(option && !isObject(option)){
            throw_error('the option you provide to the upperCase method must be an object with index property in it');
        }
        
        var index = option ? option.index : void 0;
        var isUpper = true;

        // console.log(str, index, str[index], !index)

        // Checking all the letters
        if(index == void 0 || index == 'all'){
            isUpper = str === str.toUpperCase();
        
        }else{
            // Checking the given index
            // if index is an array then we're gonna check each index
            if(isArray(index)){
                for (var i = 0; i < index.length; i++) {
                    // Stop the loop when you dont find an uppercase letter
                    if (str[index[i]] !== str[index[i]].toUpperCase()) {
                        isUpper = false;
                        break;
                    }
                }
            }
            
            // else index is a number
            var indexAsNumber = parseInt(index);
            isUpper = str[indexAsNumber] === str[indexAsNumber].toUpperCase();
            
        }

        return isUpper ? this : false; 
        
    }


    // is a string lower case ?
    // option for specifications, specify the index, it can be an array of indexes
    // option, is optional :)
    function lowerCase(option){
        let str = this.params;

        if(typeof str !== 'string'){
            throw_error('Please provide a string to the "its" function');
        }

        if(option !== undefined && !isObject(option)){
            throw_error('the option you provide to the lowerCase method must be an object with index property in it');
        }
        
        var index = option ? option.index : void 0;
        var isLower = true;

        // Checking all the letters
        if(index == void 0 || index == 'all'){
            isLower = str === str.toLowerCase();
        
        }else{
            // Checking the given index
            // if index is an array then we're gonna check each index
            if(isArray(index)){
                for (var i = 0; i < index.length; i++) {
                    // Stop the loop when you dont find an uppercase letter
                    if (str[index[i]] !== str[index[i]].toLowerCase()) {
                        isLower = false;
                        break;
                    }
                }
            }
            // else index is a number
            var indexAsNumber = parseInt(index);
            isLower = str[indexAsNumber] === str[indexAsNumber].toLowerCase();
        }

        return isLower ? this : false; 
        
    }

    // All the helpful methodes lives here
    Its.prototype = {

        email: itsAnEmail,
        length: length,
        same: same,
        url: url,
        contains: contains,
        notEmpty: notEmpty,
        empty: empty,
        upperCase: upperCase,
        lowerCase: lowerCase

    };


    // init function
    Its.init = function (params) {

        if (!params)
            throw_error('Please provide what you want to validate first as a parameter in the isit function');

        if (arguments.length > 1)
            throw_error('Only one parameter is allowed, if you want to use multiple parameters you have to provide them as an array');

        this.params = params;


        // if (typeof params !== "string" || isArray(params) || typeof params !== "number")
        //     throw_error(`
        //         Parameters must be type of "String", "Array" or "Number"
        //     `);

    }



    // Inherit the (Its) prototype to the function constructor
    Its.init.prototype = Its.prototype;

    // Return the function
    return Its;

}));