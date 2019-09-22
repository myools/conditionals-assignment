
/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that takes a single parameter `n` and returns `true` if `n` is an odd number, false otherwise.
 *
 * HINTS:
 * - You can use the modulo operator, `%` to calculate the remainder of the number when divided by another number.
 *
 * @param {number} n number to check if it's odd
 * @returns {boolean} `true` if the number is odd, `false` if the number is even
 */
function isOdd(n) {
    //return true if odd
    if (n % 2 === 1) {
    return true;
    }
    //return false otherwise
    else {
    return false
    }
}


/**
 * @difficulty intermediate/hard, ~10 minutes
 *
 * Write a function that can generate a random 5 digit personal identification number (PIN).
 *
 * The function should generate a number between 10000 and 99998 and return it. The PIN number should be an even number
 *
 * HINTS:
 * - You can use the Math's random method to generate a number between 0 and 1
 * - You can multiply this number to generate a number between ~900 and ~89000
 * - You can then add to this number to ensure it has 5 digits
 * - You can use the Math's round, ceil or trunc to be left with a 5 digit integer
 * - You can use the `isOdd` function defined above to check if you need to + 1
 *
 * @returns the pin number
 */
function generatePinNumber() {
    let num = Math.floor(Math.random() * 90000) + 10000;
    if (isOdd(num) === true) {
        num += 1;
    }
    return num;
}

/**
 * @difficulty easy ~3 minutes
 *
 * Write a function that accepts an object representing a user. The object will contain two properties, `givenName` and `loggedIn`. The `givenName` is a string and `loggedIn` is a boolean.
 * The function should return either a greeting or a prompt to log in.
 * If logged in, the string should be `Hello given name`.
 * If not logged in, the string should be `Welcome, please log in`.
 *
 * For example, the function can be used like so
 *
 * ```js
 * const user1 = { givenName: 'Samwise Gamgee', loggedIn: false };
 * greetLoggedInUser(user1); // `Welcome, please log in`
 *
 * const user2 = { givenName: 'Aragorn', loggedIn: true };
 * greetLoggedInUser(user2); // `Hello, Aragorn!`
 * ```
 *
 * @param {object} user an object containing a properties of `givenName` and `loggedIn`
 * @returns {string} Saying either `'Hello '` and the user's given name, OR, `'Welcome, please log in'`.
 */
function greetLoggedInUser(user) {
    if (user.loggedIn === true) {
        return `Hello, ${user.givenName}!`
    }
    else {
        return `Welcome, please log in`
    }
}

/**
 * @difficulty intermediate/hard ~5 minutes
 *
 * Write a function that accepts a number in kilowatt hours (KWH).
 * Then, calculates the total electricity bill.
 *
 * The first 400 kwh cost $0.26 per kwh,
 * the next 600 kwh cost $0.32 per kwh,
 * any kwh in excess of this costs $0.37 per kwh.
 *
 * @param {number} kwh amount of electricity used in kilowatt hours (KWH)
 * @returns {number} the total bill
 */
function calculateElectricBill(kwh) {
    if(kwh <= 400) {
        return kwh * 0.26;
    }
    else if (kwh <= 1000) {
        let costPer400 = 400 * 0.26;
        let kwhOver400 = kwh - 400;
        let cost = kwhOver400 * 0.32;
        return costPer400 + cost;
    }
    else {
        let costUpTo1000 = 400 * 0.26 + 600 * 0.32;
        let kwhOver1000 = kwh - 1000;
        let cost = kwhOver1000 * 0.37;
        return cost + costUpTo1000;               
    }
}

/**
 * @difficulty intemediate, ~5 mins
 *
 * Write a function accepts a user account object containing properties to describe the user's credit.
 *
 * Calculate if the credit limit has been exceeded.
 * If the credit limit was exceeded return the string `'Credit limit exceeded'`,
 * otherwise return the string `'Credit available'`.
 *
 * To calculate whether the credit limit has exceeded, the credit used musn't exceeded the credit limit. The credit used is the sum of the credit taken before the month and the total charges, minus the extra credits made available during the month.
 *
 * For example:
 *
 * ```js
 * const userOne = {
 *   creditTakenBeginningOfMonth: 0,
 *   totalChargesInMonth: 1,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userOne) // returns 'Credit available';
 *
 * const userTwo = {
 *   creditTakenBeginningOfMonth: 0,
 *   totalChargesInMonth: 4,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userTwo) // returns 'Credit limit exceeded';
 *
 * const userThree = {
 *   creditTakenBeginningOfMonth: 3,
 *   totalChargesInMonth: 1,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userThree) // returns 'Credit limit exceeded';
 * ```
 *
 * @param {object} userAccount an object containing a properties of
 * - `creditTakenBeginningOfMonth`, the starting credit available before the month
 * - `totalChargesInMonth`, the total credits taken from the account in a month
 * - `creditsAvailableInMonth`, the amount of extra credits available in the month
 * - `creditLimit`, the maximum amount of credits allowed taken at the end of the month
 * @returns {string} stating if credit is available in the month or has been exceeded
 */
function doesUserHaveCredit(userAccount) {
    const creditUsed = userAccount.creditTakenBeginningOfMonth
      + userAccount.totalChargesInMonth
      - userAccount.creditsAvailableInMonth;
  
    if (creditUsed > userAccount.creditLimit) {
      return 'Credit limit exceeded';
    } else {
      return 'Credit available';
    }
  }

/**
 * @difficulty hard, ~20 minutes
 *
 * Write a function that accepts a single 5 digit number `num`.
 *
 * First validate `num`, if it's not 5 digits, return the string `'Incorrect input'`.
 *
 * Next, determine if the number is a palindrome or not.
 *
 * A palindrome is a number that is the same read backward as well as forward. Return `true` if the number is a palindrome.
 *
 * For example
 *
 * ```js
 * isPalindromeNumber(12321) // true
 * isPalindromeNumber(12345) // false
 * isPalindromeNumber(01010) // true
 * isPalindromeNumber(11010) // false
 * ```
 *
 * HINTS:
 * - You can use division, modulo operators and `Math.trunc` to calculate the first, last, second and second to last digits.
 * - Once you have the 4 digits, you can compare to check if they are palindromes.
 *
 * @param {number} num a 5 digit number to check if it is a palindrome
 * @returns {Boolean} `true` if the number is a palindrome, `false` otherwise
 */
function isPalindromeNumber(num) {
    if (num > 99999 || num < 10000) {
      return 'Incorrect input';
    }
  
    const firstDigit = Math.trunc(num / 10000);
    const lastDigit = num % 10;
  
    if (firstDigit !== lastDigit) {
      return false;
    }
  
    // remove first digit
    num = num % 10000;
    // remove last digit
    num = Math.trunc(num / 10);
    // num is now 3 digits long
  
    const secondDigit = Math.trunc(num / 100);
    const secondToLastDigit = num % 10;
  
    if (secondDigit !== secondToLastDigit) {
      return false;
    }
  
    // all checks passed, we have a palindrome
    return true;
  }