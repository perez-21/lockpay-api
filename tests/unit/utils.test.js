const { getErrorMessage } = require("../../shared/utils");

describe('Utility functions', () => {
  describe('getErrorMessage(error: unknown)', () => {
    let error = null;
    test('returns a non-empty string when error is null-ish', () => {
      expect(getErrorMessage(error)).toMatch(/^.*\S.*$/);
    });

    test('returns error message when error is instance of Error', () => {
      const message = "test error";
      error = Error(message);

      expect(getErrorMessage(error)).toBe(message);
    });
    test('returns error message when error is an object with a message element', () => {
      const message = "test error";
      error = { message };

      expect(getErrorMessage(error)).toBe(message);
    });
    test('returns error message when error is instance of Error', () => {
      const message = "test error";
      error = Error(message);

      expect(getErrorMessage(error)).toBe(message);
    });
    test('returns error when error is a string', () => {
      const message = "test error";
      error = message;

      expect(getErrorMessage(error)).toBe(message);
    });
  })
})
