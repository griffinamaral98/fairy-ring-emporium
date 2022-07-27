import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CarouselCard from "../components/Carousel";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

const IndexPage = ({ data }: any) => {
  const {
    allStrapiProduct: { nodes: products },
  } = data;
  return (
    <Layout>
      <main className="page">
        <CarouselCard />
        <ProductCard products={products} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProduct(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        price
        description {
          data {
            description
          }
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        featured
      }
    }
  }
`;

export default IndexPage;
