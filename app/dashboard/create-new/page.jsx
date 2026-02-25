"use client"
import React, { useState, useEffect } from 'react'
import Imageselection from './_components/ImageSelection'
import Roomtype from './_components/Roomtype'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import CustomLoading from './_components/CustomLoading'
import AiOutputDialog from '../_components/AiOutputDialog'

function CreateNew() {
  const { user } = useUser();
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiOutputImage, setAiOutputImage] = useState();
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const [orgImage, setOrgImage] = useState();

  // Log formData when it changes
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Handle input changes
  const onHandleInputChange = (value, fieldname) => {
    setFormData(prev => ({
      ...prev,
      [fieldname]: value
    }));
  }

  // Generate AI Image
  const GenerateAiImage = async () => {
    setLoading(true); // Start loading
    try {
      console.log("Generating AI Image...");

      // Check if the image has already been uploaded to Cloudinary
      let rawImageUrl = orgImage;

      if (!rawImageUrl) {
        // Save image to Cloudinary and get the raw image URL
        rawImageUrl = await SaveRawImageToCloudinary();
        if (!rawImageUrl) return; // Early return if there's an issue with image upload
      }

      console.log("Raw Image URL:", rawImageUrl);

      // Post data to the API and get the result
      const result = await axios.post('/api/Design-room', {
        imageUrl: rawImageUrl,
        roomType: formData?.roomType,
        designType: formData?.designType,
        additionalReq: formData?.additionalReq,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }); 

      console.log(result.data);

      // Process the result
      setAiOutputImage(result.data.result); // Output image URL
      setOpenOutputDialog(true); // Open output dialog

    } catch (error) {
      console.error("Error during image generation process:", error);
      alert("Something went wrong while generating the AI image. Please try again.");
    } finally {
      setLoading(false); // Ensure loading is set to false after all operations
    }
  }

  // Save image to Cloudinary
  const SaveRawImageToCloudinary = async () => {
    if (!formData.image) {
      console.error("No image selected");
      alert("Please select an image to upload.");
      return;
    }

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", formData.image); // Attach the image
    cloudinaryFormData.append("upload_preset", "practice"); // Replace with your actual preset name KEY WORD RPOVIDE BY CLONIARE "upload_preset" AND file name "practice"

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dy9d4z5qs/image/upload", // Replace with your actual Cloudinary cloud name
        cloudinaryFormData
      );
      const imageUrl = response.data.secure_url; // Get the uploaded image URL
      console.log("Image uploaded to Cloudinary: ", imageUrl);
      setOrgImage(imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image to Cloudinary: ", error.response || error);
      alert("Error uploading image to Cloudinary. Please try again.");
    }
  }

  return (
    <div>
      <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Modeling</h2>
      <p className="text-center text-gray-500">Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment</p>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
        {/* Image selection */}
        <Imageselection selectedImage={(value) => onHandleInputChange(value, 'image')} />
        <div>
          {/* Room type */}
          <Roomtype selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />
          {/* Design type */}
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />
          {/* Additional requirements */}
          <AdditionalReq additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalReq')} />
          {/* Button to generate */}
          <Button 
            className='w-full mt-5' 
            onClick={GenerateAiImage} 
            disabled={loading || !formData.roomType || !formData.designType || !formData.image}  // Disable button if required fields are missing
          >
            Generate
          </Button>
          <p className='text-sm text-gray-400 mb-52'>NOTE: 1 credit will be used to design your room</p>
        </div>
      </div>
      <CustomLoading loading={loading} />
      <AiOutputDialog 
        openDialog={openOutputDialog} 
        closeDialog={() => setOpenOutputDialog(false)} 
        orgImage={orgImage} 
        aiImage={aiOutputImage} 
      />
    </div>
  )
}

export default CreateNew;




