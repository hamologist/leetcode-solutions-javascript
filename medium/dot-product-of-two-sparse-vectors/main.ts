class SparseVector {
    public nums: number[];
    
    constructor(nums: number[]) {
		this.nums = nums;
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
		let result = 0;
        for (let i = 0; i < this.nums.length; i++) {
            result += this.nums[i] * vec.nums[i];
        }
        return result;
    }
}

class SparseVectorUsingPairs {
    public pairs: [number, number][];
    
    constructor(nums: number[]) {
		this.pairs = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                this.pairs.push([i, nums[i]]);
            }
        }
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVectorUsingPairs): number {
		let result = 0;
        let [i, j] = [0, 0];
        
        while (i < this.pairs.length && j < vec.pairs.length) {
            if (this.pairs[i][0] === vec.pairs[j][0]) {
                result += this.pairs[i][1] * vec.pairs[j][1];
                i += 1;
                j += 1;
            } else if (this.pairs[i][0] > vec.pairs[j][0]) {
                j += 1;
            } else {
                i += 1;
            }
        }
        
        return result;
    }
}

export default {
    SparseVector,
    SparseVectorUsingPairs,
};
