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
      await Note.destroy({leaf: req.params.id});
      await Leaf.destroy({parentLeaf: req.params.id});
      const isDeleted = await Leaf.destroyOne({
        id: req.params.id
      });
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
  getAllParents: async (req, res) => {
    try {
      const tree = await Leaf.find({
        user: req.connection.user.id,
        parentLeaf: null
      });
      if (tree) {
        return res.json(tree);
      } else {
        return res.badRequest();
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  getOne: async (req, res) => {
    try {
      const leaf = await Leaf.findOne({id: req.params.id}).populate('notes').populate('children');
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

