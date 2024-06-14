import { Badge, IconButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import COLOR from '../../constants/color';

const VisualInput = styled('input')({
  overflow: 'hidden',
  border: 0,
  clip: 'rect(0,0,0,0)',
  width: 0
});
const IconButtonHeader = styled(IconButton)({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: COLOR.PINK,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}));
const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  padding: '10px 16px',
  '&:hover': {
    backgroundColor: 'rgba(251,244,251,1)'
  }
});
const Styling = {
  VisualInput,
  IconButtonHeader,
  StyledBadge,
  StyledLink
};
export default Styling;
