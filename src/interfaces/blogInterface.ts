export interface BlogCreate {
    userId: string;
    blogType: string;
    title: string;
    description: string;
    longitude: number;
    latitude: number;
    contactInfo?: string;
    images?: string[];
}