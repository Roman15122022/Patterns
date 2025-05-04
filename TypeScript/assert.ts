function assertNotNull(value: number): asserts value is null {
    if (value === null) {
        throw new Error('value is null');
    }
}