import React from 'react';
import ReactDom from 'react-dom';
import Button from './../Button';
import  { render, cleanup } from '@testing-library/react';
//@testing-library/jest-dom is imported in setUpTests.js

//clean up some temporary state that is created by each test
afterEach(cleanup);

//tests if the component renders ok 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Button></Button>, div)
});

//tests if button label is what is stated on line 16
it('renders button correctly', () => {
    const {getByTestId} =  render(<Button label='click me please'></Button>) //test case
    expect(getByTestId('button')).toHaveTextContent('click me please') //what is expected
});


