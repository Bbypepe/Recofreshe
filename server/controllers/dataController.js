// Import necessary services (ensure you have the correct path)
const SomeDataService = require('../services/someDataService');

// Controller function to get data
exports.getData = async (req, res) => {
  try {
    // Fetch data using the service
    const data = await SomeDataService.getData();

    // Send a success response with the data
    res.status(200).json(data);
  } catch (error) {
    // Log the error for debugging purposes (optional)
    console.error('Error fetching data:', error);

    // Send an error response with a status code and message
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
