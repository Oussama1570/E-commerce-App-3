import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { addProductFormElements } from "@/config";
import { SideNav, SideNavItems, SideNavLink } from "@carbon/react";
import { Fragment, useState } from "react";
import ProductImageUpload from "./image-upload.jsx"; // Fix import

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
};

const AdminProducts = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false); // Added missing state

  function onSubmit() {}

  return (
    <Fragment>
      <div className="mb-5 flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>Add New Product</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>

      {openCreateProductsDialog && (
        <SideNav className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg">
          <SideNavItems>
            <SideNavLink className="font-bold text-lg" href="#">
              Add New Product
            </SideNavLink>

            <div className="p-4 overflow-auto">
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                imageLoadingState={imageLoadingState}
                setImageLoadingState={setImageLoadingState}
              />

              <div className="py-6">
                <CommonForm
                  onSubmit={onSubmit}
                  formData={formData}
                  setFormData={setFormData}
                  buttonText="Add"
                  formControls={addProductFormElements}
                />
              </div>
            </div>
          </SideNavItems>
        </SideNav>
      )}
    </Fragment>
  );
};

export default AdminProducts;
