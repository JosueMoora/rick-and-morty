const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const { getApiData } = require("../controllers/saveApiData");
const { Character } = require("../database/index");

const router = Router();

// ya tienen "/rickandmorty/" antes
router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.get("/all", async (req, res) => {
  try {
    const allCharacters = await getApiData();

    await Character.bulkCreate(allCharacters);
    return res.json(allCharacters);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/alldb", async (req, res) => {
  try {
    const info = await Character.findAll();
    return res.json(info);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
