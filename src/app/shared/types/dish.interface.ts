export interface Dish {
    title: string,
    description : string[],
    price: number,
    imageUrl?: string; 
    ingredients: string[]; 
    category: string;
    id: string;
}