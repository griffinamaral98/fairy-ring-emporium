import React from "react";
import { graphql } from "gatsby";
import { Card } from "flowbite-react";

const ProductCard = ({ products }: any) => {
  return (
    <section className="flex flex-wrap mx-auto overflow-hidden">
      {products.map((product: any) => {
        return (
          <div
            className="my-2 px-2 w-full overflow-hidden lg:w-1/3"
            key={product.id}
          >
            <div className="max-w-sm">
              <Card
                imgAlt={product.title}
                imgSrc="http://placeimg.com/250/250/nature"
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                  {product.description.data.description}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <a
                    href="#"
                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </Card>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductCard;
