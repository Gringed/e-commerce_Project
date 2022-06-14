const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAuthAndAdmin,
} = require("../middleware/verifyToken");

const router = require("express").Router();

// Nouvelle commande
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Modification de la commande
router.put("/:id", verifyTokenAuthAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Suppression de la commande
router.delete("/:id", verifyTokenAuthAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Commande supprimé");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Trouvé la commande d'un utilisateur
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Trouvé toutes les commandes
router.get("/", verifyTokenAuthAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json("Bad");
  }
});

// Stats commandes
router.get("/income", verifyTokenAuthAndAdmin, async (req, res) => {
  const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth }, ...(productId && {
          products: {$elemMatch: {productId}}
        }) } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
