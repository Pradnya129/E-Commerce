import {v2 as cloudinary} from "cloudinary"
import connectCloudinary from '../config/cloundinary.js';
import ProductModel from '../models/productModels.js'

connectCloudinary();

// function for add product

const addProduct = async( req,res)=>{

    try{
   
        const {name,description,price,category,subCategory,sizes,bestSeller} = req.body


        const image1 =  req.files.image1 && req.files.image1[0];
        const image2 =  req.files.image2 && req.files.image2[0];
        const image3 =  req.files.image3 && req.files.image3[0];
        const image4 =  req.files.image4 && req.files.image4[0];


        const images = [image1,image2,image3,image4].filter((item)=>{
            return item !== undefined
        })

        let imagesURL = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )


      const productData= {
        name,
        description,
        category,
        price:Number(price),
        subCategory,
        bestSeller:bestSeller === 'true' ? true : false,
        sizes:JSON.parse(sizes),
        image:imagesURL,
        date:Date.now()
      }

      const product = new ProductModel(productData);
      await product.save();
     
      res.json({success:true,message:"Product Added"})
    


    }catch(error){

     console.log(error)
     res.json({success :false,message : error.message})

    }
    
}

// function for list product

const listProduct = async( req,res)=>{
try{
 const products = await ProductModel.find({});
 res.json({success:true,products})

}catch(error){

    console.log(error)
    res.json({success :false,message : error.message})

   }
    
}

// function remove product

const removeProduct = async (req, res) => {
  try {
    const { id } = req.query; // Use req.query.id to get the id from the query parameter

    if (!id) {
      return res.status(400).json({ success: false, message: "Product ID is required" });
    }

    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Error while removing product:", error.message);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};




// function for single product

const singleProduct = async( req,res)=>{
try{
    const {productId}=req.body
    const product = await ProductModel.findById(productId);
    res.json({success :true, product})

}catch(error){

    console.log(error)
    res.json({success :false,message : error.message})

   }
    
}

export {listProduct,addProduct,removeProduct,singleProduct}