import React, { useEffect, useState } from "react";
import ProductNavigation from "./ProductNavigation";
import ProductDescription from "./ProductTabs/ProductDescription";
import ProductReviews from "./ProductTabs/ProductReviews";
import AddReview from "./ProductTabs/AddReview";

const sampleData = {
  data: {
    product: {
      body: '<h2>PawShop™</h2><h2 id="value-binders">Premium Pet Accessories</h2><p>Our latest PawShop™ collection is designed to provide intelligent support and comfort for your dog or cat. By default, every product uses a specially developed ergonomic system that adapts to your pet’s natural posture and movements. You may enhance this experience by choosing models with the <code>AdvancedComfortLayer</code> upgrade.</p><h1>By default PawShop™</h1><p>products offer balanced softness and durability. The integrated <code>SoftCore</code> technology ensures long-lasting comfort, while the <code>AdaptiveFoam</code> feature helps maintain the product’s shape during daily use.</p><ul><li>You can choose optional <code>waterproof</code> protection</li><li>Ensuring the product remains clean and fresh longer</li><li>Ideal for both indoor and outdoor settings</li><li>A “Pet-Safe Materials” badge is included with certified models</li></ul><h4>Notation</h4><p>Just like the <code>premium</code> classification, you can also select an <code>orthopedic</code> variant for pets with additional support needs. This feature overrides the default comfort level and provides enhanced joint-friendly cushioning for senior animals.</p>',
    },
  },
};

const ProductContent = ({ item }) => {
  const [isDescrtiption, setIsDescrtiption] = useState(
    item?.data.product.body ? true : false
  );
  const [tab, setTab] = useState(/* isDescrtiption ? 1 : 2 */ 1);
  useEffect(() => {
    setIsDescrtiption(item?.data.product.body ? true : false);
    setTab(/* isDescrtiption ? 1 : 2 */ 1);
  }, [item, isDescrtiption]);
  return (
    <>
      <ProductNavigation
        reviews={item.data.product.comments_count}
        isDescrtiption={/* isDescrtiption */ true}
        tab={tab}
        setTab={setTab}
      />
      <div className="container-horizontal outer-container product__content__container">
        <div className="container-vertical container product__content">
          {
            /* isDescrtiption &&  */ tab == 1 && (
              <ProductDescription item={/* item */ sampleData} />
            )
          }
          {tab == 2 && <ProductReviews item={item} />}
          {tab == 3 && <AddReview item={item} />}
        </div>
      </div>
    </>
  );
};

export default ProductContent;
