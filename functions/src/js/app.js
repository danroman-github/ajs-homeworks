/**
 * Определяет состояние здоровья персонажа
 * @param {Object} character - Объект персонажа
 * @param {string} character.name - Имя персонажа
 * @param {number} character.health - Уровень здоровья (0-100)
 * @returns {string} Состояние здоровья: 'healthy', 'wounded', 'critical'
 */

export function getHealthStatus(character) {
    if (!character || typeof character !== 'object') {
        throw new Error('Character must be an object');
    }

    const { health } = character;
  
    if (typeof health !== 'number') {
        throw new Error('Health must be a number');
    }
  
    if (health < 0 || health > 100) {
        throw new Error('Health must be between 0 and 100');
    }

    if (health > 50) {
        return 'healthy';
    } else if (health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}
