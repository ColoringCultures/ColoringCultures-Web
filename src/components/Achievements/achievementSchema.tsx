import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  task: yup.string().required('Description is required'),

  redirect_url: yup.string().required('Url is required'),
  criteria: yup
    .number()
    .positive()
    .integer()
    .typeError('Criteria must be a number')
    .required('Criteria is required'),
  icon_image: yup.mixed().required('File is required'),
  colored_icon_image: yup.mixed().required('File is required'),
  dark_icon_image: yup.mixed().required('File is required'),
});
