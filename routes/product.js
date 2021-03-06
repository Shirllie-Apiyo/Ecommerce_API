const Product = require("../models/Product");
const Slide = require("../models/Slide");
const Message =require ("../models/Message")
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
// router.get("/find/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.route('/find/:id').get((req,res) =>
{
    Product.findById(req.params.id, (error,data)=>
    {
        if (error){
            if (data==null){
                res.status(404).json({'message':"Employee not found"})
            }
            else{
                res.status(400).json({'message':"There was an error"})
            }
        }
        else{
            if(data==null){
                res.status(404).json({'message':"Employee Not Found"})
            }
            else{
                res.status(200).json(data)
            }
            
        }

    })

});




//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  // const qBrand = req.query.brand;
  // const  qSubCategory = req.query.sub_category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/slider", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Slide(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post message
router.post("/review", async (req, res) => {
  const newProduct = new Message(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/getslider", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  // const qBrand = req.query.brand;
  // const  qSubCategory = req.query.sub_category;
  try {
    let products;

    if (qNew) {
      products = await Slide.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Slide.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Slide.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route('/single/:id').get((req,res) =>
{
    Product.findById(req.params.id, (error,data)=>
    {
        if (error){
            if (data==null){
                res.status(404).json({'message':"product not found"})
            }
            else{
                res.status(400).json({'message':"There was an error"})
            }
        }
        else{
            if(data==null){
                res.status(404).json({'message':"product Not Found"})
            }
            else{
                res.status(200).json(data)
            }
            
        }

    })

});
module.exports = router;
