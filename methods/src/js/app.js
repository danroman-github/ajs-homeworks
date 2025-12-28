import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

try {
    const bowman = new Bowman('Лучник');
    console.log('Bowman:', bowman);
  
    const swordsman = new Swordsman('Мечник');
    console.log('Swordsman:', swordsman);
  
    const magician = new Magician('Волшебник');
    console.log('Magician:', magician);
  
    const daemon = new Daemon('Демон');
    console.log('Daemon:', daemon);
  
    const undead = new Undead('Нежить');
    console.log('Undead:', undead);
  
    const zombie = new Zombie('Зомби');
    console.log('Zombie:', zombie);
  
} catch (error) {
    console.error('Ошибка создания персонажа:', error.message);
}
