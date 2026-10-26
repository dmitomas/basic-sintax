export function romanToInteger(str) {
    let result = 0;
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = 0; i < str.length; ++i) {
        const this_val = values[str[i]];
        const next_val = values[str[i + 1]];
        if (this_val < next_val) {
            result -= this_val;
        } else {
            result += this_val;
        }
    }
    return result;
}
