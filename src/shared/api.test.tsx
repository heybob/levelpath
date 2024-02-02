import { getWikiData } from "./api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => ({ test: 100 }),
  }),
) as jest.Mock;

it('Get WIKI Birth Data', async () => {
    const result = await getWikiData('05','03');
    expect(result.json()).toEqual({ test: 100 });
});