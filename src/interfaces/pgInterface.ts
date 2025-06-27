interface PayingGuestsCreate {
    userId: string;
    subCategory: string[];
    roomDetails?: object;
    mealDetails?: object;
    availabilityStatus?: string;
    availableFrom?: Date;
    ageOfProperty?: number;
    description?: string;
    amenities?: object;
    rules?: object;
    otherFeatures?: object;
    societyBuildingFeatures?: object;
    nearbyPlaces?: object;
    pricing?: object;
    safetyFeatures?: object;
    communityFeatures?: object;
    images?: string[];
    videos?: string[];
    verification?: object;
}

interface PayingGuestsUpdate {
    subCategory?: string[];
    roomDetails?: object;
    mealDetails?: object;
    availabilityStatus?: string;
    availableFrom?: Date;
    ageOfProperty?: number;
    description?: string;
    amenities?: object;
    rules?: object;
    otherFeatures?: object;
    societyBuildingFeatures?: object;
    nearbyPlaces?: object;
    pricing?: object;
    safetyFeatures?: object;
    communityFeatures?: object;
    images?: string[];
    videos?: string[];
    verification?: object;
}

export { PayingGuestsCreate, PayingGuestsUpdate };