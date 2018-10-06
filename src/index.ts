import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, { AppProps } from './app/App';
import { AppStore } from './app/AppStore';
import './styles/index.css';

const render = async (
  root: any,
  props: AppProps,
  container = document.getElementById('root')
) => {
  ReactDOM.render(
    React.createElement(root, props),
    container
  );
};

render(App, { appStore: new AppStore() } as AppProps);
