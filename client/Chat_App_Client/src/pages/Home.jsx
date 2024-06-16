import { Box } from '@mui/material';
import Title from '../components/Title';
import COLOR from '../constants/color';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <>
      <Title title={'Chat App'} description={'Chat App UI'} />
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: 'fit-content', background: COLOR.PINK_LIGHT, padding: '6px', borderRadius: '50px' }}>
          Vui lòng chọn đoạn chat để trò chuyện
        </Box>
      </Box>
    </>
  );
};
const AppLayoutHome = AppLayout()(Home);
export default AppLayoutHome;
