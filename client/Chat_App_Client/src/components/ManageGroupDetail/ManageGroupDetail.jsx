import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Backdrop, Box, Button, CircularProgress, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Suspense, lazy, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import COLOR from '../../constants/color';
import { userData } from '../../lib/sampleData';
import ItemUser from '../ItemUser';
import Styling from '../Styling';

const Modal = lazy(() => import('../Modal'));
const { ListScroll, StackScroll } = Styling;
const ManageGroupDetail = ({ id }) => {
  const [myFriendList, setMyFriendList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [nameGroup, setNameGroup] = useState('');
  const [addUserList, setAddUserList] = useState([]);
  const [isDeleteGroup, setIsDeleteGroup] = useState(false);
  const [nameGroupEdit, setNameGroupEdit] = useState('');
  const [isAddMember, setIsAddMember] = useState(false);

  const handleConfirmEdit = () => {
    setIsEdit(false);
    console.log(nameGroupEdit);
    setNameGroup(nameGroupEdit);
  };
  const handleConfirmDelete = () => {
    console.log(id);
    setIsDeleteGroup(false);
  };

  const handleAddUserGroup = (_id) => {
    if (addUserList.includes(_id)) {
      const filterAddUserList = addUserList.filter((item) => item !== _id);
      setAddUserList(filterAddUserList);
    } else {
      setAddUserList((pre) => [...pre, _id]);
    }
  };
  const handleConfirmAddUserGroup = () => {
    console.log(addUserList);
  };
  const handleRemoveUserGroup = (_id) => {
    console.log(_id);
  };
  useEffect(() => {
    if (id) {
      setNameGroup(`Group Name ${id}`);
      setNameGroupEdit(`Group Name ${id}`);
    }
    return () => {
      setNameGroup('');
      setNameGroupEdit('');
      setIsEdit(false);
    };
  }, [id]);
  useEffect(() => {
    //Fetch friend list data from server
    setMyFriendList(userData);
  }, []);
  return (
    <>
      {isEdit ? (
        <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
          <TextField
            variant="standard"
            value={nameGroupEdit}
            onChange={(e) => setNameGroupEdit(e.target.value)}
          ></TextField>
          <IconButton onClick={handleConfirmEdit}>
            <CheckOutlinedIcon sx={{ width: '20px' }} />
          </IconButton>
        </Stack>
      ) : (
        <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
          <Typography variant="h5">{nameGroup}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditOutlinedIcon sx={{ width: '20px' }} />
          </IconButton>
        </Stack>
      )}
      <Typography mt={2} variant="h6">
        Thành viên
      </Typography>
      <Box
        sx={{
          padding: { md: '30px', sm: '20px', xs: '18px' },
          background: COLOR.GREY_LIGHT,
          height: '400px'
        }}
      >
        {/* Member */}
        <StackScroll direction={'column'} spacing={2} sx={{ height: '100%' }}>
          {userData.map((user) => {
            return (
              <ItemUser
                key={user._id}
                user={user}
                handler={() => handleRemoveUserGroup(user._id)}
                isAdded={true}
                IconChange={RemoveOutlinedIcon}
              />
            );
          })}
        </StackScroll>
      </Box>
      <Stack
        direction={{ md: 'row', xs: 'column-reverse' }}
        spacing={2}
        alignItems={'center'}
        justifyContent={'center'}
        mt={2}
      >
        <Button variant="text" color="error" onClick={() => setIsDeleteGroup(true)}>
          Xóa Nhóm
        </Button>
        <Button
          variant="contained"
          sx={{ background: '#000', '&:hover': { background: '#000', opacity: 0.9 } }}
          onClick={() => setIsAddMember(true)}
        >
          Thêm Thành Viên
        </Button>
      </Stack>
      {isDeleteGroup &&
        createPortal(
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Modal open={isDeleteGroup} handleClose={() => setIsDeleteGroup(false)}>
              <Typography variant="h6" textAlign={'center'}>
                Bạn có chắc chắn muốn xóa nhóm?
              </Typography>
              <Stack direction={'row'} spacing={2} mt={2} justifyContent={'center'}>
                <Button variant="text" color="error" onClick={() => setIsDeleteGroup(false)}>
                  Hủy
                </Button>
                <Button
                  variant="contained"
                  sx={{ background: '#000', '&:hover': { background: '#000', opacity: 0.9 } }}
                  onClick={handleConfirmDelete}
                >
                  Xác nhận
                </Button>
              </Stack>
            </Modal>
          </Suspense>,
          document.body
        )}
      {isAddMember && (
        <Suspense
          fallback={
            <Backdrop open={true}>
              <CircularProgress color="inherit" />
            </Backdrop>
          }
        >
          <Modal open={isAddMember} handleClose={() => setIsAddMember(false)} width={'350px'}>
            <Typography variant="h6" textAlign={'center'}>
              Thêm thành viên
            </Typography>
            {myFriendList.length > 0 ? (
              <>
                <ListScroll sx={{ height: '200px', overflowY: 'scroll' }}>
                  {myFriendList.map((user) => {
                    return (
                      <ItemUser
                        key={user._id}
                        user={user}
                        handler={handleAddUserGroup}
                        isAdded={addUserList.includes(user._id)}
                        IconChange={RemoveOutlinedIcon}
                      />
                    );
                  })}
                </ListScroll>
                <Button
                  variant="text"
                  sx={{ color: COLOR.PINK, textAlign: 'center', width: '100%', '&:hover': { background: 'white' } }}
                  onClick={handleConfirmAddUserGroup}
                >
                  Lưu thay đổi
                </Button>
              </>
            ) : (
              <Typography variant="body1" textAlign={'center'}>
                Không có bạn bè nào
              </Typography>
            )}
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default ManageGroupDetail;
