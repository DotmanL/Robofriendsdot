
import React from 'react'
import { shallow } from 'enzyme';
import CardList from './CardList';
import toJson from "enzyme-to-json";


it("expect to return CardList component", () => {
    const mockRobots =[
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    const wrapper = shallow(<CardList robots= {mockRobots}/>);
    expect(
      toJson(wrapper)
    ).toMatchSnapshot();
  });