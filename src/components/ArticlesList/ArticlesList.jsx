import propTypes from 'prop-types';
import ArticlesListItem from '../ArticlesListItem/ArticleListItem';
import './ArticlesList.scss';
const ArticlesList = ({ data }) => {
  
  return (
    <div className="articleList">
      <table>
        <thead>
          <tr>
            <th>Title:</th>
            <th>Source</th>
            <th>Published date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((article) => (
            <ArticlesListItem
              key={article.title}
              title={article.title}
              source={article.source.name}
              publishedDate={article.publishedAt}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesList;

ArticlesList.propTypes = {
  data: propTypes.array.isRequired,
};
