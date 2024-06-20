import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { List, ListItem, Typography } from '@mui/material';
import Styling from '../Styling';

const linkData = [
  {
    path: 'dashboard',
    icon: <DashboardOutlinedIcon />,
    name: 'Dashboard'
  },
  {
    path: 'user',
    icon: <AdminPanelSettingsOutlinedIcon />,
    name: 'User'
  },
  {
    path: 'group',
    icon: <Groups3OutlinedIcon />,
    name: 'Group'
  },
  {
    path: 'message',
    icon: <MessageOutlinedIcon />,
    name: 'Message'
  },
  {
    path: 'logout',
    icon: <LogoutOutlinedIcon />,
    name: 'Logout'
  }
];
const { StyledLink } = Styling;
const ListMenuSideBar = ({ locationPath, handleClose }) => {
  return (
    <List sx={{ marginTop: '24px' }} style={{ width: '100%' }}>
      {linkData.map((item) => {
        const pathConfig = locationPath.split('/');
        let path = pathConfig[pathConfig.length - 1];
        if (path === 'admin') path = 'dashboard';
        const matched = path === item.path;
        const styleMatch = matched
          ? { background: 'rgba(0,0,0,1)', color: 'white' }
          : { background: 'none', color: 'black' };
        return (
          <ListItem sx={{ width: '100%', padding: 0, margin: 0 }} key={item.path}>
            <StyledLink
              onClick={() => handleClose && handleClose()}
              to={item.path}
              sx={{
                width: '100%',
                padding: '20px 50px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px',
                zIndex: 1,
                ...styleMatch,
                '&:hover': {
                  background: `${!matched ? 'rgba(0,0,0,0.1)' : '#000'} `,
                  color: `${!matched ? '#000' : 'white'}`
                }
              }}
            >
              {item.icon}
              <Typography>{item.name}</Typography>
            </StyledLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListMenuSideBar;
