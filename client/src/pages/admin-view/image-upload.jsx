import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../../components/ui/input.jsx";
import { Label } from "../../components/ui/label.jsx";
import { useEffect, useRef } from "react";
import { Button } from "../../components/ui/button.jsx";
import axios from "axios";
import { Skeleton } from "../../components/ui/skeleton.jsx";

function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState, // Fixed prop name
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    if (!imageFile) return;
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/products/upload-image",
        data
      );
      if (response?.data?.success) {
        setUploadedImageUrl(response.data.result.url);
      }
    } catch (error) {
      console.error("Image upload failed", error);
    } finally {
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className={`w-full mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}>
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        className={`border-2 border-dashed rounded-lg p-4 ${isEditMode ? "opacity-60" : ""}`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <Label htmlFor="image-upload" className={`flex flex-col items-center justify-center h-32 cursor-pointer`}>
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="h-10 bg-gray-100" />
        ) : (
          <div className="flex items-center justify-between">
            <FileIcon className="w-8 text-primary mr-2 h-8" />
            <p className="text-sm font-medium">{imageFile.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
