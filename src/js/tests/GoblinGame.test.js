import GoblinGame from '../../components/goblin/GoblinGame';

test('GoblinGame', () => {
  const result = () => new GoblinGame(123);

  expect(result).toThrow(Error);
});
