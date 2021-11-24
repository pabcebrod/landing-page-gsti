/** @jsx jsx */
import { jsx, Box, Heading, Image, Text } from 'theme-ui';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';
import { rgba } from 'polished';

const PriceCard = ({ price }) => {
  return (
    <Box
      sx={styles.priceTable}
      className={`priceCard ${price?.isRecommended ? ' recommended' : ''}`}
    >
      <Box sx={styles.priceDetails}>
        <Box as="header" className="priceHeader" sx={styles.header}>
          <Heading as="h3">{price.title}</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceCard;

const styles = {
  h2: {
    fontSize: [22, null, null, 30, 30, 36, 46],
    lineHeight: [1.6, null, null, 1.41],
    fontWeight: [500, null, null, 400],
  },
  priceTable: {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    backgroundColor: '#fff',
      borderColor: '#F0F0F5',
      color: 'text',
      footer: {

        backgroundColor: '#F0F0F5',
        borderRadius: '0 0 10px 10px',
        '.price-label': {
          color: 'text',
        },
        '.price-value': {
          color: 'primary',
        },
        '> div, svg': {
          cursor: 'pointer',
        },
      },
    border: `1px solid ${rgba('#F3F4F5', 0.15)}`,
    borderRadius: 10,
    position: 'relative',
    '&.recommended': {
      backgroundColor: '#fff',
      borderColor: '#F0F0F5',
      color: 'text',
      footer: {
        backgroundColor: '#F0F0F5',
        borderRadius: '0 0 10px 10px',
        '.price-label': {
          color: 'text',
        },
        '.price-value': {
          color: 'primary',
        },
        '> div, svg': {
          cursor: 'pointer',
        },
      },
    },
  },
  recommended: {
    backgroundColor: 'primary',
    position: 'absolute',
    top: '-16px',
    minHeight: '15px',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    padding: '0',
    letterSpacing: '-0.14px',
    borderRadius: '3px',
  },
  header: {
    img: {
      maxWidth: [45, null, null, '100%'],
    },
    h3: {
      fontWeight: 700,
      fontSize: [16, null, null, 22],
      letterSpacing: '-0.55px',
      mt: [20, null, null, 35],
    },
  },
  priceDetails: {
    p: ['35px 25px 40px', null, null, '55px 30px 45px', '55px 40px'],
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [20, 20, 20, 50],
    maxWidth: 340,
    li: {
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: [13, 15, null, 16],
      lineHeight: 1.62,
      '+ li ': {
        mt: [15, null, null, 30],
      },
      svg: {
        mr: '13px',
        mt: '5px',
      },
    },
    '.unavailable': {
      'span, svg': {
        color: rgba('white', 0.5),
      },
    },
  },
  footer: {
    borderTop: `1px solid ${rgba('#F3F4F5', 0.15)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ['20px 30px 20px', null, null, '25px 30px 30px', '35px 50px 40px'],
    span: {
      display: 'block',
    },
    '.price-label': {
      fontSize: [13, 14, null, 16],
      lineHeight: 1.76,
      color: rgba('#fff', 0.6),
    },
    '.price-value': {
      fontSize: [18, null, null, 26],
      fontWeight: 700,
      lineHeight: 1.31,
      letterSpacing: '-0.55px',
      color: '#FFFFFF',
    },
  },
};
