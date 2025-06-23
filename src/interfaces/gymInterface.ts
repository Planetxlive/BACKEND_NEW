export interface GymCreate {
    userId: string;
    gymName: string;
    locationLatitude: number;
    locationLongitude: number;
    yearOfGym: number;
    description: string;
    photos: string[];
    videos: string[];
    lockerFacility: boolean;
    timing: any;
    categories: string[];
    rateCard?: string;
    website?: string;
    services: string[];
    benefits: string[];
    pricing: any;
    amenities: string[];
    availableSports: string[];
    strengthEquipments: string[];
    cardioEquipments: string[];
    rules: string[];
    gender: string;
    counsellingServices: any;
    socialMediaLinks: any;
}

export interface GymUpdate {
    gymName?: string;
    locationLatitude?: number;
    locationLongitude?: number;
    yearOfGym?: number;
    description?: string;
    photos?: string[];
    videos?: string[];
    lockerFacility?: boolean;
    timing?: any;
    categories?: string[];
    rateCard?: string | null;
    website?: string | null;
    services?: string[];
    benefits?: string[];
    pricing?: any;
    amenities?: string[];
    availableSports?: string[];
    strengthEquipments?: string[];
    cardioEquipments?: string[];
    rules?: string[];
    gender?: "Male" | "Female" | "Unisex";
    counsellingServices?: any;
    socialMediaLinks?: any;
}
