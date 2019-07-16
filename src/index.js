import React from 'react';
import ReactDOM from 'react-dom';

const Component1 = () => React.createElement("h2", null, "Hello World(Component1)");
class Component2 extends React.Component {
    render() {
        return <h2>Hello World(Component2)</h2>;
    }
}
class Component3 extends React.PureComponent {
    render() {
        return <h2>Hello World(Component3)</h2>;
    }
}

const App = () => (
    <div>
        <Component1 />
        <Component2 />
        <Component3 />
    </div>
);

ReactDOM.render(
    <App />,
    document.querySelector("body")
);
