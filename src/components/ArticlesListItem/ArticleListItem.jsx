import propTypes from 'prop-types';
const ArticlesListItem = ({ title, source, publishedDate }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{source}</td>
      <td>{publishedDate.split('T')[0]}</td>
    </tr>
  );
};

export default ArticlesListItem;

ArticlesListItem.propTypes = {
  title: propTypes.string.isRequired,
  source: propTypes.string.isRequired,
  publishedDate: propTypes.string.isRequired,
};
