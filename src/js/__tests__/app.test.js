import find from '../app';

// test.each([
//   { num: '11', result: 11 },
//   { num: 'pp', result: NaN },
//   { num: '1p', result: 1 },
// ])(('should num'), (a) => {
//   const result = pars(a.num);
//   expect(result).toBe(a.result);
// });

// const results = [
//   {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
//   {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
//   {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
// ].filter(find('name', 'урон'));

test('should equal', () => {
  const result = [
    {name: 'маг', type: 'character', description: 'Персонаж'},
    {name: 'заклинание', type: 'attack', description: 'Атака '},
    {name: 'урон', type: 'help', description: 'Страница'},
  ].filter(find('name', 'урон'));
  expect(result).toEqual([{name: 'урон', type: 'help', description: 'Страница'},]);
});