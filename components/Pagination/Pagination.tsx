import React from 'react';
import style from './Pagination.module.scss';
import classNames from 'classnames';

type Props = {
  isShowNext: boolean;
  isShowPrev: boolean;
  handlePage: (direction: string) => void;
};

const Pagination: React.FC<Props> = ({
  isShowNext,
  isShowPrev,
  handlePage,
}) => {
  const pageBtnClass = classNames({
    [style.pageBtn]: true,
    animate__animated: true,
    animate__fadeInDown: true,
  });

  return (
    <div className={style.page}>
      <div className={pageBtnClass}>
        {isShowPrev ? (
          <button onClick={() => handlePage('prev')}>上一页</button>
        ) : null}
      </div>
      <div className={pageBtnClass}>
        {isShowNext ? (
          <button onClick={() => handlePage('next')}>下一页</button>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
