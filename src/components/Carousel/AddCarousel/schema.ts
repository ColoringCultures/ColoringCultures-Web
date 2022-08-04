import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  url: yup.string().notRequired(),
  image: yup
    .mixed()
    .test('required', 'You need to provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      return value && value[0] && value[0].size <= 10000000;
    }),
});
