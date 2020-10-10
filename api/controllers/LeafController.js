/**
 * @controller
 * LeafController
 */

module.exports = {
  create: async (req, res) => {
    try {
      const user = await sails.helpers.getUserByAuthorization.with({token: req.headers.authorization});
      if (user && req.body.label) {
        const leaf = await Leaf.create({
          label: req.body.label,
          parentLeaf: req.body.parentLeaf,
          user: user.id
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
        id: req.params.leaf
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
      const isDeleted = await Leaf.destroyOne({
        id: req.params.leaf
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
  getAll: async (req, res) => {
    try {
      const leafs = await Leaf.find().populateAll();
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
      const leaf = await Leaf.findOne({id: req.params.leaf}).populateAll();
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

