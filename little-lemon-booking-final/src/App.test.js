import { fireEvent, getAllByLabelText, getAllByPlaceholderText, getByLabelText, getByPlaceholderText, render, screen } from '@testing-library/react';
import Main from './Main';

test('Renders the booking form heading', () => {
  render(<Main />);
  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
});

test('Test updateTimes function', () => {

  const updateTimes = jest.fn();
  const fetchAPI = jest.fn();
  
  const { getByPlaceholderText } = render(<Main updateTimes={updateTimes} fetchAPI={fetchAPI} />);

  const datefield = getByPlaceholderText('Please select a date');
  
  fireEvent.change(datefield,{taget: {value: '2024-10-03'}});

  expect(updateTimes).toHaveBeenCalled;
  expect(fetchAPI).toHaveBeenCalled;
  expect(fetchAPI).toHaveReturned;
});

test('Test initializeTimes function', () => {

  const initializeTimes = jest.fn();
  const fetchAPI = jest.fn();
  
  render(<Main initializeTimes={initializeTimes} fetchAPI={fetchAPI} />);

  expect(initializeTimes).toHaveBeenCalled;
  expect(fetchAPI).toHaveBeenCalled;
  expect(fetchAPI).toHaveReturned;
});