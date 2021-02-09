/**
 * @controller
 * LeafController
 */

const {v4} = require('uuid');
module.exports = {
  create: async (req, res) => {
    try {
      if (req.body.label) {
        const leaf = await Leaf.create({
          id: v4(),
          label: req.body.label,
          parentLeaf: req.body.parentLeaf,
          user: req.connection.user.id
        }).fetch();
        if (leaf) {
          return res.json(leaf);
        } else {
          res.badRequest();
        }
      } else {
        return res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  update: async (req, res) => {
    try {
      const leaf = await Leaf.updateOne({
        id: req.params.id
      }).set({
        label: req.body.label,
        parentLeaf: req.body.parentLeaf,
      });
      if (leaf) {
        return res.json(leaf);
      } else {
        res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  delete: async (req, res) => {
    try {
      const isDeleted = await Leaf.updateOne({
        id: req.params.id
      }).set({deletedAt: new Date().toISOString()});
      if (isDeleted) {
        return res.ok();
      } else {
        return res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  getAll: async (req, res) => {
    try {
      const leafs = await Leaf.find({
        user: req.connection.user.id,
        deletedAt: null
      }).populate('parentLeaf').populate('notes');
      if (leafs) {
        return res.json(leafs);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  getOne: async (req, res) => {
    try {
      const leaf = await Leaf.findOne({id: req.params.id})
        .populate('parentLeaf').populate('notes');
      if (leaf) {
        return res.json(leaf);
      } else {
        return res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

