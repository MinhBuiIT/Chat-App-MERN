import RegexSchema from '../constants/regex';

export const nameValidator = { required: 'Yêu cầu nhập tên người dùng' };
export const bioValidator = { required: 'Yêu cầu nhập mô tả người dùng' };
export const usernameValidator = {
  required: 'Yêu cầu nhập tên đăng nhập',
  pattern: {
    value: RegexSchema.Username,
    message: 'Tên đăng nhập là chữ cái tối thiểu 3 ký tự'
  }
};
export const passwordValidator = {
  required: 'Yêu cầu nhập mật khẩu',
  pattern: {
    value: RegexSchema.Password,
    message: 'Mật khẩu ít nhất 8 ký tự, ít nhất một ký tự đặc biệt,hoa,thường và một số'
  }
};
