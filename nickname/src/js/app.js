import { Validator } from './validator.js';

const testUsernames = [
    'username',
    'user_name',
    'user-name',
    'user123',
    'user_123',
    'user-name123',
    'john-doe_123',
    'jane_doe-456',
    '123user',          // невалидно
    'user1234',         // невалидно
    'user_',            // невалидно
    'user-',            // невалидно
    '_username',        // невалидно
    '-username',        // невалидно
    'user@name',        // невалидно
    'пользователь',     // невалидно
];

console.log('Проверка имен пользователей:');
testUsernames.forEach(username => {
    const validator = new Validator();
    const isValid = validator.validateUsername(username);
    console.log(`${username}: ${isValid ? '✓ ВАЛИДНО' : '✗ НЕВАЛИДНО'}`);
});

// Пример в реальном сценарии
function registerUser(username) {
    const validator = new Validator();
    if (!validator.validateUsername(username)) {
        console.log(`\nОшибка регистрации: имя "${username}" не соответствует требованиям.`);
        console.log('Требования к имени пользователя:');
        console.log('1. Только латинские буквы, цифры, тире и подчеркивания');
        console.log('2. Не более 3 цифр подряд');
        console.log('3. Не может начинаться или заканчиваться цифрой, тире или подчеркиванием');
        return false;
    }

    console.log(`\nПользователь "${username}" успешно зарегистрирован!`);
    return true;
}

// Тестирование функции регистрации
console.log('\n--- Тестирование регистрации ---');
registerUser('john_doe123');
registerUser('123johndoe');
registerUser('user-');
registerUser('super-user_2023');
