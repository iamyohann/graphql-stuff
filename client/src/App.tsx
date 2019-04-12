import React, { Component } from "react";
import Helmet from "react-helmet";

import { createGlobalStyle } from "styled-components";

import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import { ChildDataProps, graphql } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, FAQ, Page } from "./pages";
import Navigation from "./Navigation";

const client = new ApolloClient({
  uri: "http://localhost:4466"
});

const GlobalStyle = createGlobalStyle`
  body, html {
    font-size: 14px;
  }
`;

const ROUTES_QUERY = gql`
  query {
    pages {
      id
      title
      subtitle
      route {
        exact
        path
        name
      }
      pageType
      homeContent {
        hero
      }
      faqContent {
        faqs {
          title
          body
        }
      }
    }
  }
`;

type Response = {
  pages: Page[];
};

type ChildProps = ChildDataProps<{}, Response, {}>;

const withCharacter = graphql<{}, Response, {}, ChildProps>(ROUTES_QUERY);

const componentWithProps = (page: Page) => {
  switch (page.pageType) {
    case "HOME":
      return <Home page={page} content={page.homeContent} />;
    case "FAQ":
      return <FAQ page={page} content={page.faqContent} />;
    default:
      // default to home, maybe I should throw an error here or 404 instead?
      return <Home page={page} content={page.homeContent} />;
  }
};

const Routes = withCharacter(({ data: { loading, pages, error } }) => {
  if (loading) return <div style={{
    width: '100vw',
    height: '100vh',
    background: '#000',
    color: 'white'
  }}>Loading</div>;
  if (error) return <h1>ERROR</h1>;
  return (
      
      <Router>
        <Navigation pages={pages || []} />
        {pages &&
          pages.map(p => (
            <div>
              <Route
                exact={p.route.exact}
                path={p.route.path}
                render={() => componentWithProps(p)}
              />
            </div>
          ))}
      </Router>
  );
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyle />
        <div className="App">
          <Helmet>
            <meta lang="en" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
            />
            <script
              defer
              src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Tenor+Sans" rel="stylesheet" />
          
          </Helmet>
          <Routes />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
