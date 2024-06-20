import { Avatar, Box, Container, Paper, Stack, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import TableDataGrid from '../../components/Admin/TableDataGrid';
import RenderFile from '../../components/RenderFile';
import COLOR from '../../constants/color';
import { rows } from '../../lib/sampleData';

const columns = [
  { field: 'id', headerClassName: 'header-custom', headerName: 'ID', width: 200 },
  {
    field: 'attchments',
    headerClassName: 'header-custom',
    headerName: 'Message Attachments',
    width: 300,
    renderCell: (params) => {
      const attchments = params.row.attchments;
      if (attchments.length === 0)
        return (
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '14px' }}>Không đính kèm tệp</Typography>
          </Box>
        );
      return (
        <>
          {attchments.map((file) => {
            return (
              <Box sx={{ width: '60%', height: '100%' }} key={file.url}>
                <a href={file.url} target="_blank" download>
                  <RenderFile url={file.url} style={{ width: '100%', height: '100%' }} type={file.type} />
                </a>
              </Box>
            );
          })}
        </>
      );
    }
  },
  { field: 'messageContent', headerClassName: 'header-custom', headerName: 'Message Content', width: 250 },
  {
    field: 'sender',
    headerClassName: 'header-custom',
    headerName: 'Send By',
    width: 250,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={1} alignItems={'center'} sx={{ height: '100%' }}>
          <Avatar src={params.row.sender.avatar} alt={params.row.sender.name} />
          <Typography>{params.row.sender.name}</Typography>
        </Stack>
      );
    }
  },
  { field: 'chatId', headerClassName: 'header-custom', headerName: 'Chat', width: 200 },
  { field: 'isGroup', headerClassName: 'header-custom', headerName: 'Group Chat', width: 200 },
  {
    field: 'create',
    headerClassName: 'header-custom',
    headerName: 'Time',
    width: 250,
    renderCell: (params) => {
      return (
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '14px' }}>
            {moment(params.row.create).format('MMMM Do YYYY, h:mm:ss A')}
          </Typography>
        </Box>
      );
    }
  }
];
const MessageManage = () => {
  const [rowsData, setRowsData] = useState([]);
  useEffect(() => {
    setRowsData(rows.messages.map((message) => ({ ...message, id: message._id })));
  }, []);
  return (
    <Container sx={{ background: COLOR.GREY_LIGHT, width: '100%', height: '100vh' }}>
      <Paper elevation={2} sx={{ borderRadius: '10px', boxShadow: 'none', padding: '20px 0' }}>
        <Typography sx={{ fontSize: '32px', textAlign: 'center' }}>All Messages</Typography>
      </Paper>
      <Box sx={{ height: '80%', width: '100%' }}>
        <TableDataGrid columns={columns} rows={rowsData} rowHeight={120} />
      </Box>
    </Container>
  );
};

export default MessageManage;
