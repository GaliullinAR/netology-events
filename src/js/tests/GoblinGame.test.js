import GoblinGame from "../../components/goblin/GoblinGame";


test('GoblinGame', () => {
  const result = () => {
    return new GoblinGame(123)
  }

  expect(result).toThrow(Error);
})