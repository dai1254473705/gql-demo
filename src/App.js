import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

const fetcher = createGraphiQLFetcher({
  url: window.location.origin + '/graphql',
});


function App() {
  return (
     <GraphiQL fetcher={fetcher} editorTheme={'dracula'} />
  );
}

export default App;
