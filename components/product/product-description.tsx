'use client';

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { useRouter } from 'next/router';
import { SetStateAction, useEffect } from 'react';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
            <div className="checkout-form__field" style={{opacity: 0}}>
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" placeholder="Enter URL" />
            </div>

            <div className="checkout-form__field" style={{opacity: 0}}>
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id" placeholder="Enter ID" />
            </div>

            <div className="checkout-form__field" style={{marginBottom: 20}}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="Enter Title" style={{marginLeft: 10}}/>
            </div>
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}



      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
