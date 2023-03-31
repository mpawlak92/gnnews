import propTypes from 'prop-types';
import ArticleBox from '../ArticleBox/ArticleBox';
import ArticlesListItem from '../ArticlesListItem/ArticleListItem';
import { useSelector } from 'react-redux';
import { listViewState } from '../../slices/ViewSlice';
import './RenderArticles.scss';

const RenderArticles = ({ data }) => {
  const viewState = useSelector(listViewState);
  return (
    <div className="articlesBoxes">
      {data.map((article) =>
        viewState ? (
          <ArticleBox
            key={article.title}
            img={article.urlToImage}
            description={article.description}
            title={article.title}
            source={article.source.name}
            publishedDate={article.publishedAt}
            author={article.author}
            url={article.url}
            content={article.content}
          />
        ) : (
          <ArticlesListItem
            key={article.title}
            title={article.title}
            source={article.source.name}
            publishedDate={article.publishedAt}
          />
        )
      )}
    </div>
  );
};

export default RenderArticles;

RenderArticles.propTypes = {
  data: propTypes.array.isRequired,
};
