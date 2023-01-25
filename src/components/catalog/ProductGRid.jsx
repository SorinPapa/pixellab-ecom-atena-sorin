import { baseUrl } from '@/index';
import { useEffect, useState } from 'react';
import { ProductTile } from '.';

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  console.log('rerender');

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  if (products.length < 1) {
    return <>There are no products</>;
  }

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
