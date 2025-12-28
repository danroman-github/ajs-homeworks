import Character from '../js/character';
import Bowman from '../js/bowman';

describe('Character class', () => {
    test('create character with valid name and type', () => {
        const character = new Character('ValidName', 'Bowman');
        
        expect(character.name).toBe('ValidName');
        expect(character.type).toBe('Bowman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
    });

    test('error message due to name (too short)', () => {
        expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('error message due to name (too long)', () => {
        expect(() => new Character('VeryLongName123', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('error message due to name (not a string)', () => {
        expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('should throw error for invalid type', () => {
        expect(() => new Character('Hero', 'InvalidType')).toThrow('Некорректный тип персонажа');
    });

});

describe('Character class methods', () => {
    describe('levelUp method', () => {
        test('increase level by 1', () => {
            const character = new Bowman('Лучник');
            character.levelUp();
            expect(character.level).toBe(2);
        });

        test('increase attack by 20%', () => {
            const character = new Bowman('Лучник');
            const initialAttack = character.attack;
            character.levelUp();
            expect(character.attack).toBe(Math.round(initialAttack * 1.2));
        });

        test('increase defence by 20%', () => {
            const character = new Bowman('Лучник');
            const initialDefence = character.defence;
            character.levelUp();
            expect(character.defence).toBe(Math.round(initialDefence * 1.2));
        });

        test('set health to 100', () => {
            const character = new Bowman('Лучник');
            character.health = 50;
            character.levelUp();
            expect(character.health).toBe(100);
        });

        test('throw error when health is 0', () => {
            const character = new Bowman('Лучник');
            character.health = 0;
            expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
        });
    });

    describe('damage method', () => {
        test('proper recovery of health', () => {
            const character = new Bowman('Лучник');
            character.damage(40);
            expect(character.health).toBe(70);
        });

        test('not reduce health below 0', () => {
            const character = new Bowman('Лучник');
            character.damage(1000);
            expect(character.health).toBe(0);
        });

        test('should handle zero damage', () => {
            const character = new Bowman('Лучник');
            character.damage(0);
            expect(character.health).toBe(100);
        });

        test('negative damage (must be 0)', () => {
            const character = new Bowman('Лучник');
            character.damage(-10);
            expect(character.health).toBe(100);
        });

        test('If he is dead (must be 0)', () => {
            const character = new Bowman('Лучник');
            character.health = 0;
            character.damage(50);
            expect(character.health).toBe(0);
        });
    });
});
