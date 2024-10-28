// Importing the Express framework
const express = require('express'); 

// Creating a new router instance
const router = express.Router(); 

// Importing the data controller
const dataController = require('../controllers/dataController'); 

// Route to get all data
router.get('/data', dataController.getAllData);

// Route to get a specific data entry by ID
router.get('/data/:id', dataController.getDataById);

// Route to create new data
router.post('/data', dataController.createData);

// Route to update existing data by ID
router.put('/data/:id', dataController.updateData);

// Route to delete data by ID
router.delete('/data/:id', dataController.deleteData);

// Exporting the router to be used in other parts of the application
module.exports = router; 
