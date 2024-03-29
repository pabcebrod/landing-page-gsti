/** @jsx jsx */
import { useState } from 'react';
import { jsx, Grid, Box, Container, Flex, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceCard from 'components/cards/price-card';
import { rgba } from 'polished';
import { keyframes } from '@emotion/core';
import '../assets/css/price.css';

import userIcon from 'assets/images/icons/two-users.png';
import userIcon2 from 'assets/images/icons/three-users.png';

const monthlyPricing = [
 /*  {
    id: 1,
    icon: userIcon,
    title: 'Starter Pack',
    amount: 49.99,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Ultimate access to all course, exercises and assessments',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Free access for all kind of exercise corrections with downloads.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total assessment corrections with free download access system`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Unlimited download of courses on the mobile app contents`,
      },
    ],
  }, */
  {
    id: 2,
    icon: userIcon2,
    title: 'Pack Mensual Estandard',
    amount: 89.99,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Digitalizacion de carta',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Ocupación en tiempo real`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Pasarela de pago integrada`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Soporte via web`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `1 mes de prueba gratuito`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Códigos de decuentos por recomendación`,
      },
    ],
  },
];

const annualPricing = [
  /* {
    id: 1,
    icon: userIcon,
    title: 'Starter Pack',
    amount: 49.99 * 12 - 10,
    isRecommended: false,
    features: [
      {
        id: 2,
        isAvailable: true,
        title: `Free access for all kind of exercise corrections with downloads.`,
      },
      {
        id: 1,
        isAvailable: true,
        title: 'Ultimate access to all course, exercises and assessments',
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total assessment corrections with free download access system`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Unlimited download of courses on the mobile app contents`,
      },
    ],
  }, */
  {
    id: 2,
    icon: userIcon2,
    title: 'Pack Anual Estandard',
    amount: 89.99 * 12 * 0.95,
    isRecommended: true,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Digitalizacion de carta',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Ocupación en tiempo real`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Pasarela de pago integrada`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Soporte via web premium`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `1 mes de prueba gratuito`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Códigos de descuentos por recomendación`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Personaliza el espacio de tu establecimiento totalmente gratis`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Descuento del 5%`,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'yearly',
    data: annualPricing,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        data: monthlyPricing,
      });
    }
    if (plan === 'yearly') {
      setPlan({
        ...plan,
        active: 'yearly',
        data: annualPricing,
      });
    }
  };

  return (
    <Box id="pricing" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Planes de suscripcion"
        /*   title="What deal suit you perfect" */
        />
        <Flex sx={styles.priceSwitcher}>
          <Button
            variant="text"
            className={plan?.active === 'monthly' ? 'active' : ''}
            onClick={() => handlePlan('monthly')}
          >
            Plan mensual
          </Button>
          <Button
            variant="text"
            className={plan?.active === 'yearly' ? 'active' : ''}
            onClick={() => handlePlan('yearly')}
          >
            Plan anual
          </Button>
        </Flex>
        <div className="container"> 
        <Grid sx={styles.grid} text-align="CENTER">
          {plan?.data?.map((price, index) => (
            <PriceCard price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#020718',
    pt: [60],
    pb: [100, 100, 100, 80],
  },
  heading: {
    color: '#fff',
    mb: 20,
    p: {
      color: '#fff',
    },
  },
  priceSwitcher: {
    borderRadius: '5px',
    border: `1px solid ${rgba('#FFFFFF', 0.2)}`,
    margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 60px'],
    maxWidth: [255, 255, 255, 300],
    p: 2,
    button: {
      minHeight: ['40px', '40px', '40px', '48px'],
      px: ['18px', '18px', '18px', '25px'],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      color: 'white',
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  grid: {
    gap: ['60px 30px'],
    display: 'flex',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 340px)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
