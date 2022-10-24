export interface IProduct {
    [index: string]: any;
    id?: number;
    title: string;
    price: number;
    category: {
        id: number;
        name: string;
        image: string;
    }
    description: string;
    images: string[];
}

export interface ICategory {
    id: number;
    name: string;
    image: string;
}

export interface IUser {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: string;
}