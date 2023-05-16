import React, { useState } from 'react';
import './MySelect.css';

function MySelect() {
  const [isShow, setIsShow] = useState(false);
  const showItems = () => {
    return !isShow ? setIsShow(true) : setIsShow(false);
  };

  return (
    <div className="custom-select">
      <select className="input-select">
        <option className="option" value="За последний месяц">
          За последний месяц
        </option>
        <option className="option" value="За последний месяц">
          За последний год
        </option>
        <option className="option" value="За последний месяц">
          За последние 6 месяцев
        </option>
      </select>
      <div
        className={!isShow ? 'select-selected' : 'select-selected select-arrow-active'}
        onClick={showItems}
      >
        За последний месяц
      </div>
      <div className={!isShow ? 'select-items items-hide' : 'select-items'}>
        <div>За последний год</div>
        <div>За последние 6 месяцев</div>
      </div>
    </div>
  );
}

export default MySelect;
