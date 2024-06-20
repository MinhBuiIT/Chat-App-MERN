import { Avatar, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import COLOR from '../../constants/color';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import Styling from '../Styling';

const { StyledBadge, StyledLink, TypographyCustomDot } = Styling;
const ChatItem = ({ chatId, newMessageCount, avatar = [], isGroup = false, isOnline, name }) => {
  const { id } = useParams();
  return (
    <StyledLink to={`/chat/${chatId}`} sx={{ backgroundColor: `${chatId == id ? COLOR.PINK_LIGHT : 'unset'}` }}>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant={`${isOnline && 'dot'}`}
        >
          {isGroup ? <AvatarGroup avatar={avatar} /> : <Avatar sx={{ width: 55, height: 55 }} src={avatar[0]} />}
        </StyledBadge>

        <Box sx={{ marginLeft: '8px' }}>
          <Typography variant="h6" fontWeight={500}>
            {name}
          </Typography>
          <TypographyCustomDot fontSize={12} fontWeight={400} color={grey[700]}>
            Hôm nay bạn như thế nào?
          </TypographyCustomDot>
        </Box>
        {newMessageCount !== 0 && (
          <Box
            sx={{
              position: 'absolute',
              right: '10px',
              bottom: '10px',
              fontSize: '12px',
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `${COLOR.PINK}`
            }}
          >
            {newMessageCount > 5 ? '5+' : newMessageCount}
          </Box>
        )}
      </Box>
    </StyledLink>
  );
};

export default ChatItem;
