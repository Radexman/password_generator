import { setupStore } from '../../app/store';

describe('password slice should', () => {
	let store = setupStore();

	test('initially set status to null', () => {
		const state = store.getState().password;

		expect(state.password).toBe(null);
	});
});
