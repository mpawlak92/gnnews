import { useDispatch, useSelector } from 'react-redux';
import { viewChnge, listViewState } from '../../slices/ViewSlice';
import '../ChangeArticlesViewBtn/ChangeArticlesViewBtn.scss';

const ChangeArticlesViewBtn = () => {
  const dispatch = useDispatch();
  const viewState = useSelector(listViewState);

  const changeViewBtnStyle = viewState ? 'thumbinal-view' : 'buleted-list-view';
  const handleChangeView = () => {
    dispatch(viewChnge());
  };

  return (
    <>
      <button
        className={changeViewBtnStyle + ' change-view-btn'}
        onClick={handleChangeView}
        aria-label="button to switch the view from list to cards and back"
      ></button>
    </>
  );
};

export default ChangeArticlesViewBtn;
