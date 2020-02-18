import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch (requestRobots())
    }
}
class App extends Component {
   /* constructor() {
        super ()
        this.state = {
            robots: [],
           // searchfield: ''

        }
    } */

    componentDidMount(){
        this.props.onRequestRobots();
    }
   /* onSearchChange= (event) =>{
            this.setState({searchfield: event.target.value})
                } */

    render() {
        const {searchField, onSearchChange, robots, isPending} =this.props;
        const filteredRobots= robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ?
        <h1>Loading</h1>:
        (
            <div className="tc">
                <h1 className='f1'>Robofriends</h1>
                <h2 className='f3 thelas, georgia, serif'><a href= "https://github.com/DotmanL"
                style={{ textDecoration: 'none', color: 'yellow'}}>My Github</a></h2>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);