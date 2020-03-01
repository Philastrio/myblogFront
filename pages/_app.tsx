import * as React from "react";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import configureStore from "../store/configureStore";
import Layout from "../components/Layout";
import "../styles/index.css";

const Myblog = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component />
      </Layout>
    </Provider>
  );
};

export default withRedux(configureStore)(Myblog);
