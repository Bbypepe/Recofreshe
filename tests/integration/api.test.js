// tests/integration/api.test.js
import apiClient from '../../src/services/api';

describe('API Client Tests', () => {
  test('fetches data successfully', async () => {
    try {
      const response = await apiClient.get('/data');
      // Check that the response status is 200
      expect(response.status).toBe(200);
      // Optionally check that the data is in the expected format
      expect(response.data).toBeDefined(); // Ensures data is not undefined
      // Add more assertions based on expected structure of the data
      // Example: expect(response.data).toHaveProperty('key');
    } catch (error) {
      // If the test fails, log the error to understand what went wrong
      console.error('API fetch failed:', error);
      // Optionally fail the test
      fail('API fetch failed: ' + error.message);
    }
  });
});
