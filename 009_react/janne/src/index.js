import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Toggle from '../src/components/Toggle'
import LoginControl from '../src/components/LoginControl'
import NumberList from '../src/components/NumberList'


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  const element = (
    <h1>
      Hello, {getGreeting(user)}!
    </h1>
  );
  
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);
function Welcome(props) {
    return <h1>Hello there, {props.name}</h1>;
}

// function App2() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
  
//   ReactDOM.render(
//     <App2 />,
//     document.getElementById('root')
//   );

function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  }
  
//   ReactDOM.render(<ActionLink/>, document.getElementById('root'));


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

const ele = <div>
        <ul>{listItems}</ul>
        <hr/>
        <NumberList/>
    </div>

ReactDOM.render(
   ele,
    document.getElementById('root')
  );

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
