const validSquare = function(p1, p2, p3, p4) {
    const distance = (a, b) => {
        return (b[1] - a[1]) * (b[1] - a[1]) + (b[0] - a[0]) * (b[0] - a[0]);
    };
    
    const p = [p1, p2, p3, p4];
    p.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    return distance(p[0], p[1]) !== 0
      && distance(p[0], p[1]) === distance(p[1], p[3])
      && distance(p[1], p[3]) === distance(p[3], p[2])
      && distance(p[3], p[2]) === distance(p[2], p[0])
      && distance(p[0], p[3]) === distance(p[1], p[2]);
};

export default validSquare;

