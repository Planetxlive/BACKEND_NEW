
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Gym
 * 
 */
export type Gym = $Result.DefaultSelection<Prisma.$GymPayload>
/**
 * Model Parking
 * 
 */
export type Parking = $Result.DefaultSelection<Prisma.$ParkingPayload>
/**
 * Model PayingGuests
 * 
 */
export type PayingGuests = $Result.DefaultSelection<Prisma.$PayingGuestsPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model EventSpace
 * 
 */
export type EventSpace = $Result.DefaultSelection<Prisma.$EventSpacePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gym`: Exposes CRUD operations for the **Gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.GymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parking`: Exposes CRUD operations for the **Parking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parkings
    * const parkings = await prisma.parking.findMany()
    * ```
    */
  get parking(): Prisma.ParkingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payingGuests`: Exposes CRUD operations for the **PayingGuests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayingGuests
    * const payingGuests = await prisma.payingGuests.findMany()
    * ```
    */
  get payingGuests(): Prisma.PayingGuestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventSpace`: Exposes CRUD operations for the **EventSpace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventSpaces
    * const eventSpaces = await prisma.eventSpace.findMany()
    * ```
    */
  get eventSpace(): Prisma.EventSpaceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "payment" | "blog" | "like" | "comment" | "gym" | "parking" | "payingGuests" | "review" | "eventSpace"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Gym: {
        payload: Prisma.$GymPayload<ExtArgs>
        fields: Prisma.GymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findFirst: {
            args: Prisma.GymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findMany: {
            args: Prisma.GymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          create: {
            args: Prisma.GymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          createMany: {
            args: Prisma.GymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          delete: {
            args: Prisma.GymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          update: {
            args: Prisma.GymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          deleteMany: {
            args: Prisma.GymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          upsert: {
            args: Prisma.GymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          aggregate: {
            args: Prisma.GymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGym>
          }
          groupBy: {
            args: Prisma.GymGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymCountArgs<ExtArgs>
            result: $Utils.Optional<GymCountAggregateOutputType> | number
          }
        }
      }
      Parking: {
        payload: Prisma.$ParkingPayload<ExtArgs>
        fields: Prisma.ParkingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findFirst: {
            args: Prisma.ParkingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findMany: {
            args: Prisma.ParkingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          create: {
            args: Prisma.ParkingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          createMany: {
            args: Prisma.ParkingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          delete: {
            args: Prisma.ParkingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          update: {
            args: Prisma.ParkingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          deleteMany: {
            args: Prisma.ParkingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          upsert: {
            args: Prisma.ParkingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          aggregate: {
            args: Prisma.ParkingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParking>
          }
          groupBy: {
            args: Prisma.ParkingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingCountAggregateOutputType> | number
          }
        }
      }
      PayingGuests: {
        payload: Prisma.$PayingGuestsPayload<ExtArgs>
        fields: Prisma.PayingGuestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayingGuestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayingGuestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>
          }
          findFirst: {
            args: Prisma.PayingGuestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayingGuestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>
          }
          findMany: {
            args: Prisma.PayingGuestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>[]
          }
          create: {
            args: Prisma.PayingGuestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>
          }
          createMany: {
            args: Prisma.PayingGuestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayingGuestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>[]
          }
          delete: {
            args: Prisma.PayingGuestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>
          }
          update: {
            args: Prisma.PayingGuestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>
          }
          deleteMany: {
            args: Prisma.PayingGuestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayingGuestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayingGuestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>[]
          }
          upsert: {
            args: Prisma.PayingGuestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayingGuestsPayload>
          }
          aggregate: {
            args: Prisma.PayingGuestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayingGuests>
          }
          groupBy: {
            args: Prisma.PayingGuestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayingGuestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayingGuestsCountArgs<ExtArgs>
            result: $Utils.Optional<PayingGuestsCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      EventSpace: {
        payload: Prisma.$EventSpacePayload<ExtArgs>
        fields: Prisma.EventSpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventSpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventSpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>
          }
          findFirst: {
            args: Prisma.EventSpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventSpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>
          }
          findMany: {
            args: Prisma.EventSpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>[]
          }
          create: {
            args: Prisma.EventSpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>
          }
          createMany: {
            args: Prisma.EventSpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventSpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>[]
          }
          delete: {
            args: Prisma.EventSpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>
          }
          update: {
            args: Prisma.EventSpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>
          }
          deleteMany: {
            args: Prisma.EventSpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventSpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventSpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>[]
          }
          upsert: {
            args: Prisma.EventSpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSpacePayload>
          }
          aggregate: {
            args: Prisma.EventSpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventSpace>
          }
          groupBy: {
            args: Prisma.EventSpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventSpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventSpaceCountArgs<ExtArgs>
            result: $Utils.Optional<EventSpaceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    payment?: PaymentOmit
    blog?: BlogOmit
    like?: LikeOmit
    comment?: CommentOmit
    gym?: GymOmit
    parking?: ParkingOmit
    payingGuests?: PayingGuestsOmit
    review?: ReviewOmit
    eventSpace?: EventSpaceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    blogs: number
    likes: number
    comments: number
    gyms: number
    parkings: number
    payingGuests: number
    reviews: number
    eventSpaces: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    gyms?: boolean | UserCountOutputTypeCountGymsArgs
    parkings?: boolean | UserCountOutputTypeCountParkingsArgs
    payingGuests?: boolean | UserCountOutputTypeCountPayingGuestsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    eventSpaces?: boolean | UserCountOutputTypeCountEventSpacesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayingGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayingGuestsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSpaceWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    comments: number
    likes: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BlogCountOutputTypeCountCommentsArgs
    likes?: boolean | BlogCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }


  /**
   * Count Type GymCountOutputType
   */

  export type GymCountOutputType = {
    reviews: number
  }

  export type GymCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | GymCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymCountOutputType
     */
    select?: GymCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ParkingCountOutputType
   */

  export type ParkingCountOutputType = {
    reviews: number
  }

  export type ParkingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ParkingCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingCountOutputType
     */
    select?: ParkingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type PayingGuestsCountOutputType
   */

  export type PayingGuestsCountOutputType = {
    reviews: number
  }

  export type PayingGuestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | PayingGuestsCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * PayingGuestsCountOutputType without action
   */
  export type PayingGuestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuestsCountOutputType
     */
    select?: PayingGuestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayingGuestsCountOutputType without action
   */
  export type PayingGuestsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type EventSpaceCountOutputType
   */

  export type EventSpaceCountOutputType = {
    reviews: number
  }

  export type EventSpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | EventSpaceCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * EventSpaceCountOutputType without action
   */
  export type EventSpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpaceCountOutputType
     */
    select?: EventSpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventSpaceCountOutputType without action
   */
  export type EventSpaceCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    isSubscribed: boolean | null
    created_at: Date | null
    whatsappMobile: string | null
    mobile: string | null
    role: string | null
    state: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    coverURL: string | null
    isDeleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isSubscribed: boolean | null
    created_at: Date | null
    whatsappMobile: string | null
    mobile: string | null
    role: string | null
    state: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    coverURL: string | null
    isDeleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    isSubscribed: number
    created_at: number
    whatsappMobile: number
    mobile: number
    role: number
    state: number
    city: number
    latitude: number
    longitude: number
    coverURL: number
    isDeleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    isSubscribed?: true
    created_at?: true
    whatsappMobile?: true
    mobile?: true
    role?: true
    state?: true
    city?: true
    latitude?: true
    longitude?: true
    coverURL?: true
    isDeleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    isSubscribed?: true
    created_at?: true
    whatsappMobile?: true
    mobile?: true
    role?: true
    state?: true
    city?: true
    latitude?: true
    longitude?: true
    coverURL?: true
    isDeleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    isSubscribed?: true
    created_at?: true
    whatsappMobile?: true
    mobile?: true
    role?: true
    state?: true
    city?: true
    latitude?: true
    longitude?: true
    coverURL?: true
    isDeleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    isSubscribed: boolean
    created_at: Date
    whatsappMobile: string
    mobile: string | null
    role: string
    state: string
    city: string
    latitude: number | null
    longitude: number | null
    coverURL: string | null
    isDeleted: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isSubscribed?: boolean
    created_at?: boolean
    whatsappMobile?: boolean
    mobile?: boolean
    role?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    coverURL?: boolean
    isDeleted?: boolean
    blogs?: boolean | User$blogsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    gyms?: boolean | User$gymsArgs<ExtArgs>
    parkings?: boolean | User$parkingsArgs<ExtArgs>
    payingGuests?: boolean | User$payingGuestsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    eventSpaces?: boolean | User$eventSpacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isSubscribed?: boolean
    created_at?: boolean
    whatsappMobile?: boolean
    mobile?: boolean
    role?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    coverURL?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isSubscribed?: boolean
    created_at?: boolean
    whatsappMobile?: boolean
    mobile?: boolean
    role?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    coverURL?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    isSubscribed?: boolean
    created_at?: boolean
    whatsappMobile?: boolean
    mobile?: boolean
    role?: boolean
    state?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    coverURL?: boolean
    isDeleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isSubscribed" | "created_at" | "whatsappMobile" | "mobile" | "role" | "state" | "city" | "latitude" | "longitude" | "coverURL" | "isDeleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | User$blogsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    gyms?: boolean | User$gymsArgs<ExtArgs>
    parkings?: boolean | User$parkingsArgs<ExtArgs>
    payingGuests?: boolean | User$payingGuestsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    eventSpaces?: boolean | User$eventSpacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      gyms: Prisma.$GymPayload<ExtArgs>[]
      parkings: Prisma.$ParkingPayload<ExtArgs>[]
      payingGuests: Prisma.$PayingGuestsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      eventSpaces: Prisma.$EventSpacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      isSubscribed: boolean
      created_at: Date
      whatsappMobile: string
      mobile: string | null
      role: string
      state: string
      city: string
      latitude: number | null
      longitude: number | null
      coverURL: string | null
      isDeleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gyms<T extends User$gymsArgs<ExtArgs> = {}>(args?: Subset<T, User$gymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkings<T extends User$parkingsArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payingGuests<T extends User$payingGuestsArgs<ExtArgs> = {}>(args?: Subset<T, User$payingGuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventSpaces<T extends User$eventSpacesArgs<ExtArgs> = {}>(args?: Subset<T, User$eventSpacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly isSubscribed: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly whatsappMobile: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly latitude: FieldRef<"User", 'Float'>
    readonly longitude: FieldRef<"User", 'Float'>
    readonly coverURL: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.gyms
   */
  export type User$gymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    where?: GymWhereInput
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    cursor?: GymWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * User.parkings
   */
  export type User$parkingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    where?: ParkingWhereInput
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    cursor?: ParkingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * User.payingGuests
   */
  export type User$payingGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    where?: PayingGuestsWhereInput
    orderBy?: PayingGuestsOrderByWithRelationInput | PayingGuestsOrderByWithRelationInput[]
    cursor?: PayingGuestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayingGuestsScalarFieldEnum | PayingGuestsScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.eventSpaces
   */
  export type User$eventSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    where?: EventSpaceWhereInput
    orderBy?: EventSpaceOrderByWithRelationInput | EventSpaceOrderByWithRelationInput[]
    cursor?: EventSpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSpaceScalarFieldEnum | EventSpaceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amount: number | null
    currency: string | null
    status: string | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amount: number | null
    currency: string | null
    status: string | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    amount: number
    currency: number
    status: number
    method: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amount: number
    currency: string
    status: string
    method: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "razorpayOrderId" | "razorpayPaymentId" | "razorpaySignature" | "amount" | "currency" | "status" | "method" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      razorpayOrderId: string
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      amount: number
      currency: string
      status: string
      method: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly razorpayOrderId: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
    readonly razorpaySignature: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    views: number | null
  }

  export type BlogSumAggregateOutputType = {
    views: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    views: number | null
    title: string | null
    excerpt: string | null
    image: string | null
    category: string | null
    content: string | null
    location: string | null
    contactInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    views: number | null
    title: string | null
    excerpt: string | null
    image: string | null
    category: string | null
    content: string | null
    location: string | null
    contactInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    userId: number
    views: number
    title: number
    excerpt: number
    image: number
    tags: number
    category: number
    content: number
    location: number
    contactInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    views?: true
  }

  export type BlogSumAggregateInputType = {
    views?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    userId?: true
    views?: true
    title?: true
    excerpt?: true
    image?: true
    category?: true
    content?: true
    location?: true
    contactInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    userId?: true
    views?: true
    title?: true
    excerpt?: true
    image?: true
    category?: true
    content?: true
    location?: true
    contactInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    userId?: true
    views?: true
    title?: true
    excerpt?: true
    image?: true
    tags?: true
    category?: true
    content?: true
    location?: true
    contactInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    userId: string
    views: number
    title: string
    excerpt: string
    image: string
    tags: string[]
    category: string
    content: string
    location: string | null
    contactInfo: string | null
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    views?: boolean
    title?: boolean
    excerpt?: boolean
    image?: boolean
    tags?: boolean
    category?: boolean
    content?: boolean
    location?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Blog$commentsArgs<ExtArgs>
    likes?: boolean | Blog$likesArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    views?: boolean
    title?: boolean
    excerpt?: boolean
    image?: boolean
    tags?: boolean
    category?: boolean
    content?: boolean
    location?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    views?: boolean
    title?: boolean
    excerpt?: boolean
    image?: boolean
    tags?: boolean
    category?: boolean
    content?: boolean
    location?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    userId?: boolean
    views?: boolean
    title?: boolean
    excerpt?: boolean
    image?: boolean
    tags?: boolean
    category?: boolean
    content?: boolean
    location?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "views" | "title" | "excerpt" | "image" | "tags" | "category" | "content" | "location" | "contactInfo" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Blog$commentsArgs<ExtArgs>
    likes?: boolean | Blog$likesArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      views: number
      title: string
      excerpt: string
      image: string
      tags: string[]
      category: string
      content: string
      location: string | null
      contactInfo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Blog$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Blog$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Blog$likesArgs<ExtArgs> = {}>(args?: Subset<T, Blog$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly userId: FieldRef<"Blog", 'String'>
    readonly views: FieldRef<"Blog", 'Int'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly image: FieldRef<"Blog", 'String'>
    readonly tags: FieldRef<"Blog", 'String[]'>
    readonly category: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly location: FieldRef<"Blog", 'String'>
    readonly contactInfo: FieldRef<"Blog", 'String'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.comments
   */
  export type Blog$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Blog.likes
   */
  export type Blog$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    blogId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    blogId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    blogId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    blogId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    blogId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    blogId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    userId: string
    blogId: string
    createdAt: Date
    updatedAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    blogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    blogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    blogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userId?: boolean
    blogId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "blogId" | "createdAt" | "updatedAt", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      blogId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly blogId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
    readonly updatedAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    blogId: string | null
    comment: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    blogId: string | null
    comment: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    blogId: number
    comment: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    blogId?: true
    comment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    blogId?: true
    comment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    blogId?: true
    comment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    blogId: string
    comment: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    comment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    comment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    comment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    blogId?: boolean
    comment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "comment" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blogId: string
      comment: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly blogId: FieldRef<"Comment", 'String'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Gym
   */

  export type AggregateGym = {
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  export type GymAvgAggregateOutputType = {
    locationLatitude: number | null
    locationLongitude: number | null
    yearOfGym: number | null
  }

  export type GymSumAggregateOutputType = {
    locationLatitude: number | null
    locationLongitude: number | null
    yearOfGym: number | null
  }

  export type GymMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gymName: string | null
    locationLatitude: number | null
    locationLongitude: number | null
    yearOfGym: number | null
    description: string | null
    lockerFacility: boolean | null
    rateCard: string | null
    website: string | null
    gender: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GymMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gymName: string | null
    locationLatitude: number | null
    locationLongitude: number | null
    yearOfGym: number | null
    description: string | null
    lockerFacility: boolean | null
    rateCard: string | null
    website: string | null
    gender: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    userId: number
    gymName: number
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: number
    photos: number
    videos: number
    lockerFacility: number
    timing: number
    categories: number
    rateCard: number
    website: number
    services: number
    benefits: number
    pricing: number
    amenities: number
    availableSports: number
    strengthEquipments: number
    cardioEquipments: number
    rules: number
    gender: number
    counsellingServices: number
    socialMediaLinks: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GymAvgAggregateInputType = {
    locationLatitude?: true
    locationLongitude?: true
    yearOfGym?: true
  }

  export type GymSumAggregateInputType = {
    locationLatitude?: true
    locationLongitude?: true
    yearOfGym?: true
  }

  export type GymMinAggregateInputType = {
    id?: true
    userId?: true
    gymName?: true
    locationLatitude?: true
    locationLongitude?: true
    yearOfGym?: true
    description?: true
    lockerFacility?: true
    rateCard?: true
    website?: true
    gender?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    userId?: true
    gymName?: true
    locationLatitude?: true
    locationLongitude?: true
    yearOfGym?: true
    description?: true
    lockerFacility?: true
    rateCard?: true
    website?: true
    gender?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    userId?: true
    gymName?: true
    locationLatitude?: true
    locationLongitude?: true
    yearOfGym?: true
    description?: true
    photos?: true
    videos?: true
    lockerFacility?: true
    timing?: true
    categories?: true
    rateCard?: true
    website?: true
    services?: true
    benefits?: true
    pricing?: true
    amenities?: true
    availableSports?: true
    strengthEquipments?: true
    cardioEquipments?: true
    rules?: true
    gender?: true
    counsellingServices?: true
    socialMediaLinks?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gym to aggregate.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gyms
    **/
    _count?: true | GymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMaxAggregateInputType
  }

  export type GetGymAggregateType<T extends GymAggregateArgs> = {
        [P in keyof T & keyof AggregateGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGym[P]>
      : GetScalarType<T[P], AggregateGym[P]>
  }




  export type GymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
    orderBy?: GymOrderByWithAggregationInput | GymOrderByWithAggregationInput[]
    by: GymScalarFieldEnum[] | GymScalarFieldEnum
    having?: GymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymCountAggregateInputType | true
    _avg?: GymAvgAggregateInputType
    _sum?: GymSumAggregateInputType
    _min?: GymMinAggregateInputType
    _max?: GymMaxAggregateInputType
  }

  export type GymGroupByOutputType = {
    id: string
    userId: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos: string[]
    videos: string[]
    lockerFacility: boolean
    timing: JsonValue
    categories: string[]
    rateCard: string | null
    website: string | null
    services: string[]
    benefits: string[]
    pricing: JsonValue
    amenities: string[]
    availableSports: string[]
    strengthEquipments: string[]
    cardioEquipments: string[]
    rules: string[]
    gender: string
    counsellingServices: JsonValue
    socialMediaLinks: JsonValue
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  type GetGymGroupByPayload<T extends GymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymGroupByOutputType[P]>
            : GetScalarType<T[P], GymGroupByOutputType[P]>
        }
      >
    >


  export type GymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymName?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    yearOfGym?: boolean
    description?: boolean
    photos?: boolean
    videos?: boolean
    lockerFacility?: boolean
    timing?: boolean
    categories?: boolean
    rateCard?: boolean
    website?: boolean
    services?: boolean
    benefits?: boolean
    pricing?: boolean
    amenities?: boolean
    availableSports?: boolean
    strengthEquipments?: boolean
    cardioEquipments?: boolean
    rules?: boolean
    gender?: boolean
    counsellingServices?: boolean
    socialMediaLinks?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Gym$reviewsArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymName?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    yearOfGym?: boolean
    description?: boolean
    photos?: boolean
    videos?: boolean
    lockerFacility?: boolean
    timing?: boolean
    categories?: boolean
    rateCard?: boolean
    website?: boolean
    services?: boolean
    benefits?: boolean
    pricing?: boolean
    amenities?: boolean
    availableSports?: boolean
    strengthEquipments?: boolean
    cardioEquipments?: boolean
    rules?: boolean
    gender?: boolean
    counsellingServices?: boolean
    socialMediaLinks?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymName?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    yearOfGym?: boolean
    description?: boolean
    photos?: boolean
    videos?: boolean
    lockerFacility?: boolean
    timing?: boolean
    categories?: boolean
    rateCard?: boolean
    website?: boolean
    services?: boolean
    benefits?: boolean
    pricing?: boolean
    amenities?: boolean
    availableSports?: boolean
    strengthEquipments?: boolean
    cardioEquipments?: boolean
    rules?: boolean
    gender?: boolean
    counsellingServices?: boolean
    socialMediaLinks?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    userId?: boolean
    gymName?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    yearOfGym?: boolean
    description?: boolean
    photos?: boolean
    videos?: boolean
    lockerFacility?: boolean
    timing?: boolean
    categories?: boolean
    rateCard?: boolean
    website?: boolean
    services?: boolean
    benefits?: boolean
    pricing?: boolean
    amenities?: boolean
    availableSports?: boolean
    strengthEquipments?: boolean
    cardioEquipments?: boolean
    rules?: boolean
    gender?: boolean
    counsellingServices?: boolean
    socialMediaLinks?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gymName" | "locationLatitude" | "locationLongitude" | "yearOfGym" | "description" | "photos" | "videos" | "lockerFacility" | "timing" | "categories" | "rateCard" | "website" | "services" | "benefits" | "pricing" | "amenities" | "availableSports" | "strengthEquipments" | "cardioEquipments" | "rules" | "gender" | "counsellingServices" | "socialMediaLinks" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["gym"]>
  export type GymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Gym$reviewsArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gym"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gymName: string
      locationLatitude: number
      locationLongitude: number
      yearOfGym: number
      description: string
      photos: string[]
      videos: string[]
      lockerFacility: boolean
      timing: Prisma.JsonValue
      categories: string[]
      rateCard: string | null
      website: string | null
      services: string[]
      benefits: string[]
      pricing: Prisma.JsonValue
      amenities: string[]
      availableSports: string[]
      strengthEquipments: string[]
      cardioEquipments: string[]
      rules: string[]
      gender: string
      counsellingServices: Prisma.JsonValue
      socialMediaLinks: Prisma.JsonValue
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gym"]>
    composites: {}
  }

  type GymGetPayload<S extends boolean | null | undefined | GymDefaultArgs> = $Result.GetResult<Prisma.$GymPayload, S>

  type GymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymCountAggregateInputType | true
    }

  export interface GymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gym'], meta: { name: 'Gym' } }
    /**
     * Find zero or one Gym that matches the filter.
     * @param {GymFindUniqueArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymFindUniqueArgs>(args: SelectSubset<T, GymFindUniqueArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymFindUniqueOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymFindUniqueOrThrowArgs>(args: SelectSubset<T, GymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymFindFirstArgs>(args?: SelectSubset<T, GymFindFirstArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymFindFirstOrThrowArgs>(args?: SelectSubset<T, GymFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gyms
     * const gyms = await prisma.gym.findMany()
     * 
     * // Get first 10 Gyms
     * const gyms = await prisma.gym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymWithIdOnly = await prisma.gym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymFindManyArgs>(args?: SelectSubset<T, GymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gym.
     * @param {GymCreateArgs} args - Arguments to create a Gym.
     * @example
     * // Create one Gym
     * const Gym = await prisma.gym.create({
     *   data: {
     *     // ... data to create a Gym
     *   }
     * })
     * 
     */
    create<T extends GymCreateArgs>(args: SelectSubset<T, GymCreateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gyms.
     * @param {GymCreateManyArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymCreateManyArgs>(args?: SelectSubset<T, GymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gyms and returns the data saved in the database.
     * @param {GymCreateManyAndReturnArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymCreateManyAndReturnArgs>(args?: SelectSubset<T, GymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gym.
     * @param {GymDeleteArgs} args - Arguments to delete one Gym.
     * @example
     * // Delete one Gym
     * const Gym = await prisma.gym.delete({
     *   where: {
     *     // ... filter to delete one Gym
     *   }
     * })
     * 
     */
    delete<T extends GymDeleteArgs>(args: SelectSubset<T, GymDeleteArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gym.
     * @param {GymUpdateArgs} args - Arguments to update one Gym.
     * @example
     * // Update one Gym
     * const gym = await prisma.gym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymUpdateArgs>(args: SelectSubset<T, GymUpdateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gyms.
     * @param {GymDeleteManyArgs} args - Arguments to filter Gyms to delete.
     * @example
     * // Delete a few Gyms
     * const { count } = await prisma.gym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymDeleteManyArgs>(args?: SelectSubset<T, GymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymUpdateManyArgs>(args: SelectSubset<T, GymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms and returns the data updated in the database.
     * @param {GymUpdateManyAndReturnArgs} args - Arguments to update many Gyms.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GymUpdateManyAndReturnArgs>(args: SelectSubset<T, GymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gym.
     * @param {GymUpsertArgs} args - Arguments to update or create a Gym.
     * @example
     * // Update or create a Gym
     * const gym = await prisma.gym.upsert({
     *   create: {
     *     // ... data to create a Gym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gym we want to update
     *   }
     * })
     */
    upsert<T extends GymUpsertArgs>(args: SelectSubset<T, GymUpsertArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymCountArgs} args - Arguments to filter Gyms to count.
     * @example
     * // Count the number of Gyms
     * const count = await prisma.gym.count({
     *   where: {
     *     // ... the filter for the Gyms we want to count
     *   }
     * })
    **/
    count<T extends GymCountArgs>(
      args?: Subset<T, GymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymAggregateArgs>(args: Subset<T, GymAggregateArgs>): Prisma.PrismaPromise<GetGymAggregateType<T>>

    /**
     * Group by Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymGroupByArgs['orderBy'] }
        : { orderBy?: GymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gym model
   */
  readonly fields: GymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Gym$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gym model
   */
  interface GymFieldRefs {
    readonly id: FieldRef<"Gym", 'String'>
    readonly userId: FieldRef<"Gym", 'String'>
    readonly gymName: FieldRef<"Gym", 'String'>
    readonly locationLatitude: FieldRef<"Gym", 'Float'>
    readonly locationLongitude: FieldRef<"Gym", 'Float'>
    readonly yearOfGym: FieldRef<"Gym", 'Int'>
    readonly description: FieldRef<"Gym", 'String'>
    readonly photos: FieldRef<"Gym", 'String[]'>
    readonly videos: FieldRef<"Gym", 'String[]'>
    readonly lockerFacility: FieldRef<"Gym", 'Boolean'>
    readonly timing: FieldRef<"Gym", 'Json'>
    readonly categories: FieldRef<"Gym", 'String[]'>
    readonly rateCard: FieldRef<"Gym", 'String'>
    readonly website: FieldRef<"Gym", 'String'>
    readonly services: FieldRef<"Gym", 'String[]'>
    readonly benefits: FieldRef<"Gym", 'String[]'>
    readonly pricing: FieldRef<"Gym", 'Json'>
    readonly amenities: FieldRef<"Gym", 'String[]'>
    readonly availableSports: FieldRef<"Gym", 'String[]'>
    readonly strengthEquipments: FieldRef<"Gym", 'String[]'>
    readonly cardioEquipments: FieldRef<"Gym", 'String[]'>
    readonly rules: FieldRef<"Gym", 'String[]'>
    readonly gender: FieldRef<"Gym", 'String'>
    readonly counsellingServices: FieldRef<"Gym", 'Json'>
    readonly socialMediaLinks: FieldRef<"Gym", 'Json'>
    readonly isDeleted: FieldRef<"Gym", 'Boolean'>
    readonly createdAt: FieldRef<"Gym", 'DateTime'>
    readonly updatedAt: FieldRef<"Gym", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gym findUnique
   */
  export type GymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findUniqueOrThrow
   */
  export type GymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findFirst
   */
  export type GymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findFirstOrThrow
   */
  export type GymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findMany
   */
  export type GymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gyms to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym create
   */
  export type GymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The data needed to create a Gym.
     */
    data: XOR<GymCreateInput, GymUncheckedCreateInput>
  }

  /**
   * Gym createMany
   */
  export type GymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gym createManyAndReturn
   */
  export type GymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gym update
   */
  export type GymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The data needed to update a Gym.
     */
    data: XOR<GymUpdateInput, GymUncheckedUpdateInput>
    /**
     * Choose, which Gym to update.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym updateMany
   */
  export type GymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
  }

  /**
   * Gym updateManyAndReturn
   */
  export type GymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gym upsert
   */
  export type GymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The filter to search for the Gym to update in case it exists.
     */
    where: GymWhereUniqueInput
    /**
     * In case the Gym found by the `where` argument doesn't exist, create a new Gym with this data.
     */
    create: XOR<GymCreateInput, GymUncheckedCreateInput>
    /**
     * In case the Gym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymUpdateInput, GymUncheckedUpdateInput>
  }

  /**
   * Gym delete
   */
  export type GymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter which Gym to delete.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym deleteMany
   */
  export type GymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gyms to delete
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to delete.
     */
    limit?: number
  }

  /**
   * Gym.reviews
   */
  export type Gym$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Gym without action
   */
  export type GymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
  }


  /**
   * Model Parking
   */

  export type AggregateParking = {
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  export type ParkingAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    yearOfParking: number | null
    vacancies: number | null
    capacity: number | null
  }

  export type ParkingSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    yearOfParking: number | null
    vacancies: number | null
    capacity: number | null
  }

  export type ParkingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    yearOfParking: number | null
    parkingType: string | null
    vacancies: number | null
    size: string | null
    accessibility: string | null
    capacity: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    yearOfParking: number | null
    parkingType: string | null
    vacancies: number | null
    size: string | null
    accessibility: string | null
    capacity: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    latitude: number
    longitude: number
    price: number
    yearOfParking: number
    parkingType: number
    vacancies: number
    size: number
    photos: number
    videos: number
    amenities: number
    accessibility: number
    capacity: number
    security: number
    operatingHours: number
    booking: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    yearOfParking?: true
    vacancies?: true
    capacity?: true
  }

  export type ParkingSumAggregateInputType = {
    latitude?: true
    longitude?: true
    yearOfParking?: true
    vacancies?: true
    capacity?: true
  }

  export type ParkingMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    yearOfParking?: true
    parkingType?: true
    vacancies?: true
    size?: true
    accessibility?: true
    capacity?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    yearOfParking?: true
    parkingType?: true
    vacancies?: true
    size?: true
    accessibility?: true
    capacity?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    price?: true
    yearOfParking?: true
    parkingType?: true
    vacancies?: true
    size?: true
    photos?: true
    videos?: true
    amenities?: true
    accessibility?: true
    capacity?: true
    security?: true
    operatingHours?: true
    booking?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parking to aggregate.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parkings
    **/
    _count?: true | ParkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingMaxAggregateInputType
  }

  export type GetParkingAggregateType<T extends ParkingAggregateArgs> = {
        [P in keyof T & keyof AggregateParking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking[P]>
      : GetScalarType<T[P], AggregateParking[P]>
  }




  export type ParkingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingWhereInput
    orderBy?: ParkingOrderByWithAggregationInput | ParkingOrderByWithAggregationInput[]
    by: ParkingScalarFieldEnum[] | ParkingScalarFieldEnum
    having?: ParkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingCountAggregateInputType | true
    _avg?: ParkingAvgAggregateInputType
    _sum?: ParkingSumAggregateInputType
    _min?: ParkingMinAggregateInputType
    _max?: ParkingMaxAggregateInputType
  }

  export type ParkingGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos: string[]
    videos: string[]
    amenities: string[]
    accessibility: string
    capacity: number
    security: string[]
    operatingHours: JsonValue
    booking: JsonValue
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  type GetParkingGroupByPayload<T extends ParkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    yearOfParking?: boolean
    parkingType?: boolean
    vacancies?: boolean
    size?: boolean
    photos?: boolean
    videos?: boolean
    amenities?: boolean
    accessibility?: boolean
    capacity?: boolean
    security?: boolean
    operatingHours?: boolean
    booking?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Parking$reviewsArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    yearOfParking?: boolean
    parkingType?: boolean
    vacancies?: boolean
    size?: boolean
    photos?: boolean
    videos?: boolean
    amenities?: boolean
    accessibility?: boolean
    capacity?: boolean
    security?: boolean
    operatingHours?: boolean
    booking?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    yearOfParking?: boolean
    parkingType?: boolean
    vacancies?: boolean
    size?: boolean
    photos?: boolean
    videos?: boolean
    amenities?: boolean
    accessibility?: boolean
    capacity?: boolean
    security?: boolean
    operatingHours?: boolean
    booking?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>

  export type ParkingSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    price?: boolean
    yearOfParking?: boolean
    parkingType?: boolean
    vacancies?: boolean
    size?: boolean
    photos?: boolean
    videos?: boolean
    amenities?: boolean
    accessibility?: boolean
    capacity?: boolean
    security?: boolean
    operatingHours?: boolean
    booking?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "latitude" | "longitude" | "price" | "yearOfParking" | "parkingType" | "vacancies" | "size" | "photos" | "videos" | "amenities" | "accessibility" | "capacity" | "security" | "operatingHours" | "booking" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["parking"]>
  export type ParkingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Parking$reviewsArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string
      latitude: number
      longitude: number
      price: Prisma.JsonValue
      yearOfParking: number
      parkingType: string
      vacancies: number
      size: string
      photos: string[]
      videos: string[]
      amenities: string[]
      accessibility: string
      capacity: number
      security: string[]
      operatingHours: Prisma.JsonValue
      booking: Prisma.JsonValue
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parking"]>
    composites: {}
  }

  type ParkingGetPayload<S extends boolean | null | undefined | ParkingDefaultArgs> = $Result.GetResult<Prisma.$ParkingPayload, S>

  type ParkingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingCountAggregateInputType | true
    }

  export interface ParkingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parking'], meta: { name: 'Parking' } }
    /**
     * Find zero or one Parking that matches the filter.
     * @param {ParkingFindUniqueArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingFindUniqueArgs>(args: SelectSubset<T, ParkingFindUniqueArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingFindUniqueOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingFindFirstArgs>(args?: SelectSubset<T, ParkingFindFirstArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parkings
     * const parkings = await prisma.parking.findMany()
     * 
     * // Get first 10 Parkings
     * const parkings = await prisma.parking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingWithIdOnly = await prisma.parking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingFindManyArgs>(args?: SelectSubset<T, ParkingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parking.
     * @param {ParkingCreateArgs} args - Arguments to create a Parking.
     * @example
     * // Create one Parking
     * const Parking = await prisma.parking.create({
     *   data: {
     *     // ... data to create a Parking
     *   }
     * })
     * 
     */
    create<T extends ParkingCreateArgs>(args: SelectSubset<T, ParkingCreateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parkings.
     * @param {ParkingCreateManyArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingCreateManyArgs>(args?: SelectSubset<T, ParkingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parkings and returns the data saved in the database.
     * @param {ParkingCreateManyAndReturnArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parkings and only return the `id`
     * const parkingWithIdOnly = await prisma.parking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parking.
     * @param {ParkingDeleteArgs} args - Arguments to delete one Parking.
     * @example
     * // Delete one Parking
     * const Parking = await prisma.parking.delete({
     *   where: {
     *     // ... filter to delete one Parking
     *   }
     * })
     * 
     */
    delete<T extends ParkingDeleteArgs>(args: SelectSubset<T, ParkingDeleteArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parking.
     * @param {ParkingUpdateArgs} args - Arguments to update one Parking.
     * @example
     * // Update one Parking
     * const parking = await prisma.parking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingUpdateArgs>(args: SelectSubset<T, ParkingUpdateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parkings.
     * @param {ParkingDeleteManyArgs} args - Arguments to filter Parkings to delete.
     * @example
     * // Delete a few Parkings
     * const { count } = await prisma.parking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingDeleteManyArgs>(args?: SelectSubset<T, ParkingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingUpdateManyArgs>(args: SelectSubset<T, ParkingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings and returns the data updated in the database.
     * @param {ParkingUpdateManyAndReturnArgs} args - Arguments to update many Parkings.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parkings and only return the `id`
     * const parkingWithIdOnly = await prisma.parking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parking.
     * @param {ParkingUpsertArgs} args - Arguments to update or create a Parking.
     * @example
     * // Update or create a Parking
     * const parking = await prisma.parking.upsert({
     *   create: {
     *     // ... data to create a Parking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking we want to update
     *   }
     * })
     */
    upsert<T extends ParkingUpsertArgs>(args: SelectSubset<T, ParkingUpsertArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingCountArgs} args - Arguments to filter Parkings to count.
     * @example
     * // Count the number of Parkings
     * const count = await prisma.parking.count({
     *   where: {
     *     // ... the filter for the Parkings we want to count
     *   }
     * })
    **/
    count<T extends ParkingCountArgs>(
      args?: Subset<T, ParkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingAggregateArgs>(args: Subset<T, ParkingAggregateArgs>): Prisma.PrismaPromise<GetParkingAggregateType<T>>

    /**
     * Group by Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingGroupByArgs['orderBy'] }
        : { orderBy?: ParkingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parking model
   */
  readonly fields: ParkingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Parking$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Parking$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parking model
   */
  interface ParkingFieldRefs {
    readonly id: FieldRef<"Parking", 'String'>
    readonly userId: FieldRef<"Parking", 'String'>
    readonly name: FieldRef<"Parking", 'String'>
    readonly description: FieldRef<"Parking", 'String'>
    readonly latitude: FieldRef<"Parking", 'Float'>
    readonly longitude: FieldRef<"Parking", 'Float'>
    readonly price: FieldRef<"Parking", 'Json'>
    readonly yearOfParking: FieldRef<"Parking", 'Int'>
    readonly parkingType: FieldRef<"Parking", 'String'>
    readonly vacancies: FieldRef<"Parking", 'Int'>
    readonly size: FieldRef<"Parking", 'String'>
    readonly photos: FieldRef<"Parking", 'String[]'>
    readonly videos: FieldRef<"Parking", 'String[]'>
    readonly amenities: FieldRef<"Parking", 'String[]'>
    readonly accessibility: FieldRef<"Parking", 'String'>
    readonly capacity: FieldRef<"Parking", 'Int'>
    readonly security: FieldRef<"Parking", 'String[]'>
    readonly operatingHours: FieldRef<"Parking", 'Json'>
    readonly booking: FieldRef<"Parking", 'Json'>
    readonly isDeleted: FieldRef<"Parking", 'Boolean'>
    readonly createdAt: FieldRef<"Parking", 'DateTime'>
    readonly updatedAt: FieldRef<"Parking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parking findUnique
   */
  export type ParkingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findUniqueOrThrow
   */
  export type ParkingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findFirst
   */
  export type ParkingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findFirstOrThrow
   */
  export type ParkingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findMany
   */
  export type ParkingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parkings to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking create
   */
  export type ParkingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to create a Parking.
     */
    data: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
  }

  /**
   * Parking createMany
   */
  export type ParkingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parking createManyAndReturn
   */
  export type ParkingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parking update
   */
  export type ParkingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to update a Parking.
     */
    data: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
    /**
     * Choose, which Parking to update.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking updateMany
   */
  export type ParkingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
  }

  /**
   * Parking updateManyAndReturn
   */
  export type ParkingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parking upsert
   */
  export type ParkingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The filter to search for the Parking to update in case it exists.
     */
    where: ParkingWhereUniqueInput
    /**
     * In case the Parking found by the `where` argument doesn't exist, create a new Parking with this data.
     */
    create: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
    /**
     * In case the Parking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
  }

  /**
   * Parking delete
   */
  export type ParkingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter which Parking to delete.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking deleteMany
   */
  export type ParkingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parkings to delete
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to delete.
     */
    limit?: number
  }

  /**
   * Parking.reviews
   */
  export type Parking$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Parking without action
   */
  export type ParkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
  }


  /**
   * Model PayingGuests
   */

  export type AggregatePayingGuests = {
    _count: PayingGuestsCountAggregateOutputType | null
    _avg: PayingGuestsAvgAggregateOutputType | null
    _sum: PayingGuestsSumAggregateOutputType | null
    _min: PayingGuestsMinAggregateOutputType | null
    _max: PayingGuestsMaxAggregateOutputType | null
  }

  export type PayingGuestsAvgAggregateOutputType = {
    ageOfProperty: number | null
  }

  export type PayingGuestsSumAggregateOutputType = {
    ageOfProperty: number | null
  }

  export type PayingGuestsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    availabilityStatus: string | null
    availableFrom: Date | null
    ageOfProperty: number | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayingGuestsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    availabilityStatus: string | null
    availableFrom: Date | null
    ageOfProperty: number | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayingGuestsCountAggregateOutputType = {
    id: number
    userId: number
    subCategory: number
    roomDetails: number
    mealDetails: number
    availabilityStatus: number
    availableFrom: number
    ageOfProperty: number
    description: number
    amenities: number
    rules: number
    otherFeatures: number
    societyBuildingFeatures: number
    nearbyPlaces: number
    pricing: number
    safetyFeatures: number
    communityFeatures: number
    images: number
    videos: number
    verification: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayingGuestsAvgAggregateInputType = {
    ageOfProperty?: true
  }

  export type PayingGuestsSumAggregateInputType = {
    ageOfProperty?: true
  }

  export type PayingGuestsMinAggregateInputType = {
    id?: true
    userId?: true
    availabilityStatus?: true
    availableFrom?: true
    ageOfProperty?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayingGuestsMaxAggregateInputType = {
    id?: true
    userId?: true
    availabilityStatus?: true
    availableFrom?: true
    ageOfProperty?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayingGuestsCountAggregateInputType = {
    id?: true
    userId?: true
    subCategory?: true
    roomDetails?: true
    mealDetails?: true
    availabilityStatus?: true
    availableFrom?: true
    ageOfProperty?: true
    description?: true
    amenities?: true
    rules?: true
    otherFeatures?: true
    societyBuildingFeatures?: true
    nearbyPlaces?: true
    pricing?: true
    safetyFeatures?: true
    communityFeatures?: true
    images?: true
    videos?: true
    verification?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayingGuestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayingGuests to aggregate.
     */
    where?: PayingGuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayingGuests to fetch.
     */
    orderBy?: PayingGuestsOrderByWithRelationInput | PayingGuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayingGuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayingGuests
    **/
    _count?: true | PayingGuestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayingGuestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayingGuestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayingGuestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayingGuestsMaxAggregateInputType
  }

  export type GetPayingGuestsAggregateType<T extends PayingGuestsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayingGuests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayingGuests[P]>
      : GetScalarType<T[P], AggregatePayingGuests[P]>
  }




  export type PayingGuestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayingGuestsWhereInput
    orderBy?: PayingGuestsOrderByWithAggregationInput | PayingGuestsOrderByWithAggregationInput[]
    by: PayingGuestsScalarFieldEnum[] | PayingGuestsScalarFieldEnum
    having?: PayingGuestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayingGuestsCountAggregateInputType | true
    _avg?: PayingGuestsAvgAggregateInputType
    _sum?: PayingGuestsSumAggregateInputType
    _min?: PayingGuestsMinAggregateInputType
    _max?: PayingGuestsMaxAggregateInputType
  }

  export type PayingGuestsGroupByOutputType = {
    id: string
    userId: string
    subCategory: string[]
    roomDetails: JsonValue | null
    mealDetails: JsonValue | null
    availabilityStatus: string | null
    availableFrom: Date | null
    ageOfProperty: number | null
    description: string | null
    amenities: JsonValue | null
    rules: JsonValue | null
    otherFeatures: JsonValue | null
    societyBuildingFeatures: JsonValue | null
    nearbyPlaces: JsonValue | null
    pricing: JsonValue | null
    safetyFeatures: JsonValue | null
    communityFeatures: JsonValue | null
    images: string[]
    videos: string[]
    verification: JsonValue | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PayingGuestsCountAggregateOutputType | null
    _avg: PayingGuestsAvgAggregateOutputType | null
    _sum: PayingGuestsSumAggregateOutputType | null
    _min: PayingGuestsMinAggregateOutputType | null
    _max: PayingGuestsMaxAggregateOutputType | null
  }

  type GetPayingGuestsGroupByPayload<T extends PayingGuestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayingGuestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayingGuestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayingGuestsGroupByOutputType[P]>
            : GetScalarType<T[P], PayingGuestsGroupByOutputType[P]>
        }
      >
    >


  export type PayingGuestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    roomDetails?: boolean
    mealDetails?: boolean
    availabilityStatus?: boolean
    availableFrom?: boolean
    ageOfProperty?: boolean
    description?: boolean
    amenities?: boolean
    rules?: boolean
    otherFeatures?: boolean
    societyBuildingFeatures?: boolean
    nearbyPlaces?: boolean
    pricing?: boolean
    safetyFeatures?: boolean
    communityFeatures?: boolean
    images?: boolean
    videos?: boolean
    verification?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | PayingGuests$reviewsArgs<ExtArgs>
    _count?: boolean | PayingGuestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payingGuests"]>

  export type PayingGuestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    roomDetails?: boolean
    mealDetails?: boolean
    availabilityStatus?: boolean
    availableFrom?: boolean
    ageOfProperty?: boolean
    description?: boolean
    amenities?: boolean
    rules?: boolean
    otherFeatures?: boolean
    societyBuildingFeatures?: boolean
    nearbyPlaces?: boolean
    pricing?: boolean
    safetyFeatures?: boolean
    communityFeatures?: boolean
    images?: boolean
    videos?: boolean
    verification?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payingGuests"]>

  export type PayingGuestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    roomDetails?: boolean
    mealDetails?: boolean
    availabilityStatus?: boolean
    availableFrom?: boolean
    ageOfProperty?: boolean
    description?: boolean
    amenities?: boolean
    rules?: boolean
    otherFeatures?: boolean
    societyBuildingFeatures?: boolean
    nearbyPlaces?: boolean
    pricing?: boolean
    safetyFeatures?: boolean
    communityFeatures?: boolean
    images?: boolean
    videos?: boolean
    verification?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payingGuests"]>

  export type PayingGuestsSelectScalar = {
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    roomDetails?: boolean
    mealDetails?: boolean
    availabilityStatus?: boolean
    availableFrom?: boolean
    ageOfProperty?: boolean
    description?: boolean
    amenities?: boolean
    rules?: boolean
    otherFeatures?: boolean
    societyBuildingFeatures?: boolean
    nearbyPlaces?: boolean
    pricing?: boolean
    safetyFeatures?: boolean
    communityFeatures?: boolean
    images?: boolean
    videos?: boolean
    verification?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayingGuestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subCategory" | "roomDetails" | "mealDetails" | "availabilityStatus" | "availableFrom" | "ageOfProperty" | "description" | "amenities" | "rules" | "otherFeatures" | "societyBuildingFeatures" | "nearbyPlaces" | "pricing" | "safetyFeatures" | "communityFeatures" | "images" | "videos" | "verification" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["payingGuests"]>
  export type PayingGuestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | PayingGuests$reviewsArgs<ExtArgs>
    _count?: boolean | PayingGuestsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayingGuestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayingGuestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayingGuestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayingGuests"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subCategory: string[]
      roomDetails: Prisma.JsonValue | null
      mealDetails: Prisma.JsonValue | null
      availabilityStatus: string | null
      availableFrom: Date | null
      ageOfProperty: number | null
      description: string | null
      amenities: Prisma.JsonValue | null
      rules: Prisma.JsonValue | null
      otherFeatures: Prisma.JsonValue | null
      societyBuildingFeatures: Prisma.JsonValue | null
      nearbyPlaces: Prisma.JsonValue | null
      pricing: Prisma.JsonValue | null
      safetyFeatures: Prisma.JsonValue | null
      communityFeatures: Prisma.JsonValue | null
      images: string[]
      videos: string[]
      verification: Prisma.JsonValue | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payingGuests"]>
    composites: {}
  }

  type PayingGuestsGetPayload<S extends boolean | null | undefined | PayingGuestsDefaultArgs> = $Result.GetResult<Prisma.$PayingGuestsPayload, S>

  type PayingGuestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayingGuestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayingGuestsCountAggregateInputType | true
    }

  export interface PayingGuestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayingGuests'], meta: { name: 'PayingGuests' } }
    /**
     * Find zero or one PayingGuests that matches the filter.
     * @param {PayingGuestsFindUniqueArgs} args - Arguments to find a PayingGuests
     * @example
     * // Get one PayingGuests
     * const payingGuests = await prisma.payingGuests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayingGuestsFindUniqueArgs>(args: SelectSubset<T, PayingGuestsFindUniqueArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayingGuests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayingGuestsFindUniqueOrThrowArgs} args - Arguments to find a PayingGuests
     * @example
     * // Get one PayingGuests
     * const payingGuests = await prisma.payingGuests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayingGuestsFindUniqueOrThrowArgs>(args: SelectSubset<T, PayingGuestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayingGuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayingGuestsFindFirstArgs} args - Arguments to find a PayingGuests
     * @example
     * // Get one PayingGuests
     * const payingGuests = await prisma.payingGuests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayingGuestsFindFirstArgs>(args?: SelectSubset<T, PayingGuestsFindFirstArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayingGuests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayingGuestsFindFirstOrThrowArgs} args - Arguments to find a PayingGuests
     * @example
     * // Get one PayingGuests
     * const payingGuests = await prisma.payingGuests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayingGuestsFindFirstOrThrowArgs>(args?: SelectSubset<T, PayingGuestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayingGuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayingGuestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayingGuests
     * const payingGuests = await prisma.payingGuests.findMany()
     * 
     * // Get first 10 PayingGuests
     * const payingGuests = await prisma.payingGuests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payingGuestsWithIdOnly = await prisma.payingGuests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayingGuestsFindManyArgs>(args?: SelectSubset<T, PayingGuestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayingGuests.
     * @param {PayingGuestsCreateArgs} args - Arguments to create a PayingGuests.
     * @example
     * // Create one PayingGuests
     * const PayingGuests = await prisma.payingGuests.create({
     *   data: {
     *     // ... data to create a PayingGuests
     *   }
     * })
     * 
     */
    create<T extends PayingGuestsCreateArgs>(args: SelectSubset<T, PayingGuestsCreateArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayingGuests.
     * @param {PayingGuestsCreateManyArgs} args - Arguments to create many PayingGuests.
     * @example
     * // Create many PayingGuests
     * const payingGuests = await prisma.payingGuests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayingGuestsCreateManyArgs>(args?: SelectSubset<T, PayingGuestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayingGuests and returns the data saved in the database.
     * @param {PayingGuestsCreateManyAndReturnArgs} args - Arguments to create many PayingGuests.
     * @example
     * // Create many PayingGuests
     * const payingGuests = await prisma.payingGuests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayingGuests and only return the `id`
     * const payingGuestsWithIdOnly = await prisma.payingGuests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayingGuestsCreateManyAndReturnArgs>(args?: SelectSubset<T, PayingGuestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayingGuests.
     * @param {PayingGuestsDeleteArgs} args - Arguments to delete one PayingGuests.
     * @example
     * // Delete one PayingGuests
     * const PayingGuests = await prisma.payingGuests.delete({
     *   where: {
     *     // ... filter to delete one PayingGuests
     *   }
     * })
     * 
     */
    delete<T extends PayingGuestsDeleteArgs>(args: SelectSubset<T, PayingGuestsDeleteArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayingGuests.
     * @param {PayingGuestsUpdateArgs} args - Arguments to update one PayingGuests.
     * @example
     * // Update one PayingGuests
     * const payingGuests = await prisma.payingGuests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayingGuestsUpdateArgs>(args: SelectSubset<T, PayingGuestsUpdateArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayingGuests.
     * @param {PayingGuestsDeleteManyArgs} args - Arguments to filter PayingGuests to delete.
     * @example
     * // Delete a few PayingGuests
     * const { count } = await prisma.payingGuests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayingGuestsDeleteManyArgs>(args?: SelectSubset<T, PayingGuestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayingGuestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayingGuests
     * const payingGuests = await prisma.payingGuests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayingGuestsUpdateManyArgs>(args: SelectSubset<T, PayingGuestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayingGuests and returns the data updated in the database.
     * @param {PayingGuestsUpdateManyAndReturnArgs} args - Arguments to update many PayingGuests.
     * @example
     * // Update many PayingGuests
     * const payingGuests = await prisma.payingGuests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayingGuests and only return the `id`
     * const payingGuestsWithIdOnly = await prisma.payingGuests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayingGuestsUpdateManyAndReturnArgs>(args: SelectSubset<T, PayingGuestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayingGuests.
     * @param {PayingGuestsUpsertArgs} args - Arguments to update or create a PayingGuests.
     * @example
     * // Update or create a PayingGuests
     * const payingGuests = await prisma.payingGuests.upsert({
     *   create: {
     *     // ... data to create a PayingGuests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayingGuests we want to update
     *   }
     * })
     */
    upsert<T extends PayingGuestsUpsertArgs>(args: SelectSubset<T, PayingGuestsUpsertArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayingGuestsCountArgs} args - Arguments to filter PayingGuests to count.
     * @example
     * // Count the number of PayingGuests
     * const count = await prisma.payingGuests.count({
     *   where: {
     *     // ... the filter for the PayingGuests we want to count
     *   }
     * })
    **/
    count<T extends PayingGuestsCountArgs>(
      args?: Subset<T, PayingGuestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayingGuestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayingGuestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayingGuestsAggregateArgs>(args: Subset<T, PayingGuestsAggregateArgs>): Prisma.PrismaPromise<GetPayingGuestsAggregateType<T>>

    /**
     * Group by PayingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayingGuestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayingGuestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayingGuestsGroupByArgs['orderBy'] }
        : { orderBy?: PayingGuestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayingGuestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayingGuestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayingGuests model
   */
  readonly fields: PayingGuestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayingGuests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayingGuestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends PayingGuests$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, PayingGuests$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayingGuests model
   */
  interface PayingGuestsFieldRefs {
    readonly id: FieldRef<"PayingGuests", 'String'>
    readonly userId: FieldRef<"PayingGuests", 'String'>
    readonly subCategory: FieldRef<"PayingGuests", 'String[]'>
    readonly roomDetails: FieldRef<"PayingGuests", 'Json'>
    readonly mealDetails: FieldRef<"PayingGuests", 'Json'>
    readonly availabilityStatus: FieldRef<"PayingGuests", 'String'>
    readonly availableFrom: FieldRef<"PayingGuests", 'DateTime'>
    readonly ageOfProperty: FieldRef<"PayingGuests", 'Int'>
    readonly description: FieldRef<"PayingGuests", 'String'>
    readonly amenities: FieldRef<"PayingGuests", 'Json'>
    readonly rules: FieldRef<"PayingGuests", 'Json'>
    readonly otherFeatures: FieldRef<"PayingGuests", 'Json'>
    readonly societyBuildingFeatures: FieldRef<"PayingGuests", 'Json'>
    readonly nearbyPlaces: FieldRef<"PayingGuests", 'Json'>
    readonly pricing: FieldRef<"PayingGuests", 'Json'>
    readonly safetyFeatures: FieldRef<"PayingGuests", 'Json'>
    readonly communityFeatures: FieldRef<"PayingGuests", 'Json'>
    readonly images: FieldRef<"PayingGuests", 'String[]'>
    readonly videos: FieldRef<"PayingGuests", 'String[]'>
    readonly verification: FieldRef<"PayingGuests", 'Json'>
    readonly isDeleted: FieldRef<"PayingGuests", 'Boolean'>
    readonly createdAt: FieldRef<"PayingGuests", 'DateTime'>
    readonly updatedAt: FieldRef<"PayingGuests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayingGuests findUnique
   */
  export type PayingGuestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * Filter, which PayingGuests to fetch.
     */
    where: PayingGuestsWhereUniqueInput
  }

  /**
   * PayingGuests findUniqueOrThrow
   */
  export type PayingGuestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * Filter, which PayingGuests to fetch.
     */
    where: PayingGuestsWhereUniqueInput
  }

  /**
   * PayingGuests findFirst
   */
  export type PayingGuestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * Filter, which PayingGuests to fetch.
     */
    where?: PayingGuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayingGuests to fetch.
     */
    orderBy?: PayingGuestsOrderByWithRelationInput | PayingGuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayingGuests.
     */
    cursor?: PayingGuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayingGuests.
     */
    distinct?: PayingGuestsScalarFieldEnum | PayingGuestsScalarFieldEnum[]
  }

  /**
   * PayingGuests findFirstOrThrow
   */
  export type PayingGuestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * Filter, which PayingGuests to fetch.
     */
    where?: PayingGuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayingGuests to fetch.
     */
    orderBy?: PayingGuestsOrderByWithRelationInput | PayingGuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayingGuests.
     */
    cursor?: PayingGuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayingGuests.
     */
    distinct?: PayingGuestsScalarFieldEnum | PayingGuestsScalarFieldEnum[]
  }

  /**
   * PayingGuests findMany
   */
  export type PayingGuestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * Filter, which PayingGuests to fetch.
     */
    where?: PayingGuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayingGuests to fetch.
     */
    orderBy?: PayingGuestsOrderByWithRelationInput | PayingGuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayingGuests.
     */
    cursor?: PayingGuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayingGuests.
     */
    skip?: number
    distinct?: PayingGuestsScalarFieldEnum | PayingGuestsScalarFieldEnum[]
  }

  /**
   * PayingGuests create
   */
  export type PayingGuestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * The data needed to create a PayingGuests.
     */
    data: XOR<PayingGuestsCreateInput, PayingGuestsUncheckedCreateInput>
  }

  /**
   * PayingGuests createMany
   */
  export type PayingGuestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayingGuests.
     */
    data: PayingGuestsCreateManyInput | PayingGuestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayingGuests createManyAndReturn
   */
  export type PayingGuestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * The data used to create many PayingGuests.
     */
    data: PayingGuestsCreateManyInput | PayingGuestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayingGuests update
   */
  export type PayingGuestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * The data needed to update a PayingGuests.
     */
    data: XOR<PayingGuestsUpdateInput, PayingGuestsUncheckedUpdateInput>
    /**
     * Choose, which PayingGuests to update.
     */
    where: PayingGuestsWhereUniqueInput
  }

  /**
   * PayingGuests updateMany
   */
  export type PayingGuestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayingGuests.
     */
    data: XOR<PayingGuestsUpdateManyMutationInput, PayingGuestsUncheckedUpdateManyInput>
    /**
     * Filter which PayingGuests to update
     */
    where?: PayingGuestsWhereInput
    /**
     * Limit how many PayingGuests to update.
     */
    limit?: number
  }

  /**
   * PayingGuests updateManyAndReturn
   */
  export type PayingGuestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * The data used to update PayingGuests.
     */
    data: XOR<PayingGuestsUpdateManyMutationInput, PayingGuestsUncheckedUpdateManyInput>
    /**
     * Filter which PayingGuests to update
     */
    where?: PayingGuestsWhereInput
    /**
     * Limit how many PayingGuests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayingGuests upsert
   */
  export type PayingGuestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * The filter to search for the PayingGuests to update in case it exists.
     */
    where: PayingGuestsWhereUniqueInput
    /**
     * In case the PayingGuests found by the `where` argument doesn't exist, create a new PayingGuests with this data.
     */
    create: XOR<PayingGuestsCreateInput, PayingGuestsUncheckedCreateInput>
    /**
     * In case the PayingGuests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayingGuestsUpdateInput, PayingGuestsUncheckedUpdateInput>
  }

  /**
   * PayingGuests delete
   */
  export type PayingGuestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    /**
     * Filter which PayingGuests to delete.
     */
    where: PayingGuestsWhereUniqueInput
  }

  /**
   * PayingGuests deleteMany
   */
  export type PayingGuestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayingGuests to delete
     */
    where?: PayingGuestsWhereInput
    /**
     * Limit how many PayingGuests to delete.
     */
    limit?: number
  }

  /**
   * PayingGuests.reviews
   */
  export type PayingGuests$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * PayingGuests without action
   */
  export type PayingGuestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    parkingId: string | null
    pgId: string | null
    eventSpaceId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    parkingId: string | null
    pgId: string | null
    eventSpaceId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    gymId: number
    parkingId: number
    pgId: number
    eventSpaceId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    parkingId?: true
    pgId?: true
    eventSpaceId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    parkingId?: true
    pgId?: true
    eventSpaceId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    parkingId?: true
    pgId?: true
    eventSpaceId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userId: string
    gymId: string | null
    parkingId: string | null
    pgId: string | null
    eventSpaceId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    parkingId?: boolean
    pgId?: boolean
    eventSpaceId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | Review$gymArgs<ExtArgs>
    parking?: boolean | Review$parkingArgs<ExtArgs>
    pg?: boolean | Review$pgArgs<ExtArgs>
    eventSpace?: boolean | Review$eventSpaceArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    parkingId?: boolean
    pgId?: boolean
    eventSpaceId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | Review$gymArgs<ExtArgs>
    parking?: boolean | Review$parkingArgs<ExtArgs>
    pg?: boolean | Review$pgArgs<ExtArgs>
    eventSpace?: boolean | Review$eventSpaceArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    parkingId?: boolean
    pgId?: boolean
    eventSpaceId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | Review$gymArgs<ExtArgs>
    parking?: boolean | Review$parkingArgs<ExtArgs>
    pg?: boolean | Review$pgArgs<ExtArgs>
    eventSpace?: boolean | Review$eventSpaceArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    gymId?: boolean
    parkingId?: boolean
    pgId?: boolean
    eventSpaceId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gymId" | "parkingId" | "pgId" | "eventSpaceId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | Review$gymArgs<ExtArgs>
    parking?: boolean | Review$parkingArgs<ExtArgs>
    pg?: boolean | Review$pgArgs<ExtArgs>
    eventSpace?: boolean | Review$eventSpaceArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | Review$gymArgs<ExtArgs>
    parking?: boolean | Review$parkingArgs<ExtArgs>
    pg?: boolean | Review$pgArgs<ExtArgs>
    eventSpace?: boolean | Review$eventSpaceArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | Review$gymArgs<ExtArgs>
    parking?: boolean | Review$parkingArgs<ExtArgs>
    pg?: boolean | Review$pgArgs<ExtArgs>
    eventSpace?: boolean | Review$eventSpaceArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs> | null
      parking: Prisma.$ParkingPayload<ExtArgs> | null
      pg: Prisma.$PayingGuestsPayload<ExtArgs> | null
      eventSpace: Prisma.$EventSpacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gymId: string | null
      parkingId: string | null
      pgId: string | null
      eventSpaceId: string | null
      rating: number | null
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gym<T extends Review$gymArgs<ExtArgs> = {}>(args?: Subset<T, Review$gymArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parking<T extends Review$parkingArgs<ExtArgs> = {}>(args?: Subset<T, Review$parkingArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pg<T extends Review$pgArgs<ExtArgs> = {}>(args?: Subset<T, Review$pgArgs<ExtArgs>>): Prisma__PayingGuestsClient<$Result.GetResult<Prisma.$PayingGuestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    eventSpace<T extends Review$eventSpaceArgs<ExtArgs> = {}>(args?: Subset<T, Review$eventSpaceArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly gymId: FieldRef<"Review", 'String'>
    readonly parkingId: FieldRef<"Review", 'String'>
    readonly pgId: FieldRef<"Review", 'String'>
    readonly eventSpaceId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.gym
   */
  export type Review$gymArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    where?: GymWhereInput
  }

  /**
   * Review.parking
   */
  export type Review$parkingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    where?: ParkingWhereInput
  }

  /**
   * Review.pg
   */
  export type Review$pgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayingGuests
     */
    select?: PayingGuestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayingGuests
     */
    omit?: PayingGuestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayingGuestsInclude<ExtArgs> | null
    where?: PayingGuestsWhereInput
  }

  /**
   * Review.eventSpace
   */
  export type Review$eventSpaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    where?: EventSpaceWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model EventSpace
   */

  export type AggregateEventSpace = {
    _count: EventSpaceCountAggregateOutputType | null
    _avg: EventSpaceAvgAggregateOutputType | null
    _sum: EventSpaceSumAggregateOutputType | null
    _min: EventSpaceMinAggregateOutputType | null
    _max: EventSpaceMaxAggregateOutputType | null
  }

  export type EventSpaceAvgAggregateOutputType = {
    ageOfProperty: number | null
  }

  export type EventSpaceSumAggregateOutputType = {
    ageOfProperty: number | null
  }

  export type EventSpaceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subCategory: string | null
    type: string | null
    availabilityStatus: string | null
    ageOfProperty: number | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventSpaceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subCategory: string | null
    type: string | null
    availabilityStatus: string | null
    ageOfProperty: number | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventSpaceCountAggregateOutputType = {
    id: number
    userId: number
    subCategory: number
    type: number
    propertyDetails: number
    pricing: number
    amenities: number
    facilities: number
    availableSpaces: number
    bookingDetails: number
    additionalServices: number
    rules: number
    nearbyPlaces: number
    availabilityStatus: number
    ageOfProperty: number
    description: number
    images: number
    videos: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventSpaceAvgAggregateInputType = {
    ageOfProperty?: true
  }

  export type EventSpaceSumAggregateInputType = {
    ageOfProperty?: true
  }

  export type EventSpaceMinAggregateInputType = {
    id?: true
    userId?: true
    subCategory?: true
    type?: true
    availabilityStatus?: true
    ageOfProperty?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventSpaceMaxAggregateInputType = {
    id?: true
    userId?: true
    subCategory?: true
    type?: true
    availabilityStatus?: true
    ageOfProperty?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventSpaceCountAggregateInputType = {
    id?: true
    userId?: true
    subCategory?: true
    type?: true
    propertyDetails?: true
    pricing?: true
    amenities?: true
    facilities?: true
    availableSpaces?: true
    bookingDetails?: true
    additionalServices?: true
    rules?: true
    nearbyPlaces?: true
    availabilityStatus?: true
    ageOfProperty?: true
    description?: true
    images?: true
    videos?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventSpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSpace to aggregate.
     */
    where?: EventSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSpaces to fetch.
     */
    orderBy?: EventSpaceOrderByWithRelationInput | EventSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventSpaces
    **/
    _count?: true | EventSpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventSpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventSpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventSpaceMaxAggregateInputType
  }

  export type GetEventSpaceAggregateType<T extends EventSpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateEventSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventSpace[P]>
      : GetScalarType<T[P], AggregateEventSpace[P]>
  }




  export type EventSpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSpaceWhereInput
    orderBy?: EventSpaceOrderByWithAggregationInput | EventSpaceOrderByWithAggregationInput[]
    by: EventSpaceScalarFieldEnum[] | EventSpaceScalarFieldEnum
    having?: EventSpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventSpaceCountAggregateInputType | true
    _avg?: EventSpaceAvgAggregateInputType
    _sum?: EventSpaceSumAggregateInputType
    _min?: EventSpaceMinAggregateInputType
    _max?: EventSpaceMaxAggregateInputType
  }

  export type EventSpaceGroupByOutputType = {
    id: string
    userId: string
    subCategory: string | null
    type: string | null
    propertyDetails: JsonValue | null
    pricing: JsonValue | null
    amenities: JsonValue | null
    facilities: JsonValue | null
    availableSpaces: JsonValue | null
    bookingDetails: JsonValue | null
    additionalServices: JsonValue | null
    rules: JsonValue | null
    nearbyPlaces: JsonValue | null
    availabilityStatus: string | null
    ageOfProperty: number | null
    description: string | null
    images: string[]
    videos: string[]
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: EventSpaceCountAggregateOutputType | null
    _avg: EventSpaceAvgAggregateOutputType | null
    _sum: EventSpaceSumAggregateOutputType | null
    _min: EventSpaceMinAggregateOutputType | null
    _max: EventSpaceMaxAggregateOutputType | null
  }

  type GetEventSpaceGroupByPayload<T extends EventSpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventSpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventSpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], EventSpaceGroupByOutputType[P]>
        }
      >
    >


  export type EventSpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    type?: boolean
    propertyDetails?: boolean
    pricing?: boolean
    amenities?: boolean
    facilities?: boolean
    availableSpaces?: boolean
    bookingDetails?: boolean
    additionalServices?: boolean
    rules?: boolean
    nearbyPlaces?: boolean
    availabilityStatus?: boolean
    ageOfProperty?: boolean
    description?: boolean
    images?: boolean
    videos?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | EventSpace$reviewsArgs<ExtArgs>
    _count?: boolean | EventSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSpace"]>

  export type EventSpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    type?: boolean
    propertyDetails?: boolean
    pricing?: boolean
    amenities?: boolean
    facilities?: boolean
    availableSpaces?: boolean
    bookingDetails?: boolean
    additionalServices?: boolean
    rules?: boolean
    nearbyPlaces?: boolean
    availabilityStatus?: boolean
    ageOfProperty?: boolean
    description?: boolean
    images?: boolean
    videos?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSpace"]>

  export type EventSpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    type?: boolean
    propertyDetails?: boolean
    pricing?: boolean
    amenities?: boolean
    facilities?: boolean
    availableSpaces?: boolean
    bookingDetails?: boolean
    additionalServices?: boolean
    rules?: boolean
    nearbyPlaces?: boolean
    availabilityStatus?: boolean
    ageOfProperty?: boolean
    description?: boolean
    images?: boolean
    videos?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSpace"]>

  export type EventSpaceSelectScalar = {
    id?: boolean
    userId?: boolean
    subCategory?: boolean
    type?: boolean
    propertyDetails?: boolean
    pricing?: boolean
    amenities?: boolean
    facilities?: boolean
    availableSpaces?: boolean
    bookingDetails?: boolean
    additionalServices?: boolean
    rules?: boolean
    nearbyPlaces?: boolean
    availabilityStatus?: boolean
    ageOfProperty?: boolean
    description?: boolean
    images?: boolean
    videos?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventSpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subCategory" | "type" | "propertyDetails" | "pricing" | "amenities" | "facilities" | "availableSpaces" | "bookingDetails" | "additionalServices" | "rules" | "nearbyPlaces" | "availabilityStatus" | "ageOfProperty" | "description" | "images" | "videos" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["eventSpace"]>
  export type EventSpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | EventSpace$reviewsArgs<ExtArgs>
    _count?: boolean | EventSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventSpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventSpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventSpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventSpace"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subCategory: string | null
      type: string | null
      propertyDetails: Prisma.JsonValue | null
      pricing: Prisma.JsonValue | null
      amenities: Prisma.JsonValue | null
      facilities: Prisma.JsonValue | null
      availableSpaces: Prisma.JsonValue | null
      bookingDetails: Prisma.JsonValue | null
      additionalServices: Prisma.JsonValue | null
      rules: Prisma.JsonValue | null
      nearbyPlaces: Prisma.JsonValue | null
      availabilityStatus: string | null
      ageOfProperty: number | null
      description: string | null
      images: string[]
      videos: string[]
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventSpace"]>
    composites: {}
  }

  type EventSpaceGetPayload<S extends boolean | null | undefined | EventSpaceDefaultArgs> = $Result.GetResult<Prisma.$EventSpacePayload, S>

  type EventSpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventSpaceCountAggregateInputType | true
    }

  export interface EventSpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventSpace'], meta: { name: 'EventSpace' } }
    /**
     * Find zero or one EventSpace that matches the filter.
     * @param {EventSpaceFindUniqueArgs} args - Arguments to find a EventSpace
     * @example
     * // Get one EventSpace
     * const eventSpace = await prisma.eventSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventSpaceFindUniqueArgs>(args: SelectSubset<T, EventSpaceFindUniqueArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventSpace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventSpaceFindUniqueOrThrowArgs} args - Arguments to find a EventSpace
     * @example
     * // Get one EventSpace
     * const eventSpace = await prisma.eventSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventSpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, EventSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSpaceFindFirstArgs} args - Arguments to find a EventSpace
     * @example
     * // Get one EventSpace
     * const eventSpace = await prisma.eventSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventSpaceFindFirstArgs>(args?: SelectSubset<T, EventSpaceFindFirstArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSpaceFindFirstOrThrowArgs} args - Arguments to find a EventSpace
     * @example
     * // Get one EventSpace
     * const eventSpace = await prisma.eventSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventSpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, EventSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventSpaces
     * const eventSpaces = await prisma.eventSpace.findMany()
     * 
     * // Get first 10 EventSpaces
     * const eventSpaces = await prisma.eventSpace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventSpaceWithIdOnly = await prisma.eventSpace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventSpaceFindManyArgs>(args?: SelectSubset<T, EventSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventSpace.
     * @param {EventSpaceCreateArgs} args - Arguments to create a EventSpace.
     * @example
     * // Create one EventSpace
     * const EventSpace = await prisma.eventSpace.create({
     *   data: {
     *     // ... data to create a EventSpace
     *   }
     * })
     * 
     */
    create<T extends EventSpaceCreateArgs>(args: SelectSubset<T, EventSpaceCreateArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventSpaces.
     * @param {EventSpaceCreateManyArgs} args - Arguments to create many EventSpaces.
     * @example
     * // Create many EventSpaces
     * const eventSpace = await prisma.eventSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventSpaceCreateManyArgs>(args?: SelectSubset<T, EventSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventSpaces and returns the data saved in the database.
     * @param {EventSpaceCreateManyAndReturnArgs} args - Arguments to create many EventSpaces.
     * @example
     * // Create many EventSpaces
     * const eventSpace = await prisma.eventSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventSpaces and only return the `id`
     * const eventSpaceWithIdOnly = await prisma.eventSpace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventSpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, EventSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventSpace.
     * @param {EventSpaceDeleteArgs} args - Arguments to delete one EventSpace.
     * @example
     * // Delete one EventSpace
     * const EventSpace = await prisma.eventSpace.delete({
     *   where: {
     *     // ... filter to delete one EventSpace
     *   }
     * })
     * 
     */
    delete<T extends EventSpaceDeleteArgs>(args: SelectSubset<T, EventSpaceDeleteArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventSpace.
     * @param {EventSpaceUpdateArgs} args - Arguments to update one EventSpace.
     * @example
     * // Update one EventSpace
     * const eventSpace = await prisma.eventSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventSpaceUpdateArgs>(args: SelectSubset<T, EventSpaceUpdateArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventSpaces.
     * @param {EventSpaceDeleteManyArgs} args - Arguments to filter EventSpaces to delete.
     * @example
     * // Delete a few EventSpaces
     * const { count } = await prisma.eventSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventSpaceDeleteManyArgs>(args?: SelectSubset<T, EventSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventSpaces
     * const eventSpace = await prisma.eventSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventSpaceUpdateManyArgs>(args: SelectSubset<T, EventSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSpaces and returns the data updated in the database.
     * @param {EventSpaceUpdateManyAndReturnArgs} args - Arguments to update many EventSpaces.
     * @example
     * // Update many EventSpaces
     * const eventSpace = await prisma.eventSpace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventSpaces and only return the `id`
     * const eventSpaceWithIdOnly = await prisma.eventSpace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventSpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, EventSpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventSpace.
     * @param {EventSpaceUpsertArgs} args - Arguments to update or create a EventSpace.
     * @example
     * // Update or create a EventSpace
     * const eventSpace = await prisma.eventSpace.upsert({
     *   create: {
     *     // ... data to create a EventSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventSpace we want to update
     *   }
     * })
     */
    upsert<T extends EventSpaceUpsertArgs>(args: SelectSubset<T, EventSpaceUpsertArgs<ExtArgs>>): Prisma__EventSpaceClient<$Result.GetResult<Prisma.$EventSpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSpaceCountArgs} args - Arguments to filter EventSpaces to count.
     * @example
     * // Count the number of EventSpaces
     * const count = await prisma.eventSpace.count({
     *   where: {
     *     // ... the filter for the EventSpaces we want to count
     *   }
     * })
    **/
    count<T extends EventSpaceCountArgs>(
      args?: Subset<T, EventSpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventSpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventSpaceAggregateArgs>(args: Subset<T, EventSpaceAggregateArgs>): Prisma.PrismaPromise<GetEventSpaceAggregateType<T>>

    /**
     * Group by EventSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventSpaceGroupByArgs['orderBy'] }
        : { orderBy?: EventSpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventSpace model
   */
  readonly fields: EventSpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventSpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends EventSpace$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, EventSpace$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventSpace model
   */
  interface EventSpaceFieldRefs {
    readonly id: FieldRef<"EventSpace", 'String'>
    readonly userId: FieldRef<"EventSpace", 'String'>
    readonly subCategory: FieldRef<"EventSpace", 'String'>
    readonly type: FieldRef<"EventSpace", 'String'>
    readonly propertyDetails: FieldRef<"EventSpace", 'Json'>
    readonly pricing: FieldRef<"EventSpace", 'Json'>
    readonly amenities: FieldRef<"EventSpace", 'Json'>
    readonly facilities: FieldRef<"EventSpace", 'Json'>
    readonly availableSpaces: FieldRef<"EventSpace", 'Json'>
    readonly bookingDetails: FieldRef<"EventSpace", 'Json'>
    readonly additionalServices: FieldRef<"EventSpace", 'Json'>
    readonly rules: FieldRef<"EventSpace", 'Json'>
    readonly nearbyPlaces: FieldRef<"EventSpace", 'Json'>
    readonly availabilityStatus: FieldRef<"EventSpace", 'String'>
    readonly ageOfProperty: FieldRef<"EventSpace", 'Int'>
    readonly description: FieldRef<"EventSpace", 'String'>
    readonly images: FieldRef<"EventSpace", 'String[]'>
    readonly videos: FieldRef<"EventSpace", 'String[]'>
    readonly isDeleted: FieldRef<"EventSpace", 'Boolean'>
    readonly createdAt: FieldRef<"EventSpace", 'DateTime'>
    readonly updatedAt: FieldRef<"EventSpace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventSpace findUnique
   */
  export type EventSpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * Filter, which EventSpace to fetch.
     */
    where: EventSpaceWhereUniqueInput
  }

  /**
   * EventSpace findUniqueOrThrow
   */
  export type EventSpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * Filter, which EventSpace to fetch.
     */
    where: EventSpaceWhereUniqueInput
  }

  /**
   * EventSpace findFirst
   */
  export type EventSpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * Filter, which EventSpace to fetch.
     */
    where?: EventSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSpaces to fetch.
     */
    orderBy?: EventSpaceOrderByWithRelationInput | EventSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSpaces.
     */
    cursor?: EventSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSpaces.
     */
    distinct?: EventSpaceScalarFieldEnum | EventSpaceScalarFieldEnum[]
  }

  /**
   * EventSpace findFirstOrThrow
   */
  export type EventSpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * Filter, which EventSpace to fetch.
     */
    where?: EventSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSpaces to fetch.
     */
    orderBy?: EventSpaceOrderByWithRelationInput | EventSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSpaces.
     */
    cursor?: EventSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSpaces.
     */
    distinct?: EventSpaceScalarFieldEnum | EventSpaceScalarFieldEnum[]
  }

  /**
   * EventSpace findMany
   */
  export type EventSpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * Filter, which EventSpaces to fetch.
     */
    where?: EventSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSpaces to fetch.
     */
    orderBy?: EventSpaceOrderByWithRelationInput | EventSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventSpaces.
     */
    cursor?: EventSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSpaces.
     */
    skip?: number
    distinct?: EventSpaceScalarFieldEnum | EventSpaceScalarFieldEnum[]
  }

  /**
   * EventSpace create
   */
  export type EventSpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a EventSpace.
     */
    data: XOR<EventSpaceCreateInput, EventSpaceUncheckedCreateInput>
  }

  /**
   * EventSpace createMany
   */
  export type EventSpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventSpaces.
     */
    data: EventSpaceCreateManyInput | EventSpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventSpace createManyAndReturn
   */
  export type EventSpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * The data used to create many EventSpaces.
     */
    data: EventSpaceCreateManyInput | EventSpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSpace update
   */
  export type EventSpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a EventSpace.
     */
    data: XOR<EventSpaceUpdateInput, EventSpaceUncheckedUpdateInput>
    /**
     * Choose, which EventSpace to update.
     */
    where: EventSpaceWhereUniqueInput
  }

  /**
   * EventSpace updateMany
   */
  export type EventSpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventSpaces.
     */
    data: XOR<EventSpaceUpdateManyMutationInput, EventSpaceUncheckedUpdateManyInput>
    /**
     * Filter which EventSpaces to update
     */
    where?: EventSpaceWhereInput
    /**
     * Limit how many EventSpaces to update.
     */
    limit?: number
  }

  /**
   * EventSpace updateManyAndReturn
   */
  export type EventSpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * The data used to update EventSpaces.
     */
    data: XOR<EventSpaceUpdateManyMutationInput, EventSpaceUncheckedUpdateManyInput>
    /**
     * Filter which EventSpaces to update
     */
    where?: EventSpaceWhereInput
    /**
     * Limit how many EventSpaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSpace upsert
   */
  export type EventSpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the EventSpace to update in case it exists.
     */
    where: EventSpaceWhereUniqueInput
    /**
     * In case the EventSpace found by the `where` argument doesn't exist, create a new EventSpace with this data.
     */
    create: XOR<EventSpaceCreateInput, EventSpaceUncheckedCreateInput>
    /**
     * In case the EventSpace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventSpaceUpdateInput, EventSpaceUncheckedUpdateInput>
  }

  /**
   * EventSpace delete
   */
  export type EventSpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
    /**
     * Filter which EventSpace to delete.
     */
    where: EventSpaceWhereUniqueInput
  }

  /**
   * EventSpace deleteMany
   */
  export type EventSpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSpaces to delete
     */
    where?: EventSpaceWhereInput
    /**
     * Limit how many EventSpaces to delete.
     */
    limit?: number
  }

  /**
   * EventSpace.reviews
   */
  export type EventSpace$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * EventSpace without action
   */
  export type EventSpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSpace
     */
    select?: EventSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSpace
     */
    omit?: EventSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSpaceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
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

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const BlogScalarFieldEnum: {
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

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    blogId: 'blogId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    comment: 'comment',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const GymScalarFieldEnum: {
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

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const ParkingScalarFieldEnum: {
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

  export type ParkingScalarFieldEnum = (typeof ParkingScalarFieldEnum)[keyof typeof ParkingScalarFieldEnum]


  export const PayingGuestsScalarFieldEnum: {
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

  export type PayingGuestsScalarFieldEnum = (typeof PayingGuestsScalarFieldEnum)[keyof typeof PayingGuestsScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
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

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const EventSpaceScalarFieldEnum: {
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

  export type EventSpaceScalarFieldEnum = (typeof EventSpaceScalarFieldEnum)[keyof typeof EventSpaceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    isSubscribed?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    whatsappMobile?: StringFilter<"User"> | string
    mobile?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    state?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    coverURL?: StringNullableFilter<"User"> | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    blogs?: BlogListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    gyms?: GymListRelationFilter
    parkings?: ParkingListRelationFilter
    payingGuests?: PayingGuestsListRelationFilter
    reviews?: ReviewListRelationFilter
    eventSpaces?: EventSpaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isSubscribed?: SortOrder
    created_at?: SortOrder
    whatsappMobile?: SortOrder
    mobile?: SortOrderInput | SortOrder
    role?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    coverURL?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    blogs?: BlogOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    gyms?: GymOrderByRelationAggregateInput
    parkings?: ParkingOrderByRelationAggregateInput
    payingGuests?: PayingGuestsOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    eventSpaces?: EventSpaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    isSubscribed?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    whatsappMobile?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    state?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    coverURL?: StringNullableFilter<"User"> | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    blogs?: BlogListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    gyms?: GymListRelationFilter
    parkings?: ParkingListRelationFilter
    payingGuests?: PayingGuestsListRelationFilter
    reviews?: ReviewListRelationFilter
    eventSpaces?: EventSpaceListRelationFilter
  }, "id" | "mobile">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isSubscribed?: SortOrder
    created_at?: SortOrder
    whatsappMobile?: SortOrder
    mobile?: SortOrderInput | SortOrder
    role?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    coverURL?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    isSubscribed?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    whatsappMobile?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    state?: StringWithAggregatesFilter<"User"> | string
    city?: StringWithAggregatesFilter<"User"> | string
    latitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    coverURL?: StringNullableWithAggregatesFilter<"User"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    razorpayOrderId?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }, "id" | "razorpayOrderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    razorpayOrderId?: StringWithAggregatesFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    userId?: StringFilter<"Blog"> | string
    views?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    excerpt?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    category?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    location?: StringNullableFilter<"Blog"> | string | null
    contactInfo?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    views?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    content?: SortOrder
    location?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    userId?: StringFilter<"Blog"> | string
    views?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    excerpt?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    category?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    location?: StringNullableFilter<"Blog"> | string | null
    contactInfo?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    views?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    content?: SortOrder
    location?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    userId?: StringWithAggregatesFilter<"Blog"> | string
    views?: IntWithAggregatesFilter<"Blog"> | number
    title?: StringWithAggregatesFilter<"Blog"> | string
    excerpt?: StringWithAggregatesFilter<"Blog"> | string
    image?: StringWithAggregatesFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    category?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    location?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    contactInfo?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    blogId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    blog?: BlogOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_blogId?: LikeUserIdBlogIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: StringFilter<"Like"> | string
    blogId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id" | "userId_blogId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    userId?: StringWithAggregatesFilter<"Like"> | string
    blogId?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    blogId?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    blog?: BlogOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    blogId?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    blogId?: StringWithAggregatesFilter<"Comment"> | string
    comment?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: StringFilter<"Gym"> | string
    userId?: StringFilter<"Gym"> | string
    gymName?: StringFilter<"Gym"> | string
    locationLatitude?: FloatFilter<"Gym"> | number
    locationLongitude?: FloatFilter<"Gym"> | number
    yearOfGym?: IntFilter<"Gym"> | number
    description?: StringFilter<"Gym"> | string
    photos?: StringNullableListFilter<"Gym">
    videos?: StringNullableListFilter<"Gym">
    lockerFacility?: BoolFilter<"Gym"> | boolean
    timing?: JsonFilter<"Gym">
    categories?: StringNullableListFilter<"Gym">
    rateCard?: StringNullableFilter<"Gym"> | string | null
    website?: StringNullableFilter<"Gym"> | string | null
    services?: StringNullableListFilter<"Gym">
    benefits?: StringNullableListFilter<"Gym">
    pricing?: JsonFilter<"Gym">
    amenities?: StringNullableListFilter<"Gym">
    availableSports?: StringNullableListFilter<"Gym">
    strengthEquipments?: StringNullableListFilter<"Gym">
    cardioEquipments?: StringNullableListFilter<"Gym">
    rules?: StringNullableListFilter<"Gym">
    gender?: StringFilter<"Gym"> | string
    counsellingServices?: JsonFilter<"Gym">
    socialMediaLinks?: JsonFilter<"Gym">
    isDeleted?: BoolFilter<"Gym"> | boolean
    createdAt?: DateTimeFilter<"Gym"> | Date | string
    updatedAt?: DateTimeFilter<"Gym"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    yearOfGym?: SortOrder
    description?: SortOrder
    photos?: SortOrder
    videos?: SortOrder
    lockerFacility?: SortOrder
    timing?: SortOrder
    categories?: SortOrder
    rateCard?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    services?: SortOrder
    benefits?: SortOrder
    pricing?: SortOrder
    amenities?: SortOrder
    availableSports?: SortOrder
    strengthEquipments?: SortOrder
    cardioEquipments?: SortOrder
    rules?: SortOrder
    gender?: SortOrder
    counsellingServices?: SortOrder
    socialMediaLinks?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    userId?: StringFilter<"Gym"> | string
    gymName?: StringFilter<"Gym"> | string
    locationLatitude?: FloatFilter<"Gym"> | number
    locationLongitude?: FloatFilter<"Gym"> | number
    yearOfGym?: IntFilter<"Gym"> | number
    description?: StringFilter<"Gym"> | string
    photos?: StringNullableListFilter<"Gym">
    videos?: StringNullableListFilter<"Gym">
    lockerFacility?: BoolFilter<"Gym"> | boolean
    timing?: JsonFilter<"Gym">
    categories?: StringNullableListFilter<"Gym">
    rateCard?: StringNullableFilter<"Gym"> | string | null
    website?: StringNullableFilter<"Gym"> | string | null
    services?: StringNullableListFilter<"Gym">
    benefits?: StringNullableListFilter<"Gym">
    pricing?: JsonFilter<"Gym">
    amenities?: StringNullableListFilter<"Gym">
    availableSports?: StringNullableListFilter<"Gym">
    strengthEquipments?: StringNullableListFilter<"Gym">
    cardioEquipments?: StringNullableListFilter<"Gym">
    rules?: StringNullableListFilter<"Gym">
    gender?: StringFilter<"Gym"> | string
    counsellingServices?: JsonFilter<"Gym">
    socialMediaLinks?: JsonFilter<"Gym">
    isDeleted?: BoolFilter<"Gym"> | boolean
    createdAt?: DateTimeFilter<"Gym"> | Date | string
    updatedAt?: DateTimeFilter<"Gym"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    yearOfGym?: SortOrder
    description?: SortOrder
    photos?: SortOrder
    videos?: SortOrder
    lockerFacility?: SortOrder
    timing?: SortOrder
    categories?: SortOrder
    rateCard?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    services?: SortOrder
    benefits?: SortOrder
    pricing?: SortOrder
    amenities?: SortOrder
    availableSports?: SortOrder
    strengthEquipments?: SortOrder
    cardioEquipments?: SortOrder
    rules?: SortOrder
    gender?: SortOrder
    counsellingServices?: SortOrder
    socialMediaLinks?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GymCountOrderByAggregateInput
    _avg?: GymAvgOrderByAggregateInput
    _max?: GymMaxOrderByAggregateInput
    _min?: GymMinOrderByAggregateInput
    _sum?: GymSumOrderByAggregateInput
  }

  export type GymScalarWhereWithAggregatesInput = {
    AND?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    OR?: GymScalarWhereWithAggregatesInput[]
    NOT?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gym"> | string
    userId?: StringWithAggregatesFilter<"Gym"> | string
    gymName?: StringWithAggregatesFilter<"Gym"> | string
    locationLatitude?: FloatWithAggregatesFilter<"Gym"> | number
    locationLongitude?: FloatWithAggregatesFilter<"Gym"> | number
    yearOfGym?: IntWithAggregatesFilter<"Gym"> | number
    description?: StringWithAggregatesFilter<"Gym"> | string
    photos?: StringNullableListFilter<"Gym">
    videos?: StringNullableListFilter<"Gym">
    lockerFacility?: BoolWithAggregatesFilter<"Gym"> | boolean
    timing?: JsonWithAggregatesFilter<"Gym">
    categories?: StringNullableListFilter<"Gym">
    rateCard?: StringNullableWithAggregatesFilter<"Gym"> | string | null
    website?: StringNullableWithAggregatesFilter<"Gym"> | string | null
    services?: StringNullableListFilter<"Gym">
    benefits?: StringNullableListFilter<"Gym">
    pricing?: JsonWithAggregatesFilter<"Gym">
    amenities?: StringNullableListFilter<"Gym">
    availableSports?: StringNullableListFilter<"Gym">
    strengthEquipments?: StringNullableListFilter<"Gym">
    cardioEquipments?: StringNullableListFilter<"Gym">
    rules?: StringNullableListFilter<"Gym">
    gender?: StringWithAggregatesFilter<"Gym"> | string
    counsellingServices?: JsonWithAggregatesFilter<"Gym">
    socialMediaLinks?: JsonWithAggregatesFilter<"Gym">
    isDeleted?: BoolWithAggregatesFilter<"Gym"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Gym"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gym"> | Date | string
  }

  export type ParkingWhereInput = {
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    id?: StringFilter<"Parking"> | string
    userId?: StringFilter<"Parking"> | string
    name?: StringFilter<"Parking"> | string
    description?: StringFilter<"Parking"> | string
    latitude?: FloatFilter<"Parking"> | number
    longitude?: FloatFilter<"Parking"> | number
    price?: JsonFilter<"Parking">
    yearOfParking?: IntFilter<"Parking"> | number
    parkingType?: StringFilter<"Parking"> | string
    vacancies?: IntFilter<"Parking"> | number
    size?: StringFilter<"Parking"> | string
    photos?: StringNullableListFilter<"Parking">
    videos?: StringNullableListFilter<"Parking">
    amenities?: StringNullableListFilter<"Parking">
    accessibility?: StringFilter<"Parking"> | string
    capacity?: IntFilter<"Parking"> | number
    security?: StringNullableListFilter<"Parking">
    operatingHours?: JsonFilter<"Parking">
    booking?: JsonFilter<"Parking">
    isDeleted?: BoolFilter<"Parking"> | boolean
    createdAt?: DateTimeFilter<"Parking"> | Date | string
    updatedAt?: DateTimeFilter<"Parking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type ParkingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    yearOfParking?: SortOrder
    parkingType?: SortOrder
    vacancies?: SortOrder
    size?: SortOrder
    photos?: SortOrder
    videos?: SortOrder
    amenities?: SortOrder
    accessibility?: SortOrder
    capacity?: SortOrder
    security?: SortOrder
    operatingHours?: SortOrder
    booking?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ParkingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    userId?: StringFilter<"Parking"> | string
    name?: StringFilter<"Parking"> | string
    description?: StringFilter<"Parking"> | string
    latitude?: FloatFilter<"Parking"> | number
    longitude?: FloatFilter<"Parking"> | number
    price?: JsonFilter<"Parking">
    yearOfParking?: IntFilter<"Parking"> | number
    parkingType?: StringFilter<"Parking"> | string
    vacancies?: IntFilter<"Parking"> | number
    size?: StringFilter<"Parking"> | string
    photos?: StringNullableListFilter<"Parking">
    videos?: StringNullableListFilter<"Parking">
    amenities?: StringNullableListFilter<"Parking">
    accessibility?: StringFilter<"Parking"> | string
    capacity?: IntFilter<"Parking"> | number
    security?: StringNullableListFilter<"Parking">
    operatingHours?: JsonFilter<"Parking">
    booking?: JsonFilter<"Parking">
    isDeleted?: BoolFilter<"Parking"> | boolean
    createdAt?: DateTimeFilter<"Parking"> | Date | string
    updatedAt?: DateTimeFilter<"Parking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type ParkingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    yearOfParking?: SortOrder
    parkingType?: SortOrder
    vacancies?: SortOrder
    size?: SortOrder
    photos?: SortOrder
    videos?: SortOrder
    amenities?: SortOrder
    accessibility?: SortOrder
    capacity?: SortOrder
    security?: SortOrder
    operatingHours?: SortOrder
    booking?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingCountOrderByAggregateInput
    _avg?: ParkingAvgOrderByAggregateInput
    _max?: ParkingMaxOrderByAggregateInput
    _min?: ParkingMinOrderByAggregateInput
    _sum?: ParkingSumOrderByAggregateInput
  }

  export type ParkingScalarWhereWithAggregatesInput = {
    AND?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    OR?: ParkingScalarWhereWithAggregatesInput[]
    NOT?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parking"> | string
    userId?: StringWithAggregatesFilter<"Parking"> | string
    name?: StringWithAggregatesFilter<"Parking"> | string
    description?: StringWithAggregatesFilter<"Parking"> | string
    latitude?: FloatWithAggregatesFilter<"Parking"> | number
    longitude?: FloatWithAggregatesFilter<"Parking"> | number
    price?: JsonWithAggregatesFilter<"Parking">
    yearOfParking?: IntWithAggregatesFilter<"Parking"> | number
    parkingType?: StringWithAggregatesFilter<"Parking"> | string
    vacancies?: IntWithAggregatesFilter<"Parking"> | number
    size?: StringWithAggregatesFilter<"Parking"> | string
    photos?: StringNullableListFilter<"Parking">
    videos?: StringNullableListFilter<"Parking">
    amenities?: StringNullableListFilter<"Parking">
    accessibility?: StringWithAggregatesFilter<"Parking"> | string
    capacity?: IntWithAggregatesFilter<"Parking"> | number
    security?: StringNullableListFilter<"Parking">
    operatingHours?: JsonWithAggregatesFilter<"Parking">
    booking?: JsonWithAggregatesFilter<"Parking">
    isDeleted?: BoolWithAggregatesFilter<"Parking"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Parking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parking"> | Date | string
  }

  export type PayingGuestsWhereInput = {
    AND?: PayingGuestsWhereInput | PayingGuestsWhereInput[]
    OR?: PayingGuestsWhereInput[]
    NOT?: PayingGuestsWhereInput | PayingGuestsWhereInput[]
    id?: StringFilter<"PayingGuests"> | string
    userId?: StringFilter<"PayingGuests"> | string
    subCategory?: StringNullableListFilter<"PayingGuests">
    roomDetails?: JsonNullableFilter<"PayingGuests">
    mealDetails?: JsonNullableFilter<"PayingGuests">
    availabilityStatus?: StringNullableFilter<"PayingGuests"> | string | null
    availableFrom?: DateTimeNullableFilter<"PayingGuests"> | Date | string | null
    ageOfProperty?: IntNullableFilter<"PayingGuests"> | number | null
    description?: StringNullableFilter<"PayingGuests"> | string | null
    amenities?: JsonNullableFilter<"PayingGuests">
    rules?: JsonNullableFilter<"PayingGuests">
    otherFeatures?: JsonNullableFilter<"PayingGuests">
    societyBuildingFeatures?: JsonNullableFilter<"PayingGuests">
    nearbyPlaces?: JsonNullableFilter<"PayingGuests">
    pricing?: JsonNullableFilter<"PayingGuests">
    safetyFeatures?: JsonNullableFilter<"PayingGuests">
    communityFeatures?: JsonNullableFilter<"PayingGuests">
    images?: StringNullableListFilter<"PayingGuests">
    videos?: StringNullableListFilter<"PayingGuests">
    verification?: JsonNullableFilter<"PayingGuests">
    isDeleted?: BoolFilter<"PayingGuests"> | boolean
    createdAt?: DateTimeFilter<"PayingGuests"> | Date | string
    updatedAt?: DateTimeFilter<"PayingGuests"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type PayingGuestsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrder
    roomDetails?: SortOrderInput | SortOrder
    mealDetails?: SortOrderInput | SortOrder
    availabilityStatus?: SortOrderInput | SortOrder
    availableFrom?: SortOrderInput | SortOrder
    ageOfProperty?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    otherFeatures?: SortOrderInput | SortOrder
    societyBuildingFeatures?: SortOrderInput | SortOrder
    nearbyPlaces?: SortOrderInput | SortOrder
    pricing?: SortOrderInput | SortOrder
    safetyFeatures?: SortOrderInput | SortOrder
    communityFeatures?: SortOrderInput | SortOrder
    images?: SortOrder
    videos?: SortOrder
    verification?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type PayingGuestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayingGuestsWhereInput | PayingGuestsWhereInput[]
    OR?: PayingGuestsWhereInput[]
    NOT?: PayingGuestsWhereInput | PayingGuestsWhereInput[]
    userId?: StringFilter<"PayingGuests"> | string
    subCategory?: StringNullableListFilter<"PayingGuests">
    roomDetails?: JsonNullableFilter<"PayingGuests">
    mealDetails?: JsonNullableFilter<"PayingGuests">
    availabilityStatus?: StringNullableFilter<"PayingGuests"> | string | null
    availableFrom?: DateTimeNullableFilter<"PayingGuests"> | Date | string | null
    ageOfProperty?: IntNullableFilter<"PayingGuests"> | number | null
    description?: StringNullableFilter<"PayingGuests"> | string | null
    amenities?: JsonNullableFilter<"PayingGuests">
    rules?: JsonNullableFilter<"PayingGuests">
    otherFeatures?: JsonNullableFilter<"PayingGuests">
    societyBuildingFeatures?: JsonNullableFilter<"PayingGuests">
    nearbyPlaces?: JsonNullableFilter<"PayingGuests">
    pricing?: JsonNullableFilter<"PayingGuests">
    safetyFeatures?: JsonNullableFilter<"PayingGuests">
    communityFeatures?: JsonNullableFilter<"PayingGuests">
    images?: StringNullableListFilter<"PayingGuests">
    videos?: StringNullableListFilter<"PayingGuests">
    verification?: JsonNullableFilter<"PayingGuests">
    isDeleted?: BoolFilter<"PayingGuests"> | boolean
    createdAt?: DateTimeFilter<"PayingGuests"> | Date | string
    updatedAt?: DateTimeFilter<"PayingGuests"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type PayingGuestsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrder
    roomDetails?: SortOrderInput | SortOrder
    mealDetails?: SortOrderInput | SortOrder
    availabilityStatus?: SortOrderInput | SortOrder
    availableFrom?: SortOrderInput | SortOrder
    ageOfProperty?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    otherFeatures?: SortOrderInput | SortOrder
    societyBuildingFeatures?: SortOrderInput | SortOrder
    nearbyPlaces?: SortOrderInput | SortOrder
    pricing?: SortOrderInput | SortOrder
    safetyFeatures?: SortOrderInput | SortOrder
    communityFeatures?: SortOrderInput | SortOrder
    images?: SortOrder
    videos?: SortOrder
    verification?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayingGuestsCountOrderByAggregateInput
    _avg?: PayingGuestsAvgOrderByAggregateInput
    _max?: PayingGuestsMaxOrderByAggregateInput
    _min?: PayingGuestsMinOrderByAggregateInput
    _sum?: PayingGuestsSumOrderByAggregateInput
  }

  export type PayingGuestsScalarWhereWithAggregatesInput = {
    AND?: PayingGuestsScalarWhereWithAggregatesInput | PayingGuestsScalarWhereWithAggregatesInput[]
    OR?: PayingGuestsScalarWhereWithAggregatesInput[]
    NOT?: PayingGuestsScalarWhereWithAggregatesInput | PayingGuestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayingGuests"> | string
    userId?: StringWithAggregatesFilter<"PayingGuests"> | string
    subCategory?: StringNullableListFilter<"PayingGuests">
    roomDetails?: JsonNullableWithAggregatesFilter<"PayingGuests">
    mealDetails?: JsonNullableWithAggregatesFilter<"PayingGuests">
    availabilityStatus?: StringNullableWithAggregatesFilter<"PayingGuests"> | string | null
    availableFrom?: DateTimeNullableWithAggregatesFilter<"PayingGuests"> | Date | string | null
    ageOfProperty?: IntNullableWithAggregatesFilter<"PayingGuests"> | number | null
    description?: StringNullableWithAggregatesFilter<"PayingGuests"> | string | null
    amenities?: JsonNullableWithAggregatesFilter<"PayingGuests">
    rules?: JsonNullableWithAggregatesFilter<"PayingGuests">
    otherFeatures?: JsonNullableWithAggregatesFilter<"PayingGuests">
    societyBuildingFeatures?: JsonNullableWithAggregatesFilter<"PayingGuests">
    nearbyPlaces?: JsonNullableWithAggregatesFilter<"PayingGuests">
    pricing?: JsonNullableWithAggregatesFilter<"PayingGuests">
    safetyFeatures?: JsonNullableWithAggregatesFilter<"PayingGuests">
    communityFeatures?: JsonNullableWithAggregatesFilter<"PayingGuests">
    images?: StringNullableListFilter<"PayingGuests">
    videos?: StringNullableListFilter<"PayingGuests">
    verification?: JsonNullableWithAggregatesFilter<"PayingGuests">
    isDeleted?: BoolWithAggregatesFilter<"PayingGuests"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PayingGuests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayingGuests"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    gymId?: StringNullableFilter<"Review"> | string | null
    parkingId?: StringNullableFilter<"Review"> | string | null
    pgId?: StringNullableFilter<"Review"> | string | null
    eventSpaceId?: StringNullableFilter<"Review"> | string | null
    rating?: IntNullableFilter<"Review"> | number | null
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
    parking?: XOR<ParkingNullableScalarRelationFilter, ParkingWhereInput> | null
    pg?: XOR<PayingGuestsNullableScalarRelationFilter, PayingGuestsWhereInput> | null
    eventSpace?: XOR<EventSpaceNullableScalarRelationFilter, EventSpaceWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrderInput | SortOrder
    parkingId?: SortOrderInput | SortOrder
    pgId?: SortOrderInput | SortOrder
    eventSpaceId?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
    parking?: ParkingOrderByWithRelationInput
    pg?: PayingGuestsOrderByWithRelationInput
    eventSpace?: EventSpaceOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: StringFilter<"Review"> | string
    gymId?: StringNullableFilter<"Review"> | string | null
    parkingId?: StringNullableFilter<"Review"> | string | null
    pgId?: StringNullableFilter<"Review"> | string | null
    eventSpaceId?: StringNullableFilter<"Review"> | string | null
    rating?: IntNullableFilter<"Review"> | number | null
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
    parking?: XOR<ParkingNullableScalarRelationFilter, ParkingWhereInput> | null
    pg?: XOR<PayingGuestsNullableScalarRelationFilter, PayingGuestsWhereInput> | null
    eventSpace?: XOR<EventSpaceNullableScalarRelationFilter, EventSpaceWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrderInput | SortOrder
    parkingId?: SortOrderInput | SortOrder
    pgId?: SortOrderInput | SortOrder
    eventSpaceId?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    gymId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    parkingId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    pgId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    eventSpaceId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Review"> | number | null
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type EventSpaceWhereInput = {
    AND?: EventSpaceWhereInput | EventSpaceWhereInput[]
    OR?: EventSpaceWhereInput[]
    NOT?: EventSpaceWhereInput | EventSpaceWhereInput[]
    id?: StringFilter<"EventSpace"> | string
    userId?: StringFilter<"EventSpace"> | string
    subCategory?: StringNullableFilter<"EventSpace"> | string | null
    type?: StringNullableFilter<"EventSpace"> | string | null
    propertyDetails?: JsonNullableFilter<"EventSpace">
    pricing?: JsonNullableFilter<"EventSpace">
    amenities?: JsonNullableFilter<"EventSpace">
    facilities?: JsonNullableFilter<"EventSpace">
    availableSpaces?: JsonNullableFilter<"EventSpace">
    bookingDetails?: JsonNullableFilter<"EventSpace">
    additionalServices?: JsonNullableFilter<"EventSpace">
    rules?: JsonNullableFilter<"EventSpace">
    nearbyPlaces?: JsonNullableFilter<"EventSpace">
    availabilityStatus?: StringNullableFilter<"EventSpace"> | string | null
    ageOfProperty?: IntNullableFilter<"EventSpace"> | number | null
    description?: StringNullableFilter<"EventSpace"> | string | null
    images?: StringNullableListFilter<"EventSpace">
    videos?: StringNullableListFilter<"EventSpace">
    isDeleted?: BoolFilter<"EventSpace"> | boolean
    createdAt?: DateTimeFilter<"EventSpace"> | Date | string
    updatedAt?: DateTimeFilter<"EventSpace"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type EventSpaceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    propertyDetails?: SortOrderInput | SortOrder
    pricing?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    facilities?: SortOrderInput | SortOrder
    availableSpaces?: SortOrderInput | SortOrder
    bookingDetails?: SortOrderInput | SortOrder
    additionalServices?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    nearbyPlaces?: SortOrderInput | SortOrder
    availabilityStatus?: SortOrderInput | SortOrder
    ageOfProperty?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    videos?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type EventSpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventSpaceWhereInput | EventSpaceWhereInput[]
    OR?: EventSpaceWhereInput[]
    NOT?: EventSpaceWhereInput | EventSpaceWhereInput[]
    userId?: StringFilter<"EventSpace"> | string
    subCategory?: StringNullableFilter<"EventSpace"> | string | null
    type?: StringNullableFilter<"EventSpace"> | string | null
    propertyDetails?: JsonNullableFilter<"EventSpace">
    pricing?: JsonNullableFilter<"EventSpace">
    amenities?: JsonNullableFilter<"EventSpace">
    facilities?: JsonNullableFilter<"EventSpace">
    availableSpaces?: JsonNullableFilter<"EventSpace">
    bookingDetails?: JsonNullableFilter<"EventSpace">
    additionalServices?: JsonNullableFilter<"EventSpace">
    rules?: JsonNullableFilter<"EventSpace">
    nearbyPlaces?: JsonNullableFilter<"EventSpace">
    availabilityStatus?: StringNullableFilter<"EventSpace"> | string | null
    ageOfProperty?: IntNullableFilter<"EventSpace"> | number | null
    description?: StringNullableFilter<"EventSpace"> | string | null
    images?: StringNullableListFilter<"EventSpace">
    videos?: StringNullableListFilter<"EventSpace">
    isDeleted?: BoolFilter<"EventSpace"> | boolean
    createdAt?: DateTimeFilter<"EventSpace"> | Date | string
    updatedAt?: DateTimeFilter<"EventSpace"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id">

  export type EventSpaceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    propertyDetails?: SortOrderInput | SortOrder
    pricing?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    facilities?: SortOrderInput | SortOrder
    availableSpaces?: SortOrderInput | SortOrder
    bookingDetails?: SortOrderInput | SortOrder
    additionalServices?: SortOrderInput | SortOrder
    rules?: SortOrderInput | SortOrder
    nearbyPlaces?: SortOrderInput | SortOrder
    availabilityStatus?: SortOrderInput | SortOrder
    ageOfProperty?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    images?: SortOrder
    videos?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventSpaceCountOrderByAggregateInput
    _avg?: EventSpaceAvgOrderByAggregateInput
    _max?: EventSpaceMaxOrderByAggregateInput
    _min?: EventSpaceMinOrderByAggregateInput
    _sum?: EventSpaceSumOrderByAggregateInput
  }

  export type EventSpaceScalarWhereWithAggregatesInput = {
    AND?: EventSpaceScalarWhereWithAggregatesInput | EventSpaceScalarWhereWithAggregatesInput[]
    OR?: EventSpaceScalarWhereWithAggregatesInput[]
    NOT?: EventSpaceScalarWhereWithAggregatesInput | EventSpaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventSpace"> | string
    userId?: StringWithAggregatesFilter<"EventSpace"> | string
    subCategory?: StringNullableWithAggregatesFilter<"EventSpace"> | string | null
    type?: StringNullableWithAggregatesFilter<"EventSpace"> | string | null
    propertyDetails?: JsonNullableWithAggregatesFilter<"EventSpace">
    pricing?: JsonNullableWithAggregatesFilter<"EventSpace">
    amenities?: JsonNullableWithAggregatesFilter<"EventSpace">
    facilities?: JsonNullableWithAggregatesFilter<"EventSpace">
    availableSpaces?: JsonNullableWithAggregatesFilter<"EventSpace">
    bookingDetails?: JsonNullableWithAggregatesFilter<"EventSpace">
    additionalServices?: JsonNullableWithAggregatesFilter<"EventSpace">
    rules?: JsonNullableWithAggregatesFilter<"EventSpace">
    nearbyPlaces?: JsonNullableWithAggregatesFilter<"EventSpace">
    availabilityStatus?: StringNullableWithAggregatesFilter<"EventSpace"> | string | null
    ageOfProperty?: IntNullableWithAggregatesFilter<"EventSpace"> | number | null
    description?: StringNullableWithAggregatesFilter<"EventSpace"> | string | null
    images?: StringNullableListFilter<"EventSpace">
    videos?: StringNullableListFilter<"EventSpace">
    isDeleted?: BoolWithAggregatesFilter<"EventSpace"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EventSpace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventSpace"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentCreateInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogInput
    likes?: LikeCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    userId: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutBlogInput
    likes?: LikeUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogNestedInput
    likes?: LikeUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutBlogNestedInput
    likes?: LikeUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: string
    userId: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    blog: BlogCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    userId: string
    blogId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    blog?: BlogUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: string
    userId: string
    blogId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    blog: BlogCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    blogId: string
    comment: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    blog?: BlogUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    blogId: string
    comment: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymCreateInput = {
    id?: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGymsInput
    reviews?: ReviewCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateInput = {
    id?: string
    userId: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGymsNestedInput
    reviews?: ReviewUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateManyInput = {
    id?: string
    userId: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GymUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingCreateInput = {
    id?: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParkingsInput
    reviews?: ReviewCreateNestedManyWithoutParkingInput
  }

  export type ParkingUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutParkingInput
  }

  export type ParkingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParkingsNestedInput
    reviews?: ReviewUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutParkingNestedInput
  }

  export type ParkingCreateManyInput = {
    id?: string
    userId: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayingGuestsCreateInput = {
    id?: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPayingGuestsInput
    reviews?: ReviewCreateNestedManyWithoutPgInput
  }

  export type PayingGuestsUncheckedCreateInput = {
    id?: string
    userId: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPgInput
  }

  export type PayingGuestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayingGuestsNestedInput
    reviews?: ReviewUpdateManyWithoutPgNestedInput
  }

  export type PayingGuestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPgNestedInput
  }

  export type PayingGuestsCreateManyInput = {
    id?: string
    userId: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayingGuestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayingGuestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    gym?: GymCreateNestedOneWithoutReviewsInput
    parking?: ParkingCreateNestedOneWithoutReviewsInput
    pg?: PayingGuestsCreateNestedOneWithoutReviewsInput
    eventSpace?: EventSpaceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    userId: string
    gymId?: string | null
    parkingId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    gym?: GymUpdateOneWithoutReviewsNestedInput
    parking?: ParkingUpdateOneWithoutReviewsNestedInput
    pg?: PayingGuestsUpdateOneWithoutReviewsNestedInput
    eventSpace?: EventSpaceUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    userId: string
    gymId?: string | null
    parkingId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSpaceCreateInput = {
    id?: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventSpacesInput
    reviews?: ReviewCreateNestedManyWithoutEventSpaceInput
  }

  export type EventSpaceUncheckedCreateInput = {
    id?: string
    userId: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventSpaceInput
  }

  export type EventSpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventSpacesNestedInput
    reviews?: ReviewUpdateManyWithoutEventSpaceNestedInput
  }

  export type EventSpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutEventSpaceNestedInput
  }

  export type EventSpaceCreateManyInput = {
    id?: string
    userId: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventSpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type GymListRelationFilter = {
    every?: GymWhereInput
    some?: GymWhereInput
    none?: GymWhereInput
  }

  export type ParkingListRelationFilter = {
    every?: ParkingWhereInput
    some?: ParkingWhereInput
    none?: ParkingWhereInput
  }

  export type PayingGuestsListRelationFilter = {
    every?: PayingGuestsWhereInput
    some?: PayingGuestsWhereInput
    none?: PayingGuestsWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type EventSpaceListRelationFilter = {
    every?: EventSpaceWhereInput
    some?: EventSpaceWhereInput
    none?: EventSpaceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayingGuestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSubscribed?: SortOrder
    created_at?: SortOrder
    whatsappMobile?: SortOrder
    mobile?: SortOrder
    role?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    coverURL?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSubscribed?: SortOrder
    created_at?: SortOrder
    whatsappMobile?: SortOrder
    mobile?: SortOrder
    role?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    coverURL?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSubscribed?: SortOrder
    created_at?: SortOrder
    whatsappMobile?: SortOrder
    mobile?: SortOrder
    role?: SortOrder
    state?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    coverURL?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    views?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    category?: SortOrder
    content?: SortOrder
    location?: SortOrder
    contactInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    views?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    views?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    image?: SortOrder
    category?: SortOrder
    content?: SortOrder
    location?: SortOrder
    contactInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    views?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    image?: SortOrder
    category?: SortOrder
    content?: SortOrder
    location?: SortOrder
    contactInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    views?: SortOrder
  }

  export type BlogScalarRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type LikeUserIdBlogIdCompoundUniqueInput = {
    userId: string
    blogId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    blogId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    yearOfGym?: SortOrder
    description?: SortOrder
    photos?: SortOrder
    videos?: SortOrder
    lockerFacility?: SortOrder
    timing?: SortOrder
    categories?: SortOrder
    rateCard?: SortOrder
    website?: SortOrder
    services?: SortOrder
    benefits?: SortOrder
    pricing?: SortOrder
    amenities?: SortOrder
    availableSports?: SortOrder
    strengthEquipments?: SortOrder
    cardioEquipments?: SortOrder
    rules?: SortOrder
    gender?: SortOrder
    counsellingServices?: SortOrder
    socialMediaLinks?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GymAvgOrderByAggregateInput = {
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    yearOfGym?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    yearOfGym?: SortOrder
    description?: SortOrder
    lockerFacility?: SortOrder
    rateCard?: SortOrder
    website?: SortOrder
    gender?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    yearOfGym?: SortOrder
    description?: SortOrder
    lockerFacility?: SortOrder
    rateCard?: SortOrder
    website?: SortOrder
    gender?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GymSumOrderByAggregateInput = {
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    yearOfGym?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ParkingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    yearOfParking?: SortOrder
    parkingType?: SortOrder
    vacancies?: SortOrder
    size?: SortOrder
    photos?: SortOrder
    videos?: SortOrder
    amenities?: SortOrder
    accessibility?: SortOrder
    capacity?: SortOrder
    security?: SortOrder
    operatingHours?: SortOrder
    booking?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    yearOfParking?: SortOrder
    vacancies?: SortOrder
    capacity?: SortOrder
  }

  export type ParkingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    yearOfParking?: SortOrder
    parkingType?: SortOrder
    vacancies?: SortOrder
    size?: SortOrder
    accessibility?: SortOrder
    capacity?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    yearOfParking?: SortOrder
    parkingType?: SortOrder
    vacancies?: SortOrder
    size?: SortOrder
    accessibility?: SortOrder
    capacity?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    yearOfParking?: SortOrder
    vacancies?: SortOrder
    capacity?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PayingGuestsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrder
    roomDetails?: SortOrder
    mealDetails?: SortOrder
    availabilityStatus?: SortOrder
    availableFrom?: SortOrder
    ageOfProperty?: SortOrder
    description?: SortOrder
    amenities?: SortOrder
    rules?: SortOrder
    otherFeatures?: SortOrder
    societyBuildingFeatures?: SortOrder
    nearbyPlaces?: SortOrder
    pricing?: SortOrder
    safetyFeatures?: SortOrder
    communityFeatures?: SortOrder
    images?: SortOrder
    videos?: SortOrder
    verification?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayingGuestsAvgOrderByAggregateInput = {
    ageOfProperty?: SortOrder
  }

  export type PayingGuestsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    availabilityStatus?: SortOrder
    availableFrom?: SortOrder
    ageOfProperty?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayingGuestsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    availabilityStatus?: SortOrder
    availableFrom?: SortOrder
    ageOfProperty?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayingGuestsSumOrderByAggregateInput = {
    ageOfProperty?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GymNullableScalarRelationFilter = {
    is?: GymWhereInput | null
    isNot?: GymWhereInput | null
  }

  export type ParkingNullableScalarRelationFilter = {
    is?: ParkingWhereInput | null
    isNot?: ParkingWhereInput | null
  }

  export type PayingGuestsNullableScalarRelationFilter = {
    is?: PayingGuestsWhereInput | null
    isNot?: PayingGuestsWhereInput | null
  }

  export type EventSpaceNullableScalarRelationFilter = {
    is?: EventSpaceWhereInput | null
    isNot?: EventSpaceWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    parkingId?: SortOrder
    pgId?: SortOrder
    eventSpaceId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    parkingId?: SortOrder
    pgId?: SortOrder
    eventSpaceId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    parkingId?: SortOrder
    pgId?: SortOrder
    eventSpaceId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EventSpaceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrder
    type?: SortOrder
    propertyDetails?: SortOrder
    pricing?: SortOrder
    amenities?: SortOrder
    facilities?: SortOrder
    availableSpaces?: SortOrder
    bookingDetails?: SortOrder
    additionalServices?: SortOrder
    rules?: SortOrder
    nearbyPlaces?: SortOrder
    availabilityStatus?: SortOrder
    ageOfProperty?: SortOrder
    description?: SortOrder
    images?: SortOrder
    videos?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSpaceAvgOrderByAggregateInput = {
    ageOfProperty?: SortOrder
  }

  export type EventSpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrder
    type?: SortOrder
    availabilityStatus?: SortOrder
    ageOfProperty?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSpaceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subCategory?: SortOrder
    type?: SortOrder
    availabilityStatus?: SortOrder
    ageOfProperty?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSpaceSumOrderByAggregateInput = {
    ageOfProperty?: SortOrder
  }

  export type BlogCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type GymCreateNestedManyWithoutUserInput = {
    create?: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput> | GymCreateWithoutUserInput[] | GymUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymCreateOrConnectWithoutUserInput | GymCreateOrConnectWithoutUserInput[]
    createMany?: GymCreateManyUserInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type ParkingCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
  }

  export type PayingGuestsCreateNestedManyWithoutUserInput = {
    create?: XOR<PayingGuestsCreateWithoutUserInput, PayingGuestsUncheckedCreateWithoutUserInput> | PayingGuestsCreateWithoutUserInput[] | PayingGuestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayingGuestsCreateOrConnectWithoutUserInput | PayingGuestsCreateOrConnectWithoutUserInput[]
    createMany?: PayingGuestsCreateManyUserInputEnvelope
    connect?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EventSpaceCreateNestedManyWithoutUserInput = {
    create?: XOR<EventSpaceCreateWithoutUserInput, EventSpaceUncheckedCreateWithoutUserInput> | EventSpaceCreateWithoutUserInput[] | EventSpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSpaceCreateOrConnectWithoutUserInput | EventSpaceCreateOrConnectWithoutUserInput[]
    createMany?: EventSpaceCreateManyUserInputEnvelope
    connect?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type GymUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput> | GymCreateWithoutUserInput[] | GymUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymCreateOrConnectWithoutUserInput | GymCreateOrConnectWithoutUserInput[]
    createMany?: GymCreateManyUserInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type ParkingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
  }

  export type PayingGuestsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayingGuestsCreateWithoutUserInput, PayingGuestsUncheckedCreateWithoutUserInput> | PayingGuestsCreateWithoutUserInput[] | PayingGuestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayingGuestsCreateOrConnectWithoutUserInput | PayingGuestsCreateOrConnectWithoutUserInput[]
    createMany?: PayingGuestsCreateManyUserInputEnvelope
    connect?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EventSpaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventSpaceCreateWithoutUserInput, EventSpaceUncheckedCreateWithoutUserInput> | EventSpaceCreateWithoutUserInput[] | EventSpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSpaceCreateOrConnectWithoutUserInput | EventSpaceCreateOrConnectWithoutUserInput[]
    createMany?: EventSpaceCreateManyUserInputEnvelope
    connect?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlogUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type GymUpdateManyWithoutUserNestedInput = {
    create?: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput> | GymCreateWithoutUserInput[] | GymUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymCreateOrConnectWithoutUserInput | GymCreateOrConnectWithoutUserInput[]
    upsert?: GymUpsertWithWhereUniqueWithoutUserInput | GymUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GymCreateManyUserInputEnvelope
    set?: GymWhereUniqueInput | GymWhereUniqueInput[]
    disconnect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    delete?: GymWhereUniqueInput | GymWhereUniqueInput[]
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    update?: GymUpdateWithWhereUniqueWithoutUserInput | GymUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GymUpdateManyWithWhereWithoutUserInput | GymUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GymScalarWhereInput | GymScalarWhereInput[]
  }

  export type ParkingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    upsert?: ParkingUpsertWithWhereUniqueWithoutUserInput | ParkingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    set?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    disconnect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    delete?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    update?: ParkingUpdateWithWhereUniqueWithoutUserInput | ParkingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingUpdateManyWithWhereWithoutUserInput | ParkingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
  }

  export type PayingGuestsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayingGuestsCreateWithoutUserInput, PayingGuestsUncheckedCreateWithoutUserInput> | PayingGuestsCreateWithoutUserInput[] | PayingGuestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayingGuestsCreateOrConnectWithoutUserInput | PayingGuestsCreateOrConnectWithoutUserInput[]
    upsert?: PayingGuestsUpsertWithWhereUniqueWithoutUserInput | PayingGuestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayingGuestsCreateManyUserInputEnvelope
    set?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    disconnect?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    delete?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    connect?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    update?: PayingGuestsUpdateWithWhereUniqueWithoutUserInput | PayingGuestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayingGuestsUpdateManyWithWhereWithoutUserInput | PayingGuestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayingGuestsScalarWhereInput | PayingGuestsScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type EventSpaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventSpaceCreateWithoutUserInput, EventSpaceUncheckedCreateWithoutUserInput> | EventSpaceCreateWithoutUserInput[] | EventSpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSpaceCreateOrConnectWithoutUserInput | EventSpaceCreateOrConnectWithoutUserInput[]
    upsert?: EventSpaceUpsertWithWhereUniqueWithoutUserInput | EventSpaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventSpaceCreateManyUserInputEnvelope
    set?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    disconnect?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    delete?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    connect?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    update?: EventSpaceUpdateWithWhereUniqueWithoutUserInput | EventSpaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventSpaceUpdateManyWithWhereWithoutUserInput | EventSpaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventSpaceScalarWhereInput | EventSpaceScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type GymUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput> | GymCreateWithoutUserInput[] | GymUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymCreateOrConnectWithoutUserInput | GymCreateOrConnectWithoutUserInput[]
    upsert?: GymUpsertWithWhereUniqueWithoutUserInput | GymUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GymCreateManyUserInputEnvelope
    set?: GymWhereUniqueInput | GymWhereUniqueInput[]
    disconnect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    delete?: GymWhereUniqueInput | GymWhereUniqueInput[]
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    update?: GymUpdateWithWhereUniqueWithoutUserInput | GymUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GymUpdateManyWithWhereWithoutUserInput | GymUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GymScalarWhereInput | GymScalarWhereInput[]
  }

  export type ParkingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput> | ParkingCreateWithoutUserInput[] | ParkingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingCreateOrConnectWithoutUserInput | ParkingCreateOrConnectWithoutUserInput[]
    upsert?: ParkingUpsertWithWhereUniqueWithoutUserInput | ParkingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingCreateManyUserInputEnvelope
    set?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    disconnect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    delete?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    connect?: ParkingWhereUniqueInput | ParkingWhereUniqueInput[]
    update?: ParkingUpdateWithWhereUniqueWithoutUserInput | ParkingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingUpdateManyWithWhereWithoutUserInput | ParkingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
  }

  export type PayingGuestsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayingGuestsCreateWithoutUserInput, PayingGuestsUncheckedCreateWithoutUserInput> | PayingGuestsCreateWithoutUserInput[] | PayingGuestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayingGuestsCreateOrConnectWithoutUserInput | PayingGuestsCreateOrConnectWithoutUserInput[]
    upsert?: PayingGuestsUpsertWithWhereUniqueWithoutUserInput | PayingGuestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayingGuestsCreateManyUserInputEnvelope
    set?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    disconnect?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    delete?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    connect?: PayingGuestsWhereUniqueInput | PayingGuestsWhereUniqueInput[]
    update?: PayingGuestsUpdateWithWhereUniqueWithoutUserInput | PayingGuestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayingGuestsUpdateManyWithWhereWithoutUserInput | PayingGuestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayingGuestsScalarWhereInput | PayingGuestsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type EventSpaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventSpaceCreateWithoutUserInput, EventSpaceUncheckedCreateWithoutUserInput> | EventSpaceCreateWithoutUserInput[] | EventSpaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventSpaceCreateOrConnectWithoutUserInput | EventSpaceCreateOrConnectWithoutUserInput[]
    upsert?: EventSpaceUpsertWithWhereUniqueWithoutUserInput | EventSpaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventSpaceCreateManyUserInputEnvelope
    set?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    disconnect?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    delete?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    connect?: EventSpaceWhereUniqueInput | EventSpaceWhereUniqueInput[]
    update?: EventSpaceUpdateWithWhereUniqueWithoutUserInput | EventSpaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventSpaceUpdateManyWithWhereWithoutUserInput | EventSpaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventSpaceScalarWhereInput | EventSpaceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BlogCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutBlogInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutBlogInput = {
    create?: XOR<LikeCreateWithoutBlogInput, LikeUncheckedCreateWithoutBlogInput> | LikeCreateWithoutBlogInput[] | LikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutBlogInput | LikeCreateOrConnectWithoutBlogInput[]
    createMany?: LikeCreateManyBlogInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<LikeCreateWithoutBlogInput, LikeUncheckedCreateWithoutBlogInput> | LikeCreateWithoutBlogInput[] | LikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutBlogInput | LikeCreateOrConnectWithoutBlogInput[]
    createMany?: LikeCreateManyBlogInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type BlogUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type CommentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogInput | CommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogInput | CommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogInput | CommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutBlogNestedInput = {
    create?: XOR<LikeCreateWithoutBlogInput, LikeUncheckedCreateWithoutBlogInput> | LikeCreateWithoutBlogInput[] | LikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutBlogInput | LikeCreateOrConnectWithoutBlogInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutBlogInput | LikeUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: LikeCreateManyBlogInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutBlogInput | LikeUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutBlogInput | LikeUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput> | CommentCreateWithoutBlogInput[] | CommentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBlogInput | CommentCreateOrConnectWithoutBlogInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBlogInput | CommentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: CommentCreateManyBlogInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBlogInput | CommentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBlogInput | CommentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<LikeCreateWithoutBlogInput, LikeUncheckedCreateWithoutBlogInput> | LikeCreateWithoutBlogInput[] | LikeUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutBlogInput | LikeCreateOrConnectWithoutBlogInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutBlogInput | LikeUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: LikeCreateManyBlogInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutBlogInput | LikeUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutBlogInput | LikeUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type BlogCreateNestedOneWithoutLikesInput = {
    create?: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogCreateOrConnectWithoutLikesInput
    connect?: BlogWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type BlogUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
    connectOrCreate?: BlogCreateOrConnectWithoutLikesInput
    upsert?: BlogUpsertWithoutLikesInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutLikesInput, BlogUpdateWithoutLikesInput>, BlogUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCommentsInput
    connect?: BlogWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCommentsInput
    upsert?: BlogUpsertWithoutCommentsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutCommentsInput, BlogUpdateWithoutCommentsInput>, BlogUncheckedUpdateWithoutCommentsInput>
  }

  export type GymCreatephotosInput = {
    set: string[]
  }

  export type GymCreatevideosInput = {
    set: string[]
  }

  export type GymCreatecategoriesInput = {
    set: string[]
  }

  export type GymCreateservicesInput = {
    set: string[]
  }

  export type GymCreatebenefitsInput = {
    set: string[]
  }

  export type GymCreateamenitiesInput = {
    set: string[]
  }

  export type GymCreateavailableSportsInput = {
    set: string[]
  }

  export type GymCreatestrengthEquipmentsInput = {
    set: string[]
  }

  export type GymCreatecardioEquipmentsInput = {
    set: string[]
  }

  export type GymCreaterulesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutGymsInput = {
    create?: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutGymInput = {
    create?: XOR<ReviewCreateWithoutGymInput, ReviewUncheckedCreateWithoutGymInput> | ReviewCreateWithoutGymInput[] | ReviewUncheckedCreateWithoutGymInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGymInput | ReviewCreateOrConnectWithoutGymInput[]
    createMany?: ReviewCreateManyGymInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<ReviewCreateWithoutGymInput, ReviewUncheckedCreateWithoutGymInput> | ReviewCreateWithoutGymInput[] | ReviewUncheckedCreateWithoutGymInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGymInput | ReviewCreateOrConnectWithoutGymInput[]
    createMany?: ReviewCreateManyGymInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GymUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdatevideosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdateservicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdatebenefitsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdateavailableSportsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdatestrengthEquipmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdatecardioEquipmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GymUpdaterulesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutGymsNestedInput = {
    create?: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymsInput
    upsert?: UserUpsertWithoutGymsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGymsInput, UserUpdateWithoutGymsInput>, UserUncheckedUpdateWithoutGymsInput>
  }

  export type ReviewUpdateManyWithoutGymNestedInput = {
    create?: XOR<ReviewCreateWithoutGymInput, ReviewUncheckedCreateWithoutGymInput> | ReviewCreateWithoutGymInput[] | ReviewUncheckedCreateWithoutGymInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGymInput | ReviewCreateOrConnectWithoutGymInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGymInput | ReviewUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: ReviewCreateManyGymInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGymInput | ReviewUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGymInput | ReviewUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<ReviewCreateWithoutGymInput, ReviewUncheckedCreateWithoutGymInput> | ReviewCreateWithoutGymInput[] | ReviewUncheckedCreateWithoutGymInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGymInput | ReviewCreateOrConnectWithoutGymInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGymInput | ReviewUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: ReviewCreateManyGymInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGymInput | ReviewUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGymInput | ReviewUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ParkingCreatephotosInput = {
    set: string[]
  }

  export type ParkingCreatevideosInput = {
    set: string[]
  }

  export type ParkingCreateamenitiesInput = {
    set: string[]
  }

  export type ParkingCreatesecurityInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutParkingsInput = {
    create?: XOR<UserCreateWithoutParkingsInput, UserUncheckedCreateWithoutParkingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutParkingInput = {
    create?: XOR<ReviewCreateWithoutParkingInput, ReviewUncheckedCreateWithoutParkingInput> | ReviewCreateWithoutParkingInput[] | ReviewUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParkingInput | ReviewCreateOrConnectWithoutParkingInput[]
    createMany?: ReviewCreateManyParkingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutParkingInput = {
    create?: XOR<ReviewCreateWithoutParkingInput, ReviewUncheckedCreateWithoutParkingInput> | ReviewCreateWithoutParkingInput[] | ReviewUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParkingInput | ReviewCreateOrConnectWithoutParkingInput[]
    createMany?: ReviewCreateManyParkingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ParkingUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ParkingUpdatevideosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ParkingUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ParkingUpdatesecurityInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutParkingsNestedInput = {
    create?: XOR<UserCreateWithoutParkingsInput, UserUncheckedCreateWithoutParkingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingsInput
    upsert?: UserUpsertWithoutParkingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingsInput, UserUpdateWithoutParkingsInput>, UserUncheckedUpdateWithoutParkingsInput>
  }

  export type ReviewUpdateManyWithoutParkingNestedInput = {
    create?: XOR<ReviewCreateWithoutParkingInput, ReviewUncheckedCreateWithoutParkingInput> | ReviewCreateWithoutParkingInput[] | ReviewUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParkingInput | ReviewCreateOrConnectWithoutParkingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutParkingInput | ReviewUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: ReviewCreateManyParkingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutParkingInput | ReviewUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutParkingInput | ReviewUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutParkingNestedInput = {
    create?: XOR<ReviewCreateWithoutParkingInput, ReviewUncheckedCreateWithoutParkingInput> | ReviewCreateWithoutParkingInput[] | ReviewUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutParkingInput | ReviewCreateOrConnectWithoutParkingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutParkingInput | ReviewUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: ReviewCreateManyParkingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutParkingInput | ReviewUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutParkingInput | ReviewUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PayingGuestsCreatesubCategoryInput = {
    set: string[]
  }

  export type PayingGuestsCreateimagesInput = {
    set: string[]
  }

  export type PayingGuestsCreatevideosInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPayingGuestsInput = {
    create?: XOR<UserCreateWithoutPayingGuestsInput, UserUncheckedCreateWithoutPayingGuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayingGuestsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutPgInput = {
    create?: XOR<ReviewCreateWithoutPgInput, ReviewUncheckedCreateWithoutPgInput> | ReviewCreateWithoutPgInput[] | ReviewUncheckedCreateWithoutPgInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPgInput | ReviewCreateOrConnectWithoutPgInput[]
    createMany?: ReviewCreateManyPgInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPgInput = {
    create?: XOR<ReviewCreateWithoutPgInput, ReviewUncheckedCreateWithoutPgInput> | ReviewCreateWithoutPgInput[] | ReviewUncheckedCreateWithoutPgInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPgInput | ReviewCreateOrConnectWithoutPgInput[]
    createMany?: ReviewCreateManyPgInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PayingGuestsUpdatesubCategoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PayingGuestsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PayingGuestsUpdatevideosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPayingGuestsNestedInput = {
    create?: XOR<UserCreateWithoutPayingGuestsInput, UserUncheckedCreateWithoutPayingGuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayingGuestsInput
    upsert?: UserUpsertWithoutPayingGuestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayingGuestsInput, UserUpdateWithoutPayingGuestsInput>, UserUncheckedUpdateWithoutPayingGuestsInput>
  }

  export type ReviewUpdateManyWithoutPgNestedInput = {
    create?: XOR<ReviewCreateWithoutPgInput, ReviewUncheckedCreateWithoutPgInput> | ReviewCreateWithoutPgInput[] | ReviewUncheckedCreateWithoutPgInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPgInput | ReviewCreateOrConnectWithoutPgInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPgInput | ReviewUpsertWithWhereUniqueWithoutPgInput[]
    createMany?: ReviewCreateManyPgInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPgInput | ReviewUpdateWithWhereUniqueWithoutPgInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPgInput | ReviewUpdateManyWithWhereWithoutPgInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPgNestedInput = {
    create?: XOR<ReviewCreateWithoutPgInput, ReviewUncheckedCreateWithoutPgInput> | ReviewCreateWithoutPgInput[] | ReviewUncheckedCreateWithoutPgInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPgInput | ReviewCreateOrConnectWithoutPgInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPgInput | ReviewUpsertWithWhereUniqueWithoutPgInput[]
    createMany?: ReviewCreateManyPgInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPgInput | ReviewUpdateWithWhereUniqueWithoutPgInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPgInput | ReviewUpdateManyWithWhereWithoutPgInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutReviewsInput = {
    create?: XOR<GymCreateWithoutReviewsInput, GymUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GymCreateOrConnectWithoutReviewsInput
    connect?: GymWhereUniqueInput
  }

  export type ParkingCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ParkingCreateWithoutReviewsInput, ParkingUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutReviewsInput
    connect?: ParkingWhereUniqueInput
  }

  export type PayingGuestsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PayingGuestsCreateWithoutReviewsInput, PayingGuestsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PayingGuestsCreateOrConnectWithoutReviewsInput
    connect?: PayingGuestsWhereUniqueInput
  }

  export type EventSpaceCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EventSpaceCreateWithoutReviewsInput, EventSpaceUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventSpaceCreateOrConnectWithoutReviewsInput
    connect?: EventSpaceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type GymUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<GymCreateWithoutReviewsInput, GymUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GymCreateOrConnectWithoutReviewsInput
    upsert?: GymUpsertWithoutReviewsInput
    disconnect?: GymWhereInput | boolean
    delete?: GymWhereInput | boolean
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutReviewsInput, GymUpdateWithoutReviewsInput>, GymUncheckedUpdateWithoutReviewsInput>
  }

  export type ParkingUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ParkingCreateWithoutReviewsInput, ParkingUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutReviewsInput
    upsert?: ParkingUpsertWithoutReviewsInput
    disconnect?: ParkingWhereInput | boolean
    delete?: ParkingWhereInput | boolean
    connect?: ParkingWhereUniqueInput
    update?: XOR<XOR<ParkingUpdateToOneWithWhereWithoutReviewsInput, ParkingUpdateWithoutReviewsInput>, ParkingUncheckedUpdateWithoutReviewsInput>
  }

  export type PayingGuestsUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<PayingGuestsCreateWithoutReviewsInput, PayingGuestsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PayingGuestsCreateOrConnectWithoutReviewsInput
    upsert?: PayingGuestsUpsertWithoutReviewsInput
    disconnect?: PayingGuestsWhereInput | boolean
    delete?: PayingGuestsWhereInput | boolean
    connect?: PayingGuestsWhereUniqueInput
    update?: XOR<XOR<PayingGuestsUpdateToOneWithWhereWithoutReviewsInput, PayingGuestsUpdateWithoutReviewsInput>, PayingGuestsUncheckedUpdateWithoutReviewsInput>
  }

  export type EventSpaceUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<EventSpaceCreateWithoutReviewsInput, EventSpaceUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventSpaceCreateOrConnectWithoutReviewsInput
    upsert?: EventSpaceUpsertWithoutReviewsInput
    disconnect?: EventSpaceWhereInput | boolean
    delete?: EventSpaceWhereInput | boolean
    connect?: EventSpaceWhereUniqueInput
    update?: XOR<XOR<EventSpaceUpdateToOneWithWhereWithoutReviewsInput, EventSpaceUpdateWithoutReviewsInput>, EventSpaceUncheckedUpdateWithoutReviewsInput>
  }

  export type EventSpaceCreateimagesInput = {
    set: string[]
  }

  export type EventSpaceCreatevideosInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutEventSpacesInput = {
    create?: XOR<UserCreateWithoutEventSpacesInput, UserUncheckedCreateWithoutEventSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventSpacesInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutEventSpaceInput = {
    create?: XOR<ReviewCreateWithoutEventSpaceInput, ReviewUncheckedCreateWithoutEventSpaceInput> | ReviewCreateWithoutEventSpaceInput[] | ReviewUncheckedCreateWithoutEventSpaceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventSpaceInput | ReviewCreateOrConnectWithoutEventSpaceInput[]
    createMany?: ReviewCreateManyEventSpaceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventSpaceInput = {
    create?: XOR<ReviewCreateWithoutEventSpaceInput, ReviewUncheckedCreateWithoutEventSpaceInput> | ReviewCreateWithoutEventSpaceInput[] | ReviewUncheckedCreateWithoutEventSpaceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventSpaceInput | ReviewCreateOrConnectWithoutEventSpaceInput[]
    createMany?: ReviewCreateManyEventSpaceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EventSpaceUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventSpaceUpdatevideosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutEventSpacesNestedInput = {
    create?: XOR<UserCreateWithoutEventSpacesInput, UserUncheckedCreateWithoutEventSpacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventSpacesInput
    upsert?: UserUpsertWithoutEventSpacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventSpacesInput, UserUpdateWithoutEventSpacesInput>, UserUncheckedUpdateWithoutEventSpacesInput>
  }

  export type ReviewUpdateManyWithoutEventSpaceNestedInput = {
    create?: XOR<ReviewCreateWithoutEventSpaceInput, ReviewUncheckedCreateWithoutEventSpaceInput> | ReviewCreateWithoutEventSpaceInput[] | ReviewUncheckedCreateWithoutEventSpaceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventSpaceInput | ReviewCreateOrConnectWithoutEventSpaceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventSpaceInput | ReviewUpsertWithWhereUniqueWithoutEventSpaceInput[]
    createMany?: ReviewCreateManyEventSpaceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventSpaceInput | ReviewUpdateWithWhereUniqueWithoutEventSpaceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventSpaceInput | ReviewUpdateManyWithWhereWithoutEventSpaceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventSpaceNestedInput = {
    create?: XOR<ReviewCreateWithoutEventSpaceInput, ReviewUncheckedCreateWithoutEventSpaceInput> | ReviewCreateWithoutEventSpaceInput[] | ReviewUncheckedCreateWithoutEventSpaceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventSpaceInput | ReviewCreateOrConnectWithoutEventSpaceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventSpaceInput | ReviewUpsertWithWhereUniqueWithoutEventSpaceInput[]
    createMany?: ReviewCreateManyEventSpaceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventSpaceInput | ReviewUpdateWithWhereUniqueWithoutEventSpaceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventSpaceInput | ReviewUpdateManyWithWhereWithoutEventSpaceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BlogCreateWithoutUserInput = {
    id?: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutBlogInput
    likes?: LikeCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutUserInput = {
    id?: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutBlogInput
    likes?: LikeUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutUserInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogCreateManyUserInputEnvelope = {
    data: BlogCreateManyUserInput | BlogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string
    blogId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    blogId: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GymCreateWithoutUserInput = {
    id?: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutUserInput = {
    id?: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutUserInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput>
  }

  export type GymCreateManyUserInputEnvelope = {
    data: GymCreateManyUserInput | GymCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParkingCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutParkingInput
  }

  export type ParkingUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutParkingInput
  }

  export type ParkingCreateOrConnectWithoutUserInput = {
    where: ParkingWhereUniqueInput
    create: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput>
  }

  export type ParkingCreateManyUserInputEnvelope = {
    data: ParkingCreateManyUserInput | ParkingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayingGuestsCreateWithoutUserInput = {
    id?: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutPgInput
  }

  export type PayingGuestsUncheckedCreateWithoutUserInput = {
    id?: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPgInput
  }

  export type PayingGuestsCreateOrConnectWithoutUserInput = {
    where: PayingGuestsWhereUniqueInput
    create: XOR<PayingGuestsCreateWithoutUserInput, PayingGuestsUncheckedCreateWithoutUserInput>
  }

  export type PayingGuestsCreateManyUserInputEnvelope = {
    data: PayingGuestsCreateManyUserInput | PayingGuestsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gym?: GymCreateNestedOneWithoutReviewsInput
    parking?: ParkingCreateNestedOneWithoutReviewsInput
    pg?: PayingGuestsCreateNestedOneWithoutReviewsInput
    eventSpace?: EventSpaceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    gymId?: string | null
    parkingId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventSpaceCreateWithoutUserInput = {
    id?: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutEventSpaceInput
  }

  export type EventSpaceUncheckedCreateWithoutUserInput = {
    id?: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventSpaceInput
  }

  export type EventSpaceCreateOrConnectWithoutUserInput = {
    where: EventSpaceWhereUniqueInput
    create: XOR<EventSpaceCreateWithoutUserInput, EventSpaceUncheckedCreateWithoutUserInput>
  }

  export type EventSpaceCreateManyUserInputEnvelope = {
    data: EventSpaceCreateManyUserInput | EventSpaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
  }

  export type BlogUpdateManyWithWhereWithoutUserInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    userId?: StringFilter<"Blog"> | string
    views?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    excerpt?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    category?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    location?: StringNullableFilter<"Blog"> | string | null
    contactInfo?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    blogId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    blogId?: StringFilter<"Comment"> | string
    comment?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type GymUpsertWithWhereUniqueWithoutUserInput = {
    where: GymWhereUniqueInput
    update: XOR<GymUpdateWithoutUserInput, GymUncheckedUpdateWithoutUserInput>
    create: XOR<GymCreateWithoutUserInput, GymUncheckedCreateWithoutUserInput>
  }

  export type GymUpdateWithWhereUniqueWithoutUserInput = {
    where: GymWhereUniqueInput
    data: XOR<GymUpdateWithoutUserInput, GymUncheckedUpdateWithoutUserInput>
  }

  export type GymUpdateManyWithWhereWithoutUserInput = {
    where: GymScalarWhereInput
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyWithoutUserInput>
  }

  export type GymScalarWhereInput = {
    AND?: GymScalarWhereInput | GymScalarWhereInput[]
    OR?: GymScalarWhereInput[]
    NOT?: GymScalarWhereInput | GymScalarWhereInput[]
    id?: StringFilter<"Gym"> | string
    userId?: StringFilter<"Gym"> | string
    gymName?: StringFilter<"Gym"> | string
    locationLatitude?: FloatFilter<"Gym"> | number
    locationLongitude?: FloatFilter<"Gym"> | number
    yearOfGym?: IntFilter<"Gym"> | number
    description?: StringFilter<"Gym"> | string
    photos?: StringNullableListFilter<"Gym">
    videos?: StringNullableListFilter<"Gym">
    lockerFacility?: BoolFilter<"Gym"> | boolean
    timing?: JsonFilter<"Gym">
    categories?: StringNullableListFilter<"Gym">
    rateCard?: StringNullableFilter<"Gym"> | string | null
    website?: StringNullableFilter<"Gym"> | string | null
    services?: StringNullableListFilter<"Gym">
    benefits?: StringNullableListFilter<"Gym">
    pricing?: JsonFilter<"Gym">
    amenities?: StringNullableListFilter<"Gym">
    availableSports?: StringNullableListFilter<"Gym">
    strengthEquipments?: StringNullableListFilter<"Gym">
    cardioEquipments?: StringNullableListFilter<"Gym">
    rules?: StringNullableListFilter<"Gym">
    gender?: StringFilter<"Gym"> | string
    counsellingServices?: JsonFilter<"Gym">
    socialMediaLinks?: JsonFilter<"Gym">
    isDeleted?: BoolFilter<"Gym"> | boolean
    createdAt?: DateTimeFilter<"Gym"> | Date | string
    updatedAt?: DateTimeFilter<"Gym"> | Date | string
  }

  export type ParkingUpsertWithWhereUniqueWithoutUserInput = {
    where: ParkingWhereUniqueInput
    update: XOR<ParkingUpdateWithoutUserInput, ParkingUncheckedUpdateWithoutUserInput>
    create: XOR<ParkingCreateWithoutUserInput, ParkingUncheckedCreateWithoutUserInput>
  }

  export type ParkingUpdateWithWhereUniqueWithoutUserInput = {
    where: ParkingWhereUniqueInput
    data: XOR<ParkingUpdateWithoutUserInput, ParkingUncheckedUpdateWithoutUserInput>
  }

  export type ParkingUpdateManyWithWhereWithoutUserInput = {
    where: ParkingScalarWhereInput
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyWithoutUserInput>
  }

  export type ParkingScalarWhereInput = {
    AND?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
    OR?: ParkingScalarWhereInput[]
    NOT?: ParkingScalarWhereInput | ParkingScalarWhereInput[]
    id?: StringFilter<"Parking"> | string
    userId?: StringFilter<"Parking"> | string
    name?: StringFilter<"Parking"> | string
    description?: StringFilter<"Parking"> | string
    latitude?: FloatFilter<"Parking"> | number
    longitude?: FloatFilter<"Parking"> | number
    price?: JsonFilter<"Parking">
    yearOfParking?: IntFilter<"Parking"> | number
    parkingType?: StringFilter<"Parking"> | string
    vacancies?: IntFilter<"Parking"> | number
    size?: StringFilter<"Parking"> | string
    photos?: StringNullableListFilter<"Parking">
    videos?: StringNullableListFilter<"Parking">
    amenities?: StringNullableListFilter<"Parking">
    accessibility?: StringFilter<"Parking"> | string
    capacity?: IntFilter<"Parking"> | number
    security?: StringNullableListFilter<"Parking">
    operatingHours?: JsonFilter<"Parking">
    booking?: JsonFilter<"Parking">
    isDeleted?: BoolFilter<"Parking"> | boolean
    createdAt?: DateTimeFilter<"Parking"> | Date | string
    updatedAt?: DateTimeFilter<"Parking"> | Date | string
  }

  export type PayingGuestsUpsertWithWhereUniqueWithoutUserInput = {
    where: PayingGuestsWhereUniqueInput
    update: XOR<PayingGuestsUpdateWithoutUserInput, PayingGuestsUncheckedUpdateWithoutUserInput>
    create: XOR<PayingGuestsCreateWithoutUserInput, PayingGuestsUncheckedCreateWithoutUserInput>
  }

  export type PayingGuestsUpdateWithWhereUniqueWithoutUserInput = {
    where: PayingGuestsWhereUniqueInput
    data: XOR<PayingGuestsUpdateWithoutUserInput, PayingGuestsUncheckedUpdateWithoutUserInput>
  }

  export type PayingGuestsUpdateManyWithWhereWithoutUserInput = {
    where: PayingGuestsScalarWhereInput
    data: XOR<PayingGuestsUpdateManyMutationInput, PayingGuestsUncheckedUpdateManyWithoutUserInput>
  }

  export type PayingGuestsScalarWhereInput = {
    AND?: PayingGuestsScalarWhereInput | PayingGuestsScalarWhereInput[]
    OR?: PayingGuestsScalarWhereInput[]
    NOT?: PayingGuestsScalarWhereInput | PayingGuestsScalarWhereInput[]
    id?: StringFilter<"PayingGuests"> | string
    userId?: StringFilter<"PayingGuests"> | string
    subCategory?: StringNullableListFilter<"PayingGuests">
    roomDetails?: JsonNullableFilter<"PayingGuests">
    mealDetails?: JsonNullableFilter<"PayingGuests">
    availabilityStatus?: StringNullableFilter<"PayingGuests"> | string | null
    availableFrom?: DateTimeNullableFilter<"PayingGuests"> | Date | string | null
    ageOfProperty?: IntNullableFilter<"PayingGuests"> | number | null
    description?: StringNullableFilter<"PayingGuests"> | string | null
    amenities?: JsonNullableFilter<"PayingGuests">
    rules?: JsonNullableFilter<"PayingGuests">
    otherFeatures?: JsonNullableFilter<"PayingGuests">
    societyBuildingFeatures?: JsonNullableFilter<"PayingGuests">
    nearbyPlaces?: JsonNullableFilter<"PayingGuests">
    pricing?: JsonNullableFilter<"PayingGuests">
    safetyFeatures?: JsonNullableFilter<"PayingGuests">
    communityFeatures?: JsonNullableFilter<"PayingGuests">
    images?: StringNullableListFilter<"PayingGuests">
    videos?: StringNullableListFilter<"PayingGuests">
    verification?: JsonNullableFilter<"PayingGuests">
    isDeleted?: BoolFilter<"PayingGuests"> | boolean
    createdAt?: DateTimeFilter<"PayingGuests"> | Date | string
    updatedAt?: DateTimeFilter<"PayingGuests"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    gymId?: StringNullableFilter<"Review"> | string | null
    parkingId?: StringNullableFilter<"Review"> | string | null
    pgId?: StringNullableFilter<"Review"> | string | null
    eventSpaceId?: StringNullableFilter<"Review"> | string | null
    rating?: IntNullableFilter<"Review"> | number | null
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type EventSpaceUpsertWithWhereUniqueWithoutUserInput = {
    where: EventSpaceWhereUniqueInput
    update: XOR<EventSpaceUpdateWithoutUserInput, EventSpaceUncheckedUpdateWithoutUserInput>
    create: XOR<EventSpaceCreateWithoutUserInput, EventSpaceUncheckedCreateWithoutUserInput>
  }

  export type EventSpaceUpdateWithWhereUniqueWithoutUserInput = {
    where: EventSpaceWhereUniqueInput
    data: XOR<EventSpaceUpdateWithoutUserInput, EventSpaceUncheckedUpdateWithoutUserInput>
  }

  export type EventSpaceUpdateManyWithWhereWithoutUserInput = {
    where: EventSpaceScalarWhereInput
    data: XOR<EventSpaceUpdateManyMutationInput, EventSpaceUncheckedUpdateManyWithoutUserInput>
  }

  export type EventSpaceScalarWhereInput = {
    AND?: EventSpaceScalarWhereInput | EventSpaceScalarWhereInput[]
    OR?: EventSpaceScalarWhereInput[]
    NOT?: EventSpaceScalarWhereInput | EventSpaceScalarWhereInput[]
    id?: StringFilter<"EventSpace"> | string
    userId?: StringFilter<"EventSpace"> | string
    subCategory?: StringNullableFilter<"EventSpace"> | string | null
    type?: StringNullableFilter<"EventSpace"> | string | null
    propertyDetails?: JsonNullableFilter<"EventSpace">
    pricing?: JsonNullableFilter<"EventSpace">
    amenities?: JsonNullableFilter<"EventSpace">
    facilities?: JsonNullableFilter<"EventSpace">
    availableSpaces?: JsonNullableFilter<"EventSpace">
    bookingDetails?: JsonNullableFilter<"EventSpace">
    additionalServices?: JsonNullableFilter<"EventSpace">
    rules?: JsonNullableFilter<"EventSpace">
    nearbyPlaces?: JsonNullableFilter<"EventSpace">
    availabilityStatus?: StringNullableFilter<"EventSpace"> | string | null
    ageOfProperty?: IntNullableFilter<"EventSpace"> | number | null
    description?: StringNullableFilter<"EventSpace"> | string | null
    images?: StringNullableListFilter<"EventSpace">
    videos?: StringNullableListFilter<"EventSpace">
    isDeleted?: BoolFilter<"EventSpace"> | boolean
    createdAt?: DateTimeFilter<"EventSpace"> | Date | string
    updatedAt?: DateTimeFilter<"EventSpace"> | Date | string
  }

  export type UserCreateWithoutBlogsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type CommentCreateWithoutBlogInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutBlogInput = {
    id?: string
    comment: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutBlogInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput>
  }

  export type CommentCreateManyBlogInputEnvelope = {
    data: CommentCreateManyBlogInput | CommentCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutBlogInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutBlogInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutBlogInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutBlogInput, LikeUncheckedCreateWithoutBlogInput>
  }

  export type LikeCreateManyBlogInputEnvelope = {
    data: LikeCreateManyBlogInput | LikeCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutBlogInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutBlogInput, CommentUncheckedUpdateWithoutBlogInput>
    create: XOR<CommentCreateWithoutBlogInput, CommentUncheckedCreateWithoutBlogInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutBlogInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutBlogInput, CommentUncheckedUpdateWithoutBlogInput>
  }

  export type CommentUpdateManyWithWhereWithoutBlogInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutBlogInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutBlogInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutBlogInput, LikeUncheckedUpdateWithoutBlogInput>
    create: XOR<LikeCreateWithoutBlogInput, LikeUncheckedCreateWithoutBlogInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutBlogInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutBlogInput, LikeUncheckedUpdateWithoutBlogInput>
  }

  export type LikeUpdateManyWithWhereWithoutBlogInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutBlogInput>
  }

  export type UserCreateWithoutLikesInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type BlogCreateWithoutLikesInput = {
    id?: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogsInput
    comments?: CommentCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutLikesInput = {
    id?: string
    userId: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutLikesInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogUpsertWithoutLikesInput = {
    update: XOR<BlogUpdateWithoutLikesInput, BlogUncheckedUpdateWithoutLikesInput>
    create: XOR<BlogCreateWithoutLikesInput, BlogUncheckedCreateWithoutLikesInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutLikesInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutLikesInput, BlogUncheckedUpdateWithoutLikesInput>
  }

  export type BlogUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
    comments?: CommentUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BlogCreateWithoutCommentsInput = {
    id?: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogsInput
    likes?: LikeCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutCommentsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BlogUpsertWithoutCommentsInput = {
    update: XOR<BlogUpdateWithoutCommentsInput, BlogUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutCommentsInput, BlogUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
    likes?: LikeUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type UserCreateWithoutGymsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
  }

  export type ReviewCreateWithoutGymInput = {
    id?: string
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    parking?: ParkingCreateNestedOneWithoutReviewsInput
    pg?: PayingGuestsCreateNestedOneWithoutReviewsInput
    eventSpace?: EventSpaceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutGymInput = {
    id?: string
    userId: string
    parkingId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutGymInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutGymInput, ReviewUncheckedCreateWithoutGymInput>
  }

  export type ReviewCreateManyGymInputEnvelope = {
    data: ReviewCreateManyGymInput | ReviewCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGymsInput = {
    update: XOR<UserUpdateWithoutGymsInput, UserUncheckedUpdateWithoutGymsInput>
    create: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGymsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGymsInput, UserUncheckedUpdateWithoutGymsInput>
  }

  export type UserUpdateWithoutGymsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGymsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutGymInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutGymInput, ReviewUncheckedUpdateWithoutGymInput>
    create: XOR<ReviewCreateWithoutGymInput, ReviewUncheckedCreateWithoutGymInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutGymInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutGymInput, ReviewUncheckedUpdateWithoutGymInput>
  }

  export type ReviewUpdateManyWithWhereWithoutGymInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutGymInput>
  }

  export type UserCreateWithoutParkingsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParkingsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParkingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingsInput, UserUncheckedCreateWithoutParkingsInput>
  }

  export type ReviewCreateWithoutParkingInput = {
    id?: string
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    gym?: GymCreateNestedOneWithoutReviewsInput
    pg?: PayingGuestsCreateNestedOneWithoutReviewsInput
    eventSpace?: EventSpaceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutParkingInput = {
    id?: string
    userId: string
    gymId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutParkingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutParkingInput, ReviewUncheckedCreateWithoutParkingInput>
  }

  export type ReviewCreateManyParkingInputEnvelope = {
    data: ReviewCreateManyParkingInput | ReviewCreateManyParkingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParkingsInput = {
    update: XOR<UserUpdateWithoutParkingsInput, UserUncheckedUpdateWithoutParkingsInput>
    create: XOR<UserCreateWithoutParkingsInput, UserUncheckedCreateWithoutParkingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingsInput, UserUncheckedUpdateWithoutParkingsInput>
  }

  export type UserUpdateWithoutParkingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParkingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutParkingInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutParkingInput, ReviewUncheckedUpdateWithoutParkingInput>
    create: XOR<ReviewCreateWithoutParkingInput, ReviewUncheckedCreateWithoutParkingInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutParkingInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutParkingInput, ReviewUncheckedUpdateWithoutParkingInput>
  }

  export type ReviewUpdateManyWithWhereWithoutParkingInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutParkingInput>
  }

  export type UserCreateWithoutPayingGuestsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayingGuestsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayingGuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayingGuestsInput, UserUncheckedCreateWithoutPayingGuestsInput>
  }

  export type ReviewCreateWithoutPgInput = {
    id?: string
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    gym?: GymCreateNestedOneWithoutReviewsInput
    parking?: ParkingCreateNestedOneWithoutReviewsInput
    eventSpace?: EventSpaceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutPgInput = {
    id?: string
    userId: string
    gymId?: string | null
    parkingId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPgInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPgInput, ReviewUncheckedCreateWithoutPgInput>
  }

  export type ReviewCreateManyPgInputEnvelope = {
    data: ReviewCreateManyPgInput | ReviewCreateManyPgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPayingGuestsInput = {
    update: XOR<UserUpdateWithoutPayingGuestsInput, UserUncheckedUpdateWithoutPayingGuestsInput>
    create: XOR<UserCreateWithoutPayingGuestsInput, UserUncheckedCreateWithoutPayingGuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayingGuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayingGuestsInput, UserUncheckedUpdateWithoutPayingGuestsInput>
  }

  export type UserUpdateWithoutPayingGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayingGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutPgInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPgInput, ReviewUncheckedUpdateWithoutPgInput>
    create: XOR<ReviewCreateWithoutPgInput, ReviewUncheckedCreateWithoutPgInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPgInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPgInput, ReviewUncheckedUpdateWithoutPgInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPgInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPgInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    eventSpaces?: EventSpaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type GymCreateWithoutReviewsInput = {
    id?: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGymsInput
  }

  export type GymUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GymCreateOrConnectWithoutReviewsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutReviewsInput, GymUncheckedCreateWithoutReviewsInput>
  }

  export type ParkingCreateWithoutReviewsInput = {
    id?: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParkingsInput
  }

  export type ParkingUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingCreateOrConnectWithoutReviewsInput = {
    where: ParkingWhereUniqueInput
    create: XOR<ParkingCreateWithoutReviewsInput, ParkingUncheckedCreateWithoutReviewsInput>
  }

  export type PayingGuestsCreateWithoutReviewsInput = {
    id?: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPayingGuestsInput
  }

  export type PayingGuestsUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayingGuestsCreateOrConnectWithoutReviewsInput = {
    where: PayingGuestsWhereUniqueInput
    create: XOR<PayingGuestsCreateWithoutReviewsInput, PayingGuestsUncheckedCreateWithoutReviewsInput>
  }

  export type EventSpaceCreateWithoutReviewsInput = {
    id?: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventSpacesInput
  }

  export type EventSpaceUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventSpaceCreateOrConnectWithoutReviewsInput = {
    where: EventSpaceWhereUniqueInput
    create: XOR<EventSpaceCreateWithoutReviewsInput, EventSpaceUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    eventSpaces?: EventSpaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GymUpsertWithoutReviewsInput = {
    update: XOR<GymUpdateWithoutReviewsInput, GymUncheckedUpdateWithoutReviewsInput>
    create: XOR<GymCreateWithoutReviewsInput, GymUncheckedCreateWithoutReviewsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutReviewsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutReviewsInput, GymUncheckedUpdateWithoutReviewsInput>
  }

  export type GymUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGymsNestedInput
  }

  export type GymUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUpsertWithoutReviewsInput = {
    update: XOR<ParkingUpdateWithoutReviewsInput, ParkingUncheckedUpdateWithoutReviewsInput>
    create: XOR<ParkingCreateWithoutReviewsInput, ParkingUncheckedCreateWithoutReviewsInput>
    where?: ParkingWhereInput
  }

  export type ParkingUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ParkingWhereInput
    data: XOR<ParkingUpdateWithoutReviewsInput, ParkingUncheckedUpdateWithoutReviewsInput>
  }

  export type ParkingUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParkingsNestedInput
  }

  export type ParkingUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayingGuestsUpsertWithoutReviewsInput = {
    update: XOR<PayingGuestsUpdateWithoutReviewsInput, PayingGuestsUncheckedUpdateWithoutReviewsInput>
    create: XOR<PayingGuestsCreateWithoutReviewsInput, PayingGuestsUncheckedCreateWithoutReviewsInput>
    where?: PayingGuestsWhereInput
  }

  export type PayingGuestsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PayingGuestsWhereInput
    data: XOR<PayingGuestsUpdateWithoutReviewsInput, PayingGuestsUncheckedUpdateWithoutReviewsInput>
  }

  export type PayingGuestsUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayingGuestsNestedInput
  }

  export type PayingGuestsUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSpaceUpsertWithoutReviewsInput = {
    update: XOR<EventSpaceUpdateWithoutReviewsInput, EventSpaceUncheckedUpdateWithoutReviewsInput>
    create: XOR<EventSpaceCreateWithoutReviewsInput, EventSpaceUncheckedCreateWithoutReviewsInput>
    where?: EventSpaceWhereInput
  }

  export type EventSpaceUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventSpaceWhereInput
    data: XOR<EventSpaceUpdateWithoutReviewsInput, EventSpaceUncheckedUpdateWithoutReviewsInput>
  }

  export type EventSpaceUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventSpacesNestedInput
  }

  export type EventSpaceUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutEventSpacesInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    gyms?: GymCreateNestedManyWithoutUserInput
    parkings?: ParkingCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventSpacesInput = {
    id: string
    name?: string | null
    isSubscribed?: boolean
    created_at?: Date | string
    whatsappMobile?: string
    mobile?: string | null
    role?: string
    state?: string
    city?: string
    latitude?: number | null
    longitude?: number | null
    coverURL?: string | null
    isDeleted?: boolean
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    gyms?: GymUncheckedCreateNestedManyWithoutUserInput
    parkings?: ParkingUncheckedCreateNestedManyWithoutUserInput
    payingGuests?: PayingGuestsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventSpacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventSpacesInput, UserUncheckedCreateWithoutEventSpacesInput>
  }

  export type ReviewCreateWithoutEventSpaceInput = {
    id?: string
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    gym?: GymCreateNestedOneWithoutReviewsInput
    parking?: ParkingCreateNestedOneWithoutReviewsInput
    pg?: PayingGuestsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutEventSpaceInput = {
    id?: string
    userId: string
    gymId?: string | null
    parkingId?: string | null
    pgId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutEventSpaceInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventSpaceInput, ReviewUncheckedCreateWithoutEventSpaceInput>
  }

  export type ReviewCreateManyEventSpaceInputEnvelope = {
    data: ReviewCreateManyEventSpaceInput | ReviewCreateManyEventSpaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventSpacesInput = {
    update: XOR<UserUpdateWithoutEventSpacesInput, UserUncheckedUpdateWithoutEventSpacesInput>
    create: XOR<UserCreateWithoutEventSpacesInput, UserUncheckedCreateWithoutEventSpacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventSpacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventSpacesInput, UserUncheckedUpdateWithoutEventSpacesInput>
  }

  export type UserUpdateWithoutEventSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    gyms?: GymUpdateManyWithoutUserNestedInput
    parkings?: ParkingUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappMobile?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    coverURL?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    gyms?: GymUncheckedUpdateManyWithoutUserNestedInput
    parkings?: ParkingUncheckedUpdateManyWithoutUserNestedInput
    payingGuests?: PayingGuestsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventSpaceInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventSpaceInput, ReviewUncheckedUpdateWithoutEventSpaceInput>
    create: XOR<ReviewCreateWithoutEventSpaceInput, ReviewUncheckedCreateWithoutEventSpaceInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventSpaceInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventSpaceInput, ReviewUncheckedUpdateWithoutEventSpaceInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventSpaceInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventSpaceInput>
  }

  export type BlogCreateManyUserInput = {
    id?: string
    views?: number
    title: string
    excerpt: string
    image?: string
    tags?: BlogCreatetagsInput | string[]
    category: string
    content: string
    location?: string | null
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: string
    blogId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    blogId: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GymCreateManyUserInput = {
    id?: string
    gymName: string
    locationLatitude: number
    locationLongitude: number
    yearOfGym: number
    description: string
    photos?: GymCreatephotosInput | string[]
    videos?: GymCreatevideosInput | string[]
    lockerFacility: boolean
    timing: JsonNullValueInput | InputJsonValue
    categories?: GymCreatecategoriesInput | string[]
    rateCard?: string | null
    website?: string | null
    services?: GymCreateservicesInput | string[]
    benefits?: GymCreatebenefitsInput | string[]
    pricing: JsonNullValueInput | InputJsonValue
    amenities?: GymCreateamenitiesInput | string[]
    availableSports?: GymCreateavailableSportsInput | string[]
    strengthEquipments?: GymCreatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymCreatecardioEquipmentsInput | string[]
    rules?: GymCreaterulesInput | string[]
    gender: string
    counsellingServices: JsonNullValueInput | InputJsonValue
    socialMediaLinks: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingCreateManyUserInput = {
    id?: string
    name: string
    description: string
    latitude: number
    longitude: number
    price: JsonNullValueInput | InputJsonValue
    yearOfParking: number
    parkingType: string
    vacancies: number
    size: string
    photos?: ParkingCreatephotosInput | string[]
    videos?: ParkingCreatevideosInput | string[]
    amenities?: ParkingCreateamenitiesInput | string[]
    accessibility: string
    capacity: number
    security?: ParkingCreatesecurityInput | string[]
    operatingHours: JsonNullValueInput | InputJsonValue
    booking: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayingGuestsCreateManyUserInput = {
    id?: string
    subCategory?: PayingGuestsCreatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    availableFrom?: Date | string | null
    ageOfProperty?: number | null
    description?: string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsCreateimagesInput | string[]
    videos?: PayingGuestsCreatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    gymId?: string | null
    parkingId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventSpaceCreateManyUserInput = {
    id?: string
    subCategory?: string | null
    type?: string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: string | null
    ageOfProperty?: number | null
    description?: string | null
    images?: EventSpaceCreateimagesInput | string[]
    videos?: EventSpaceCreatevideosInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutBlogNestedInput
    likes?: LikeUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutBlogNestedInput
    likes?: LikeUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: FloatFieldUpdateOperationsInput | number
    locationLongitude?: FloatFieldUpdateOperationsInput | number
    yearOfGym?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    photos?: GymUpdatephotosInput | string[]
    videos?: GymUpdatevideosInput | string[]
    lockerFacility?: BoolFieldUpdateOperationsInput | boolean
    timing?: JsonNullValueInput | InputJsonValue
    categories?: GymUpdatecategoriesInput | string[]
    rateCard?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    services?: GymUpdateservicesInput | string[]
    benefits?: GymUpdatebenefitsInput | string[]
    pricing?: JsonNullValueInput | InputJsonValue
    amenities?: GymUpdateamenitiesInput | string[]
    availableSports?: GymUpdateavailableSportsInput | string[]
    strengthEquipments?: GymUpdatestrengthEquipmentsInput | string[]
    cardioEquipments?: GymUpdatecardioEquipmentsInput | string[]
    rules?: GymUpdaterulesInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    counsellingServices?: JsonNullValueInput | InputJsonValue
    socialMediaLinks?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    price?: JsonNullValueInput | InputJsonValue
    yearOfParking?: IntFieldUpdateOperationsInput | number
    parkingType?: StringFieldUpdateOperationsInput | string
    vacancies?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    photos?: ParkingUpdatephotosInput | string[]
    videos?: ParkingUpdatevideosInput | string[]
    amenities?: ParkingUpdateamenitiesInput | string[]
    accessibility?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    security?: ParkingUpdatesecurityInput | string[]
    operatingHours?: JsonNullValueInput | InputJsonValue
    booking?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayingGuestsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutPgNestedInput
  }

  export type PayingGuestsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPgNestedInput
  }

  export type PayingGuestsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: PayingGuestsUpdatesubCategoryInput | string[]
    roomDetails?: NullableJsonNullValueInput | InputJsonValue
    mealDetails?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    otherFeatures?: NullableJsonNullValueInput | InputJsonValue
    societyBuildingFeatures?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    safetyFeatures?: NullableJsonNullValueInput | InputJsonValue
    communityFeatures?: NullableJsonNullValueInput | InputJsonValue
    images?: PayingGuestsUpdateimagesInput | string[]
    videos?: PayingGuestsUpdatevideosInput | string[]
    verification?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gym?: GymUpdateOneWithoutReviewsNestedInput
    parking?: ParkingUpdateOneWithoutReviewsNestedInput
    pg?: PayingGuestsUpdateOneWithoutReviewsNestedInput
    eventSpace?: EventSpaceUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSpaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutEventSpaceNestedInput
  }

  export type EventSpaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutEventSpaceNestedInput
  }

  export type EventSpaceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDetails?: NullableJsonNullValueInput | InputJsonValue
    pricing?: NullableJsonNullValueInput | InputJsonValue
    amenities?: NullableJsonNullValueInput | InputJsonValue
    facilities?: NullableJsonNullValueInput | InputJsonValue
    availableSpaces?: NullableJsonNullValueInput | InputJsonValue
    bookingDetails?: NullableJsonNullValueInput | InputJsonValue
    additionalServices?: NullableJsonNullValueInput | InputJsonValue
    rules?: NullableJsonNullValueInput | InputJsonValue
    nearbyPlaces?: NullableJsonNullValueInput | InputJsonValue
    availabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ageOfProperty?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    images?: EventSpaceUpdateimagesInput | string[]
    videos?: EventSpaceUpdatevideosInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyBlogInput = {
    id?: string
    comment: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyBlogInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyGymInput = {
    id?: string
    userId: string
    parkingId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    parking?: ParkingUpdateOneWithoutReviewsNestedInput
    pg?: PayingGuestsUpdateOneWithoutReviewsNestedInput
    eventSpace?: EventSpaceUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyParkingInput = {
    id?: string
    userId: string
    gymId?: string | null
    pgId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    gym?: GymUpdateOneWithoutReviewsNestedInput
    pg?: PayingGuestsUpdateOneWithoutReviewsNestedInput
    eventSpace?: EventSpaceUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyPgInput = {
    id?: string
    userId: string
    gymId?: string | null
    parkingId?: string | null
    eventSpaceId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutPgInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    gym?: GymUpdateOneWithoutReviewsNestedInput
    parking?: ParkingUpdateOneWithoutReviewsNestedInput
    eventSpace?: EventSpaceUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPgInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    eventSpaceId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyEventSpaceInput = {
    id?: string
    userId: string
    gymId?: string | null
    parkingId?: string | null
    pgId?: string | null
    rating?: number | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutEventSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    gym?: GymUpdateOneWithoutReviewsNestedInput
    parking?: ParkingUpdateOneWithoutReviewsNestedInput
    pg?: PayingGuestsUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutEventSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: NullableStringFieldUpdateOperationsInput | string | null
    parkingId?: NullableStringFieldUpdateOperationsInput | string | null
    pgId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}