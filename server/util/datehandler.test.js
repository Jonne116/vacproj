const {daysAdd, daysRemove} = require('./datehandler');

describe('Date functions', () => {

  test('Should add one day', () => {
    const dTime = new Date('2021-04-12T11:10:06.000Z');
    const result = new Date('2021-04-13T11:10:06.000Z');
    expect(daysAdd(dTime, 1)).toStrictEqual(result);
  });

  test('Should remove one day', () => {
    const dTime = new Date('2021-04-12T11:10:06.000Z');
    const result = new Date('2021-04-11T11:10:06.000Z');
    expect(daysRemove(dTime, 1)).toStrictEqual(result);
  });
  
});