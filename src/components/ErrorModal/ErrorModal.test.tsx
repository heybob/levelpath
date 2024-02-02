import renderer from 'react-test-renderer';
import { ErrorModal } from "./ErrorModal";

describe('Testing Error Modal Component', () => {
  it('It should render Error Modal', () => {
      const tree = renderer.create(<ErrorModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
