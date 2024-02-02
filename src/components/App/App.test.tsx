import renderer from 'react-test-renderer';
import { WikiDataProvider } from '@App/contexts/WikiDataProvider';
import { App } from '@App/components/App/App';

describe('Testing App Component', () => {
  it('It should render App', () => {
      const tree = renderer.create(
      <WikiDataProvider>
            <App />
        </WikiDataProvider>
      ).toJSON()
    expect(tree).toMatchSnapshot();
  });
});