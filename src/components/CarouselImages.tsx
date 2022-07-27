import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allStrapiProduct {
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
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;

const CarouselImages = () => {
  const {
    allStrapiProduct: { nodes: products },
  } = useStaticQuery(query);
  return (
    <>
      {products.map((product: any) => {
        const { id, title, image, price, description } = product;
        return (
          <div key={id}>
            <GatsbyImage src={image.localFile} alt={title} />
            <h1>{title}</h1>
            <span>{price}</span>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default CarouselImages;
