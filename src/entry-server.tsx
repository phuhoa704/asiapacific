import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from "react-router-dom/server";
import { Location } from 'react-router-dom';
import { store } from "./redux/store";
import { Provider } from "react-redux";

export function render(url: string | Partial<Location<any>>, context: any) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  )
  return { html }
}
