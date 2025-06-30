// interfaces/eventSpaceInterface.ts

export interface EventSpaceCreate {
    userId: string;
    subCategory?: string;
    type?: string;
    propertyDetails?: object;
    pricing?: object;
    amenities?: object;
    facilities?: object;
    availableSpaces?: object;
    bookingDetails?: object;
    additionalServices?: object;
    rules?: object;
    nearbyPlaces?: object;
    availabilityStatus?: string;
    ageOfProperty?: number;
    description?: string;
    images?: string[];
    videos?: string[];
    verification?: object;
}

export interface EventSpaceUpdate {
    subCategory?: string;
    type?: string;
    propertyDetails?: object;
    pricing?: object;
    amenities?: object;
    facilities?: object;
    availableSpaces?: object;
    bookingDetails?: object;
    additionalServices?: object;
    rules?: object;
    nearbyPlaces?: object;
    availabilityStatus?: string;
    ageOfProperty?: number;
    description?: string;
    images?: string[];
    videos?: string[];
    verification?: object;
}
