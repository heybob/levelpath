import renderer from 'react-test-renderer';
import { WikiDataProvider } from '../../contexts/WikiDataProvider';
import { Header } from "./Header"

describe('Testing Header Component', () => {
  it('It should render Header Title', () => {
      const tree = renderer.create(
      <WikiDataProvider>
            <Header />
        </WikiDataProvider>
      ).toJSON()
    expect(tree).toMatchSnapshot();
  });
});
