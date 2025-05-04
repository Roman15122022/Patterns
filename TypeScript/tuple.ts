type Tuple = [number, string, 5]

const tuple: Tuple = [1, '2', 5]

//use state

type SetState<T> = [T, (newValue: T) => void];