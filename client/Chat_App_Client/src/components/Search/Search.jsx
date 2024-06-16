import CheckOutlined from '@mui/icons-material/CheckOutlined';
import { Box, List, Typography } from '@mui/material';
import { useState } from 'react';
import { userData } from '../../lib/sampleData';
import ItemUser from '../ItemUser';
import Styling from '../Styling';

const { TextFieldCustom } = Styling;
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
              handler={hanldeAddRequestFriend}
              isAdded={friendReqList.includes(user._id)}
              IconChange={CheckOutlined}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Search;
