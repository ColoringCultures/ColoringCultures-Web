import { useContext, useEffect, useRef, useState } from 'react';
import '../AddImages.scss';
import { UserContext } from '../../../../UserContext';
import axios from 'axios';

const Categories = ({ setCategory }: any) => {
  const { token } = useContext(UserContext);
  const [openDD, setOpenDD] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [errMessage, setErrMessage] = useState('');

  const container = useRef<HTMLDivElement>(null);
  const [categoryName, setCategoryName] = useState('Select a category');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (container.current && !container.current.contains(e.target as Node)) {
        setOpenDD(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('https://colorculture.herokuapp.com/colorapp/category/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.data);
        })
        .catch((err) => {
          setErrMessage(err.message);
        });
    };
    fetchData();
  }, [token]);

  return (
    <div className="dd-root">
      <label>Category</label>
      <div className="dd-container" ref={container}>
        <div className="dd-container__button">
          <button
            onClick={() => {
              setOpenDD(!openDD);
            }}
            type="button"
          >
            {categoryName}
            <img
              src={require('../../../../assets/Icon feather-chevron-down.png')}
              alt="icon"
            />
          </button>
          <p>Add new category</p>
        </div>
        {openDD && (
          <div className="dd-container__dropdown">
            {errMessage && <p>{errMessage}</p>}
            {data.map((data) => {
              return (
                <ul
                  key={data.id}
                  onClick={() => {
                    setCategory(data.id);
                    setCategoryName(data.name);
                    setOpenDD(false);
                  }}
                >
                  <li>{data.name}</li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Categories;
