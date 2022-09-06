import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  redirect_url: yup.string().required('URL is required'),
  time_feed: yup
    .number()
    .positive()
    .integer()
    .typeError('Watch time must be a number')
    .required('Watch Time is required'),
  ad_target: yup
    .number()
    .positive()
    .integer()
    .typeError('Target must be a number')
    .required('Target is required'),
  description: yup.string().required('Description is required'),
  container_color: yup.string().required('Color is required'),
  background_color: yup.string().required('Background color is required'),
  file: yup
    .mixed()
    .test('required', 'You need to provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] && value[0].size <= 100000000;
    }),
});
