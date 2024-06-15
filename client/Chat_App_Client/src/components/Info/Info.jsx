import { Avatar, Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import COLOR from '../../constants/color';

const Info = ({ linkImg, name, username }) => {
  return (
    <Box sx={{ height: '100%', borderLeft: '1px solid rgba(0,0,0,0.1)', padding: '50px 16px 20px' }}>
      <Stack
        direction={'column'}
        alignItems={'center'}
        sx={{ paddingBottom: '30px', borderBottom: '1px solid rgba(0,0,0,0.1) ' }}
      >
        <Avatar src={linkImg} sx={{ width: '100px', height: '100px', border: `4px solid ${COLOR.PINK}` }} />
        <Typography mt={'12px'} fontSize={'24px'} fontWeight={600} fontFamily={'revert'}>
          {name}
        </Typography>
        <Typography mt={'4px'} color={grey[600]} fontSize={'16px'} fontWeight={600}>
          @{username}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Info;
