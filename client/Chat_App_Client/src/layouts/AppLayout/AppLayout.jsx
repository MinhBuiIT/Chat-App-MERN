import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import ChatList from '../../components/ChatList';
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
          sm={4}
          md={2}
          lg={3}
          sx={{
            display: { xs: 'none', sm: 'block' },
            height: { xs: 'calc(100% - 3rem)', md: '100%' },
            borderRight: `1px solid ${grey[300]}`
          }}
        >
          <ChatList chatList={chatList} newMessageAlert={[{ _id: 1, count: 3 }]} onlineList={[1, 2, 3, 4, 5]} />
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={5.5} sx={{ height: { xs: 'calc(100% - 3rem)', md: '100%' } }}>
          <ComponetChild {...props} />
        </Grid>

        <Grid
          item
          md={2}
          lg={3}
          sx={{ display: { xs: 'none', md: 'block' }, height: { xs: 'calc(100% - 3rem)', md: '100%' } }}
        >
          <div>Info</div>
        </Grid>
      </Grid>
    );
  };
};

export default AppLayout;
