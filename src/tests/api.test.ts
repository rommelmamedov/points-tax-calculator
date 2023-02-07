import { vi } from 'vitest';

import { fetchBracketsByYear } from '@points/api';

describe('fetchBracketsByYear', () => {
  it('should return undefined if there was an error while fetching the data', async () => {
    const year = 2023;
    const response = {
      ok: false,
      statusText: 'Error while fetching tax brackets',
    };

    global.fetch = vi.fn().mockResolvedValue(response);

    const result = await fetchBracketsByYear(year);

    expect(result).toBeUndefined();
  });
});
