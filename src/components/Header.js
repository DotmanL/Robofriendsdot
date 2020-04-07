import React, {Component} from 'react';
import CounterButton from './CounterButton';

// In most cases, instead of writing shouldComponentUpdate()
// by hand, you can inherit from React.PureComponent. It is
// equivalent to implementing shouldComponentUpdate() with a
// shallow comparison of current and previous props and state.

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    console.log('header')
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <h2 className='f3 thelas, georgia, serif'><a href= "https://github.com/DotmanL"
                style={{ textDecoration: 'none', color: 'yellow'}}>My Github</a></h2>
        <CounterButton />
      </div>
    );
  }
};

export default Header;