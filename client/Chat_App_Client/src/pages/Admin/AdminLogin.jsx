import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import COLOR from '../../constants/color';

const AdminLogin = () => {
  const [secretKey, setSecretKey] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(secretKey);
  };
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: COLOR.BG_LINEAR_GRADIENT_GRAY
      }}
    >
      <Paper elevation={2} sx={{ padding: '24px', borderRadius: '8px', width: '300px' }}>
        <Typography variant="h5" textAlign={'center'}>
          Admin Login
        </Typography>
        <Box component={'form'} mt={2} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Secret Key"
            fullWidth
            type="password"
            onChange={(e) => setSecretKey(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ width: '100%', textAlign: 'center', marginTop: '16px' }}>
            Xác nhận
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
