
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.10.1
 * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
 */
Prisma.prismaVersion = {
  client: "6.10.1",
  engine: "9b628578b3b7cae625e8c927178f15a170e74a9c"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isSubscribed: 'isSubscribed',
  created_at: 'created_at',
  whatsappMobile: 'whatsappMobile',
  mobile: 'mobile',
  role: 'role',
  state: 'state',
  city: 'city',
  latitude: 'latitude',
  longitude: 'longitude',
  coverURL: 'coverURL',
  isDeleted: 'isDeleted'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  razorpayOrderId: 'razorpayOrderId',
  razorpayPaymentId: 'razorpayPaymentId',
  razorpaySignature: 'razorpaySignature',
  amount: 'amount',
  currency: 'currency',
  status: 'status',
  method: 'method',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BlogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  views: 'views',
  title: 'title',
  excerpt: 'excerpt',
  image: 'image',
  tags: 'tags',
  category: 'category',
  content: 'content',
  location: 'location',
  contactInfo: 'contactInfo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LikeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  blogId: 'blogId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  blogId: 'blogId',
  comment: 'comment',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GymScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  gymName: 'gymName',
  locationLatitude: 'locationLatitude',
  locationLongitude: 'locationLongitude',
  yearOfGym: 'yearOfGym',
  description: 'description',
  photos: 'photos',
  videos: 'videos',
  lockerFacility: 'lockerFacility',
  timing: 'timing',
  categories: 'categories',
  rateCard: 'rateCard',
  website: 'website',
  services: 'services',
  benefits: 'benefits',
  pricing: 'pricing',
  amenities: 'amenities',
  availableSports: 'availableSports',
  strengthEquipments: 'strengthEquipments',
  cardioEquipments: 'cardioEquipments',
  rules: 'rules',
  gender: 'gender',
  counsellingServices: 'counsellingServices',
  socialMediaLinks: 'socialMediaLinks',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ParkingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  description: 'description',
  latitude: 'latitude',
  longitude: 'longitude',
  price: 'price',
  yearOfParking: 'yearOfParking',
  parkingType: 'parkingType',
  vacancies: 'vacancies',
  size: 'size',
  photos: 'photos',
  videos: 'videos',
  amenities: 'amenities',
  accessibility: 'accessibility',
  capacity: 'capacity',
  security: 'security',
  operatingHours: 'operatingHours',
  booking: 'booking',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PayingGuestsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subCategory: 'subCategory',
  roomDetails: 'roomDetails',
  mealDetails: 'mealDetails',
  availabilityStatus: 'availabilityStatus',
  availableFrom: 'availableFrom',
  ageOfProperty: 'ageOfProperty',
  description: 'description',
  amenities: 'amenities',
  rules: 'rules',
  otherFeatures: 'otherFeatures',
  societyBuildingFeatures: 'societyBuildingFeatures',
  nearbyPlaces: 'nearbyPlaces',
  pricing: 'pricing',
  safetyFeatures: 'safetyFeatures',
  communityFeatures: 'communityFeatures',
  images: 'images',
  videos: 'videos',
  verification: 'verification',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  gymId: 'gymId',
  parkingId: 'parkingId',
  pgId: 'pgId',
  eventSpaceId: 'eventSpaceId',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EventSpaceScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subCategory: 'subCategory',
  type: 'type',
  propertyDetails: 'propertyDetails',
  pricing: 'pricing',
  amenities: 'amenities',
  facilities: 'facilities',
  availableSpaces: 'availableSpaces',
  bookingDetails: 'bookingDetails',
  additionalServices: 'additionalServices',
  rules: 'rules',
  nearbyPlaces: 'nearbyPlaces',
  availabilityStatus: 'availabilityStatus',
  ageOfProperty: 'ageOfProperty',
  description: 'description',
  images: 'images',
  videos: 'videos',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Payment: 'Payment',
  Blog: 'Blog',
  Like: 'Like',
  Comment: 'Comment',
  Gym: 'Gym',
  Parking: 'Parking',
  PayingGuests: 'PayingGuests',
  Review: 'Review',
  EventSpace: 'EventSpace'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
