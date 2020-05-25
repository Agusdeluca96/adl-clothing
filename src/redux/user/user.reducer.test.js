import UserActionTypes from './user.types';
import userReducer, { INITIAL_STATE } from './user.reducer';

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should set currentUser to payload on signInSuccess action', () => {
    const mockUser = { id: 1, displayName: 'Yihua' };

    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser
      }).currentUser
    ).toEqual(mockUser);
  });

  it('should set currentUser to null on signOutSuccess action', () => {
    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_OUT_SUCCESS
      }).currentUser
    ).toBe(null);
  });

  it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
    const mockError = {
      message: 'errored',
      code: 404
    };

    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);

    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);

    expect(
      userReducer(INITIAL_STATE, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: mockError
      }).error
    ).toBe(mockError);
  });
});
