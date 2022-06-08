import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  redirect_url: yup.string().required('Url is required'),
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
  file: yup.mixed().required('File is required'),
});
