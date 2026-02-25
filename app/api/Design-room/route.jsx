import { AiGeneratedImage } from "@/config/schema";
import axios from "axios";
import { NextResponse } from "next/server";
import Replicate from "replicate";
const cloudinary = require('cloudinary').v2;
import { db } from "@/config/db";

// Cloudinary configuration using environment variables
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});

export async function POST(req) {
  try {
    const { imageUrl, roomType, designType, additionalReq ,userEmail} = await req.json();

    // Input for the Replicate AI model
    const input = {
      image: imageUrl,
      prompt: "A "+ roomType +" with a " + designType +" style interior "+  additionalReq
    };

    // Call Replicate to generate AI image
    const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
    console.log("AI Image Output:", output);

    // Convert the output image URL to base64 format
    const base64Image = await ConvertImageToBase64(output);

    // Generate filename based on timestamp
    const filename = Date.now() + '.png';

    // Upload image to Cloudinary
    const cloudinaryResponse = await uploadImage(base64Image, filename);

    // Get download URL from Cloudinary upload response
    const downloadUrl = cloudinaryResponse.result;

    // Save data to database (assuming db.insert works correctly with AieGneratedImage)
    const dbResult = await db.insert(AiGeneratedImage).values({
      roomType: roomType,
      designType: designType,
      orgImage: imageUrl,
      aiImage: downloadUrl,
      userEmail: userEmail
    }).returning({ id: AiGeneratedImage.id });

    console.log(dbResult);
 
    // Return response with database result
    return NextResponse.json({ 'result' : downloadUrl });

  } catch (e) {
    console.error("Error in POST function:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// Function to convert image URL to base64
async function ConvertImageToBase64(imageUrl) {
  const resp = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const base64ImageRaw = Buffer.from(resp.data).toString('base64');
  return "data:image/png;base64," + base64ImageRaw;
}

// Cloudinary upload function
async function uploadImage(base64Image, filename) {
  try {
    // Upload the base64 image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64Image, {
      public_id: filename,
      resource_type: 'image',  // Cloudinary image resource type
    });

    // Get the URL of the uploaded image
    const downloadUrl = uploadResponse.secure_url;
    console.log("Cloudinary Image URL:", downloadUrl);

    return { result: downloadUrl };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}



