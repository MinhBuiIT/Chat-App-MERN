import { Box, Stack, Typography } from '@mui/material';
import ChatItem from '../ChatItem';

const ChatList = ({ chatList, newMessageAlert, onlineList }) => {
  return (
    <Box paddingTop={2}>
      <Typography variant="h5" fontWeight={600} paddingLeft={'16px'}>
        Messages
      </Typography>
      <Stack mt={4}>
        {chatList.map((chat) => {
          const { name, avatar, isGroup, _id, members } = chat;
          const newMessageCount = newMessageAlert.find((messageObj) => messageObj._id === _id)?.count ?? 0;
          const isOnline = members.some((member) => {
            return onlineList.includes(member);
          });
          return (
            <ChatItem
              key={_id}
              name={name}
              avatar={avatar}
              isGroup={isGroup}
              chatId={_id}
              isOnline={isOnline}
              newMessageCount={newMessageCount}
            ></ChatItem>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ChatList;
