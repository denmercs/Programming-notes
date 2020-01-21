# React

### What is react?

- client side Javascript Library
- component based
- library

### Create react app

```javascript
npx create-react-app folder-name
```

### Index.html

```html
<body>
	<div id="root"></div> //--> this is where all the render takes place from react (index.js)
</body>
```

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

```

### 1. Class Base components

```jsx
import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>								// --> need to have 1 parent element
        <h3>React is running</h3>
      </Fragment>
    );
  }
}

export default App;

```

### JSX

- jasvascript syntax extension - so that we will be able to write html components in xml way.

```jsx
<h3 className = "header-name">Testing</h3>
<label htmlFor="name">name</label>
```

0