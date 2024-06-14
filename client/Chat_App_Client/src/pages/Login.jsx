import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Avatar, Box, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { blue, grey, red } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInputText from '../components/FormInputText';
import Styling from '../components/Styling';
import { bioValidator, nameValidator, passwordValidator, usernameValidator } from '../utils/validation';

const { VisualInput } = Styling;
const Login = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm();
  console.log('Login');
  const [preview, setPreview] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin((pre) => !pre);
  };
  //Xử lý preview ảnh
  const fileAvatar = watch('upload_avatar');
  useEffect(() => {
    if (!fileAvatar) {
      setPreview(undefined);
      return;
    }
    const file = fileAvatar[0];
    if (file.size > 500000) {
      setError('upload_avatar', { error: 'File too large' });
      return;
    }
    const objectUrl = window.URL.createObjectURL(new Blob([file], { type: file.type }));
    setPreview(objectUrl);
    clearErrors('upload_avatar');
    // free memory when ever this component is unmounted
    return () => window.URL.revokeObjectURL(objectUrl);
  }, [fileAvatar, setError, clearErrors]);
  return (
    <Container maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px',
          width: '100%'
        }}
      >
        {isLogin ? (
          <>
            <Typography variant={'h5'}>Login</Typography>
            <Box component={'form'} noValidate sx={{ width: '100%', marginTop: '20px' }}>
              <Stack spacing={2}>
                <TextField variant={'outlined'} type="text" fullWidth label="Tên đăng nhập" />
                <TextField variant={'outlined'} fullWidth label="Mật khẩu" type="password" />
                <Button variant="contained" fullWidth type="submit">
                  Đăng Nhập
                </Button>
              </Stack>
              <Typography textAlign={'center'} mt={2}>
                Hoặc
              </Typography>
              <Typography
                sx={{ cursor: 'pointer' }}
                color={blue[500]}
                textAlign={'center'}
                mt={2}
                onClick={toggleLogin}
              >
                Đăng Ký
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Typography variant={'h5'}>Register</Typography>

            <Box
              component={'form'}
              onSubmit={handleSubmit((data) => console.log(data))}
              noValidate
              sx={{ width: '100%' }}
            >
              <Box mt={2} sx={{ position: 'relative', display: 'flex', align: 'center', justifyContent: 'center' }}>
                <IconButton
                  component="label"
                  sx={{
                    background: 'rgba(0,0,0,0.4)',
                    '&:hover': { background: 'rgba(0,0,0,0.2)' },
                    position: 'absolute',
                    bottom: '-5px',
                    transform: 'translateX(66%)',
                    zIndex: 1
                  }}
                >
                  <PhotoCameraIcon style={{ color: grey[300] }} />
                  <VisualInput type="file" name="upload_avatar" {...register('upload_avatar')} accept="image/*" />
                </IconButton>
                <Avatar sx={{ width: 85, height: 85 }} src={preview} />
              </Box>
              <Box mb={4}>
                {errors.upload_avatar?.error && (
                  <Typography color={red[600]} fontSize={14} textAlign={'center'}>
                    {errors.upload_avatar.error}
                  </Typography>
                )}
              </Box>
              <Stack spacing={2}>
                <FormInputText
                  name="name"
                  control={control}
                  label="Tên người dùng"
                  rules={nameValidator}
                  errors={errors}
                />
                <FormInputText name="bio" control={control} label="Mô tả" rules={bioValidator} errors={errors} />
                <FormInputText
                  name="username"
                  control={control}
                  label="Tên đăng nhập"
                  rules={usernameValidator}
                  errors={errors}
                />
                <FormInputText
                  name="password"
                  control={control}
                  label="Mật khẩu"
                  rules={passwordValidator}
                  errors={errors}
                  type="password"
                />
                {/* <TextField variant={'outlined'} type="text" fullWidth label="Tên người dùng" />
                <TextField variant={'outlined'} type="text" fullWidth label="Mô tả" />
                <TextField variant={'outlined'} type="text" fullWidth label="Tên đăng nhập" />
                <TextField variant={'outlined'} fullWidth label="Mật khẩu" type="password" /> */}
                <Button variant="contained" fullWidth type="submit">
                  Đăng Ký
                </Button>
              </Stack>
              <Typography textAlign={'center'} mt={2}>
                Hoặc
              </Typography>
              <Typography
                sx={{ cursor: 'pointer' }}
                color={blue[500]}
                textAlign={'center'}
                mt={2}
                onClick={toggleLogin}
              >
                Đăng Nhập
              </Typography>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};
export default Login;
