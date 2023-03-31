import axios from 'axios';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import RenderArticles from '../../components/RenderArticles/RenderArticles';
import { useDispatch } from 'react-redux';
import { seveNewPostsNuber } from '../../slices/FooterSlice';

const Content = ({ country }) => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=3c320fceb0f24a0dac73250963458ed0`;

  const fetchData = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        if (response.request.status === 200) {
          const allData = response.data.articles;
          setData(allData);
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
    handleNewPostsNumber();
  }, [country, data]);

  const handleNewPostsNumber = () => {
    dispatch(seveNewPostsNuber(data.length));
  };

  return <RenderArticles data={data} />;
};

export default Content;

Content.propTypes = {
  country: propTypes.string.isRequired,
};
