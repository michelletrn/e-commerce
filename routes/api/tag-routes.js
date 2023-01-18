const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, ProductTag }],
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
