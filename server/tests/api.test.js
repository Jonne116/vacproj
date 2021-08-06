const request = require('supertest');
const app = require('../app');
const { mongoClose } = require('../mongoConn');

jest.setTimeout(30000);

describe('GET requests with valid date', () =>{

  it('/dash/2021-04-12T11:10:06.473587Z returns status: 200', async () => {
    const res = await request(app).get('/dash/2021-04-12T11:10:06.473587Z');
    expect(res.statusCode).toEqual(200);
  });

  it('/dash/bottles/2021-04-12T11:10:06.473587Z returns status: 200', async () => {
    const res = await request(app).get('/dash/bottles/2021-04-12T11:10:06.473587Z');
    expect(res.statusCode).toEqual(200);
  });

  it('/dash/exp/2021-04-12T11:10:06.473587Z returns status: 200', async () => {
    const res = await request(app).get('/dash/exp/2021-04-12T11:10:06.473587Z');
    expect(res.statusCode).toEqual(200);
  });

  it('/dash/goingexp/2021-04-12T11:10:06.473587Z returns status: 200', async () => {
    const res = await request(app).get('/dash/goingexp/2021-04-12T11:10:06.473587Z');
    expect(res.statusCode).toEqual(200);
  });

  it('/dash/expbefore/2021-04-12T11:10:06.473587Z returns status: 200', async () => {
    const res = await request(app).get('/dash/expbefore/2021-04-12T11:10:06.473587Z');
    expect(res.statusCode).toEqual(200);
  });

});

describe('GET requests with invalid parameter', () =>{

  it('/dash/huuhaa  returns status: 500', async () => {
    const res = await request(app).get('/dash/huuhaa');
    expect(res.statusCode).toEqual(500);
  });

  it('/dash/bottles/huuhaa  returns status: 500', async () => {
    const res = await request(app).get('/dash/bottles/huuhaa');
    expect(res.statusCode).toEqual(500);
  });

  it('/dash/exp/huuhaa  returns status: 500', async () => {
    const res = await request(app).get('/dash/exp/huuhaa');
    expect(res.statusCode).toEqual(500);
  });

  it('/dash/goingexp/huuhaa  returns status: 500', async () => {
    const res = await request(app).get('/dash/goingexp/huuhaa');
    expect(res.statusCode).toEqual(500);
  });

  it('/dash/expbefore/huuhaa  returns status: 500', async () => {
    const res = await request(app).get('/dash/expbefore/huuhaa');
    expect(res.statusCode).toEqual(500);
  });

});

afterAll(() => {
  mongoClose();
});