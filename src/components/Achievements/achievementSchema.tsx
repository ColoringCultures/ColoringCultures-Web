import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  tasks: yup.array().of(
    yup.object().shape({
      criteria: yup
        .number()
        .positive()
        .integer()
        .typeError('Criteria must be a number')
        .required('Criteria is required'),
    })
  ),
  criteria1: yup
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
