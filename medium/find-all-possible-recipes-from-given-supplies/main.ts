function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    // First load all of our supplies into a Set for quick lookup
    const suppliesLookup = new Set(supplies);
    
    const recipeLookup = new Map();
    for (let i = 0; i < recipes.length; i++) {
        recipeLookup.set(recipes[i], ingredients[i]);
    }
    
    const result = [];
    
    // Add all recipes to a stack for checking
    let checklist = [...recipes];
    
    // Iterate over each recipe, checking its ingredients against our current supplies
    while (checklist.length !== 0) {
        const newChecklist: string[] = [];
        let reattempt = false;
        while (checklist.length !== 0) {
            const recipe = checklist.pop()!;
            const neededIngredients = recipeLookup.get(recipe);
            
            // Determine if the needed ingredients for a recipe exists.
            let found = true;
            for (const ingredient of neededIngredients) {
                if (!suppliesLookup.has(ingredient)) {
                    found = false;
                    break;
                }
            }

            // If a recipe is found, set the reattempt boolean to true and add it to the supplies Set
            // Any recipet that can't be created, is added to the check stack for reattempts   
            if (found) {
                result.push(recipe);
                suppliesLookup.add(recipe);
                reattempt = true;
            } else {
                newChecklist.push(recipe);
            }
        }

        if (reattempt) {
            checklist = newChecklist;   
        }
    }

    
    return result;
};

export default findAllRecipes;

