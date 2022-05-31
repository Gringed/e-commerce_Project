const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAuthAndAdmin,
} = require("../middleware/verifyToken");

const router = require("express").Router();

// Créer le panier
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Modification du panier
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Suppression du panier
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Panier supprimé");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Trouvé le panier d'un utilisateur
router.get("/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.find({userId : req.params.userId});
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Trouvé tout les paniers
router.get("/", verifyTokenAuthAndAdmin, async (req, res) => {
  try {
    const carts = Cart.find()
    res.status(200).json(carts)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;