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
  icon_image: yup
    .mixed()
    .test('required', 'Provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] && value[0].size <= 200000;
    }),
  colored_icon_image: yup
    .mixed()
    .test('required', 'Provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] && value[0].size <= 200000;
    }),
  dark_icon_image: yup
    .mixed()
    .test('required', 'Provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] && value[0].size <= 200000;
    }),
});
