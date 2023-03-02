function numSort(n, numbers) {
    numbers.sort((a, b) => {
        if(a.length !== b.length) return a.length - b.length;
        return a.localeCompare(b);
    });

    return numbers;
}