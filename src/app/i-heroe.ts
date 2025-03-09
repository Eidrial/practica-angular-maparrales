export interface IHeroe {
    id: number;
    name: string;
    role: string;
    portrait: string;
    age: number;
    birthday: string;
    description: string;
    location: string;
    story: {
        summary: string;
    }
}
