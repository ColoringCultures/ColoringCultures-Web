import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Title is required'),
  description: yup.string().required('Title is required'),
  redirect_url: yup.string().notRequired(),
  initial_image: yup
    .mixed()
    .test('required', 'You need to provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] && value[0].size <= 10000000;
    }),
  final_image: yup
    .mixed()
    .test('required', 'You need to provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] && value[0].size <= 10000000;
    }),
});
