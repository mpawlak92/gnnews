import axios from 'axios';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import ArticlesBoxes from '../../components/ArticlesBoxes/ArticlesBoxes';
import { useSelector } from 'react-redux';
import { listViewState } from '../../slices/ViewSlice';

const Content = ({ country }) => {
  const [data, setData] = useState([]);

  const viewState = useSelector(listViewState);
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
  }, [country]);
  return (
    <div>
      {viewState === true ? (
        <ArticlesList data={data} />
      ) : (
        <ArticlesBoxes data={data} />
      )}
    </div>
  );
};

export default Content;

Content.propTypes = {
  country: propTypes.string.isRequired,
};
