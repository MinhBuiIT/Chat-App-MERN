import { Avatar, Box, Container, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import TableDataGrid from '../../components/Admin/TableDataGrid';
import AvatarGroup from '../../components/AvatarGroup/AvatarGroup';
import COLOR from '../../constants/color';
import { rows } from '../../lib/sampleData';

const columns = [
  { field: 'id', headerClassName: 'header-custom', headerName: 'ID', width: 200 },
  {
    field: 'avatars',
    headerClassName: 'header-custom',
    headerName: 'Avatar',
    width: 300,
    renderCell: (params) => {
      return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
          <AvatarGroup avatar={params.row.avatars} />
        </Box>
      );
    }
  },
  { field: 'name', headerClassName: 'header-custom', headerName: 'Name', width: 250 },
  { field: 'totalMember', headerClassName: 'header-custom', headerName: 'Total Members', width: 200 },
  {
    field: 'members',
    headerClassName: 'header-custom',
    headerName: 'Members',
    width: 450,
    renderCell: (params) => {
      const membersAvatar = params.row.members.map((member) => member.avatar);
      return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
          <AvatarGroup avatar={membersAvatar} max={100} />
        </Box>
      );
    }
  },
  { field: 'totalMessage', headerClassName: 'header-custom', headerName: 'Total Message', width: 200 },
  {
    field: 'creater',
    headerClassName: 'header-custom',
    headerName: 'Create By',
    width: 250,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={1} alignItems={'center'}>
          <Avatar src={params.row.creater.avatar} alt={params.row.creater.name} />
          <Typography>{params.row.creater.name}</Typography>
        </Stack>
      );
    }
  }
];
const GroupManage = () => {
  const [rowsData, setRowsData] = useState([]);
  useEffect(() => {
    setRowsData(rows.groups.map((group) => ({ ...group, id: group._id })));
  }, []);
  return (
    <Container sx={{ background: COLOR.GREY_LIGHT, width: '100%', height: '100vh' }}>
      <Paper elevation={2} sx={{ borderRadius: '10px', boxShadow: 'none', padding: '20px 0' }}>
        <Typography sx={{ fontSize: '32px', textAlign: 'center' }}>All Groups</Typography>
      </Paper>
      <Box sx={{ height: '80%', width: '100%' }}>
        <TableDataGrid columns={columns} rows={rowsData} />
      </Box>
    </Container>
  );
};

export default GroupManage;
