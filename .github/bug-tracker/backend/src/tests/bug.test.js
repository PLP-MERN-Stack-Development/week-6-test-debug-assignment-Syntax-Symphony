import request from 'supertest';
import app from '../app'; // Adjust the path if necessary
import Bug from '../models/Bug';

describe('Bug API', () => {
  beforeAll(async () => {
    await Bug.deleteMany(); // Clear the database before tests
  });

  afterAll(async () => {
    await Bug.deleteMany(); // Clean up after tests
  });

  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({
        title: 'Test Bug',
        description: 'This is a test bug',
        status: 'open',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Bug');
  });

  it('should retrieve all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should update a bug', async () => {
    const bug = await Bug.create({
      title: 'Bug to Update',
      description: 'This bug will be updated',
      status: 'open',
    });

    const res = await request(app)
      .put(`/api/bugs/${bug._id}`)
      .send({ status: 'closed' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'closed');
  });

  it('should delete a bug', async () => {
    const bug = await Bug.create({
      title: 'Bug to Delete',
      description: 'This bug will be deleted',
      status: 'open',
    });

    const res = await request(app).delete(`/api/bugs/${bug._id}`);
    expect(res.statusCode).toEqual(204);
  });
});