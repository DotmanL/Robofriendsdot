
import React from 'react'
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import toJson from "enzyme-to-json";


it("expect to return Card component", () => {
    
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color= {mockColor}/>);
    expect(
      toJson(wrapper)
    ).toMatchSnapshot();
  });


  it('correctly increament the counter,', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color= {mockColor}/>);
 
    wrapper.find('[id="counter"]').simulate('click')
   expect(wrapper.state()).toEqual({ count: 2 })
    expect(wrapper.props().color).toEqual('red')
})