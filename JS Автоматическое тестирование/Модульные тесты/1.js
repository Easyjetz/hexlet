test('isValid', () => {
    const validator = makeValidator();
    expect(validator.isValid('value')).toBe(true);
  });
  
test('value', () => {
    const validator = makeValidator();
    validator.addCheck((v) => v < 10);
  
    expect(validator.isValid(11)).toBe(false);
    expect(validator.isValid(5)).toBe(true);
});

// and more more tests..