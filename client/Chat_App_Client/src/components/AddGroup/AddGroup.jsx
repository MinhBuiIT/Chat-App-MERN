import AddOutlined from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Avatar, Box, Button, List, ListItem, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { memo, useState } from 'react';
import COLOR from '../../constants/color';
import { userData } from '../../lib/sampleData';
import Styling from '../Styling';

const { TextFieldCustom, IconButtonCustom } = Styling;
const AddGroup = ({ handleClose }) => {
  const [nameGroup, setNameGroup] = useState('');
  const [addUserList, setAddUserList] = useState([]);
  const handleChangeInput = (e) => {
    setNameGroup(e.target.value);
  };
  const handleAddUserGroup = (_id) => {
    if (addUserList.includes(_id)) {
      const filterAddUserList = addUserList.filter((item) => item !== _id);
      setAddUserList(filterAddUserList);
    } else {
      setAddUserList((pre) => [...pre, _id]);
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6" textAlign={'center'}>
          Thêm nhóm mới
        </Typography>
      </Box>
      <Box component={'form'}>
        <TextFieldCustom
          fullWidth
          placeholder="Nhập tên nhóm..."
          sx={{ marginTop: '12px' }}
          value={nameGroup}
          onChange={(e) => handleChangeInput(e)}
        />
      </Box>
      <List>
        {userData.map((user) => {
          return (
            <ItemUser
              key={user._id}
              user={user}
              handleAddUserGroup={handleAddUserGroup}
              isAdded={addUserList.includes(user._id)}
            />
          );
        })}
      </List>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            background: COLOR.PINK,
            '&:hover': { background: COLOR.PINK, opacity: 0.9, boxShadow: 'none' },
            boxShadow: 'none'
          }}
        >
          Tạo mới
        </Button>
        <Button
          variant="contained"
          sx={{
            background: grey[400],
            color: 'white',
            '&:hover': { background: grey[500], opacity: 0.9, boxShadow: 'none' },
            boxShadow: 'none'
          }}
          onClick={handleClose}
        >
          Hủy
        </Button>
      </Box>
    </Box>
  );
};
const ItemUser = memo(({ user, handleAddUserGroup, isAdded }) => {
  return (
    <ListItem>
      <Stack direction={'row'} alignItems={'center'} width={'100%'}>
        <Avatar src={user.avatar} sx={{ width: '40px', height: '40px' }} />
        <Typography variant="body1" flexGrow={1} ml={1}>
          {user.name}
        </Typography>
        <IconButtonCustom onClick={() => handleAddUserGroup(user._id)}>
          {isAdded ? <RemoveOutlinedIcon /> : <AddOutlined />}
        </IconButtonCustom>
      </Stack>
    </ListItem>
  );
});
export default AddGroup;
