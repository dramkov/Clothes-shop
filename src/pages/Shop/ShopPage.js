import React, { useState } from 'react';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import SHOP_DATA from './ShopDate';

const ShopPage = (props) => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
