import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";
import {
	googleProvider,
	auth,
	createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
	// handle incase of api failure try catch
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		put(googleSignInFailure(error));
	}
}
export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* userSagas() {
	yield all([call(onGoogleSignInStart)]);
}
