const { Thoughts, Users } = require('../models');

module.exports = {
  // Get all thought
  async getThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find().populate('users');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.thoughtId })
        .populate('users');

      if (!thought) {
        return res.status(404).json({ message: 'No thoughts with this ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      await Users.deleteMany({ _id: { $in: thought.users } });
      res.json({ message: 'thoughts are  deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
