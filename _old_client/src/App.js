import React, { Component } from "react";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="language" content="English" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Content management system</title>
          {/* Include github primer UI kit */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          />
        </Helmet>
        <section class="section">
          <div class="container">
            <h1 class="title">Section</h1>
            <h2 class="subtitle">
              A simple container to divide your page into{" "}
              <strong>sections</strong>, like the one you're currently reading
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
