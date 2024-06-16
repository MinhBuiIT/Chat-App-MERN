import AddOutlined from '@mui/icons-material/AddOutlined';
import { Avatar, ListItem, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import Styling from '../Styling';

const { IconButtonCustom } = Styling;
const ItemUser = memo(({ user, handler, isAdded, IconChange }) => {
  return (
    <ListItem>
      <Stack direction={'row'} alignItems={'center'} width={'100%'}>
        <Avatar src={user.avatar} sx={{ width: '40px', height: '40px' }} />
        <Typography variant="body1" flexGrow={1} ml={1}>
          {user.name}
        </Typography>
        <IconButtonCustom onClick={() => handler(user._id)}>
          {isAdded ? <IconChange /> : <AddOutlined />}
        </IconButtonCustom>
      </Stack>
    </ListItem>
  );
});

export default ItemUser;
