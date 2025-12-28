import { getHealthStatus } from '../js/app.js';

// данные функционала
const dataList = [
    ['Маг', 90, 'healthy'],
    ['Воин', 51, 'healthy'],
    ['Лучник', 100, 'healthy'],
    ['Рыцарь', 50, 'wounded'],
    ['Разбойник', 30, 'wounded'],
    ['Клирик', 15, 'wounded'],
    ['Некромант', 14, 'critical'],
    ['Паладин', 0, 'critical']
];

// данные ошибок
const errorCasesData = [
    [null, 'Character must be an object'],
    [undefined, 'Character must be an object'],
    [123, 'Character must be an object'],
    ['string', 'Character must be an object'],
    [{ name: 'Тест' }, 'Health must be a number'],
    [{ name: 'Тест', health: null }, 'Health must be a number'],
    [{ name: 'Тест', health: undefined }, 'Health must be a number'],
    [{ name: 'Тест', health: '50' }, 'Health must be a number'],
    [{ name: 'Тест', health: 'abc' }, 'Health must be a number'],
    [{ name: 'Тест', health: [] }, 'Health must be a number'],
    [{ name: 'Тест', health: {} }, 'Health must be a number'],
    [{ name: 'Тест', health: -1 }, 'Health must be between 0 and 100'],
    [{ name: 'Тест', health: -0.1 }, 'Health must be between 0 and 100'],
    [{ name: 'Тест', health: 100.1 }, 'Health must be between 0 and 100'],
    [{ name: 'Тест', health: 101 }, 'Health must be between 0 and 100'],
    [{ name: 'Тест', health: 1000 }, 'Health must be between 0 and 100']
];

test.each(dataList)('testing health function with %s name and %i health', (name, health, expected) => {
    const character = { name, health };
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
});

test.each(errorCasesData)('should throw error for %p', (input, errorMessage) => {
    expect(() => getHealthStatus(input)).toThrow(errorMessage);
});