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