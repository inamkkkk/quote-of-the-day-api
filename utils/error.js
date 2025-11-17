class BaseError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends BaseError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

class NotFoundError extends BaseError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

class UnauthorizedError extends BaseError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}

class ForbiddenError extends BaseError {
    constructor(message = 'Forbidden') {
        super(message, 403);
    }
}


module.exports = { BaseError, BadRequestError, NotFoundError, UnauthorizedError, ForbiddenError };