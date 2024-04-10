import Character from "../character";
import Team from "../team-members";

test('return array of members', () => {
  const character = new Character('Ivan', 'Bowman');
  const team = new Team();
  team.add(character);

  const result = [character];

  expect(team.toArray()).toEqual(result);
});

test('add same character', () => {
  const team = new Team();
  const character = new Character('Piter', 'Zombie');
  team.add(character);

  expect(() => team.add(character)).toThrow();
});

test('return array of unique members', () => {
  const member1 = new Character('John', 'Swordsman');
  const member2 = new Character('Mike', 'Daemon');
  const team = new Team();
  team.addAll(member1, member2, member1);

  const result = [member1, member2];

  expect(team.toArray()).toEqual(result);
});
