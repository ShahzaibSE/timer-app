import React from 'react';
import {EnzymeAdapter, shallow} from "enzyme"
// import {render} from 'enzyme';
import App from './App';
import Grid from "./components/Grid/Grid"
// test('renders the component', () => {
//   const component = shallow(<App/>)
//   expect(component).toMatchSnapshot() 
// });

describe('App', () => {
  let container: any

  beforeEach(() => container = shallow(<App/>))

  it("checking presence of App component", () => {
    expect(container).toMatchSnapshot()
  })

  it('checking presence of Grid component', () => {
    expect(container.containsMatchingElement(<Grid/>)).toEqual(true)
  })

})
