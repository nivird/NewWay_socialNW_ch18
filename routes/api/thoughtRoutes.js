const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(thoughtController.getThoughts).post(thoughtController.createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(thoughtController.getSingleThought)
  .put(thoughtController.updateThought)
  .delete(thoughtController.deleteThought);

module.exports = router;
