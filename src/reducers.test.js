import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"; 

import * as actions from './actions';
import * as reducers from './reducers';

describe('searchRobots', () => {
    const initalStateSearch ={
        searchField: ''
    }
    it('should return the intial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initalStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})



describe('requestRobots', () => {
    const initialStateRobots ={
        robots: [],
        isPending: false,
    }

    it('should return the intial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({
            robots: [],
            isPending: true
        })
    })
    

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload:[{
                id: '1',
                name: 'dotun',
                email: "dotun@gmail.com"
            }]
        })).toEqual({
            robots: [{
                id: '1',
                name: 'dotun',
                email: "dotun@gmail.com"
            }],
            isPending: false
        })
    })
    

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: "NOOOO!!!"
        })).toEqual({
            error: "NOOOO!!!",
            robots: [],
            isPending: false
        })
    })
    
})