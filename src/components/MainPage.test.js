
import React from 'react'
import { shallow} from 'enzyme';
import MainPage from './MainPage';
import toJson from "enzyme-to-json";

let wrapper;
beforeEach(() => {
  const mockProps ={
    onRequestRobots: jest.fn(),
    robots:[],
    searchField: "",
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
})


it("renders MainPage without crashing", () => {
    expect(
      toJson(wrapper)
    ).toMatchSnapshot();
    })


    it('filters robot correctly', () => {
      const mockProps2 ={
        onRequestRobots: jest.fn(),
        robots: [{
          id: 3,
          name: 'dotun',
          email: 'dotun@gmail.com'
        }],
        searchField: "dotun",
        isPending: false
      }

      const wrapper2 = shallow(<MainPage { ...mockProps2}/>)
      expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'dotun',
        email: 'dotun@gmail.com'
      }]);
    })


    
    it('filters robot correctly 2', () => {
      const mockProps3 ={
        onRequestRobots: jest.fn(),
        robots: [{
          id: 3,
          name: 'dotun',
          email: 'dotun@gmail.com'
        }],
        searchField: "a",
        isPending: false
      }
      const filteredRobots = []
      const wrapper2 = shallow(<MainPage { ...mockProps3}/>)
      expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots)
    })
    