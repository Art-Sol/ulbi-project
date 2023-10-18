import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entitie/Country';
import { Currency } from 'entitie/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
    const data = {
      username: 'test',
      age: 22,
      country: Country.Belarus,
      lastname: 'Pupkin',
      first: 'Vasya',
      city: 'Saint-Petersburg',
      currency: Currency.USD,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
