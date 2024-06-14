import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Backdrop, Box, CircularProgress, Stack, Tooltip } from '@mui/material';
import { Suspense, lazy, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../../components/Modal';
import Styling from '../../components/Styling';
import COLOR from '../../constants/color';

const Search = lazy(() => import('../../components/Search'));
const Notification = lazy(() => import('../../components/Notification'));
const AddGroup = lazy(() => import('../../components/AddGroup'));
const Logout = lazy(() => import('../../components/Logout'));
const { IconButtonHeader } = Styling;
const SlideBar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenAddGroup, setIsOpenAddGroup] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const openSearch = () => {
    setIsOpenSearch((pre) => !pre);
  };
  const openAddGroup = () => {
    setIsOpenAddGroup((pre) => !pre);
  };
  const openManageGroup = () => {
    console.log('Manage Group');
  };
  const openNotification = () => {
    setIsOpenNotification((pre) => !pre);
  };
  const openLogout = () => {
    setIsOpenLogout((pre) => !pre);
  };
  return (
    <>
      <Box
        width={'45px'}
        height={'45px'}
        sx={{ border: `3px solid ${COLOR.PINK}`, borderRadius: '50%', margin: { md: '10px auto', xs: 'auto 0px' } }}
      >
        <Avatar
          src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/b1ce339ecb92e14c0343fdb86d743ee1.jpg"
          sx={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Stack
        sx={{ flexGrow: 1, marginTop: { xs: '0px', md: '50px' } }}
        direction={{ xs: 'row', md: 'column' }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, sm: 3 }}
      >
        <IconButtonHeader onClick={openSearch}>
          <Tooltip title="Search">
            <SearchOutlinedIcon style={{ color: '#fff' }} />
          </Tooltip>
        </IconButtonHeader>
        <IconButtonHeader onClick={openAddGroup}>
          <Tooltip title="Add Group">
            <AddOutlinedIcon style={{ color: '#fff' }} />
          </Tooltip>
        </IconButtonHeader>
        <IconButtonHeader onClick={openManageGroup}>
          <Tooltip title="Manage Group">
            <PeopleOutlineOutlinedIcon style={{ color: '#fff' }} />
          </Tooltip>
        </IconButtonHeader>
        <IconButtonHeader onClick={openNotification}>
          <Tooltip title="Notification">
            <NotificationsNoneOutlinedIcon style={{ color: '#fff' }} />
          </Tooltip>
        </IconButtonHeader>
        <IconButtonHeader onClick={openLogout}>
          <Tooltip title="Logout">
            <LogoutOutlinedIcon style={{ color: '#fff' }} />
          </Tooltip>
        </IconButtonHeader>
      </Stack>

      {isOpenSearch &&
        createPortal(
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Modal open={isOpenSearch} handleClose={openSearch}>
              <Search></Search>
            </Modal>
          </Suspense>,
          document.body
        )}
      {isOpenAddGroup &&
        createPortal(
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Modal open={isOpenAddGroup} handleClose={openAddGroup}>
              <AddGroup></AddGroup>
            </Modal>
          </Suspense>,
          document.body
        )}
      {isOpenNotification &&
        createPortal(
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Modal open={isOpenNotification} handleClose={openNotification}>
              <Notification></Notification>
            </Modal>
          </Suspense>,
          document.body
        )}
      {isOpenLogout &&
        createPortal(
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <Modal open={isOpenLogout} handleClose={openLogout}>
              <Logout></Logout>
            </Modal>
          </Suspense>,
          document.body
        )}
    </>
  );
};

export default SlideBar;
