import renderer from 'react-test-renderer';
import { ErrorModal } from "./ErrorModal";

describe('Testing Loading Indicator Component', () => {
  it('It should render loading indicator', () => {
      const tree = renderer.create(<ErrorModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
