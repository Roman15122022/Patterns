// const vs enum

const Color = {
    RED: 'red',
    BLUE: 'blue',
    GREEN: 'green',
} as const;

type Color = typeof Color[keyof typeof Color];