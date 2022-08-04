import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import './AddCarousel.scss';
import { schema } from './schema';

const AddCarousel = () => {
  const {
    register,
    handleSubmit,
    // reset,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="slideshow__root">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-rr">
          <div className="form-rr__one">
            <div className="ss__label">
              <label>Image Description</label>
              <textarea
                placeholder="Enter the image description here"
                {...register('title')}
              />
            </div>
            <div className="ss__label">
              <label>Link</label>
              <input
                type="text"
                placeholder="Enter a link or URL"
                {...register('url')}
              />
            </div>
          </div>
          <div className="form-rr__two">
            <div>
              <label>
                Upload Image
                <label className="slideshow__upload">
                  <span>Choose a file</span>
                  <input
                    type={'file'}
                    placeholder="Choose a file"
                    accept=".svg, .png, .jpg, .jpeg"
                    {...register('image')}
                  />
                </label>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCarousel;
