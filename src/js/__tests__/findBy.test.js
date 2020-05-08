import find from '../findBy';

test('should equal', () => {
  const result = [
    {name: 'маг', type: 'character', description: 'Персонаж'},
    {name: 'заклинание', type: 'attack', description: 'Атака '},
    {name: 'урон', type: 'help', description: 'Страница'},
  ].filter(find('name', 'урон'));
  expect(result).toEqual([{name: 'урон', type: 'help', description: 'Страница'},]);
});