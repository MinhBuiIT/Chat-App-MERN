import { Avatar, Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { memo } from 'react';
import RenderFile from '../RenderFile';

const MessageItem = memo(({ message, avatar, time, isSameSender, name, attchments = [] }) => {
  return (
    <Box my={1}>
      <Stack
        direction={isSameSender ? 'row' : 'row-reverse'}
        justifyContent={isSameSender ? 'end' : 'start'}
        alignItems={'end'}
        spacing={1}
      >
        <Stack direction={'column'} alignItems={isSameSender ? 'end' : 'start'} sx={{ width: '100%' }}>
          {message && (
            <Box
              sx={{
                fontSize: '14px',
                color: `${isSameSender ? 'white' : 'black'}`,
                background: `${isSameSender ? '#000' : '#fff'}`,
                padding: '12px',
                borderRadius: '10px',
                maxWidth: '50%',
                width: 'fit-content'
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  textAlign: `${isSameSender ? 'right' : 'left'}`,
                  marginBottom: '12px'
                }}
              >
                {isSameSender ? 'Bạn' : name.split(' ')[0]}
              </Typography>
              {message}
            </Box>
          )}
          {attchments.length > 0 &&
            attchments.map((file) => {
              return (
                <Box sx={{ width: '40%', height: '150px' }} key={file.url}>
                  <a href={file.url} target="_blank" download>
                    <RenderFile url={file.url} style={{ width: '100%', height: '100%' }} type={file.type} />
                  </a>
                </Box>
              );
            })}
        </Stack>
        <Avatar src={avatar} />
      </Stack>
      <Box
        color={grey[500]}
        sx={{
          width: '100%',
          textAlign: `${isSameSender ? 'right' : 'left'}`,
          fontSize: '12px',
          paddingRight: '50px',
          paddingLeft: '50px'
        }}
      >
        {time}
      </Box>
    </Box>
  );
});

export default MessageItem;
