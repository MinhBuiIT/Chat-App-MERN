import FileIcon from '@mui/icons-material/AttachFile';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { Avatar, Box, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useRef, useState } from 'react';
import MessageItem from '../components/MessageItem';
import Styling from '../components/Styling';
import COLOR from '../constants/color';
import AppLayout from '../layouts/AppLayout/AppLayout';
import { messageData } from '../lib/sampleData';

const isOnlineReceiver = false; //fetch data
const _idUser = 100; //fetch data
const { StyledBadge, InputCustomText, IconButtonSendCustom, StackScroll } = Styling;
const Chat = () => {
  const [isOpenMenuFile, setIsOpenMenuFile] = useState(false);
  const anchorElFile = useRef(null);
  return (
    <Stack direction={'column'} height={'100vh'} position={'relative'} width={'100%'}>
      <Box height={'3.7rem'} sx={{ boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.15)', left: '0px', right: '0px' }}>
        <Stack padding={'12px'} alignItems={'center'} spacing={1} direction={'row'}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant={`${isOnlineReceiver && 'dot'}`}
          >
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KFpyTAbxUOUtC1mrtahi2prM757NKVVP6Q&s'}
            />
          </StyledBadge>
          <Stack direction={'column'}>
            <Typography fontWeight={500} fontSize={'16px'}>
              Vũ Huyền
            </Typography>
            {!isOnlineReceiver && (
              <Typography variant="caption" color={grey[500]}>
                Hoạt động 7 phút trước
              </Typography>
            )}
          </Stack>
        </Stack>
      </Box>
      <StackScroll flexGrow={1} direction={'column-reverse'} padding={'0px 10px'} sx={{ background: COLOR.GREY_LIGHT }}>
        {messageData.map((messageItem) => {
          const isSameSender = _idUser === messageItem.sender._id;
          return (
            <MessageItem
              key={messageItem._id}
              message={messageItem.content}
              time={'11:20AM'}
              avatar={messageItem.sender.avatar}
              isSameSender={isSameSender}
              name={messageItem.sender.name}
              attchments={messageItem.attchments}
            />
          );
        })}
      </StackScroll>
      <Box
        height={'3.5rem'}
        width={'100%'}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: COLOR.GREY_LIGHT }}
      >
        <Stack
          width={'95%'}
          height={'3rem'}
          sx={{
            background: 'white',
            border: `1px solid ${grey[300]}`,
            borderRadius: '100px',
            padding: '8px 16px',
            overflow: 'hidden'
          }}
          direction={'row'}
          alignItems={'center'}
        >
          <InputCustomText placeholder="Tin nhắn..." sx={{ flexGrow: 1 }} />
          <Box
            ref={anchorElFile}
            onClick={() => setIsOpenMenuFile((pre) => !pre)}
            aria-controls={isOpenMenuFile ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpenMenuFile ? 'true' : undefined}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px',
              cursor: 'pointer'
            }}
          >
            <FileIcon sx={{ color: grey[600] }} />
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorElFile.current}
            open={isOpenMenuFile}
            onClose={() => setIsOpenMenuFile(false)}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem>
              <BrokenImageOutlinedIcon sx={{ color: 'grey', marginRight: '8px' }} />
              Tải hình ảnh
            </MenuItem>
            <MenuItem>
              <SmartDisplayOutlinedIcon sx={{ color: 'grey', marginRight: '8px' }} />
              Tải video
            </MenuItem>
            <MenuItem>
              <AudioFileOutlinedIcon sx={{ color: 'grey', marginRight: '8px' }} />
              Tải bản ghi âm
            </MenuItem>
            <MenuItem>
              <UploadFileOutlinedIcon sx={{ color: 'grey', marginRight: '8px' }} />
              Tải tệp tin file
            </MenuItem>
          </Menu>
          <IconButtonSendCustom sx={{ width: '35px', height: '35px' }}>
            <SendOutlined sx={{ transform: 'rotate(-25deg)', width: '20px' }} />
          </IconButtonSendCustom>
        </Stack>
      </Box>
    </Stack>
  );
};
export default AppLayout()(Chat);
