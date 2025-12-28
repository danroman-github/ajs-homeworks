import { Validator } from '../js/validator.js';

describe('Validator class', () => {
    const validator = new Validator();

    describe('validateUsername method', () => {
        test('Проверка допустимого имени пользователя', () => {
            expect(validator.validateUsername('JohnDoe')).toBe(true);
            expect(validator.validateUsername('john_doe')).toBe(true);
            expect(validator.validateUsername('john-doe')).toBe(true);
            expect(validator.validateUsername('john123')).toBe(false);
        });

        test('Проверка недопустимого имени пользователя', () => {
            expect(validator.validateUsername('123John')).toBe(false);
            expect(validator.validateUsername('John1234')).toBe(false);
            expect(validator.validateUsername('John_')).toBe(false);
            expect(validator.validateUsername('John-')).toBe(false);
            expect(validator.validateUsername('John12345')).toBe(false);
            expect(validator.validateUsername('John!')).toBe(false);
        });

        test('Проверка пустого имени пользователя', () => {
            expect(validator.validateUsername('')).toBe(false);
        });

        test('Проверка имени пользователя с одним символом', () => {
            expect(validator.validateUsername('J')).toBe(false);
        });

        test('Проверка имени пользователя с двумя символами', () => {
            expect(validator.validateUsername('Jo')).toBe(true);
        });
    });
});