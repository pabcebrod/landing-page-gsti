/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import { rgba } from 'polished';

import Select from 'components/select';
import bannerBg from 'assets/images/imagen-bar.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';

const options = [
  {
    id: 1,
    label: 'Brooklyn, New york',
    value: 'Brooklyn, New york',
  },
  {
    id: 2,
    label: 'Atlanta, Georgia',
    value: 'Atlanta, Georgia',
  },
  {
    id: 3,
    label: 'Minneapolis, Minnesota',
    value: 'Minneapolis, Minnesota',
  },
  {
    id: 4,
    label: 'Chicago, Illinois',
    value: 'Chicago, Illinois',
  },
];

export default function Banner() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting...');
  };

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
         
        </Box>
      </Container> 
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.93),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', '60px 0 0', 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, null, null, 40, null, 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, null, null, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, null, null, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: [null, null, 'initial'],
    },
  },
  button: {
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, null, null, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
