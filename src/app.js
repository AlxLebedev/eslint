const characters = [
    {name: 'm', health: 10},
    {name: 'm', health: 100},
    {name: 'm', health: 0},
    {name: 'm', health: 0},
];

const alive = characters.filter(item => item.health > 0);