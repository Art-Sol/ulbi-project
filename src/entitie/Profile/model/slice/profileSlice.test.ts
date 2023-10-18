import { Country } from 'entitie/Country';
import { Currency } from 'entitie/Currency';
import { updateProfileData } from 'entitie/Profile';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'test',
  age: 22,
  country: Country.Belarus,
  lastname: 'Pupkin',
  first: 'Vasya',
  city: 'Saint-Petersburg',
  currency: Currency.USD,
};

describe('profileSlice', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test canselEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: 'Oleg' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: 'Misha',
      }),
    )).toEqual({
      form: { username: 'Misha' },
    });
  });

  test('test updateProfileData service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test updateProfileData service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data,
      form: { ...data, username: 'Oleg' },
      readonly: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled({ ...data, username: 'Pavlik' }, ''),
    )).toEqual({
      isLoading: false,
      data: { ...data, username: 'Pavlik' },
      form: { ...data, username: 'Pavlik' },
      readonly: true,
      validateErrors: undefined,
    });
  });
});
