import React from "react";

interface ProductPageLayoutProps {
  children: React.ReactNode;
}

const ProductPageLayout: React.FC<ProductPageLayoutProps> = ({ children }) => {
  return (
    <div className="product-page-layout">
      {/* Your custom product page layout */}
      <div className="product-page-header">Product Page Header</div>
      <div className="product-page-content">{children}</div>
      <div className="product-page-footer">Product Page Footer</div>
    </div>
  );
};

export default ProductPageLayout;