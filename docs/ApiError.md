# ApiError

## Constructor arguments

- `message`: error message as a string
- `statusCode`: valid http status code
- `code`: error code(unused for now)

## Methods

- `sendError(res)`: sends an appropriate error response. This method is intended to be used by the error handling middleware only.

## Usage

- Use `ApiError` instead of `Error` in the codebase. This ensures consistency in error management and user experience.
- Do not change the structure of the `ApiError` class, instead extend it to create custom errors as shown in `InternalServerError`.
- If you want to log information when errors are created, use the logger in the Error's constructor.
