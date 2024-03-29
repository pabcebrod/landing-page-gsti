import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import FeaturedSpace from 'sections/featured-space';
import UseCase from 'sections/use-case';
import OurCustomer from 'sections/our-customer';
import Gallery from 'sections/gallery';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Easy order" />
      
     <Banner /> 
     <FeaturedSpace />
      <UseCase />
      <Pricing />
      <Subscription />
    </Layout>
  );
}
