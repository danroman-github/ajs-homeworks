import Character from '../js/character';
import Bowman from '../js/bowman';
import Swordsman from '../js/swordsman';
import Magician from '../js/magician';
import Daemon from '../js/daemon';
import Undead from '../js/undead';
import Zombie from '../js/zombie';

describe('Inheritance tests', () => {
    test('all classes should be instances of Character', () => {
        const bowman = new Bowman('Test');
        const swordsman = new Swordsman('Test');
        const magician = new Magician('Test');
        const daemon = new Daemon('Test');
        const undead = new Undead('Test');
        const zombie = new Zombie('Test');
    
        expect(bowman instanceof Character).toBe(true);
        expect(swordsman instanceof Character).toBe(true);
        expect(magician instanceof Character).toBe(true);
        expect(daemon instanceof Character).toBe(true);
        expect(undead instanceof Character).toBe(true);
        expect(zombie instanceof Character).toBe(true);
    });
});