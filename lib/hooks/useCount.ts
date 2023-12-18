import { useState, useCallback, useMemo } from 'react';

export function useCount(initialValue: number, max: number, min = 0, step = 1) {
	const [count, setCount] = useState(initialValue);

	const increment = useCallback(
		() => setCount((current) => (current + step > max ? max : current + step)),
		[max, step]
	);

	const decrement = useCallback(
		() => setCount((current) => (current - step < min ? min : current - step)),
		[min, step]
	);

	const safeSetCount = useCallback(
		(value: number) => {
			if (value > max || value < min) {
				throw new Error(
					`${value} ist außerhalb des erlaubten Bereiches von ${min} bis ${max}!`
				);
			}

			setCount(value);
		},
		[min, max]
	);

	const reset = useCallback(() => setCount(initialValue), [initialValue]);

	const isMax = count === max;
	const isMin = count === min;

	return useMemo(
		() => ({
			count,
			setCount: safeSetCount,
			increment,
			decrement,
			reset,
			isMax,
			isMin,
		}),
		[count, isMax, isMin, increment, decrement, reset, safeSetCount]
	);
}
