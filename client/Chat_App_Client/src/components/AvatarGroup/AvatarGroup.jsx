import Avatar from '@mui/material/Avatar';
import AvatarGroupMui from '@mui/material/AvatarGroup';
const AvatarGroup = ({ avatar }) => {
  return (
    <AvatarGroupMui max={3} spacing={'small'}>
      {avatar.map((item) => {
        return <Avatar key={item} src={item} />;
      })}
    </AvatarGroupMui>
  );
};

export default AvatarGroup;
