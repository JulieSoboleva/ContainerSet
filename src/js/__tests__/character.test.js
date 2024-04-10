import Character from '../character';

test('check creating object', () => {
  const person = new Character('Петя', 'Undead');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Петя',
    type: 'Undead'
  }

  expect(person).toEqual(correct);
});

test('check name length', () => {
  expect(() => new Character("Вольфшлегельштайнхаузенбергедорф", "Bowman")).toThrow();
});

test('check person type', () => {
  expect(() => new Character("Merlin", "Cook", 10, 50)).toThrow();
});