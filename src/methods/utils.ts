export const formatValue = (percent: number, amount: number): number => {
    const math = (percent / 100) * amount;
    return math
}