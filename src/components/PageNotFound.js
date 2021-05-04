import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return(
    <div>
      404! <Link to='/'>Home</Link>
    </div>
  );
}

export default PageNotFound;