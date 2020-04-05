const { request: unauthorizedRequest, routes } = require('../lib');
const debug = require('debug')('rs:test:users');
const {
  createAuthorizedRequest,
  shouldAuthorizationBeTested
} = require('../utils');

const TEST_USER_DATA = {
  name: 'TEST_USER',
  login: 'test_user',
  password: 'T35t_P@55w0rd'
};

<<<<<<< HEAD
=======
const TEST_BOARD_DATA = {
  title: 'Autotest board',
  columns: [
    { title: 'Backlog', order: 1 },
    { title: 'Sprint', order: 2 }
  ]
};

>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
describe('Users suite', () => {
  let request = unauthorizedRequest;

  beforeAll(async () => {
    if (shouldAuthorizationBeTested) {
      request = await createAuthorizedRequest(unauthorizedRequest);
    }
  });

  describe('GET', () => {
    it('should get all users', async () => {
      const usersResponse = await request
        .get(routes.users.getAll)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/);
      debug(usersResponse.body);

      expect(usersResponse.status).to.equal(200);
      expect(Array.isArray(usersResponse.body)).to.be.true();
    });

    it('should get a user by id', async () => {
      // Setup:
<<<<<<< HEAD
=======
      //Create the user
      await request
          .post(routes.users.create)
          .set('Accept', 'application/json')
          .send(TEST_USER_DATA);

>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
      const usersResponse = await request
        .get(routes.users.getAll)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/);
      const userId = ((usersResponse.body || [])[0] || {}).id;

      // Test:
      const userResponse = await request
        .get(routes.users.getById(userId))
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/);

      expect(userResponse.body).to.be.instanceOf(Object);
      expect(userResponse.body.id).to.equal(userId);
<<<<<<< HEAD
=======

      // Clean up, delete the user we created
      await request.delete(routes.users.delete(userId));
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
    });
  });

  describe('POST', () => {
    it('should create user successfully', async () => {
<<<<<<< HEAD
=======
      let userId;

>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
      await request
        .post(routes.users.create)
        .set('Accept', 'application/json')
        .send(TEST_USER_DATA)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body.id).to.be.a('string');
<<<<<<< HEAD
=======
          userId = res.body.id;
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
          expect(res.body).to.not.have.property('password');
          jestExpect(res.body).toMatchObject({
            login: TEST_USER_DATA.login,
            name: TEST_USER_DATA.name
          });
        });
<<<<<<< HEAD
=======

      // Teardown
      await request.delete(routes.users.delete(userId));
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
    });
  });

  describe('PUT', () => {
    it('should update user successfully', async () => {
      // Setup
      let userId;

      await request
        .post(routes.users.create)
        .set('Accept', 'application/json')
        .send(TEST_USER_DATA)
        .then(res => {
          userId = res.body.id;
        });

      const updatedUser = {
        ...TEST_USER_DATA,
        name: 'Autotest updated TEST_USER',
        id: userId
      };

      // Test
      await request
        .put(routes.users.update(userId))
        .set('Accept', 'application/json')
        .send(updatedUser)
        .expect(200)
        .expect('Content-Type', /json/);

      // eslint-disable-next-line no-unused-vars
      const { password, ...expectedUser } = updatedUser;

      await request
        .get(routes.users.getById(userId))
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => jestExpect(res.body).toMatchObject(expectedUser));

      // Teardown
      await request.delete(routes.users.delete(userId));
    });
  });

  describe('DELETE', () => {
    it('should delete user successfully', async () => {
      // Setup:
      const userResponse = await request
        .post(routes.users.create)
        .send(TEST_USER_DATA);
      const userId = userResponse.body.id;

      // Test:
      const deleteResponse = await request.delete(routes.users.delete(userId));
      expect(deleteResponse.status).oneOf([200, 204]);
    });

    it("should unassign user's tasks upon deletion", async () => {
      // Setup:
      const userResponse = await request
        .post(routes.users.create)
        .send(TEST_USER_DATA)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/);
      const userId = userResponse.body.id;

      const boardResponse = await request
        .post(routes.boards.create)
<<<<<<< HEAD
=======
        .send(TEST_BOARD_DATA)
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/);
      const boardId = boardResponse.body.id;

      const userTaskResponses = await Promise.all(
        Array.from(Array(2)).map((_, idx) =>
          request
            .post(routes.tasks.create(boardId))
            .send({
              title: `Task #${idx + 1}`,
              order: idx + 1,
              description: 'Lorem ipsum',
              userId,
              boardId
            })
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
        )
      );
      const userTaskIds = userTaskResponses.map(res => res.body.id);

      // Test:
      const deleteResponse = await request.delete(routes.users.delete(userId));
      expect(deleteResponse.status).oneOf([200, 204]);

      for (const taskId of userTaskIds) {
        const newTaskResponse = await request
          .get(routes.tasks.getById(boardId, taskId))
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/);

        expect(newTaskResponse.body).to.be.instanceOf(Object);
        expect(newTaskResponse.body.userId).to.equal(null);
      }

      await Promise.all(
        userTaskIds.map(async taskId =>
          request
            .delete(routes.tasks.getById(boardId, taskId))
            .then(response => expect(response.status).oneOf([200, 204]))
        )
      );

      await request
        .delete(routes.boards.delete(boardId))
        .then(res => expect(res.status).oneOf([200, 204]));
    });
  });
});
