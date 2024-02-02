import renderer from 'react-test-renderer';
import { Card } from "./Card";

describe('Testing Card Component', () => {
  it('It should render card will all props', () => {
      const tree = renderer.create(<Card name="Chris Cornell" title="A Great American Singer" birthYear="1965" extract="Chris Cornell was the singer of Soundgarden and Audioslave." thumbnail="christ.jpg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Card renders with no image', () => {
      const tree = renderer.create(<Card name="Chris Cornell" title="A Great American Singer" birthYear="1965" extract="Chris Cornell was the singer of Soundgarden and Audioslave." thumbnail="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Card renders with empty props', () => {
    const tree = renderer.create(<Card name="" title="" birthYear="" extract="" thumbnail="" />).toJSON();
  expect(tree).toMatchSnapshot(); 
  });
});
