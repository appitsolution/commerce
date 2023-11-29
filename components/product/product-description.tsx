'use client';

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
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
      <div className="checkout-form__field" style={{display: 'flex',marginBottom: 10}}>
        <label htmlFor="url" style={{width: 40,display: 'block'}}>URL:</label>
        <input type="text" id="url" name="url" placeholder="Enter URL" style={{ marginLeft: 10 }} onInput={(value:React.ChangeEvent<HTMLInputElement>) => {
            sessionStorage.setItem('orderUrl',value.target.value)
          }}/>
      </div>

      <div className="checkout-form__field" style={{display: 'flex',marginBottom:10}}>
        <label htmlFor="id" style={{width: 40,display: 'block'}}>ID:</label>
        <input type="text" id="id" name="id" placeholder="Enter ID" style={{ marginLeft: 10 }} onInput={(value:React.ChangeEvent<HTMLInputElement>) => {
            sessionStorage.setItem('orderId',value.target.value)
          }}/>
      </div>

      <div className="checkout-form__field" style={{ marginBottom: 20,display: "flex" }}>
        <label htmlFor="title" style={{width: 40,display: 'block'}}>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter Title"
          style={{ marginLeft: 10 }}
          onInput={(value: React.ChangeEvent<HTMLInputElement>) => {
            sessionStorage.setItem('orderTitle',value.target.value)
          }}
        />
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
