const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAuthAndAdmin,
} = require("../middleware/verifyToken");
const User = require("../models/User");

const router = require("express").Router();

// Modification d'un utilisateur
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Suppression d'un utilisateur
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Utilisateur supprimé");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Trouvé un Utilisateur
router.get("/admin/:id", verifyTokenAuthAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Trouvé tout les utilisateurs
router.get("/", verifyTokenAuthAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = (query === "true")
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Stats utilisateurs
router.get("/stats", verifyTokenAuthAndAdmin, async(req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1))

    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ])
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
