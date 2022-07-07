function countPoints(rings: string): number {
    const rods = Array.from(Array(10));
    for (let i = 0; i < rods.length; i++) {
        rods[i] = new Set();
    }
    
    for (let i = 0; i < rings.length; i += 2) {
        rods[rings[i+1]].add(rings[i]);
    }
    
    let result = 0;
    for (const rod of rods) {
        result += rod.size === 3 ? 1 : 0;
    }
    
    return result;
}

export default countPoints;

