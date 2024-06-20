import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import ChatList from '../../components/ChatList';
import Info from '../../components/Info/Info';
import { chatList } from '../../lib/sampleData';
import SlideBar from '../SlideBar';

const AppLayout = () => (ComponetChild) => {
  return (props) => {
    return (
      <Grid container height={'100vh'}>
        <Grid
          item
          md={1}
          lg={0.5}
          bgcolor={'black'}
          sx={{
            display: {
              xs: 'flex',
              md: 'block'
            },
            position: {
              xs: 'absolute',
              md: 'static'
            },
            bottom: {
              xs: '0'
            },
            left: {
              xs: '0'
            },
            right: {
              xs: '0'
            },
            height: {
              xs: '3rem',
              md: '100%'
            }
          }}
        >
          <SlideBar />
        </Grid>
        <Grid
          item
          md={3}
          lg={3}
          sx={{
            display: { xs: 'none', md: 'block' },
            height: { xs: 'calc(100% - 3rem)', md: '100%' },
            borderRight: `1px solid ${grey[300]}`
          }}
        >
          <ChatList chatList={chatList} newMessageAlert={[{ _id: 1, count: 3 }]} onlineList={[1, 2, 3, 4, 5]} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={5.5} sx={{ height: { xs: 'calc(100% - 3rem)', md: '100%' } }}>
          <ComponetChild {...props} />
        </Grid>

        <Grid
          item
          lg={3}
          sx={{ display: { xs: 'none', lg: 'block' }, height: { xs: 'calc(100% - 3rem)', md: '100%' } }}
        >
          <Info
            linkImg={'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg'}
            name={'Minh Bui Dev'}
            username={'minhbuidev'}
          />
        </Grid>
      </Grid>
    );
  };
};

export default AppLayout;
