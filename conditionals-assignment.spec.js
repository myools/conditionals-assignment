describe(`isOdd(n: Number): Boolean`, () => {
  it(`returns false by default`, () => {
    const actual = isOdd();
    expect(actual).to.equal(false);
  })

  it(`returns true when n isn't divisible by 2`, () => {
    expect(isOdd(3)).to.equal(true);
    expect(isOdd(101)).to.equal(true);
    expect(isOdd(17)).to.equal(true);
    expect(isOdd(99)).to.equal(true);
  })

  it(`returns false when n is divisible by 2`, () => {
    expect(isOdd(2)).to.equal(false);
    expect(isOdd(200)).to.equal(false);
    expect(isOdd(16)).to.equal(false);
    expect(isOdd(84)).to.equal(false);
  })
})

describe(`generatePinNumber(): Number`, () => {
  it(`returns a number with 5 digits`, () => {
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
    expect(generatePinNumber()).to.be.above(10000).and.below(99999)
  })

  it(`returns a number that is even`, () => {
    const actual = generatePinNumber();
    expect(actual).to.satisfy(
      num => num % 2 === 0,
      `${actual} is not even`
    )
  })
})

describe(`greetLoggedInUser(user: Object): String`, () => {
  it(`returns 'Welcome, please log in' for empty object`, () => {
    const actual = greetLoggedInUser({})
    expect(actual).to.equal('Welcome, please log in')
  })

  it(`returns 'Welcome, please log in' logged out user`, () => {
    const actual = greetLoggedInUser({ loggedIn: false, givenName: 'Jon' })
    expect(actual).to.equal('Welcome, please log in')
  })

  it(`returns 'Hello, given name!' for logged in user`, () => {
    const actual = greetLoggedInUser({ loggedIn: true, givenName: 'Jon' })
    expect(actual).to.equal('Hello, Jon!')
  })
})

describe(`calculateElectricBill(kwh: Number)`, () => {
  it(`returns 0 when 0 kwh`, () => {
    const actual = calculateElectricBill(0);
    expect(actual).to.equal(0);
  })

  it(`returns 104 when 400 kwh`, () => {
    const actual = calculateElectricBill(400);
    expect(actual).to.equal(104);
  })

  it(`returns 136 when 500 kwh`, () => {
    const actual = calculateElectricBill(500);
    expect(actual).to.equal(136);
  })

  it(`returns 168 when 600 kwh`, () => {
    const actual = calculateElectricBill(600);
    expect(actual).to.equal(168);
  })

  it(`returns 200 when 700 kwh`, () => {
    const actual = calculateElectricBill(700);
    expect(actual).to.equal(200);
  })

  it(`returns 444 when 1400 kwh`, () => {
    const actual = calculateElectricBill(1400);
    expect(actual).to.equal(444);
  })
})

describe(`doesUserHaveCredit(userAccount: Object): String`, () => {
  it(`returns 'Credit available' by default`, () => {
    const actual = doesUserHaveCredit({});
    expect(actual).to.equal('Credit available');
  })

  it(`returns 'Credit limit exceeded' if user's credit starts over limit`, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 2,
      totalChargesInMonth: 0,
      creditsAvailableInMonth: 0,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit limit exceeded');
  })

  it(`returns 'Credit limit exceeded' if user's credit goes over limit`, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 0,
      totalChargesInMonth: 2,
      creditsAvailableInMonth: 0,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit limit exceeded');
  })

  it(`returns 'Credit available' if user's credit has more available`, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 0,
      totalChargesInMonth: 2,
      creditsAvailableInMonth: 1,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit available');
  })

  it(`returns 'Credit limit exceeded' calculation is `, () => {
    const actual = doesUserHaveCredit({
      creditTakenBeginningOfMonth: 1,
      totalChargesInMonth: 2,
      creditsAvailableInMonth: 1,
      creditLimit: 1,
    });
    expect(actual).to.equal('Credit limit exceeded');
  })
})

describe(`isPalindromeNumber(num: Number): Boolean`, () => {
  it(`returns 'Incorrect input' if number has 4 digits`, () => {
    const actual = isPalindromeNumber(9999);
    expect(actual).to.equal('Incorrect input');
  })

  it(`returns 'Incorrect input' if number has 6 digits`, () => {
    const actual = isPalindromeNumber(100000);
    expect(actual).to.equal('Incorrect input');
  })

  it(`returns false if all numbers are different`, () => {
    const actual = isPalindromeNumber(12345);
    expect(actual).to.equal(false);
  })

  it(`returns false if first and last digits don't match`, () => {
    const actual = isPalindromeNumber(90002);
    expect(actual).to.equal(false);
  })

  it(`returns false if second and second to last digits don't match`, () => {
    const actual = isPalindromeNumber(19021);
    expect(actual).to.equal(false);
  })

  it(`returns true if all numbers are the same`, () => {
    const actual = isPalindromeNumber(11111);
    expect(actual).to.equal(true);
  })

  it(`returns true for palindrome`, () => {
    const actual = isPalindromeNumber(12321);
    expect(actual).to.equal(true);
  })
})
