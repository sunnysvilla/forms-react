import axios, { AxiosResponse } from "axios";
import CloudinaryResponse from "../entities/cloudinaryResponse";

const cloudinaryUpload = async (
  images: File[],
  folder: "products" | "categories" | "dp" | "dv" | "product"
) => {
  const suffix = folder === "dv" ? "/video/upload" : "/image/upload";

  const uploadPromises = images.map((image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_REACT_APP_CLOUDINARY_PREST
    );
    formData.append("folder", folder);

    return axios
      .post(import.meta.env.VITE_REACT_APP_CLOUDINARY_URL + suffix, formData)
      .then(
        (response: AxiosResponse<CloudinaryResponse>) =>
          response.data.secure_url
      )
      .catch((error) => {
        console.error("Error uploading to Cloudinary", error);
        throw error;
      });
  });

  return Promise.all(uploadPromises);
};

export default cloudinaryUpload;
