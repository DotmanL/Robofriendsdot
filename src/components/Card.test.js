
import React from 'react'
import { shallow } from 'enzyme';
import Card from './Card';
import toJson from "enzyme-to-json";

//enzyme testing
/*it("expect to render card component", () =>{
expect(shallow(<Card />).length).toEqual(1)
})
*/


//snapshot testing
it("expect to return Card component", () => {
    const wrapper = shallow(<Card />);
    expect(
      toJson(wrapper)
    ).toMatchSnapshot();
  });