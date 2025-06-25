export interface ParkingCreate {
    userId: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    price: any;
    yearOfParking: number;
    parkingType: string;
    vacancies: number;
    size: string;
    photos: string[];
    videos: string[];
    amenities: string[];
    accessibility: string;
    capacity: number;
    security: string[];
    operatingHours: any;
    booking: any;
}

export interface ParkingUpdate extends Partial<ParkingCreate> { }
