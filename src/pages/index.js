/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import Button from '../components/button';
import LeftNav from '../layouts/leftnav';
import Carousel from '../components/carousel';

const IndexPage = props =>
  (<main>

    <LeftNav></LeftNav>
    <Carousel></Carousel>
    
    {/* <Features data={props.data.allDataJson.edges[0].node.features} /> */}
    <Button link="www.google.com" text="Google"></Button>
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
