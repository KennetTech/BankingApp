import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class BankSystem extends React.Component{
  render() {
    return (
    <div className='banksystem'>
      <div className='banksystemnavbar'>
      <Navbar />
      </div>
        <div className='AppPage'>
        <AppPage />
        </div>
    </div>
    );
    
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <a href="#home" class="active">Home</a>
        <a href="#news">Accounts</a>
        <a href="#contact">Loan</a>
        <a href="#about">Support</a>
      </div>

    );
  }
}

class AppPage extends React.Component {
  render () {
    return (
      <h1>This is the main page</h1>

    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BankSystem />);