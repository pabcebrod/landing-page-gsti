/** @jsx jsx */
import { useState } from 'react';
import { jsx, Grid, Box, Container, Flex, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UseCaseCard from 'components/cards/use-case-card';
import { rgba } from 'polished';
import { keyframes } from '@emotion/core';
import '../assets/css/price.css';

import userIcon from 'assets/images/icons/two-users.png';
import userIcon2 from 'assets/images/icons/three-users.png';

const aforo = [
  {
    id: 2,
    title: 'Consulta el aforo del local',
    amount: 89.99,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Consulta del aforo en tiempo real',
      }
    ],
  },
];

const reserva = [
  {
    id: 2,
    icon: userIcon2,
    title: 'Reserva online a cualquier hora',
    amount: 89.99,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Digitalizacion de carta',
      },
    ],
  },
];

const carta = [
  {
    id: 2,
    icon: userIcon2,
    title: 'Consulta y modificación de la carta.',
    amount: 89.99,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Digitalizacion de carta',
      },
    ],
  },
];
const pago = [
  {
    id: 2,
    icon: userIcon2,
    title: 'Pago de la cuenta',
    amount: 89.99 * 12 * 0.95,
    isRecommended: true,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Digitalizacion de carta',
      },
    ],
  },
];

const UseCase = () => {
  const [plan, setPlan] = useState({
    active: 'aforo',
    data: aforo,
  });

  const handlePlan = (plan) => {
    if (plan === 'aforo') {
      setPlan({
        ...plan,
        active: 'aforo',
        data: aforo,
      });
    }
    if (plan === 'reserva') {
      setPlan({
        ...plan,
        active: 'reserva',
        data: reserva,
      });
    }
    if (plan === 'carta') {
      setPlan({
        ...plan,
        active: 'carta',
        data: carta,
      });
    }
    if (plan === 'pago') {
      setPlan({
        ...plan,
        active: 'pago',
        data: pago,
      });
    }
  };

  const active = "aforo"
  return (
    <Box id="funcionalidad" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Funcionalidades de Easy Order"
        />
        <Flex sx={styles.priceSwitcher}>
          <Button
            variant="text"
            className={plan?.active === 'aforo' ? 'active' : ''}
            onClick={() => handlePlan('aforo')}
          >
            Aforo
          </Button>
          <Button
            variant="text"
            className={plan?.active === 'reserva' ? 'active' : ''}
            onClick={() => handlePlan('reserva')}
          >
            Reserva
          </Button>
          <Button
            variant="text"
            className={plan?.active === 'carta' ? 'active' : ''}
            onClick={() => handlePlan('carta')}
          >
            Carta
          </Button>
          <Button
            variant="text"
            className={plan?.active === 'pago' ? 'active' : ''}
            onClick={() => handlePlan('pago')}
          >
            Pago
          </Button>
        </Flex>
        <div className="container"> 
        <Grid sx={styles.grid} text-align="CENTER">
          {plan?.data?.map((price, index) => (
            <UseCaseCard price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default UseCase;

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
    backgroundColor: '#fff',
    pt: [60],
    pb: [100, 100, 100, 80],
  },
  heading: {
    fontSize:"50px",
    color: '#020718',
    mb: 20,
    p: {
      color: '#020718',
    },
  },
  priceSwitcher: {
    
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    borderRadius: '5px',
    border: `1px solid ${rgba('#020718', 0.2)}`,
    margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 60px'],
    maxWidth: [255, 255, 255, 300],
    p: 2,
    button: {
      minHeight: ['40px', '40px', '40px', '48px'],
      px: ['18px', '18px', '18px', '25px'],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      color: '#020718',
      '&.active': {
        backgroundColor: '#020718',
        color: 'white',
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
