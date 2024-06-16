import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import COLOR from '../../constants/color';
import RoutePath from '../../constants/route';
import useSearchParamObj from '../../hooks/useSearchParamObj';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import Styling from '../Styling';

const { StyledLink, StyledBadge } = Styling;
const GroupItem = memo(({ avatar, groupId, name }) => {
  const obj = useSearchParamObj();
  const id = obj.g;
  return (
    <StyledLink
      to={`${RoutePath.group}?g=${groupId}`}
      sx={{ backgroundColor: `${groupId == id ? COLOR.PINK_LIGHT : 'unset'}`, width: '100%' }}
    >
      <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
        <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <AvatarGroup avatar={avatar} />
        </StyledBadge>

        <Box sx={{ marginLeft: '8px' }}>
          <Typography fontSize={'18px'} fontWeight={500}>
            {name}
          </Typography>
        </Box>
      </Box>
    </StyledLink>
  );
});

export default GroupItem;
