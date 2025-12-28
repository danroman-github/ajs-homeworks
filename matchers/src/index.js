import sortHeroesByHealth from './js/app';

const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];

const sortedHeroes = sortHeroesByHealth(heroes);
console.log('Отсортированные герои:', sortedHeroes);

export { sortHeroesByHealth };
