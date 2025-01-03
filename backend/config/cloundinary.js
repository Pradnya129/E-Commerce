import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';


const connectCloudinary = async () => {
 
    
    dotenv.config();
    
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUDINAR_API_KEY,
      api_secret: process.env.CLOUNDINARY_SECRET_KEY,
    });
    
    cloudinary.api.ping()
      .then(response => {
        console.log('Cloudinary Response:', response);
      })
      .catch(error => {
        console.error('Cloudinary Error:', error);
      });
    
};

export default connectCloudinary;


