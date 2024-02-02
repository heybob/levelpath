import renderer from 'react-test-renderer';
import { Button } from "./Button";

describe('Testing Loading Indicator Component', () => {
  it('It should render a button with name ClickMe', () => {
      const tree = renderer.create(<Button name="Click Me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('It should render a disabled Click Me Button', () => {
    const tree = renderer.create(<Button name="Click Me" disabled={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
});
