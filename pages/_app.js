// this is like root page in react
import React from "react";
import { wrapper, store } from "../redux/store";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
