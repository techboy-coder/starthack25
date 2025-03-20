
export function downsample<T>(nums: T[], max: number): T[] {
    const length = nums.length;
    if (length <= max) return nums; // If array is already small enough, no need to downsample

    const chunkSize = Math.ceil(length / max); // The size of each chunk
    const downsampled: T[] = [];

    for (let i = 0; i < length; i += chunkSize) {
        const chunk = nums.slice(i, i + chunkSize);

        if (typeof chunk[0] === 'number') {
            // If the element is a number, calculate the average
            const avg =
                chunk.reduce((sum, num) => (typeof num === 'number' ? sum + num : sum), 0) / chunk.length;
            downsampled.push(avg as any); // Push average for number arrays
        } else {
            // For non-number types (strings, dates, etc.), just push the first element
            downsampled.push(chunk[0]); // Or implement other logic to select elements
        }
    }

    return downsampled;
}