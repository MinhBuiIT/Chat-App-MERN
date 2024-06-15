import CheckOutlined from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Avatar, Box, IconButton, List, ListItem, Stack, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';
import COLOR from '../../constants/color';
import { notificationData } from '../../lib/sampleData';

const Notification = () => {
  const handleAccept = (_id) => {
    console.log(_id);
  };
  const handleCancle = (_id) => {
    console.log(_id);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Typography variant="h6" textAlign={'center'}>
          Thông báo
        </Typography>
      </Box>
      <List>
        {notificationData.map((noti) => {
          return (
            <ListItem key={noti._id} sx={{ width: '100%' }}>
              <Stack direction={'row'} alignItems={'center'} width={'100%'}>
                <Avatar src={noti.avatar} sx={{ width: '60px', height: '60px', border: `2px solid ${COLOR.PINK}` }} />
                <Typography variant="body1" maxWidth={'60%'} ml={1}>
                  <b>{noti.name}</b> đã gửi lời mời kết bạn
                </Typography>
                <Box sx={{ display: 'flex', gap: '12px', justifyContent: 'end' }} flexGrow={1}>
                  <IconButton
                    sx={{
                      width: '40px',
                      height: '40px',
                      background: green[400],
                      '&:hover': { background: green[600] }
                    }}
                    onClick={() => handleAccept(noti._id)}
                  >
                    <CheckOutlined style={{ color: 'white' }} />
                  </IconButton>
                  <IconButton
                    color={red[700]}
                    sx={{ width: '40px', height: '40px', background: red[400], '&:hover': { background: red[600] } }}
                    onClick={() => handleCancle(noti._id)}
                  >
                    <CloseOutlinedIcon style={{ color: 'white' }} />
                  </IconButton>
                </Box>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Notification;
