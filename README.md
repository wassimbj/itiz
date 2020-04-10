# What is this ?
this is a **js validation library**, works on the browser as well as on the server, it is well tested with the help of QUnit.
hope you find it helpful.

# On the Browser:
if you want to use "its" on the browser, just download and then load the its.min.js file.

```js
    <script src='./your_project/path/to/its.min.js'></script> 
```

# On the Server:
if you are using some server side js frameworks like Nodejs, you just need to npm install it
```
    npm i its 
```
and the simply require it as you do with any other package


# API & Usage

## its(param)
this is the main function, this will return an object of all the helpful methods that you can use.
**param is required, you will get an error if you dont pass anything**
those are the methods you get after calling its() with params;

### .email()
this method will validate the email you pass to the its() function
**usage**
```js
    // this here will return an object (wich is a chain of all the other method,
    // or false if the email is not valid
    its('example.email@mail.com').email();
```

### .length(params)
this method will validate the string you give to the its() function
**usage**
```js

    // will return an object (wich is a chain of all the other method or false if its not valid
    its('this is a long string').length({max: 20});

```

**params** 
parameters are required, and it must be an object that has one of this:
**min**: the minimum length of the string
**max**: the maximum length of the string

### .same()
this method will ensure if two (or more) values are the same (equal)
**usage**
```js
    // this will return an object (wich is a chain of all the other method or false if the two values are not the same
    its(['password_123', 'password_123']).same();

    // You can pass as many values as you can to check if they are all the same
    // e.g:
    its(['doe', 'doe', 'doe', 'doe']).same();
```

### .url([params])
this method here will validate if a given url is valid
**usage**
```js

    // this will return an object (wich is a chain of all the other method or false if the two values are not the same
    its('www.facebook.com').url();

```

**params**
this method accepts one parameter wich is a boolean value (default is false).
if you pass true to it, it will ensure that that the url must contain the protocol (http/https)
```js
    // e.g:
    its('www.google.com').url(true) // this will return false
```

### .contains(params)
this method will validate if a **string or array** contains a specific value;
***this method will return only boolean value (true/false), it wont return an object*** 

**usage**
```js
    
    // with strings
    its('i love harry potter').contains('potter') // will return true

    // with arrays
    its(['harry', 'ron', 'hermione']).contains('voldemort') // will return false

```

### .notEmpty()
this method will validate if an array/object is not empty
***it will return an object if valid or false if not***

**usage**
```js

    its(['harry', 'ron', 'hermione']).notEmpty() // will return an object with the other helpful methods
    
    its({}).notEmpty() // will return an false, well cause its empty

```


### .empty()
this method will validate if an array/object is empty
***it will return an object if valid or false if not***

**usage**
```js

    its({name: 'hagrid'}).empty() // will return false

    its([]).empty() // will return an object with the other helpful methods

```


### .upperCase([params])
this method will validate if an a string is upper case 
***it will return an object if valid or false if not***

**usage**
```js

    its('HELLO WORLD').upperCase() // will return an object

    its('HELLO WOrLD').upperCase() // will return false

```

**params**
this method accepts one **optional** parameter wich is an object with an index property, 
that can be a number or array of numbers. **this parameter will ensure that the index given is upper-case**

```js
    // e.g:
    its('Hello world').upperCase({index: 0}) // will return an object, cause its valid :)
```

### .lowerCase([params])
this method will validate if an a string is lower case 
***it will return an object if valid or false if not***

**usage**
```js

    its('chamber of secrets').lowerCase() // will return an object

    its('Philosopher stone').lowerCase() // will return false

```

**params**
this method accepts one **optional** parameter wich is an object with an index property, same as the upperCase() method, 
that can be a number or array of numbers.

```js
    // e.g:
    its('Magic Wand').lowerCase({index: 2}) // will return an object, cause its valid :)
```

# Contribution
if you found this library helpful and you want to contribute, maybe add another helpful method or anything..., please go ahead.

