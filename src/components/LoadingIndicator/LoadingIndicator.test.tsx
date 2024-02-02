import renderer from 'react-test-renderer';
import { LoadingIndicator } from "./LoadingIndicator";

describe('Testing Loading Indicator Component', () => {
  it('It should render loading indicator', () => {
      const tree = renderer.create(<LoadingIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
