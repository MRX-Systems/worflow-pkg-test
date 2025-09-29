import { describe, test, expect } from 'bun:test';

import { add } from '#/add';

describe('add function', () => {
	test('should return the sum of two numbers', () => {
		expect(add(2, 3)).toBe(5);
	});
});