import { SideNav, SideNavItems, SideNavItem } from "@carbon/react";

function AdminProducts() {
  const setImageFile = () => {
    // Function implementation
  };

  return (
    <SideNav aria-label="Admin Navigation">
      <SideNavItems>
        <SideNavItem href="#add-product">
          Add New Product
        </SideNavItem>
        {/* Add more SideNavItems as needed */}
      </SideNavItems>
      <div className="admin-content overflow-auto">
        <h2 className="content-title">Add New Product</h2>
        <ProductImageUpload
          imageFile={imageFile}
          setImageFile={setImageFile}
          uploadedImageFile={uploadedImageFile}
          setUploadedImageFile={setUploadedImageFile}
        />
        <div className="py-6">
          {/* Additional content */}
        </div>
      </div>
    </SideNav>
  );
}
