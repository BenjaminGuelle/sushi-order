import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

function Categories({categories, filterByType}) {
  return (
    <main>
      <div className="wrappers categories">
        <div className="list-categories">
        {
          categories.map((categorieObj, key) => (
            <Link to="/articles" key={key} className="btn-type" onClick={() => (filterByType(categorieObj.label))}>
              <img src={[categorieObj.picture]} />
              <span>
                {categorieObj.label}
              </span>
            </Link>
          ))
        }
        </div>
      </div>
    </main>
  );
}

export default Categories;