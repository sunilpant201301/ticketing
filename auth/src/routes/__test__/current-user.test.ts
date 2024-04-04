import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
  //const cookie = await global.signin();
  
  const email = 'test@test.com';
  const password = 'password';

  const signUpResponse = await request(app)
    .post('/api/users/sign-up')
    .send({
      email,
      password,
    })
    .expect(201);

  const cookie = signUpResponse.get('Set-Cookie');

  const response = await request(app)
    .get('/api/users/current-user')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .get('/api/users/current-user')
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
