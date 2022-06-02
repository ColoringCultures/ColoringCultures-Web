import './AddAds.scss';
import { useForm } from 'react-hook-form';
import { schema } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';

const AddAds = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="root-ad">
          <div>
            <div className='ads-label'>
              <label>Ad title</label>
              <input
                type="text"
                placeholder="Enter a title for the ad"
                {...register('title')}
              />
              <p>{errors.title?.message}</p>
            </div>
            <div className='ads-label'>
              <label>Link to be redirected to</label>
              <input
                type="text"
                placeholder="Enter a link or URL"
                {...register('redirect_url')}
              />
              <p>{errors.redirect_url?.message}</p>
            </div>
            <div className='ads-label'>
              <label>Watch time</label>
              <input
                type="text"
                placeholder="Enter the amount of watching minutes"
                {...register('time_feed')}
              />
              <p>{errors.time_feed?.message}</p>
            </div>
          </div>
          <div>
            <div className='ads-label'>
              <label>People to be reached</label>
              <input
                type="text"
                placeholder="Enter a number"
                {...register('ad_target')}
              />
              <p>{errors.ad_target?.message}</p>
            </div>
            <div className="file-upload">
              <label>
                Choose the Ad file
                <label className="file-label">
                  <span>Choose a file</span>
                  <input
                    type={'file'}
                    placeholder="Choose a file"
                    {...register('file')}
                  />
                </label>
              </label>
              <p>{errors.file?.message}</p>
            </div>
          </div>
        </div>
        <button className="ad-button" type="submit">
          Create Ad
        </button>
      </form>
    </div>
  );
};

export default AddAds;
