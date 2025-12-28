import sortHeroesByHealth from '../js/app';

test('should sort heroes by health in descending order', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    // Используем toEqual для глубокого сравнения объектов
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual(expected);

    // Проверяем, что исходный массив не изменился
    expect(heroes).toEqual([
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ]);
});

test('should handle already sorted array', () => {
    const heroes = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
  
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual(heroes);
});

test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
});

test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(sortHeroesByHealth(heroes)).toEqual([{ name: 'маг', health: 100 }]);
});

test('should handle heroes with equal health', () => {
    const heroes = [
        { name: 'маг', health: 50 },
        { name: 'лучник', health: 50 },
        { name: 'мечник', health: 100 },
    ];
  
    const result = sortHeroesByHealth(heroes);
    expect(result[0].health).toBe(100);
    expect(result[1].health).toBe(50);
    expect(result[2].health).toBe(50);
});

// Тест для демонстрации разницы между toBe и toEqual
test('demonstrate difference between toBe and toEqual', () => {
    const heroes = [
        { name: 'маг', health: 10 },
        { name: 'мечник', health: 100 },
    ];
  
    const sortedHeroes = sortHeroesByHealth(heroes);
    const expected = [
        { name: 'мечник', health: 100 },
        { name: 'маг', health: 10 },
    ];

    expect(sortedHeroes).toEqual(expected);
    expect(sortedHeroes).not.toBe(expected);
    expect(sortedHeroes).toBe(sortedHeroes);
});
