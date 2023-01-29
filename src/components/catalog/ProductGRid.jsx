import { baseUrl } from '@/index';
import { useEffect, useState } from 'react';
import { ProductTile } from '.';

export const ProductGrid = ({perRow='4/row'}) => {
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

  const gridCss=css`
  display:grid;
  row-gap:32px;

  `;

  return (
    <ul className={gridCss}>
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
