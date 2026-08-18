export const createSlug = (title: string) => {
    const wordSplit = title.toLowerCase().split(" ").join("-");
    
    return wordSplit;
}