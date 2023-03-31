import propTypes from 'prop-types';
import ArticleBox from '../ArticleBox/ArticleBox';
import './ArticlesBoxes.scss';

const ArticlesBoxes = ({ data }) => {
  console.log(data[0]);
  return (
    <div className="articlesBoxes">
      {data.map((article) => (
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
      ))}
    </div>
  );
};

export default ArticlesBoxes;

ArticlesBoxes.propTypes = {
  data: propTypes.array.isRequired,
};
