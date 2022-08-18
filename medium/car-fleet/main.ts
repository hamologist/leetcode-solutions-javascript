function carFleet(target: number, position: number[], speed: number[]): number {
    const stack = [];
    
    const carMetadata = [];
    for (let i = 0; i < position.length; i++) {
        carMetadata.push({ position: position[i], speed: speed[i] });
    }
    carMetadata.sort((a, b) => b.position - a.position);
    
    for (const carMetadatum of carMetadata) {
        const arrive = (target - carMetadatum.position) / carMetadatum.speed;
        
        if (stack.length !== 0 && stack[stack.length - 1] < arrive) {
            stack.push(arrive);
        } else if (stack.length === 0) {
            stack.push(arrive);
        }
    }
    
    return stack.length;
};

export default carFleet;

