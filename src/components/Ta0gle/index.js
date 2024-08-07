import React from 'react';
import Search from './Search';
import Main from './Main';

export function Ta0gle({ route = 'main', query = '', onSearch, goMain }) {
  if (route === 'main') return <Main onSearch={onSearch} />;
  else return <Search goMain={goMain} onSearch={onSearch} query={query} />;
}

export default Ta0gle;
