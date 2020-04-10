## What is this ?
this is a **js validation library**, works on the browser as well as on the server, it is well tested with the help of QUnit.
hope you find it helpful.

## On the Browser:
if you want to use "itiz" on the browser, just download and then load the itiz.min.js file.

```js
    <script src='./your_project/path/to/itiz.min.js'></script> 
```

## On the Server:
if you are using some server side js frameworks like Nodejs, you just need to npm install it
```
    npm i itiz 
```
and the simply require it as you do with any other package


## API & Usage

## itiz(param)
this is the main function, this will return an object of all the helpful methods that you can use.</br>
**param is required, you will get an error if you dont pass anything**</br>
those are the methods you get after calling itiz() with params;

### .email()
this method will validate the email you pass to the itiz() function </br>
**usage**
```js
    // this here will return an object (wich is a chain of all the other method,
    // or false if the email is not valid
    itiz('example.email@mail.com').email();
```

### .length(params)
this method will validate the string you give to the itiz() function </br>
**usage**
```js

    // will return an object (wich is a chain of all the other method or false if itiz not valid
    itiz('this is a long string').length({max: 20});

```

**params** </br>
parameters are required, and it must be an object that has one of this: </br>
**min**: the minimum length of the string
**max**: the maximum length of the string

### .same()
this method will ensure if two (or more) values are the same (equal)
**usage**
```js
    // this will return an object (wich is a chain of all the other method or false if the two values are not the same
    itiz(['password_123', 'password_123']).same();

    // You can pass as many values as you can to check if they are all the same
    // e.g:
    itiz(['doe', 'doe', 'doe', 'doe']).same();
```

### .url([params])
this method here will validate if a given url is valid </br>
**usage**
```js

    // this will return an object (wich is a chain of all the other method or false if the two values are not the same
    itiz('www.facebook.com').url();

```

**params** </br>
this method accepts one parameter wich is a boolean value (default is false).
if you pass true to it, it will ensure that that the url must contain the protocol (http/https)
```js
    // e.g:
    itiz('www.google.com').url(true) // this will return false
```

### .contains(params)
this method will validate if a **string or array** contains a specific value; </br>
***this method will return only boolean value (true/false), it wont return an object*** </br>

**usage**
```js
    
    // with strings
    itiz('i love harry potter').contains('potter') // will return true

    // with arrays
    itiz(['harry', 'ron', 'hermione']).contains('voldemort') // will return false

```

### .notEmpty()
this method will validate if an array/object is not empty
***it will return an object if valid or false if not*** </br>

**usage**
```js

    itiz(['harry', 'ron', 'hermione']).notEmpty() // will return an object with the other helpful methods
    
    itiz({}).notEmpty() // will return an false, well cause its empty

```


### .empty()
this method will validate if an array/object is empty
***it will return an object if valid or false if not*** </br>

**usage**
```js

    itiz({name: 'hagrid'}).empty() // will return false

    itiz([]).empty() // will return an object with the other helpful methods

```


### .upperCase([params])
this method will validate if an a string is upper case 
***it will return an object if valid or false if not*** </br>

**usage**
```js

    itiz('HELLO WORLD').upperCase() // will return an object

    itiz('HELLO WOrLD').upperCase() // will return false

```

**params** </br>
this method accepts one **optional** parameter wich is an object with an index property,</br>
that can be a number or array of numbers. **this parameter will ensure that the index given is upper-case**

```js
    // e.g:
    itiz('Hello world').upperCase({index: 0}) // will return an object, cause its valid :)
```

### .lowerCase([params])
this method will validate if an a string is lower case 
***it will return an object if valid or false if not*** </br>

**usage**
```js

    itiz('chamber of secrets').lowerCase() // will return an object

    itiz('Philosopher stone').lowerCase() // will return false

```

**params** </br>
this method accepts one **optional** parameter wich is an object with an index property, same as the upperCase() method, 
that can be a number or array of numbers.

```js
    // e.g:
    itiz('Magic Wand').lowerCase({index: 2}) // will return an object, cause its valid :)
```

# Contribution
if you found this library helpful and you want to contribute, maybe add another helpful method or anything..., please go ahead.

