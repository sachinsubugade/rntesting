import Sum from '../src/Sum';

test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3);
})

// Matchers 
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toStrictEqual({ one: 1, two: 2 });
})

//test for the opposite of a matcher using 'not'
test('adding positive number is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
})

//Truthiness by using helpers
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    // expect(n).toBeUndefined();
    // expect(n).toBeTruthy();
    expect(n).toBeFalsy();
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

//Numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(5);
})

//for floating point equality, use 'toBeCloseTo' instead 'toEqual'
test('add floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3);
})

//Strings
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
})

//Array and iterables
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towel',
    'milk'
];

test('the shoopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
})