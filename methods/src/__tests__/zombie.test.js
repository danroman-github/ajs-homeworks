import Zombie from '../js/zombie';

describe('Zombie class', () => {
    test('creates an Zombie with the correct stats', () => {
        const zombie = new Zombie('Зомби');
    
        expect(zombie.name).toBe('Зомби');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });
});