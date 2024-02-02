import renderer from 'react-test-renderer';
import { WikiDataProvider } from '../../contexts/WikiDataProvider';
import { Paginator } from "./Paginator"

describe('Testing Header Component', () => {
  it('It should render Header Title', () => {
        const handlePagechange = jest.fn();
      const tree = renderer.create(
      <WikiDataProvider>
            <Paginator handlePageChange={handlePagechange}/>
        </WikiDataProvider>
      ).toJSON()
    expect(tree).toMatchSnapshot();
  });
});
