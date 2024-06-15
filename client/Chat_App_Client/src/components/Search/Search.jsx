import AddOutlined from '@mui/icons-material/AddOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Avatar, Box, List, ListItem, Stack, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { userData } from '../../lib/sampleData';
import Styling from '../Styling';

const { TextFieldCustom, IconButtonCustom } = Styling;
const Search = () => {
  const [friendReqList, setFriendReqList] = useState([]);
  const hanldeAddRequestFriend = (_id) => {
    console.log(_id);
    setFriendReqList((pre) => [...pre, _id]);
  };
  return (
    <Box>
      <Box>
        <Typography variant="h6" textAlign={'center'}>
          Tìm kiếm bạn bè
        </Typography>
      </Box>
      <Box component={'form'}>
        <TextFieldCustom fullWidth placeholder="Nhập tên cần tìm..." sx={{ marginTop: '12px' }} />
      </Box>
      <List>
        {userData.map((user) => {
          return (
            <ItemUser
              key={user._id}
              user={user}
              hanldeAddRequestFriend={hanldeAddRequestFriend}
              isAdded={friendReqList.includes(user._id)}
            />
          );
        })}
      </List>
    </Box>
  );
};
const ItemUser = memo(({ user, hanldeAddRequestFriend, isAdded }) => {
  return (
    <ListItem>
      <Stack direction={'row'} alignItems={'center'} width={'100%'}>
        <Avatar src={user.avatar} sx={{ width: '40px', height: '40px' }} />
        <Typography variant="body1" flexGrow={1} ml={1}>
          {user.name}
        </Typography>
        <IconButtonCustom onClick={() => hanldeAddRequestFriend(user._id)}>
          {isAdded ? <CheckOutlinedIcon /> : <AddOutlined />}
        </IconButtonCustom>
      </Stack>
    </ListItem>
  );
});
export default Search;
