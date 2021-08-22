import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

const { protocol,hostname } = window.location;
const fetcher = createGraphiQLFetcher({
  // url: window.location.origin + '/graphql',
  url: `${protocol}//${hostname}:4000` + '/graphql',
});


function App() {
  // editorTheme
  // https://codemirror.net/demo/theme.html#rubyblue
  return (
     <GraphiQL fetcher={fetcher} editorTheme={'dracula'} />
  );
}

export default App;
