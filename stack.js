var Stack = function() {
  this.length = 0;
  this.storage = {};

  this.push = function(value) {
    if (!value) { return undefined; }
    this.storage[this.length] = value;
    this.length++;
    return value;
  };

  this.pop = function() {
    if (this.length == 0) { return undefined; }
    var tmp = this.storage[this.length-1];
    delete this.storage[this.length - 1];
    this.length--;
    return tmp; 
  };

  this.all = function() {
    if (!this.length) { return []; }
    return Object.keys(this.storage)
      .map(key => this.storage[key]);
  };
};

Stack.prototype = {
  get peek() {
    if (!this.length) { return undefined; }
    return this.storage[this.length - 1];
  }
};

// test check if a string is palindrome

function testPalindrome(str) {
  var charStack = new Stack();
  var comparedStr = '';

  for (var i = 0, length = str.length; i < length; i++) {
    charStack.push(str[i]);  
  }

  while (charStack.length) {
    comparedStr += charStack.pop(); // reverse the string
  }

  return comparedStr === str;
}

testPalindrome('racecar'); // -> true
testPalindrome('civic'); // -> true
testPalindrome('cool'); // -> false