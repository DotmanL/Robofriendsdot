import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

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
   constructor() {
        super ()
        this.state = {
            count: 1

        }
    } 

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

        return (
            <div className="tc">
                <Header count={this.state.count}/>
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