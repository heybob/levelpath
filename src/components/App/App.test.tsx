import renderer from 'react-test-renderer';
import { WikiDataProvider } from '@App/contexts/WikiDataProvider';
import { App } from '@App/components/App/App';

describe('Testing Header Component', () => {
  it('It should render Header Title', () => {
      const tree = renderer.create(
      <WikiDataProvider>
            <App />
        </WikiDataProvider>
      ).toJSON()
    expect(tree).toMatchSnapshot();
  });
});