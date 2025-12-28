import Undead from '../js/undead';

describe('Undead class', () => {
    test('creates an Undead with the correct stats', () => {
        const undead = new Undead('Нежить');
    
        expect(undead.name).toBe('Нежить');
        expect(undead.type).toBe('Undead');
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });
});