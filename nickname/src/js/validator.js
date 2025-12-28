export class Validator {
    validateUsername(username) {
        const regex = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;

        const hasMoreThanThreeConsecutiveDigits = /(\d{4,})/.test(username);

        const isValid = regex.test(username);

        return isValid && !hasMoreThanThreeConsecutiveDigits;
    };
};