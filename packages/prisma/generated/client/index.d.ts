
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
 * Model Chain
 * 
 */
export type Chain = $Result.DefaultSelection<Prisma.$ChainPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Operation
 * 
 */
export type Operation = $Result.DefaultSelection<Prisma.$OperationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChainStatus: {
  active: 'active',
  degraded: 'degraded',
  offline: 'offline'
};

export type ChainStatus = (typeof ChainStatus)[keyof typeof ChainStatus]


export const ContractType: {
  Controller: 'Controller',
  Router: 'Router'
};

export type ContractType = (typeof ContractType)[keyof typeof ContractType]


export const TransactionStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  orphaned: 'orphaned'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const BufferStatus: {
  immediate: 'immediate',
  buffered: 'buffered',
  expired: 'expired'
};

export type BufferStatus = (typeof BufferStatus)[keyof typeof BufferStatus]


export const MessageStatus: {
  sent: 'sent',
  delivered: 'delivered',
  timeout: 'timeout',
  unknown: 'unknown'
};

export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus]


export const OperationType: {
  AddCollateral: 'AddCollateral',
  Borrow: 'Borrow',
  Withdraw: 'Withdraw'
};

export type OperationType = (typeof OperationType)[keyof typeof OperationType]


export const OperationStatus: {
  ongoing: 'ongoing',
  completed: 'completed',
  rejected: 'rejected',
  stuck: 'stuck',
  orphaned: 'orphaned',
  timeout: 'timeout'
};

export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus]

}

export type ChainStatus = $Enums.ChainStatus

export const ChainStatus: typeof $Enums.ChainStatus

export type ContractType = $Enums.ContractType

export const ContractType: typeof $Enums.ContractType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type BufferStatus = $Enums.BufferStatus

export const BufferStatus: typeof $Enums.BufferStatus

export type MessageStatus = $Enums.MessageStatus

export const MessageStatus: typeof $Enums.MessageStatus

export type OperationType = $Enums.OperationType

export const OperationType: typeof $Enums.OperationType

export type OperationStatus = $Enums.OperationStatus

export const OperationStatus: typeof $Enums.OperationStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chains
 * const chains = await prisma.chain.findMany()
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
   * // Fetch zero or more Chains
   * const chains = await prisma.chain.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.chain`: Exposes CRUD operations for the **Chain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chains
    * const chains = await prisma.chain.findMany()
    * ```
    */
  get chain(): Prisma.ChainDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Chain: 'Chain',
    Contract: 'Contract',
    Transaction: 'Transaction',
    Event: 'Event',
    Message: 'Message',
    Operation: 'Operation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "chain" | "contract" | "transaction" | "event" | "message" | "operation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Chain: {
        payload: Prisma.$ChainPayload<ExtArgs>
        fields: Prisma.ChainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          findFirst: {
            args: Prisma.ChainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          findMany: {
            args: Prisma.ChainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>[]
          }
          create: {
            args: Prisma.ChainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          createMany: {
            args: Prisma.ChainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>[]
          }
          delete: {
            args: Prisma.ChainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          update: {
            args: Prisma.ChainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          deleteMany: {
            args: Prisma.ChainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          aggregate: {
            args: Prisma.ChainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChain>
          }
          groupBy: {
            args: Prisma.ChainGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChainGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChainCountArgs<ExtArgs>
            result: $Utils.Optional<ChainCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Operation: {
        payload: Prisma.$OperationPayload<ExtArgs>
        fields: Prisma.OperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findFirst: {
            args: Prisma.OperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findMany: {
            args: Prisma.OperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          create: {
            args: Prisma.OperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          createMany: {
            args: Prisma.OperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          delete: {
            args: Prisma.OperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          update: {
            args: Prisma.OperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          deleteMany: {
            args: Prisma.OperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          aggregate: {
            args: Prisma.OperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation>
          }
          groupBy: {
            args: Prisma.OperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationCountArgs<ExtArgs>
            result: $Utils.Optional<OperationCountAggregateOutputType> | number
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
   * Count Type ChainCountOutputType
   */

  export type ChainCountOutputType = {
    contracts: number
    transactions: number
    events: number
    messages_from: number
    messages_to: number
    operations_from: number
    operations_to: number
  }

  export type ChainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | ChainCountOutputTypeCountContractsArgs
    transactions?: boolean | ChainCountOutputTypeCountTransactionsArgs
    events?: boolean | ChainCountOutputTypeCountEventsArgs
    messages_from?: boolean | ChainCountOutputTypeCountMessages_fromArgs
    messages_to?: boolean | ChainCountOutputTypeCountMessages_toArgs
    operations_from?: boolean | ChainCountOutputTypeCountOperations_fromArgs
    operations_to?: boolean | ChainCountOutputTypeCountOperations_toArgs
  }

  // Custom InputTypes
  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainCountOutputType
     */
    select?: ChainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountMessages_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountMessages_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountOperations_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountOperations_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    events: number
    messages_sent: number
    messages_recv: number
    operations_start: number
    operations_end: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TransactionCountOutputTypeCountEventsArgs
    messages_sent?: boolean | TransactionCountOutputTypeCountMessages_sentArgs
    messages_recv?: boolean | TransactionCountOutputTypeCountMessages_recvArgs
    operations_start?: boolean | TransactionCountOutputTypeCountOperations_startArgs
    operations_end?: boolean | TransactionCountOutputTypeCountOperations_endArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountMessages_sentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountMessages_recvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountOperations_startArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountOperations_endArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    operations: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operations?: boolean | MessageCountOutputTypeCountOperationsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Chain
   */

  export type AggregateChain = {
    _count: ChainCountAggregateOutputType | null
    _avg: ChainAvgAggregateOutputType | null
    _sum: ChainSumAggregateOutputType | null
    _min: ChainMinAggregateOutputType | null
    _max: ChainMaxAggregateOutputType | null
  }

  export type ChainAvgAggregateOutputType = {
    chain_id: number | null
    last_block_processed: number | null
  }

  export type ChainSumAggregateOutputType = {
    chain_id: number | null
    last_block_processed: bigint | null
  }

  export type ChainMinAggregateOutputType = {
    chain_id: number | null
    name: string | null
    status: $Enums.ChainStatus | null
    last_block_processed: bigint | null
  }

  export type ChainMaxAggregateOutputType = {
    chain_id: number | null
    name: string | null
    status: $Enums.ChainStatus | null
    last_block_processed: bigint | null
  }

  export type ChainCountAggregateOutputType = {
    chain_id: number
    name: number
    status: number
    last_block_processed: number
    provider_urls: number
    _all: number
  }


  export type ChainAvgAggregateInputType = {
    chain_id?: true
    last_block_processed?: true
  }

  export type ChainSumAggregateInputType = {
    chain_id?: true
    last_block_processed?: true
  }

  export type ChainMinAggregateInputType = {
    chain_id?: true
    name?: true
    status?: true
    last_block_processed?: true
  }

  export type ChainMaxAggregateInputType = {
    chain_id?: true
    name?: true
    status?: true
    last_block_processed?: true
  }

  export type ChainCountAggregateInputType = {
    chain_id?: true
    name?: true
    status?: true
    last_block_processed?: true
    provider_urls?: true
    _all?: true
  }

  export type ChainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chain to aggregate.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chains
    **/
    _count?: true | ChainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChainMaxAggregateInputType
  }

  export type GetChainAggregateType<T extends ChainAggregateArgs> = {
        [P in keyof T & keyof AggregateChain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChain[P]>
      : GetScalarType<T[P], AggregateChain[P]>
  }




  export type ChainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChainWhereInput
    orderBy?: ChainOrderByWithAggregationInput | ChainOrderByWithAggregationInput[]
    by: ChainScalarFieldEnum[] | ChainScalarFieldEnum
    having?: ChainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChainCountAggregateInputType | true
    _avg?: ChainAvgAggregateInputType
    _sum?: ChainSumAggregateInputType
    _min?: ChainMinAggregateInputType
    _max?: ChainMaxAggregateInputType
  }

  export type ChainGroupByOutputType = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint
    provider_urls: JsonValue
    _count: ChainCountAggregateOutputType | null
    _avg: ChainAvgAggregateOutputType | null
    _sum: ChainSumAggregateOutputType | null
    _min: ChainMinAggregateOutputType | null
    _max: ChainMaxAggregateOutputType | null
  }

  type GetChainGroupByPayload<T extends ChainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChainGroupByOutputType[P]>
            : GetScalarType<T[P], ChainGroupByOutputType[P]>
        }
      >
    >


  export type ChainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chain_id?: boolean
    name?: boolean
    status?: boolean
    last_block_processed?: boolean
    provider_urls?: boolean
    contracts?: boolean | Chain$contractsArgs<ExtArgs>
    transactions?: boolean | Chain$transactionsArgs<ExtArgs>
    events?: boolean | Chain$eventsArgs<ExtArgs>
    messages_from?: boolean | Chain$messages_fromArgs<ExtArgs>
    messages_to?: boolean | Chain$messages_toArgs<ExtArgs>
    operations_from?: boolean | Chain$operations_fromArgs<ExtArgs>
    operations_to?: boolean | Chain$operations_toArgs<ExtArgs>
    _count?: boolean | ChainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chain"]>

  export type ChainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chain_id?: boolean
    name?: boolean
    status?: boolean
    last_block_processed?: boolean
    provider_urls?: boolean
  }, ExtArgs["result"]["chain"]>

  export type ChainSelectScalar = {
    chain_id?: boolean
    name?: boolean
    status?: boolean
    last_block_processed?: boolean
    provider_urls?: boolean
  }

  export type ChainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | Chain$contractsArgs<ExtArgs>
    transactions?: boolean | Chain$transactionsArgs<ExtArgs>
    events?: boolean | Chain$eventsArgs<ExtArgs>
    messages_from?: boolean | Chain$messages_fromArgs<ExtArgs>
    messages_to?: boolean | Chain$messages_toArgs<ExtArgs>
    operations_from?: boolean | Chain$operations_fromArgs<ExtArgs>
    operations_to?: boolean | Chain$operations_toArgs<ExtArgs>
    _count?: boolean | ChainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chain"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      messages_from: Prisma.$MessagePayload<ExtArgs>[]
      messages_to: Prisma.$MessagePayload<ExtArgs>[]
      operations_from: Prisma.$OperationPayload<ExtArgs>[]
      operations_to: Prisma.$OperationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      chain_id: number
      name: string
      status: $Enums.ChainStatus
      last_block_processed: bigint
      provider_urls: Prisma.JsonValue
    }, ExtArgs["result"]["chain"]>
    composites: {}
  }

  type ChainGetPayload<S extends boolean | null | undefined | ChainDefaultArgs> = $Result.GetResult<Prisma.$ChainPayload, S>

  type ChainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChainCountAggregateInputType | true
    }

  export interface ChainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chain'], meta: { name: 'Chain' } }
    /**
     * Find zero or one Chain that matches the filter.
     * @param {ChainFindUniqueArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChainFindUniqueArgs>(args: SelectSubset<T, ChainFindUniqueArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Chain that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChainFindUniqueOrThrowArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChainFindUniqueOrThrowArgs>(args: SelectSubset<T, ChainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Chain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindFirstArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChainFindFirstArgs>(args?: SelectSubset<T, ChainFindFirstArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Chain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindFirstOrThrowArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChainFindFirstOrThrowArgs>(args?: SelectSubset<T, ChainFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Chains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chains
     * const chains = await prisma.chain.findMany()
     * 
     * // Get first 10 Chains
     * const chains = await prisma.chain.findMany({ take: 10 })
     * 
     * // Only select the `chain_id`
     * const chainWithChain_idOnly = await prisma.chain.findMany({ select: { chain_id: true } })
     * 
     */
    findMany<T extends ChainFindManyArgs>(args?: SelectSubset<T, ChainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Chain.
     * @param {ChainCreateArgs} args - Arguments to create a Chain.
     * @example
     * // Create one Chain
     * const Chain = await prisma.chain.create({
     *   data: {
     *     // ... data to create a Chain
     *   }
     * })
     * 
     */
    create<T extends ChainCreateArgs>(args: SelectSubset<T, ChainCreateArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Chains.
     * @param {ChainCreateManyArgs} args - Arguments to create many Chains.
     * @example
     * // Create many Chains
     * const chain = await prisma.chain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChainCreateManyArgs>(args?: SelectSubset<T, ChainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chains and returns the data saved in the database.
     * @param {ChainCreateManyAndReturnArgs} args - Arguments to create many Chains.
     * @example
     * // Create many Chains
     * const chain = await prisma.chain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chains and only return the `chain_id`
     * const chainWithChain_idOnly = await prisma.chain.createManyAndReturn({ 
     *   select: { chain_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChainCreateManyAndReturnArgs>(args?: SelectSubset<T, ChainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Chain.
     * @param {ChainDeleteArgs} args - Arguments to delete one Chain.
     * @example
     * // Delete one Chain
     * const Chain = await prisma.chain.delete({
     *   where: {
     *     // ... filter to delete one Chain
     *   }
     * })
     * 
     */
    delete<T extends ChainDeleteArgs>(args: SelectSubset<T, ChainDeleteArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Chain.
     * @param {ChainUpdateArgs} args - Arguments to update one Chain.
     * @example
     * // Update one Chain
     * const chain = await prisma.chain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChainUpdateArgs>(args: SelectSubset<T, ChainUpdateArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Chains.
     * @param {ChainDeleteManyArgs} args - Arguments to filter Chains to delete.
     * @example
     * // Delete a few Chains
     * const { count } = await prisma.chain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChainDeleteManyArgs>(args?: SelectSubset<T, ChainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chains
     * const chain = await prisma.chain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChainUpdateManyArgs>(args: SelectSubset<T, ChainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chain.
     * @param {ChainUpsertArgs} args - Arguments to update or create a Chain.
     * @example
     * // Update or create a Chain
     * const chain = await prisma.chain.upsert({
     *   create: {
     *     // ... data to create a Chain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chain we want to update
     *   }
     * })
     */
    upsert<T extends ChainUpsertArgs>(args: SelectSubset<T, ChainUpsertArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainCountArgs} args - Arguments to filter Chains to count.
     * @example
     * // Count the number of Chains
     * const count = await prisma.chain.count({
     *   where: {
     *     // ... the filter for the Chains we want to count
     *   }
     * })
    **/
    count<T extends ChainCountArgs>(
      args?: Subset<T, ChainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChainAggregateArgs>(args: Subset<T, ChainAggregateArgs>): Prisma.PrismaPromise<GetChainAggregateType<T>>

    /**
     * Group by Chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainGroupByArgs} args - Group by arguments.
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
      T extends ChainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChainGroupByArgs['orderBy'] }
        : { orderBy?: ChainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chain model
   */
  readonly fields: ChainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contracts<T extends Chain$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Chain$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends Chain$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Chain$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends Chain$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Chain$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    messages_from<T extends Chain$messages_fromArgs<ExtArgs> = {}>(args?: Subset<T, Chain$messages_fromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    messages_to<T extends Chain$messages_toArgs<ExtArgs> = {}>(args?: Subset<T, Chain$messages_toArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    operations_from<T extends Chain$operations_fromArgs<ExtArgs> = {}>(args?: Subset<T, Chain$operations_fromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
    operations_to<T extends Chain$operations_toArgs<ExtArgs> = {}>(args?: Subset<T, Chain$operations_toArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Chain model
   */ 
  interface ChainFieldRefs {
    readonly chain_id: FieldRef<"Chain", 'Int'>
    readonly name: FieldRef<"Chain", 'String'>
    readonly status: FieldRef<"Chain", 'ChainStatus'>
    readonly last_block_processed: FieldRef<"Chain", 'BigInt'>
    readonly provider_urls: FieldRef<"Chain", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Chain findUnique
   */
  export type ChainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain findUniqueOrThrow
   */
  export type ChainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain findFirst
   */
  export type ChainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chains.
     */
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain findFirstOrThrow
   */
  export type ChainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chains.
     */
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain findMany
   */
  export type ChainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chains to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain create
   */
  export type ChainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The data needed to create a Chain.
     */
    data: XOR<ChainCreateInput, ChainUncheckedCreateInput>
  }

  /**
   * Chain createMany
   */
  export type ChainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chains.
     */
    data: ChainCreateManyInput | ChainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chain createManyAndReturn
   */
  export type ChainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Chains.
     */
    data: ChainCreateManyInput | ChainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chain update
   */
  export type ChainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The data needed to update a Chain.
     */
    data: XOR<ChainUpdateInput, ChainUncheckedUpdateInput>
    /**
     * Choose, which Chain to update.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain updateMany
   */
  export type ChainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chains.
     */
    data: XOR<ChainUpdateManyMutationInput, ChainUncheckedUpdateManyInput>
    /**
     * Filter which Chains to update
     */
    where?: ChainWhereInput
  }

  /**
   * Chain upsert
   */
  export type ChainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The filter to search for the Chain to update in case it exists.
     */
    where: ChainWhereUniqueInput
    /**
     * In case the Chain found by the `where` argument doesn't exist, create a new Chain with this data.
     */
    create: XOR<ChainCreateInput, ChainUncheckedCreateInput>
    /**
     * In case the Chain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChainUpdateInput, ChainUncheckedUpdateInput>
  }

  /**
   * Chain delete
   */
  export type ChainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter which Chain to delete.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain deleteMany
   */
  export type ChainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chains to delete
     */
    where?: ChainWhereInput
  }

  /**
   * Chain.contracts
   */
  export type Chain$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Chain.transactions
   */
  export type Chain$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Chain.events
   */
  export type Chain$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Chain.messages_from
   */
  export type Chain$messages_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chain.messages_to
   */
  export type Chain$messages_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chain.operations_from
   */
  export type Chain$operations_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Chain.operations_to
   */
  export type Chain$operations_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Chain without action
   */
  export type ChainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    chain_id: number | null
    deployment_block: number | null
  }

  export type ContractSumAggregateOutputType = {
    chain_id: number | null
    deployment_block: bigint | null
  }

  export type ContractMinAggregateOutputType = {
    address: string | null
    chain_id: number | null
    type: $Enums.ContractType | null
    deployment_block: bigint | null
    abi_hash: string | null
  }

  export type ContractMaxAggregateOutputType = {
    address: string | null
    chain_id: number | null
    type: $Enums.ContractType | null
    deployment_block: bigint | null
    abi_hash: string | null
  }

  export type ContractCountAggregateOutputType = {
    address: number
    chain_id: number
    type: number
    deployment_block: number
    abi_hash: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    chain_id?: true
    deployment_block?: true
  }

  export type ContractSumAggregateInputType = {
    chain_id?: true
    deployment_block?: true
  }

  export type ContractMinAggregateInputType = {
    address?: true
    chain_id?: true
    type?: true
    deployment_block?: true
    abi_hash?: true
  }

  export type ContractMaxAggregateInputType = {
    address?: true
    chain_id?: true
    type?: true
    deployment_block?: true
    abi_hash?: true
  }

  export type ContractCountAggregateInputType = {
    address?: true
    chain_id?: true
    type?: true
    deployment_block?: true
    abi_hash?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    address: string
    chain_id: number
    type: $Enums.ContractType
    deployment_block: bigint
    abi_hash: string
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    chain_id?: boolean
    type?: boolean
    deployment_block?: boolean
    abi_hash?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    chain_id?: boolean
    type?: boolean
    deployment_block?: boolean
    abi_hash?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    address?: boolean
    chain_id?: boolean
    type?: boolean
    deployment_block?: boolean
    abi_hash?: boolean
  }

  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      address: string
      chain_id: number
      type: $Enums.ContractType
      deployment_block: bigint
      abi_hash: string
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const contractWithAddressOnly = await prisma.contract.findMany({ select: { address: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `address`
     * const contractWithAddressOnly = await prisma.contract.createManyAndReturn({ 
     *   select: { address: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
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
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly address: FieldRef<"Contract", 'String'>
    readonly chain_id: FieldRef<"Contract", 'Int'>
    readonly type: FieldRef<"Contract", 'ContractType'>
    readonly deployment_block: FieldRef<"Contract", 'BigInt'>
    readonly abi_hash: FieldRef<"Contract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    chain_id: number | null
    block_number: number | null
    confirmations: number | null
  }

  export type TransactionSumAggregateOutputType = {
    chain_id: number | null
    block_number: bigint | null
    confirmations: number | null
  }

  export type TransactionMinAggregateOutputType = {
    tx_id: string | null
    chain_id: number | null
    hash: string | null
    block_number: bigint | null
    block_hash: string | null
    timestamp: Date | null
    status: $Enums.TransactionStatus | null
    confirmations: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    tx_id: string | null
    chain_id: number | null
    hash: string | null
    block_number: bigint | null
    block_hash: string | null
    timestamp: Date | null
    status: $Enums.TransactionStatus | null
    confirmations: number | null
  }

  export type TransactionCountAggregateOutputType = {
    tx_id: number
    chain_id: number
    hash: number
    block_number: number
    block_hash: number
    timestamp: number
    status: number
    confirmations: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    chain_id?: true
    block_number?: true
    confirmations?: true
  }

  export type TransactionSumAggregateInputType = {
    chain_id?: true
    block_number?: true
    confirmations?: true
  }

  export type TransactionMinAggregateInputType = {
    tx_id?: true
    chain_id?: true
    hash?: true
    block_number?: true
    block_hash?: true
    timestamp?: true
    status?: true
    confirmations?: true
  }

  export type TransactionMaxAggregateInputType = {
    tx_id?: true
    chain_id?: true
    hash?: true
    block_number?: true
    block_hash?: true
    timestamp?: true
    status?: true
    confirmations?: true
  }

  export type TransactionCountAggregateInputType = {
    tx_id?: true
    chain_id?: true
    hash?: true
    block_number?: true
    block_hash?: true
    timestamp?: true
    status?: true
    confirmations?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    tx_id: string
    chain_id: number
    hash: string
    block_number: bigint
    block_hash: string
    timestamp: Date
    status: $Enums.TransactionStatus
    confirmations: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tx_id?: boolean
    chain_id?: boolean
    hash?: boolean
    block_number?: boolean
    block_hash?: boolean
    timestamp?: boolean
    status?: boolean
    confirmations?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
    events?: boolean | Transaction$eventsArgs<ExtArgs>
    messages_sent?: boolean | Transaction$messages_sentArgs<ExtArgs>
    messages_recv?: boolean | Transaction$messages_recvArgs<ExtArgs>
    operations_start?: boolean | Transaction$operations_startArgs<ExtArgs>
    operations_end?: boolean | Transaction$operations_endArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tx_id?: boolean
    chain_id?: boolean
    hash?: boolean
    block_number?: boolean
    block_hash?: boolean
    timestamp?: boolean
    status?: boolean
    confirmations?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    tx_id?: boolean
    chain_id?: boolean
    hash?: boolean
    block_number?: boolean
    block_hash?: boolean
    timestamp?: boolean
    status?: boolean
    confirmations?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
    events?: boolean | Transaction$eventsArgs<ExtArgs>
    messages_sent?: boolean | Transaction$messages_sentArgs<ExtArgs>
    messages_recv?: boolean | Transaction$messages_recvArgs<ExtArgs>
    operations_start?: boolean | Transaction$operations_startArgs<ExtArgs>
    operations_end?: boolean | Transaction$operations_endArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs>
      events: Prisma.$EventPayload<ExtArgs>[]
      messages_sent: Prisma.$MessagePayload<ExtArgs>[]
      messages_recv: Prisma.$MessagePayload<ExtArgs>[]
      operations_start: Prisma.$OperationPayload<ExtArgs>[]
      operations_end: Prisma.$OperationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tx_id: string
      chain_id: number
      hash: string
      block_number: bigint
      block_hash: string
      timestamp: Date
      status: $Enums.TransactionStatus
      confirmations: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `tx_id`
     * const transactionWithTx_idOnly = await prisma.transaction.findMany({ select: { tx_id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `tx_id`
     * const transactionWithTx_idOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { tx_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    events<T extends Transaction$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    messages_sent<T extends Transaction$messages_sentArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$messages_sentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    messages_recv<T extends Transaction$messages_recvArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$messages_recvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    operations_start<T extends Transaction$operations_startArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$operations_startArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
    operations_end<T extends Transaction$operations_endArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$operations_endArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly tx_id: FieldRef<"Transaction", 'String'>
    readonly chain_id: FieldRef<"Transaction", 'Int'>
    readonly hash: FieldRef<"Transaction", 'String'>
    readonly block_number: FieldRef<"Transaction", 'BigInt'>
    readonly block_hash: FieldRef<"Transaction", 'String'>
    readonly timestamp: FieldRef<"Transaction", 'DateTime'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly confirmations: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.events
   */
  export type Transaction$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Transaction.messages_sent
   */
  export type Transaction$messages_sentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Transaction.messages_recv
   */
  export type Transaction$messages_recvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Transaction.operations_start
   */
  export type Transaction$operations_startArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Transaction.operations_end
   */
  export type Transaction$operations_endArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    chain_id: number | null
    log_index: number | null
  }

  export type EventSumAggregateOutputType = {
    chain_id: number | null
    log_index: number | null
  }

  export type EventMinAggregateOutputType = {
    event_id: string | null
    chain_id: number | null
    tx_hash: string | null
    log_index: number | null
    name: string | null
    contract_address: string | null
    correlation_window_id: string | null
    buffer_status: $Enums.BufferStatus | null
  }

  export type EventMaxAggregateOutputType = {
    event_id: string | null
    chain_id: number | null
    tx_hash: string | null
    log_index: number | null
    name: string | null
    contract_address: string | null
    correlation_window_id: string | null
    buffer_status: $Enums.BufferStatus | null
  }

  export type EventCountAggregateOutputType = {
    event_id: number
    chain_id: number
    tx_hash: number
    log_index: number
    name: number
    contract_address: number
    params: number
    correlation_window_id: number
    buffer_status: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    chain_id?: true
    log_index?: true
  }

  export type EventSumAggregateInputType = {
    chain_id?: true
    log_index?: true
  }

  export type EventMinAggregateInputType = {
    event_id?: true
    chain_id?: true
    tx_hash?: true
    log_index?: true
    name?: true
    contract_address?: true
    correlation_window_id?: true
    buffer_status?: true
  }

  export type EventMaxAggregateInputType = {
    event_id?: true
    chain_id?: true
    tx_hash?: true
    log_index?: true
    name?: true
    contract_address?: true
    correlation_window_id?: true
    buffer_status?: true
  }

  export type EventCountAggregateInputType = {
    event_id?: true
    chain_id?: true
    tx_hash?: true
    log_index?: true
    name?: true
    contract_address?: true
    params?: true
    correlation_window_id?: true
    buffer_status?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    event_id: string
    chain_id: number
    tx_hash: string
    log_index: number
    name: string
    contract_address: string
    params: JsonValue
    correlation_window_id: string | null
    buffer_status: $Enums.BufferStatus
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    chain_id?: boolean
    tx_hash?: boolean
    log_index?: boolean
    name?: boolean
    contract_address?: boolean
    params?: boolean
    correlation_window_id?: boolean
    buffer_status?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    chain_id?: boolean
    tx_hash?: boolean
    log_index?: boolean
    name?: boolean
    contract_address?: boolean
    params?: boolean
    correlation_window_id?: boolean
    buffer_status?: boolean
    chain?: boolean | ChainDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    event_id?: boolean
    chain_id?: boolean
    tx_hash?: boolean
    log_index?: boolean
    name?: boolean
    contract_address?: boolean
    params?: boolean
    correlation_window_id?: boolean
    buffer_status?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | ChainDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      event_id: string
      chain_id: number
      tx_hash: string
      log_index: number
      name: string
      contract_address: string
      params: Prisma.JsonValue
      correlation_window_id: string | null
      buffer_status: $Enums.BufferStatus
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `event_id`
     * const eventWithEvent_idOnly = await prisma.event.findMany({ select: { event_id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `event_id`
     * const eventWithEvent_idOnly = await prisma.event.createManyAndReturn({ 
     *   select: { event_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly event_id: FieldRef<"Event", 'String'>
    readonly chain_id: FieldRef<"Event", 'Int'>
    readonly tx_hash: FieldRef<"Event", 'String'>
    readonly log_index: FieldRef<"Event", 'Int'>
    readonly name: FieldRef<"Event", 'String'>
    readonly contract_address: FieldRef<"Event", 'String'>
    readonly params: FieldRef<"Event", 'Json'>
    readonly correlation_window_id: FieldRef<"Event", 'String'>
    readonly buffer_status: FieldRef<"Event", 'BufferStatus'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    nonce: Decimal | null
    from_chain: number | null
    to_chain: number | null
  }

  export type MessageSumAggregateOutputType = {
    nonce: Decimal | null
    from_chain: number | null
    to_chain: number | null
  }

  export type MessageMinAggregateOutputType = {
    message_id: string | null
    nonce: Decimal | null
    from_chain: number | null
    to_chain: number | null
    sent_tx_id: string | null
    recv_tx_id: string | null
    status: $Enums.MessageStatus | null
    sent_at: Date | null
    received_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    message_id: string | null
    nonce: Decimal | null
    from_chain: number | null
    to_chain: number | null
    sent_tx_id: string | null
    recv_tx_id: string | null
    status: $Enums.MessageStatus | null
    sent_at: Date | null
    received_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    message_id: number
    nonce: number
    from_chain: number
    to_chain: number
    sent_tx_id: number
    recv_tx_id: number
    status: number
    sent_at: number
    received_at: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    nonce?: true
    from_chain?: true
    to_chain?: true
  }

  export type MessageSumAggregateInputType = {
    nonce?: true
    from_chain?: true
    to_chain?: true
  }

  export type MessageMinAggregateInputType = {
    message_id?: true
    nonce?: true
    from_chain?: true
    to_chain?: true
    sent_tx_id?: true
    recv_tx_id?: true
    status?: true
    sent_at?: true
    received_at?: true
  }

  export type MessageMaxAggregateInputType = {
    message_id?: true
    nonce?: true
    from_chain?: true
    to_chain?: true
    sent_tx_id?: true
    recv_tx_id?: true
    status?: true
    sent_at?: true
    received_at?: true
  }

  export type MessageCountAggregateInputType = {
    message_id?: true
    nonce?: true
    from_chain?: true
    to_chain?: true
    sent_tx_id?: true
    recv_tx_id?: true
    status?: true
    sent_at?: true
    received_at?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    message_id: string
    nonce: Decimal
    from_chain: number
    to_chain: number
    sent_tx_id: string
    recv_tx_id: string | null
    status: $Enums.MessageStatus
    sent_at: Date
    received_at: Date | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    nonce?: boolean
    from_chain?: boolean
    to_chain?: boolean
    sent_tx_id?: boolean
    recv_tx_id?: boolean
    status?: boolean
    sent_at?: boolean
    received_at?: boolean
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    sent_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    recv_transaction?: boolean | Message$recv_transactionArgs<ExtArgs>
    operations?: boolean | Message$operationsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    nonce?: boolean
    from_chain?: boolean
    to_chain?: boolean
    sent_tx_id?: boolean
    recv_tx_id?: boolean
    status?: boolean
    sent_at?: boolean
    received_at?: boolean
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    sent_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    recv_transaction?: boolean | Message$recv_transactionArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    message_id?: boolean
    nonce?: boolean
    from_chain?: boolean
    to_chain?: boolean
    sent_tx_id?: boolean
    recv_tx_id?: boolean
    status?: boolean
    sent_at?: boolean
    received_at?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    sent_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    recv_transaction?: boolean | Message$recv_transactionArgs<ExtArgs>
    operations?: boolean | Message$operationsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    sent_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    recv_transaction?: boolean | Message$recv_transactionArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      from_chain_rel: Prisma.$ChainPayload<ExtArgs>
      to_chain_rel: Prisma.$ChainPayload<ExtArgs>
      sent_transaction: Prisma.$TransactionPayload<ExtArgs>
      recv_transaction: Prisma.$TransactionPayload<ExtArgs> | null
      operations: Prisma.$OperationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      message_id: string
      nonce: Prisma.Decimal
      from_chain: number
      to_chain: number
      sent_tx_id: string
      recv_tx_id: string | null
      status: $Enums.MessageStatus
      sent_at: Date
      received_at: Date | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const messageWithMessage_idOnly = await prisma.message.findMany({ select: { message_id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `message_id`
     * const messageWithMessage_idOnly = await prisma.message.createManyAndReturn({ 
     *   select: { message_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from_chain_rel<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    to_chain_rel<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sent_transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    recv_transaction<T extends Message$recv_transactionArgs<ExtArgs> = {}>(args?: Subset<T, Message$recv_transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    operations<T extends Message$operationsArgs<ExtArgs> = {}>(args?: Subset<T, Message$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly message_id: FieldRef<"Message", 'String'>
    readonly nonce: FieldRef<"Message", 'Decimal'>
    readonly from_chain: FieldRef<"Message", 'Int'>
    readonly to_chain: FieldRef<"Message", 'Int'>
    readonly sent_tx_id: FieldRef<"Message", 'String'>
    readonly recv_tx_id: FieldRef<"Message", 'String'>
    readonly status: FieldRef<"Message", 'MessageStatus'>
    readonly sent_at: FieldRef<"Message", 'DateTime'>
    readonly received_at: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message.recv_transaction
   */
  export type Message$recv_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Message.operations
   */
  export type Message$operationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Operation
   */

  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationAvgAggregateOutputType = {
    from_chain: number | null
    to_chain: number | null
    message_nonce: Decimal | null
    retry_count: number | null
  }

  export type OperationSumAggregateOutputType = {
    from_chain: number | null
    to_chain: number | null
    message_nonce: Decimal | null
    retry_count: number | null
  }

  export type OperationMinAggregateOutputType = {
    op_id: string | null
    op_type: $Enums.OperationType | null
    user_address: string | null
    from_chain: number | null
    to_chain: number | null
    message_nonce: Decimal | null
    message_id: string | null
    start_tx_id: string | null
    end_tx_id: string | null
    status: $Enums.OperationStatus | null
    substatus: string | null
    retry_count: number | null
    created_at: Date | null
    updated_at: Date | null
    last_event_at: Date | null
    next_retry_at: Date | null
  }

  export type OperationMaxAggregateOutputType = {
    op_id: string | null
    op_type: $Enums.OperationType | null
    user_address: string | null
    from_chain: number | null
    to_chain: number | null
    message_nonce: Decimal | null
    message_id: string | null
    start_tx_id: string | null
    end_tx_id: string | null
    status: $Enums.OperationStatus | null
    substatus: string | null
    retry_count: number | null
    created_at: Date | null
    updated_at: Date | null
    last_event_at: Date | null
    next_retry_at: Date | null
  }

  export type OperationCountAggregateOutputType = {
    op_id: number
    op_type: number
    user_address: number
    from_chain: number
    to_chain: number
    message_nonce: number
    message_id: number
    start_tx_id: number
    end_tx_id: number
    status: number
    substatus: number
    details: number
    retry_count: number
    created_at: number
    updated_at: number
    last_event_at: number
    next_retry_at: number
    error_context: number
    _all: number
  }


  export type OperationAvgAggregateInputType = {
    from_chain?: true
    to_chain?: true
    message_nonce?: true
    retry_count?: true
  }

  export type OperationSumAggregateInputType = {
    from_chain?: true
    to_chain?: true
    message_nonce?: true
    retry_count?: true
  }

  export type OperationMinAggregateInputType = {
    op_id?: true
    op_type?: true
    user_address?: true
    from_chain?: true
    to_chain?: true
    message_nonce?: true
    message_id?: true
    start_tx_id?: true
    end_tx_id?: true
    status?: true
    substatus?: true
    retry_count?: true
    created_at?: true
    updated_at?: true
    last_event_at?: true
    next_retry_at?: true
  }

  export type OperationMaxAggregateInputType = {
    op_id?: true
    op_type?: true
    user_address?: true
    from_chain?: true
    to_chain?: true
    message_nonce?: true
    message_id?: true
    start_tx_id?: true
    end_tx_id?: true
    status?: true
    substatus?: true
    retry_count?: true
    created_at?: true
    updated_at?: true
    last_event_at?: true
    next_retry_at?: true
  }

  export type OperationCountAggregateInputType = {
    op_id?: true
    op_type?: true
    user_address?: true
    from_chain?: true
    to_chain?: true
    message_nonce?: true
    message_id?: true
    start_tx_id?: true
    end_tx_id?: true
    status?: true
    substatus?: true
    details?: true
    retry_count?: true
    created_at?: true
    updated_at?: true
    last_event_at?: true
    next_retry_at?: true
    error_context?: true
    _all?: true
  }

  export type OperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operation to aggregate.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithAggregationInput | OperationOrderByWithAggregationInput[]
    by: OperationScalarFieldEnum[] | OperationScalarFieldEnum
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _avg?: OperationAvgAggregateInputType
    _sum?: OperationSumAggregateInputType
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }

  export type OperationGroupByOutputType = {
    op_id: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce: Decimal | null
    message_id: string | null
    start_tx_id: string
    end_tx_id: string | null
    status: $Enums.OperationStatus
    substatus: string | null
    details: JsonValue
    retry_count: number
    created_at: Date
    updated_at: Date
    last_event_at: Date
    next_retry_at: Date | null
    error_context: JsonValue | null
    _count: OperationCountAggregateOutputType | null
    _avg: OperationAvgAggregateOutputType | null
    _sum: OperationSumAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    op_id?: boolean
    op_type?: boolean
    user_address?: boolean
    from_chain?: boolean
    to_chain?: boolean
    message_nonce?: boolean
    message_id?: boolean
    start_tx_id?: boolean
    end_tx_id?: boolean
    status?: boolean
    substatus?: boolean
    details?: boolean
    retry_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_event_at?: boolean
    next_retry_at?: boolean
    error_context?: boolean
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    message?: boolean | Operation$messageArgs<ExtArgs>
    start_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    end_transaction?: boolean | Operation$end_transactionArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    op_id?: boolean
    op_type?: boolean
    user_address?: boolean
    from_chain?: boolean
    to_chain?: boolean
    message_nonce?: boolean
    message_id?: boolean
    start_tx_id?: boolean
    end_tx_id?: boolean
    status?: boolean
    substatus?: boolean
    details?: boolean
    retry_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_event_at?: boolean
    next_retry_at?: boolean
    error_context?: boolean
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    message?: boolean | Operation$messageArgs<ExtArgs>
    start_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    end_transaction?: boolean | Operation$end_transactionArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectScalar = {
    op_id?: boolean
    op_type?: boolean
    user_address?: boolean
    from_chain?: boolean
    to_chain?: boolean
    message_nonce?: boolean
    message_id?: boolean
    start_tx_id?: boolean
    end_tx_id?: boolean
    status?: boolean
    substatus?: boolean
    details?: boolean
    retry_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_event_at?: boolean
    next_retry_at?: boolean
    error_context?: boolean
  }

  export type OperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    message?: boolean | Operation$messageArgs<ExtArgs>
    start_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    end_transaction?: boolean | Operation$end_transactionArgs<ExtArgs>
  }
  export type OperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    to_chain_rel?: boolean | ChainDefaultArgs<ExtArgs>
    message?: boolean | Operation$messageArgs<ExtArgs>
    start_transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    end_transaction?: boolean | Operation$end_transactionArgs<ExtArgs>
  }

  export type $OperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operation"
    objects: {
      from_chain_rel: Prisma.$ChainPayload<ExtArgs>
      to_chain_rel: Prisma.$ChainPayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs> | null
      start_transaction: Prisma.$TransactionPayload<ExtArgs>
      end_transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      op_id: string
      op_type: $Enums.OperationType
      user_address: string
      from_chain: number
      to_chain: number
      message_nonce: Prisma.Decimal | null
      message_id: string | null
      start_tx_id: string
      end_tx_id: string | null
      status: $Enums.OperationStatus
      substatus: string | null
      details: Prisma.JsonValue
      retry_count: number
      created_at: Date
      updated_at: Date
      last_event_at: Date
      next_retry_at: Date | null
      error_context: Prisma.JsonValue | null
    }, ExtArgs["result"]["operation"]>
    composites: {}
  }

  type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = $Result.GetResult<Prisma.$OperationPayload, S>

  type OperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OperationCountAggregateInputType | true
    }

  export interface OperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationFindUniqueArgs>(args: SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Operation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationFindFirstArgs>(args?: SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Operation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `op_id`
     * const operationWithOp_idOnly = await prisma.operation.findMany({ select: { op_id: true } })
     * 
     */
    findMany<T extends OperationFindManyArgs>(args?: SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
     */
    create<T extends OperationCreateArgs>(args: SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Operations.
     * @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationCreateManyArgs>(args?: SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `op_id`
     * const operationWithOp_idOnly = await prisma.operation.createManyAndReturn({ 
     *   select: { op_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
     */
    delete<T extends OperationDeleteArgs>(args: SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationUpdateArgs>(args: SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationDeleteManyArgs>(args?: SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationUpdateManyArgs>(args: SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
     */
    upsert<T extends OperationUpsertArgs>(args: SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
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
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operation model
   */
  readonly fields: OperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from_chain_rel<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    to_chain_rel<T extends ChainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChainDefaultArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    message<T extends Operation$messageArgs<ExtArgs> = {}>(args?: Subset<T, Operation$messageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    start_transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    end_transaction<T extends Operation$end_transactionArgs<ExtArgs> = {}>(args?: Subset<T, Operation$end_transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Operation model
   */ 
  interface OperationFieldRefs {
    readonly op_id: FieldRef<"Operation", 'String'>
    readonly op_type: FieldRef<"Operation", 'OperationType'>
    readonly user_address: FieldRef<"Operation", 'String'>
    readonly from_chain: FieldRef<"Operation", 'Int'>
    readonly to_chain: FieldRef<"Operation", 'Int'>
    readonly message_nonce: FieldRef<"Operation", 'Decimal'>
    readonly message_id: FieldRef<"Operation", 'String'>
    readonly start_tx_id: FieldRef<"Operation", 'String'>
    readonly end_tx_id: FieldRef<"Operation", 'String'>
    readonly status: FieldRef<"Operation", 'OperationStatus'>
    readonly substatus: FieldRef<"Operation", 'String'>
    readonly details: FieldRef<"Operation", 'Json'>
    readonly retry_count: FieldRef<"Operation", 'Int'>
    readonly created_at: FieldRef<"Operation", 'DateTime'>
    readonly updated_at: FieldRef<"Operation", 'DateTime'>
    readonly last_event_at: FieldRef<"Operation", 'DateTime'>
    readonly next_retry_at: FieldRef<"Operation", 'DateTime'>
    readonly error_context: FieldRef<"Operation", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Operation findUnique
   */
  export type OperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findFirst
   */
  export type OperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findMany
   */
  export type OperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation create
   */
  export type OperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to create a Operation.
     */
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }

  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operation createManyAndReturn
   */
  export type OperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation update
   */
  export type OperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to update a Operation.
     */
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
  }

  /**
   * Operation upsert
   */
  export type OperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The filter to search for the Operation to update in case it exists.
     */
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     */
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }

  /**
   * Operation delete
   */
  export type OperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter which Operation to delete.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationWhereInput
  }

  /**
   * Operation.message
   */
  export type Operation$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Operation.end_transaction
   */
  export type Operation$end_transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Operation without action
   */
  export type OperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
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


  export const ChainScalarFieldEnum: {
    chain_id: 'chain_id',
    name: 'name',
    status: 'status',
    last_block_processed: 'last_block_processed',
    provider_urls: 'provider_urls'
  };

  export type ChainScalarFieldEnum = (typeof ChainScalarFieldEnum)[keyof typeof ChainScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    address: 'address',
    chain_id: 'chain_id',
    type: 'type',
    deployment_block: 'deployment_block',
    abi_hash: 'abi_hash'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    tx_id: 'tx_id',
    chain_id: 'chain_id',
    hash: 'hash',
    block_number: 'block_number',
    block_hash: 'block_hash',
    timestamp: 'timestamp',
    status: 'status',
    confirmations: 'confirmations'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const EventScalarFieldEnum: {
    event_id: 'event_id',
    chain_id: 'chain_id',
    tx_hash: 'tx_hash',
    log_index: 'log_index',
    name: 'name',
    contract_address: 'contract_address',
    params: 'params',
    correlation_window_id: 'correlation_window_id',
    buffer_status: 'buffer_status'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    message_id: 'message_id',
    nonce: 'nonce',
    from_chain: 'from_chain',
    to_chain: 'to_chain',
    sent_tx_id: 'sent_tx_id',
    recv_tx_id: 'recv_tx_id',
    status: 'status',
    sent_at: 'sent_at',
    received_at: 'received_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const OperationScalarFieldEnum: {
    op_id: 'op_id',
    op_type: 'op_type',
    user_address: 'user_address',
    from_chain: 'from_chain',
    to_chain: 'to_chain',
    message_nonce: 'message_nonce',
    message_id: 'message_id',
    start_tx_id: 'start_tx_id',
    end_tx_id: 'end_tx_id',
    status: 'status',
    substatus: 'substatus',
    details: 'details',
    retry_count: 'retry_count',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_event_at: 'last_event_at',
    next_retry_at: 'next_retry_at',
    error_context: 'error_context'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ChainStatus'
   */
  export type EnumChainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainStatus'>
    


  /**
   * Reference to a field of type 'ChainStatus[]'
   */
  export type ListEnumChainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ContractType'
   */
  export type EnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType'>
    


  /**
   * Reference to a field of type 'ContractType[]'
   */
  export type ListEnumContractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'BufferStatus'
   */
  export type EnumBufferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BufferStatus'>
    


  /**
   * Reference to a field of type 'BufferStatus[]'
   */
  export type ListEnumBufferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BufferStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>
    


  /**
   * Reference to a field of type 'MessageStatus[]'
   */
  export type ListEnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus[]'>
    


  /**
   * Reference to a field of type 'OperationType'
   */
  export type EnumOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationType'>
    


  /**
   * Reference to a field of type 'OperationType[]'
   */
  export type ListEnumOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationType[]'>
    


  /**
   * Reference to a field of type 'OperationStatus'
   */
  export type EnumOperationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationStatus'>
    


  /**
   * Reference to a field of type 'OperationStatus[]'
   */
  export type ListEnumOperationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChainWhereInput = {
    AND?: ChainWhereInput | ChainWhereInput[]
    OR?: ChainWhereInput[]
    NOT?: ChainWhereInput | ChainWhereInput[]
    chain_id?: IntFilter<"Chain"> | number
    name?: StringFilter<"Chain"> | string
    status?: EnumChainStatusFilter<"Chain"> | $Enums.ChainStatus
    last_block_processed?: BigIntFilter<"Chain"> | bigint | number
    provider_urls?: JsonFilter<"Chain">
    contracts?: ContractListRelationFilter
    transactions?: TransactionListRelationFilter
    events?: EventListRelationFilter
    messages_from?: MessageListRelationFilter
    messages_to?: MessageListRelationFilter
    operations_from?: OperationListRelationFilter
    operations_to?: OperationListRelationFilter
  }

  export type ChainOrderByWithRelationInput = {
    chain_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    last_block_processed?: SortOrder
    provider_urls?: SortOrder
    contracts?: ContractOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    messages_from?: MessageOrderByRelationAggregateInput
    messages_to?: MessageOrderByRelationAggregateInput
    operations_from?: OperationOrderByRelationAggregateInput
    operations_to?: OperationOrderByRelationAggregateInput
  }

  export type ChainWhereUniqueInput = Prisma.AtLeast<{
    chain_id?: number
    AND?: ChainWhereInput | ChainWhereInput[]
    OR?: ChainWhereInput[]
    NOT?: ChainWhereInput | ChainWhereInput[]
    name?: StringFilter<"Chain"> | string
    status?: EnumChainStatusFilter<"Chain"> | $Enums.ChainStatus
    last_block_processed?: BigIntFilter<"Chain"> | bigint | number
    provider_urls?: JsonFilter<"Chain">
    contracts?: ContractListRelationFilter
    transactions?: TransactionListRelationFilter
    events?: EventListRelationFilter
    messages_from?: MessageListRelationFilter
    messages_to?: MessageListRelationFilter
    operations_from?: OperationListRelationFilter
    operations_to?: OperationListRelationFilter
  }, "chain_id">

  export type ChainOrderByWithAggregationInput = {
    chain_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    last_block_processed?: SortOrder
    provider_urls?: SortOrder
    _count?: ChainCountOrderByAggregateInput
    _avg?: ChainAvgOrderByAggregateInput
    _max?: ChainMaxOrderByAggregateInput
    _min?: ChainMinOrderByAggregateInput
    _sum?: ChainSumOrderByAggregateInput
  }

  export type ChainScalarWhereWithAggregatesInput = {
    AND?: ChainScalarWhereWithAggregatesInput | ChainScalarWhereWithAggregatesInput[]
    OR?: ChainScalarWhereWithAggregatesInput[]
    NOT?: ChainScalarWhereWithAggregatesInput | ChainScalarWhereWithAggregatesInput[]
    chain_id?: IntWithAggregatesFilter<"Chain"> | number
    name?: StringWithAggregatesFilter<"Chain"> | string
    status?: EnumChainStatusWithAggregatesFilter<"Chain"> | $Enums.ChainStatus
    last_block_processed?: BigIntWithAggregatesFilter<"Chain"> | bigint | number
    provider_urls?: JsonWithAggregatesFilter<"Chain">
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    address?: StringFilter<"Contract"> | string
    chain_id?: IntFilter<"Contract"> | number
    type?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    deployment_block?: BigIntFilter<"Contract"> | bigint | number
    abi_hash?: StringFilter<"Contract"> | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }

  export type ContractOrderByWithRelationInput = {
    address?: SortOrder
    chain_id?: SortOrder
    type?: SortOrder
    deployment_block?: SortOrder
    abi_hash?: SortOrder
    chain?: ChainOrderByWithRelationInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    address?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    chain_id?: IntFilter<"Contract"> | number
    type?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    deployment_block?: BigIntFilter<"Contract"> | bigint | number
    abi_hash?: StringFilter<"Contract"> | string
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
  }, "address">

  export type ContractOrderByWithAggregationInput = {
    address?: SortOrder
    chain_id?: SortOrder
    type?: SortOrder
    deployment_block?: SortOrder
    abi_hash?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    address?: StringWithAggregatesFilter<"Contract"> | string
    chain_id?: IntWithAggregatesFilter<"Contract"> | number
    type?: EnumContractTypeWithAggregatesFilter<"Contract"> | $Enums.ContractType
    deployment_block?: BigIntWithAggregatesFilter<"Contract"> | bigint | number
    abi_hash?: StringWithAggregatesFilter<"Contract"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    tx_id?: UuidFilter<"Transaction"> | string
    chain_id?: IntFilter<"Transaction"> | number
    hash?: StringFilter<"Transaction"> | string
    block_number?: BigIntFilter<"Transaction"> | bigint | number
    block_hash?: StringFilter<"Transaction"> | string
    timestamp?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    confirmations?: IntFilter<"Transaction"> | number
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
    events?: EventListRelationFilter
    messages_sent?: MessageListRelationFilter
    messages_recv?: MessageListRelationFilter
    operations_start?: OperationListRelationFilter
    operations_end?: OperationListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    tx_id?: SortOrder
    chain_id?: SortOrder
    hash?: SortOrder
    block_number?: SortOrder
    block_hash?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
    chain?: ChainOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
    messages_sent?: MessageOrderByRelationAggregateInput
    messages_recv?: MessageOrderByRelationAggregateInput
    operations_start?: OperationOrderByRelationAggregateInput
    operations_end?: OperationOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    tx_id?: string
    hash?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    chain_id?: IntFilter<"Transaction"> | number
    block_number?: BigIntFilter<"Transaction"> | bigint | number
    block_hash?: StringFilter<"Transaction"> | string
    timestamp?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    confirmations?: IntFilter<"Transaction"> | number
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
    events?: EventListRelationFilter
    messages_sent?: MessageListRelationFilter
    messages_recv?: MessageListRelationFilter
    operations_start?: OperationListRelationFilter
    operations_end?: OperationListRelationFilter
  }, "tx_id" | "hash">

  export type TransactionOrderByWithAggregationInput = {
    tx_id?: SortOrder
    chain_id?: SortOrder
    hash?: SortOrder
    block_number?: SortOrder
    block_hash?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    tx_id?: UuidWithAggregatesFilter<"Transaction"> | string
    chain_id?: IntWithAggregatesFilter<"Transaction"> | number
    hash?: StringWithAggregatesFilter<"Transaction"> | string
    block_number?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    block_hash?: StringWithAggregatesFilter<"Transaction"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    confirmations?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    event_id?: UuidFilter<"Event"> | string
    chain_id?: IntFilter<"Event"> | number
    tx_hash?: StringFilter<"Event"> | string
    log_index?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    contract_address?: StringFilter<"Event"> | string
    params?: JsonFilter<"Event">
    correlation_window_id?: UuidNullableFilter<"Event"> | string | null
    buffer_status?: EnumBufferStatusFilter<"Event"> | $Enums.BufferStatus
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
    transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    event_id?: SortOrder
    chain_id?: SortOrder
    tx_hash?: SortOrder
    log_index?: SortOrder
    name?: SortOrder
    contract_address?: SortOrder
    params?: SortOrder
    correlation_window_id?: SortOrderInput | SortOrder
    buffer_status?: SortOrder
    chain?: ChainOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    event_id?: string
    chain_id_tx_hash_log_index?: EventChain_idTx_hashLog_indexCompoundUniqueInput
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    chain_id?: IntFilter<"Event"> | number
    tx_hash?: StringFilter<"Event"> | string
    log_index?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    contract_address?: StringFilter<"Event"> | string
    params?: JsonFilter<"Event">
    correlation_window_id?: UuidNullableFilter<"Event"> | string | null
    buffer_status?: EnumBufferStatusFilter<"Event"> | $Enums.BufferStatus
    chain?: XOR<ChainRelationFilter, ChainWhereInput>
    transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
  }, "event_id" | "chain_id_tx_hash_log_index">

  export type EventOrderByWithAggregationInput = {
    event_id?: SortOrder
    chain_id?: SortOrder
    tx_hash?: SortOrder
    log_index?: SortOrder
    name?: SortOrder
    contract_address?: SortOrder
    params?: SortOrder
    correlation_window_id?: SortOrderInput | SortOrder
    buffer_status?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    event_id?: UuidWithAggregatesFilter<"Event"> | string
    chain_id?: IntWithAggregatesFilter<"Event"> | number
    tx_hash?: StringWithAggregatesFilter<"Event"> | string
    log_index?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    contract_address?: StringWithAggregatesFilter<"Event"> | string
    params?: JsonWithAggregatesFilter<"Event">
    correlation_window_id?: UuidNullableWithAggregatesFilter<"Event"> | string | null
    buffer_status?: EnumBufferStatusWithAggregatesFilter<"Event"> | $Enums.BufferStatus
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message_id?: UuidFilter<"Message"> | string
    nonce?: DecimalFilter<"Message"> | Decimal | DecimalJsLike | number | string
    from_chain?: IntFilter<"Message"> | number
    to_chain?: IntFilter<"Message"> | number
    sent_tx_id?: UuidFilter<"Message"> | string
    recv_tx_id?: UuidNullableFilter<"Message"> | string | null
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    sent_at?: DateTimeFilter<"Message"> | Date | string
    received_at?: DateTimeNullableFilter<"Message"> | Date | string | null
    from_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    to_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    sent_transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
    recv_transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
    operations?: OperationListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    message_id?: SortOrder
    nonce?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    sent_tx_id?: SortOrder
    recv_tx_id?: SortOrderInput | SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    received_at?: SortOrderInput | SortOrder
    from_chain_rel?: ChainOrderByWithRelationInput
    to_chain_rel?: ChainOrderByWithRelationInput
    sent_transaction?: TransactionOrderByWithRelationInput
    recv_transaction?: TransactionOrderByWithRelationInput
    operations?: OperationOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    message_id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    nonce?: DecimalFilter<"Message"> | Decimal | DecimalJsLike | number | string
    from_chain?: IntFilter<"Message"> | number
    to_chain?: IntFilter<"Message"> | number
    sent_tx_id?: UuidFilter<"Message"> | string
    recv_tx_id?: UuidNullableFilter<"Message"> | string | null
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    sent_at?: DateTimeFilter<"Message"> | Date | string
    received_at?: DateTimeNullableFilter<"Message"> | Date | string | null
    from_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    to_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    sent_transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
    recv_transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
    operations?: OperationListRelationFilter
  }, "message_id">

  export type MessageOrderByWithAggregationInput = {
    message_id?: SortOrder
    nonce?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    sent_tx_id?: SortOrder
    recv_tx_id?: SortOrderInput | SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    received_at?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    message_id?: UuidWithAggregatesFilter<"Message"> | string
    nonce?: DecimalWithAggregatesFilter<"Message"> | Decimal | DecimalJsLike | number | string
    from_chain?: IntWithAggregatesFilter<"Message"> | number
    to_chain?: IntWithAggregatesFilter<"Message"> | number
    sent_tx_id?: UuidWithAggregatesFilter<"Message"> | string
    recv_tx_id?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    status?: EnumMessageStatusWithAggregatesFilter<"Message"> | $Enums.MessageStatus
    sent_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    received_at?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
  }

  export type OperationWhereInput = {
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    op_id?: UuidFilter<"Operation"> | string
    op_type?: EnumOperationTypeFilter<"Operation"> | $Enums.OperationType
    user_address?: StringFilter<"Operation"> | string
    from_chain?: IntFilter<"Operation"> | number
    to_chain?: IntFilter<"Operation"> | number
    message_nonce?: DecimalNullableFilter<"Operation"> | Decimal | DecimalJsLike | number | string | null
    message_id?: UuidNullableFilter<"Operation"> | string | null
    start_tx_id?: UuidFilter<"Operation"> | string
    end_tx_id?: UuidNullableFilter<"Operation"> | string | null
    status?: EnumOperationStatusFilter<"Operation"> | $Enums.OperationStatus
    substatus?: StringNullableFilter<"Operation"> | string | null
    details?: JsonFilter<"Operation">
    retry_count?: IntFilter<"Operation"> | number
    created_at?: DateTimeFilter<"Operation"> | Date | string
    updated_at?: DateTimeFilter<"Operation"> | Date | string
    last_event_at?: DateTimeFilter<"Operation"> | Date | string
    next_retry_at?: DateTimeNullableFilter<"Operation"> | Date | string | null
    error_context?: JsonNullableFilter<"Operation">
    from_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    to_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    message?: XOR<MessageNullableRelationFilter, MessageWhereInput> | null
    start_transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
    end_transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
  }

  export type OperationOrderByWithRelationInput = {
    op_id?: SortOrder
    op_type?: SortOrder
    user_address?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    message_nonce?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    start_tx_id?: SortOrder
    end_tx_id?: SortOrderInput | SortOrder
    status?: SortOrder
    substatus?: SortOrderInput | SortOrder
    details?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_event_at?: SortOrder
    next_retry_at?: SortOrderInput | SortOrder
    error_context?: SortOrderInput | SortOrder
    from_chain_rel?: ChainOrderByWithRelationInput
    to_chain_rel?: ChainOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
    start_transaction?: TransactionOrderByWithRelationInput
    end_transaction?: TransactionOrderByWithRelationInput
  }

  export type OperationWhereUniqueInput = Prisma.AtLeast<{
    op_id?: string
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    op_type?: EnumOperationTypeFilter<"Operation"> | $Enums.OperationType
    user_address?: StringFilter<"Operation"> | string
    from_chain?: IntFilter<"Operation"> | number
    to_chain?: IntFilter<"Operation"> | number
    message_nonce?: DecimalNullableFilter<"Operation"> | Decimal | DecimalJsLike | number | string | null
    message_id?: UuidNullableFilter<"Operation"> | string | null
    start_tx_id?: UuidFilter<"Operation"> | string
    end_tx_id?: UuidNullableFilter<"Operation"> | string | null
    status?: EnumOperationStatusFilter<"Operation"> | $Enums.OperationStatus
    substatus?: StringNullableFilter<"Operation"> | string | null
    details?: JsonFilter<"Operation">
    retry_count?: IntFilter<"Operation"> | number
    created_at?: DateTimeFilter<"Operation"> | Date | string
    updated_at?: DateTimeFilter<"Operation"> | Date | string
    last_event_at?: DateTimeFilter<"Operation"> | Date | string
    next_retry_at?: DateTimeNullableFilter<"Operation"> | Date | string | null
    error_context?: JsonNullableFilter<"Operation">
    from_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    to_chain_rel?: XOR<ChainRelationFilter, ChainWhereInput>
    message?: XOR<MessageNullableRelationFilter, MessageWhereInput> | null
    start_transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
    end_transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
  }, "op_id">

  export type OperationOrderByWithAggregationInput = {
    op_id?: SortOrder
    op_type?: SortOrder
    user_address?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    message_nonce?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    start_tx_id?: SortOrder
    end_tx_id?: SortOrderInput | SortOrder
    status?: SortOrder
    substatus?: SortOrderInput | SortOrder
    details?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_event_at?: SortOrder
    next_retry_at?: SortOrderInput | SortOrder
    error_context?: SortOrderInput | SortOrder
    _count?: OperationCountOrderByAggregateInput
    _avg?: OperationAvgOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
    _sum?: OperationSumOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    OR?: OperationScalarWhereWithAggregatesInput[]
    NOT?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    op_id?: UuidWithAggregatesFilter<"Operation"> | string
    op_type?: EnumOperationTypeWithAggregatesFilter<"Operation"> | $Enums.OperationType
    user_address?: StringWithAggregatesFilter<"Operation"> | string
    from_chain?: IntWithAggregatesFilter<"Operation"> | number
    to_chain?: IntWithAggregatesFilter<"Operation"> | number
    message_nonce?: DecimalNullableWithAggregatesFilter<"Operation"> | Decimal | DecimalJsLike | number | string | null
    message_id?: UuidNullableWithAggregatesFilter<"Operation"> | string | null
    start_tx_id?: UuidWithAggregatesFilter<"Operation"> | string
    end_tx_id?: UuidNullableWithAggregatesFilter<"Operation"> | string | null
    status?: EnumOperationStatusWithAggregatesFilter<"Operation"> | $Enums.OperationStatus
    substatus?: StringNullableWithAggregatesFilter<"Operation"> | string | null
    details?: JsonWithAggregatesFilter<"Operation">
    retry_count?: IntWithAggregatesFilter<"Operation"> | number
    created_at?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
    last_event_at?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
    next_retry_at?: DateTimeNullableWithAggregatesFilter<"Operation"> | Date | string | null
    error_context?: JsonNullableWithAggregatesFilter<"Operation">
  }

  export type ChainCreateInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractCreateNestedManyWithoutChainInput
    transactions?: TransactionCreateNestedManyWithoutChainInput
    events?: EventCreateNestedManyWithoutChainInput
    messages_from?: MessageCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUncheckedCreateInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChainInput
    events?: EventUncheckedCreateNestedManyWithoutChainInput
    messages_from?: MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageUncheckedCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationUncheckedCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUpdateInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUpdateManyWithoutChainNestedInput
    transactions?: TransactionUpdateManyWithoutChainNestedInput
    events?: EventUpdateManyWithoutChainNestedInput
    messages_from?: MessageUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUncheckedUpdateInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChainNestedInput
    events?: EventUncheckedUpdateManyWithoutChainNestedInput
    messages_from?: MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainCreateManyInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
  }

  export type ChainUpdateManyMutationInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
  }

  export type ChainUncheckedUpdateManyInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
  }

  export type ContractCreateInput = {
    address: string
    type: $Enums.ContractType
    deployment_block: bigint | number
    abi_hash: string
    chain: ChainCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateInput = {
    address: string
    chain_id: number
    type: $Enums.ContractType
    deployment_block: bigint | number
    abi_hash: string
  }

  export type ContractUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    deployment_block?: BigIntFieldUpdateOperationsInput | bigint | number
    abi_hash?: StringFieldUpdateOperationsInput | string
    chain?: ChainUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    deployment_block?: BigIntFieldUpdateOperationsInput | bigint | number
    abi_hash?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateManyInput = {
    address: string
    chain_id: number
    type: $Enums.ContractType
    deployment_block: bigint | number
    abi_hash: string
  }

  export type ContractUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    deployment_block?: BigIntFieldUpdateOperationsInput | bigint | number
    abi_hash?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    deployment_block?: BigIntFieldUpdateOperationsInput | bigint | number
    abi_hash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    chain: ChainCreateNestedOneWithoutTransactionsInput
    events?: EventCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionUncheckedCreateInput = {
    tx_id?: string
    chain_id: number
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    events?: EventUncheckedCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageUncheckedCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageUncheckedCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationUncheckedCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationUncheckedCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionUpdateInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    chain?: ChainUpdateOneRequiredWithoutTransactionsNestedInput
    events?: EventUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUncheckedUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUncheckedUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUncheckedUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUncheckedUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionCreateManyInput = {
    tx_id?: string
    chain_id: number
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
  }

  export type TransactionUpdateManyMutationInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    event_id?: string
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
    chain: ChainCreateNestedOneWithoutEventsInput
    transaction: TransactionCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    event_id?: string
    chain_id: number
    tx_hash: string
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
  }

  export type EventUpdateInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
    chain?: ChainUpdateOneRequiredWithoutEventsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    tx_hash?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
  }

  export type EventCreateManyInput = {
    event_id?: string
    chain_id: number
    tx_hash: string
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
  }

  export type EventUpdateManyMutationInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
  }

  export type EventUncheckedUpdateManyInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    tx_hash?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
  }

  export type MessageCreateInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    from_chain_rel: ChainCreateNestedOneWithoutMessages_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutMessages_toInput
    sent_transaction: TransactionCreateNestedOneWithoutMessages_sentInput
    recv_transaction?: TransactionCreateNestedOneWithoutMessages_recvInput
    operations?: OperationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    to_chain: number
    sent_tx_id: string
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    operations?: OperationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    from_chain_rel?: ChainUpdateOneRequiredWithoutMessages_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutMessages_toNestedInput
    sent_transaction?: TransactionUpdateOneRequiredWithoutMessages_sentNestedInput
    recv_transaction?: TransactionUpdateOneWithoutMessages_recvNestedInput
    operations?: OperationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operations?: OperationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    to_chain: number
    sent_tx_id: string
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
  }

  export type MessageUpdateManyMutationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OperationCreateInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel: ChainCreateNestedOneWithoutOperations_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutOperations_toInput
    message?: MessageCreateNestedOneWithoutOperationsInput
    start_transaction: TransactionCreateNestedOneWithoutOperations_startInput
    end_transaction?: TransactionCreateNestedOneWithoutOperations_endInput
  }

  export type OperationUncheckedCreateInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUpdateInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel?: ChainUpdateOneRequiredWithoutOperations_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutOperations_toNestedInput
    message?: MessageUpdateOneWithoutOperationsNestedInput
    start_transaction?: TransactionUpdateOneRequiredWithoutOperations_startNestedInput
    end_transaction?: TransactionUpdateOneWithoutOperations_endNestedInput
  }

  export type OperationUncheckedUpdateInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateManyInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUpdateManyMutationInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUncheckedUpdateManyInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
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

  export type EnumChainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainStatus | EnumChainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainStatusFilter<$PrismaModel> | $Enums.ChainStatus
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type OperationListRelationFilter = {
    every?: OperationWhereInput
    some?: OperationWhereInput
    none?: OperationWhereInput
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChainCountOrderByAggregateInput = {
    chain_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    last_block_processed?: SortOrder
    provider_urls?: SortOrder
  }

  export type ChainAvgOrderByAggregateInput = {
    chain_id?: SortOrder
    last_block_processed?: SortOrder
  }

  export type ChainMaxOrderByAggregateInput = {
    chain_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    last_block_processed?: SortOrder
  }

  export type ChainMinOrderByAggregateInput = {
    chain_id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    last_block_processed?: SortOrder
  }

  export type ChainSumOrderByAggregateInput = {
    chain_id?: SortOrder
    last_block_processed?: SortOrder
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

  export type EnumChainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainStatus | EnumChainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainStatusFilter<$PrismaModel>
    _max?: NestedEnumChainStatusFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type ChainRelationFilter = {
    is?: ChainWhereInput
    isNot?: ChainWhereInput
  }

  export type ContractCountOrderByAggregateInput = {
    address?: SortOrder
    chain_id?: SortOrder
    type?: SortOrder
    deployment_block?: SortOrder
    abi_hash?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    chain_id?: SortOrder
    deployment_block?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    address?: SortOrder
    chain_id?: SortOrder
    type?: SortOrder
    deployment_block?: SortOrder
    abi_hash?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    address?: SortOrder
    chain_id?: SortOrder
    type?: SortOrder
    deployment_block?: SortOrder
    abi_hash?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    chain_id?: SortOrder
    deployment_block?: SortOrder
  }

  export type EnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionCountOrderByAggregateInput = {
    tx_id?: SortOrder
    chain_id?: SortOrder
    hash?: SortOrder
    block_number?: SortOrder
    block_hash?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    chain_id?: SortOrder
    block_number?: SortOrder
    confirmations?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    tx_id?: SortOrder
    chain_id?: SortOrder
    hash?: SortOrder
    block_number?: SortOrder
    block_hash?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    tx_id?: SortOrder
    chain_id?: SortOrder
    hash?: SortOrder
    block_number?: SortOrder
    block_hash?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    confirmations?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    chain_id?: SortOrder
    block_number?: SortOrder
    confirmations?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumBufferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BufferStatus | EnumBufferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBufferStatusFilter<$PrismaModel> | $Enums.BufferStatus
  }

  export type TransactionRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventChain_idTx_hashLog_indexCompoundUniqueInput = {
    chain_id: number
    tx_hash: string
    log_index: number
  }

  export type EventCountOrderByAggregateInput = {
    event_id?: SortOrder
    chain_id?: SortOrder
    tx_hash?: SortOrder
    log_index?: SortOrder
    name?: SortOrder
    contract_address?: SortOrder
    params?: SortOrder
    correlation_window_id?: SortOrder
    buffer_status?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    chain_id?: SortOrder
    log_index?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    event_id?: SortOrder
    chain_id?: SortOrder
    tx_hash?: SortOrder
    log_index?: SortOrder
    name?: SortOrder
    contract_address?: SortOrder
    correlation_window_id?: SortOrder
    buffer_status?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    event_id?: SortOrder
    chain_id?: SortOrder
    tx_hash?: SortOrder
    log_index?: SortOrder
    name?: SortOrder
    contract_address?: SortOrder
    correlation_window_id?: SortOrder
    buffer_status?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    chain_id?: SortOrder
    log_index?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumBufferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BufferStatus | EnumBufferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBufferStatusWithAggregatesFilter<$PrismaModel> | $Enums.BufferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBufferStatusFilter<$PrismaModel>
    _max?: NestedEnumBufferStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
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

  export type TransactionNullableRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    message_id?: SortOrder
    nonce?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    sent_tx_id?: SortOrder
    recv_tx_id?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    received_at?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    nonce?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    message_id?: SortOrder
    nonce?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    sent_tx_id?: SortOrder
    recv_tx_id?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    received_at?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    message_id?: SortOrder
    nonce?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    sent_tx_id?: SortOrder
    recv_tx_id?: SortOrder
    status?: SortOrder
    sent_at?: SortOrder
    received_at?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    nonce?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
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

  export type EnumOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeFilter<$PrismaModel> | $Enums.OperationType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationStatusFilter<$PrismaModel> | $Enums.OperationStatus
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MessageNullableRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type OperationCountOrderByAggregateInput = {
    op_id?: SortOrder
    op_type?: SortOrder
    user_address?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    message_nonce?: SortOrder
    message_id?: SortOrder
    start_tx_id?: SortOrder
    end_tx_id?: SortOrder
    status?: SortOrder
    substatus?: SortOrder
    details?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_event_at?: SortOrder
    next_retry_at?: SortOrder
    error_context?: SortOrder
  }

  export type OperationAvgOrderByAggregateInput = {
    from_chain?: SortOrder
    to_chain?: SortOrder
    message_nonce?: SortOrder
    retry_count?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    op_id?: SortOrder
    op_type?: SortOrder
    user_address?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    message_nonce?: SortOrder
    message_id?: SortOrder
    start_tx_id?: SortOrder
    end_tx_id?: SortOrder
    status?: SortOrder
    substatus?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_event_at?: SortOrder
    next_retry_at?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    op_id?: SortOrder
    op_type?: SortOrder
    user_address?: SortOrder
    from_chain?: SortOrder
    to_chain?: SortOrder
    message_nonce?: SortOrder
    message_id?: SortOrder
    start_tx_id?: SortOrder
    end_tx_id?: SortOrder
    status?: SortOrder
    substatus?: SortOrder
    retry_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_event_at?: SortOrder
    next_retry_at?: SortOrder
  }

  export type OperationSumOrderByAggregateInput = {
    from_chain?: SortOrder
    to_chain?: SortOrder
    message_nonce?: SortOrder
    retry_count?: SortOrder
  }

  export type EnumOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OperationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationTypeFilter<$PrismaModel>
    _max?: NestedEnumOperationTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationStatusFilter<$PrismaModel>
    _max?: NestedEnumOperationStatusFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ContractCreateNestedManyWithoutChainInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutChainInput = {
    create?: XOR<TransactionCreateWithoutChainInput, TransactionUncheckedCreateWithoutChainInput> | TransactionCreateWithoutChainInput[] | TransactionUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChainInput | TransactionCreateOrConnectWithoutChainInput[]
    createMany?: TransactionCreateManyChainInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutChainInput = {
    create?: XOR<EventCreateWithoutChainInput, EventUncheckedCreateWithoutChainInput> | EventCreateWithoutChainInput[] | EventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChainInput | EventCreateOrConnectWithoutChainInput[]
    createMany?: EventCreateManyChainInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutFrom_chain_relInput = {
    create?: XOR<MessageCreateWithoutFrom_chain_relInput, MessageUncheckedCreateWithoutFrom_chain_relInput> | MessageCreateWithoutFrom_chain_relInput[] | MessageUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_chain_relInput | MessageCreateOrConnectWithoutFrom_chain_relInput[]
    createMany?: MessageCreateManyFrom_chain_relInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutTo_chain_relInput = {
    create?: XOR<MessageCreateWithoutTo_chain_relInput, MessageUncheckedCreateWithoutTo_chain_relInput> | MessageCreateWithoutTo_chain_relInput[] | MessageUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_chain_relInput | MessageCreateOrConnectWithoutTo_chain_relInput[]
    createMany?: MessageCreateManyTo_chain_relInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutFrom_chain_relInput = {
    create?: XOR<OperationCreateWithoutFrom_chain_relInput, OperationUncheckedCreateWithoutFrom_chain_relInput> | OperationCreateWithoutFrom_chain_relInput[] | OperationUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutFrom_chain_relInput | OperationCreateOrConnectWithoutFrom_chain_relInput[]
    createMany?: OperationCreateManyFrom_chain_relInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutTo_chain_relInput = {
    create?: XOR<OperationCreateWithoutTo_chain_relInput, OperationUncheckedCreateWithoutTo_chain_relInput> | OperationCreateWithoutTo_chain_relInput[] | OperationUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutTo_chain_relInput | OperationCreateOrConnectWithoutTo_chain_relInput[]
    createMany?: OperationCreateManyTo_chain_relInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<TransactionCreateWithoutChainInput, TransactionUncheckedCreateWithoutChainInput> | TransactionCreateWithoutChainInput[] | TransactionUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChainInput | TransactionCreateOrConnectWithoutChainInput[]
    createMany?: TransactionCreateManyChainInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<EventCreateWithoutChainInput, EventUncheckedCreateWithoutChainInput> | EventCreateWithoutChainInput[] | EventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChainInput | EventCreateOrConnectWithoutChainInput[]
    createMany?: EventCreateManyChainInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput = {
    create?: XOR<MessageCreateWithoutFrom_chain_relInput, MessageUncheckedCreateWithoutFrom_chain_relInput> | MessageCreateWithoutFrom_chain_relInput[] | MessageUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_chain_relInput | MessageCreateOrConnectWithoutFrom_chain_relInput[]
    createMany?: MessageCreateManyFrom_chain_relInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutTo_chain_relInput = {
    create?: XOR<MessageCreateWithoutTo_chain_relInput, MessageUncheckedCreateWithoutTo_chain_relInput> | MessageCreateWithoutTo_chain_relInput[] | MessageUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_chain_relInput | MessageCreateOrConnectWithoutTo_chain_relInput[]
    createMany?: MessageCreateManyTo_chain_relInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput = {
    create?: XOR<OperationCreateWithoutFrom_chain_relInput, OperationUncheckedCreateWithoutFrom_chain_relInput> | OperationCreateWithoutFrom_chain_relInput[] | OperationUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutFrom_chain_relInput | OperationCreateOrConnectWithoutFrom_chain_relInput[]
    createMany?: OperationCreateManyFrom_chain_relInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutTo_chain_relInput = {
    create?: XOR<OperationCreateWithoutTo_chain_relInput, OperationUncheckedCreateWithoutTo_chain_relInput> | OperationCreateWithoutTo_chain_relInput[] | OperationUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutTo_chain_relInput | OperationCreateOrConnectWithoutTo_chain_relInput[]
    createMany?: OperationCreateManyTo_chain_relInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumChainStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChainStatus
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ContractUpdateManyWithoutChainNestedInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutChainInput | ContractUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutChainInput | ContractUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutChainInput | ContractUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutChainNestedInput = {
    create?: XOR<TransactionCreateWithoutChainInput, TransactionUncheckedCreateWithoutChainInput> | TransactionCreateWithoutChainInput[] | TransactionUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChainInput | TransactionCreateOrConnectWithoutChainInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutChainInput | TransactionUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: TransactionCreateManyChainInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutChainInput | TransactionUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutChainInput | TransactionUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EventUpdateManyWithoutChainNestedInput = {
    create?: XOR<EventCreateWithoutChainInput, EventUncheckedCreateWithoutChainInput> | EventCreateWithoutChainInput[] | EventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChainInput | EventCreateOrConnectWithoutChainInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutChainInput | EventUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: EventCreateManyChainInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutChainInput | EventUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: EventUpdateManyWithWhereWithoutChainInput | EventUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutFrom_chain_relNestedInput = {
    create?: XOR<MessageCreateWithoutFrom_chain_relInput, MessageUncheckedCreateWithoutFrom_chain_relInput> | MessageCreateWithoutFrom_chain_relInput[] | MessageUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_chain_relInput | MessageCreateOrConnectWithoutFrom_chain_relInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFrom_chain_relInput | MessageUpsertWithWhereUniqueWithoutFrom_chain_relInput[]
    createMany?: MessageCreateManyFrom_chain_relInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFrom_chain_relInput | MessageUpdateWithWhereUniqueWithoutFrom_chain_relInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFrom_chain_relInput | MessageUpdateManyWithWhereWithoutFrom_chain_relInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutTo_chain_relNestedInput = {
    create?: XOR<MessageCreateWithoutTo_chain_relInput, MessageUncheckedCreateWithoutTo_chain_relInput> | MessageCreateWithoutTo_chain_relInput[] | MessageUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_chain_relInput | MessageCreateOrConnectWithoutTo_chain_relInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTo_chain_relInput | MessageUpsertWithWhereUniqueWithoutTo_chain_relInput[]
    createMany?: MessageCreateManyTo_chain_relInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTo_chain_relInput | MessageUpdateWithWhereUniqueWithoutTo_chain_relInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTo_chain_relInput | MessageUpdateManyWithWhereWithoutTo_chain_relInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutFrom_chain_relNestedInput = {
    create?: XOR<OperationCreateWithoutFrom_chain_relInput, OperationUncheckedCreateWithoutFrom_chain_relInput> | OperationCreateWithoutFrom_chain_relInput[] | OperationUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutFrom_chain_relInput | OperationCreateOrConnectWithoutFrom_chain_relInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutFrom_chain_relInput | OperationUpsertWithWhereUniqueWithoutFrom_chain_relInput[]
    createMany?: OperationCreateManyFrom_chain_relInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutFrom_chain_relInput | OperationUpdateWithWhereUniqueWithoutFrom_chain_relInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutFrom_chain_relInput | OperationUpdateManyWithWhereWithoutFrom_chain_relInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutTo_chain_relNestedInput = {
    create?: XOR<OperationCreateWithoutTo_chain_relInput, OperationUncheckedCreateWithoutTo_chain_relInput> | OperationCreateWithoutTo_chain_relInput[] | OperationUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutTo_chain_relInput | OperationCreateOrConnectWithoutTo_chain_relInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutTo_chain_relInput | OperationUpsertWithWhereUniqueWithoutTo_chain_relInput[]
    createMany?: OperationCreateManyTo_chain_relInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutTo_chain_relInput | OperationUpdateWithWhereUniqueWithoutTo_chain_relInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutTo_chain_relInput | OperationUpdateManyWithWhereWithoutTo_chain_relInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput> | ContractCreateWithoutChainInput[] | ContractUncheckedCreateWithoutChainInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutChainInput | ContractCreateOrConnectWithoutChainInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutChainInput | ContractUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: ContractCreateManyChainInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutChainInput | ContractUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutChainInput | ContractUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<TransactionCreateWithoutChainInput, TransactionUncheckedCreateWithoutChainInput> | TransactionCreateWithoutChainInput[] | TransactionUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChainInput | TransactionCreateOrConnectWithoutChainInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutChainInput | TransactionUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: TransactionCreateManyChainInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutChainInput | TransactionUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutChainInput | TransactionUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<EventCreateWithoutChainInput, EventUncheckedCreateWithoutChainInput> | EventCreateWithoutChainInput[] | EventUncheckedCreateWithoutChainInput[]
    connectOrCreate?: EventCreateOrConnectWithoutChainInput | EventCreateOrConnectWithoutChainInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutChainInput | EventUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: EventCreateManyChainInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutChainInput | EventUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: EventUpdateManyWithWhereWithoutChainInput | EventUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput = {
    create?: XOR<MessageCreateWithoutFrom_chain_relInput, MessageUncheckedCreateWithoutFrom_chain_relInput> | MessageCreateWithoutFrom_chain_relInput[] | MessageUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_chain_relInput | MessageCreateOrConnectWithoutFrom_chain_relInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFrom_chain_relInput | MessageUpsertWithWhereUniqueWithoutFrom_chain_relInput[]
    createMany?: MessageCreateManyFrom_chain_relInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFrom_chain_relInput | MessageUpdateWithWhereUniqueWithoutFrom_chain_relInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFrom_chain_relInput | MessageUpdateManyWithWhereWithoutFrom_chain_relInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput = {
    create?: XOR<MessageCreateWithoutTo_chain_relInput, MessageUncheckedCreateWithoutTo_chain_relInput> | MessageCreateWithoutTo_chain_relInput[] | MessageUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_chain_relInput | MessageCreateOrConnectWithoutTo_chain_relInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTo_chain_relInput | MessageUpsertWithWhereUniqueWithoutTo_chain_relInput[]
    createMany?: MessageCreateManyTo_chain_relInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTo_chain_relInput | MessageUpdateWithWhereUniqueWithoutTo_chain_relInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTo_chain_relInput | MessageUpdateManyWithWhereWithoutTo_chain_relInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput = {
    create?: XOR<OperationCreateWithoutFrom_chain_relInput, OperationUncheckedCreateWithoutFrom_chain_relInput> | OperationCreateWithoutFrom_chain_relInput[] | OperationUncheckedCreateWithoutFrom_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutFrom_chain_relInput | OperationCreateOrConnectWithoutFrom_chain_relInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutFrom_chain_relInput | OperationUpsertWithWhereUniqueWithoutFrom_chain_relInput[]
    createMany?: OperationCreateManyFrom_chain_relInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutFrom_chain_relInput | OperationUpdateWithWhereUniqueWithoutFrom_chain_relInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutFrom_chain_relInput | OperationUpdateManyWithWhereWithoutFrom_chain_relInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput = {
    create?: XOR<OperationCreateWithoutTo_chain_relInput, OperationUncheckedCreateWithoutTo_chain_relInput> | OperationCreateWithoutTo_chain_relInput[] | OperationUncheckedCreateWithoutTo_chain_relInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutTo_chain_relInput | OperationCreateOrConnectWithoutTo_chain_relInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutTo_chain_relInput | OperationUpsertWithWhereUniqueWithoutTo_chain_relInput[]
    createMany?: OperationCreateManyTo_chain_relInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutTo_chain_relInput | OperationUpdateWithWhereUniqueWithoutTo_chain_relInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutTo_chain_relInput | OperationUpdateManyWithWhereWithoutTo_chain_relInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type ChainCreateNestedOneWithoutContractsInput = {
    create?: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutContractsInput
    connect?: ChainWhereUniqueInput
  }

  export type EnumContractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContractType
  }

  export type ChainUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutContractsInput
    upsert?: ChainUpsertWithoutContractsInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutContractsInput, ChainUpdateWithoutContractsInput>, ChainUncheckedUpdateWithoutContractsInput>
  }

  export type ChainCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ChainCreateWithoutTransactionsInput, ChainUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutTransactionsInput
    connect?: ChainWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutTransactionInput = {
    create?: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput> | EventCreateWithoutTransactionInput[] | EventUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTransactionInput | EventCreateOrConnectWithoutTransactionInput[]
    createMany?: EventCreateManyTransactionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSent_transactionInput = {
    create?: XOR<MessageCreateWithoutSent_transactionInput, MessageUncheckedCreateWithoutSent_transactionInput> | MessageCreateWithoutSent_transactionInput[] | MessageUncheckedCreateWithoutSent_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSent_transactionInput | MessageCreateOrConnectWithoutSent_transactionInput[]
    createMany?: MessageCreateManySent_transactionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRecv_transactionInput = {
    create?: XOR<MessageCreateWithoutRecv_transactionInput, MessageUncheckedCreateWithoutRecv_transactionInput> | MessageCreateWithoutRecv_transactionInput[] | MessageUncheckedCreateWithoutRecv_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecv_transactionInput | MessageCreateOrConnectWithoutRecv_transactionInput[]
    createMany?: MessageCreateManyRecv_transactionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutStart_transactionInput = {
    create?: XOR<OperationCreateWithoutStart_transactionInput, OperationUncheckedCreateWithoutStart_transactionInput> | OperationCreateWithoutStart_transactionInput[] | OperationUncheckedCreateWithoutStart_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutStart_transactionInput | OperationCreateOrConnectWithoutStart_transactionInput[]
    createMany?: OperationCreateManyStart_transactionInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutEnd_transactionInput = {
    create?: XOR<OperationCreateWithoutEnd_transactionInput, OperationUncheckedCreateWithoutEnd_transactionInput> | OperationCreateWithoutEnd_transactionInput[] | OperationUncheckedCreateWithoutEnd_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutEnd_transactionInput | OperationCreateOrConnectWithoutEnd_transactionInput[]
    createMany?: OperationCreateManyEnd_transactionInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput> | EventCreateWithoutTransactionInput[] | EventUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTransactionInput | EventCreateOrConnectWithoutTransactionInput[]
    createMany?: EventCreateManyTransactionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSent_transactionInput = {
    create?: XOR<MessageCreateWithoutSent_transactionInput, MessageUncheckedCreateWithoutSent_transactionInput> | MessageCreateWithoutSent_transactionInput[] | MessageUncheckedCreateWithoutSent_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSent_transactionInput | MessageCreateOrConnectWithoutSent_transactionInput[]
    createMany?: MessageCreateManySent_transactionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRecv_transactionInput = {
    create?: XOR<MessageCreateWithoutRecv_transactionInput, MessageUncheckedCreateWithoutRecv_transactionInput> | MessageCreateWithoutRecv_transactionInput[] | MessageUncheckedCreateWithoutRecv_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecv_transactionInput | MessageCreateOrConnectWithoutRecv_transactionInput[]
    createMany?: MessageCreateManyRecv_transactionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutStart_transactionInput = {
    create?: XOR<OperationCreateWithoutStart_transactionInput, OperationUncheckedCreateWithoutStart_transactionInput> | OperationCreateWithoutStart_transactionInput[] | OperationUncheckedCreateWithoutStart_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutStart_transactionInput | OperationCreateOrConnectWithoutStart_transactionInput[]
    createMany?: OperationCreateManyStart_transactionInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutEnd_transactionInput = {
    create?: XOR<OperationCreateWithoutEnd_transactionInput, OperationUncheckedCreateWithoutEnd_transactionInput> | OperationCreateWithoutEnd_transactionInput[] | OperationUncheckedCreateWithoutEnd_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutEnd_transactionInput | OperationCreateOrConnectWithoutEnd_transactionInput[]
    createMany?: OperationCreateManyEnd_transactionInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type ChainUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ChainCreateWithoutTransactionsInput, ChainUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutTransactionsInput
    upsert?: ChainUpsertWithoutTransactionsInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutTransactionsInput, ChainUpdateWithoutTransactionsInput>, ChainUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput> | EventCreateWithoutTransactionInput[] | EventUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTransactionInput | EventCreateOrConnectWithoutTransactionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTransactionInput | EventUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: EventCreateManyTransactionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTransactionInput | EventUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTransactionInput | EventUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSent_transactionNestedInput = {
    create?: XOR<MessageCreateWithoutSent_transactionInput, MessageUncheckedCreateWithoutSent_transactionInput> | MessageCreateWithoutSent_transactionInput[] | MessageUncheckedCreateWithoutSent_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSent_transactionInput | MessageCreateOrConnectWithoutSent_transactionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSent_transactionInput | MessageUpsertWithWhereUniqueWithoutSent_transactionInput[]
    createMany?: MessageCreateManySent_transactionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSent_transactionInput | MessageUpdateWithWhereUniqueWithoutSent_transactionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSent_transactionInput | MessageUpdateManyWithWhereWithoutSent_transactionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRecv_transactionNestedInput = {
    create?: XOR<MessageCreateWithoutRecv_transactionInput, MessageUncheckedCreateWithoutRecv_transactionInput> | MessageCreateWithoutRecv_transactionInput[] | MessageUncheckedCreateWithoutRecv_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecv_transactionInput | MessageCreateOrConnectWithoutRecv_transactionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecv_transactionInput | MessageUpsertWithWhereUniqueWithoutRecv_transactionInput[]
    createMany?: MessageCreateManyRecv_transactionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecv_transactionInput | MessageUpdateWithWhereUniqueWithoutRecv_transactionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecv_transactionInput | MessageUpdateManyWithWhereWithoutRecv_transactionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutStart_transactionNestedInput = {
    create?: XOR<OperationCreateWithoutStart_transactionInput, OperationUncheckedCreateWithoutStart_transactionInput> | OperationCreateWithoutStart_transactionInput[] | OperationUncheckedCreateWithoutStart_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutStart_transactionInput | OperationCreateOrConnectWithoutStart_transactionInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutStart_transactionInput | OperationUpsertWithWhereUniqueWithoutStart_transactionInput[]
    createMany?: OperationCreateManyStart_transactionInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutStart_transactionInput | OperationUpdateWithWhereUniqueWithoutStart_transactionInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutStart_transactionInput | OperationUpdateManyWithWhereWithoutStart_transactionInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutEnd_transactionNestedInput = {
    create?: XOR<OperationCreateWithoutEnd_transactionInput, OperationUncheckedCreateWithoutEnd_transactionInput> | OperationCreateWithoutEnd_transactionInput[] | OperationUncheckedCreateWithoutEnd_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutEnd_transactionInput | OperationCreateOrConnectWithoutEnd_transactionInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutEnd_transactionInput | OperationUpsertWithWhereUniqueWithoutEnd_transactionInput[]
    createMany?: OperationCreateManyEnd_transactionInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutEnd_transactionInput | OperationUpdateWithWhereUniqueWithoutEnd_transactionInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutEnd_transactionInput | OperationUpdateManyWithWhereWithoutEnd_transactionInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput> | EventCreateWithoutTransactionInput[] | EventUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTransactionInput | EventCreateOrConnectWithoutTransactionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTransactionInput | EventUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: EventCreateManyTransactionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTransactionInput | EventUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTransactionInput | EventUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSent_transactionNestedInput = {
    create?: XOR<MessageCreateWithoutSent_transactionInput, MessageUncheckedCreateWithoutSent_transactionInput> | MessageCreateWithoutSent_transactionInput[] | MessageUncheckedCreateWithoutSent_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSent_transactionInput | MessageCreateOrConnectWithoutSent_transactionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSent_transactionInput | MessageUpsertWithWhereUniqueWithoutSent_transactionInput[]
    createMany?: MessageCreateManySent_transactionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSent_transactionInput | MessageUpdateWithWhereUniqueWithoutSent_transactionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSent_transactionInput | MessageUpdateManyWithWhereWithoutSent_transactionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRecv_transactionNestedInput = {
    create?: XOR<MessageCreateWithoutRecv_transactionInput, MessageUncheckedCreateWithoutRecv_transactionInput> | MessageCreateWithoutRecv_transactionInput[] | MessageUncheckedCreateWithoutRecv_transactionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecv_transactionInput | MessageCreateOrConnectWithoutRecv_transactionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecv_transactionInput | MessageUpsertWithWhereUniqueWithoutRecv_transactionInput[]
    createMany?: MessageCreateManyRecv_transactionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecv_transactionInput | MessageUpdateWithWhereUniqueWithoutRecv_transactionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecv_transactionInput | MessageUpdateManyWithWhereWithoutRecv_transactionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutStart_transactionNestedInput = {
    create?: XOR<OperationCreateWithoutStart_transactionInput, OperationUncheckedCreateWithoutStart_transactionInput> | OperationCreateWithoutStart_transactionInput[] | OperationUncheckedCreateWithoutStart_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutStart_transactionInput | OperationCreateOrConnectWithoutStart_transactionInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutStart_transactionInput | OperationUpsertWithWhereUniqueWithoutStart_transactionInput[]
    createMany?: OperationCreateManyStart_transactionInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutStart_transactionInput | OperationUpdateWithWhereUniqueWithoutStart_transactionInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutStart_transactionInput | OperationUpdateManyWithWhereWithoutStart_transactionInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutEnd_transactionNestedInput = {
    create?: XOR<OperationCreateWithoutEnd_transactionInput, OperationUncheckedCreateWithoutEnd_transactionInput> | OperationCreateWithoutEnd_transactionInput[] | OperationUncheckedCreateWithoutEnd_transactionInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutEnd_transactionInput | OperationCreateOrConnectWithoutEnd_transactionInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutEnd_transactionInput | OperationUpsertWithWhereUniqueWithoutEnd_transactionInput[]
    createMany?: OperationCreateManyEnd_transactionInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutEnd_transactionInput | OperationUpdateWithWhereUniqueWithoutEnd_transactionInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutEnd_transactionInput | OperationUpdateManyWithWhereWithoutEnd_transactionInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type ChainCreateNestedOneWithoutEventsInput = {
    create?: XOR<ChainCreateWithoutEventsInput, ChainUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutEventsInput
    connect?: ChainWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutEventsInput = {
    create?: XOR<TransactionCreateWithoutEventsInput, TransactionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutEventsInput
    connect?: TransactionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumBufferStatusFieldUpdateOperationsInput = {
    set?: $Enums.BufferStatus
  }

  export type ChainUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ChainCreateWithoutEventsInput, ChainUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ChainCreateOrConnectWithoutEventsInput
    upsert?: ChainUpsertWithoutEventsInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutEventsInput, ChainUpdateWithoutEventsInput>, ChainUncheckedUpdateWithoutEventsInput>
  }

  export type TransactionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TransactionCreateWithoutEventsInput, TransactionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutEventsInput
    upsert?: TransactionUpsertWithoutEventsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutEventsInput, TransactionUpdateWithoutEventsInput>, TransactionUncheckedUpdateWithoutEventsInput>
  }

  export type ChainCreateNestedOneWithoutMessages_fromInput = {
    create?: XOR<ChainCreateWithoutMessages_fromInput, ChainUncheckedCreateWithoutMessages_fromInput>
    connectOrCreate?: ChainCreateOrConnectWithoutMessages_fromInput
    connect?: ChainWhereUniqueInput
  }

  export type ChainCreateNestedOneWithoutMessages_toInput = {
    create?: XOR<ChainCreateWithoutMessages_toInput, ChainUncheckedCreateWithoutMessages_toInput>
    connectOrCreate?: ChainCreateOrConnectWithoutMessages_toInput
    connect?: ChainWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutMessages_sentInput = {
    create?: XOR<TransactionCreateWithoutMessages_sentInput, TransactionUncheckedCreateWithoutMessages_sentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMessages_sentInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutMessages_recvInput = {
    create?: XOR<TransactionCreateWithoutMessages_recvInput, TransactionUncheckedCreateWithoutMessages_recvInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMessages_recvInput
    connect?: TransactionWhereUniqueInput
  }

  export type OperationCreateNestedManyWithoutMessageInput = {
    create?: XOR<OperationCreateWithoutMessageInput, OperationUncheckedCreateWithoutMessageInput> | OperationCreateWithoutMessageInput[] | OperationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutMessageInput | OperationCreateOrConnectWithoutMessageInput[]
    createMany?: OperationCreateManyMessageInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<OperationCreateWithoutMessageInput, OperationUncheckedCreateWithoutMessageInput> | OperationCreateWithoutMessageInput[] | OperationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutMessageInput | OperationCreateOrConnectWithoutMessageInput[]
    createMany?: OperationCreateManyMessageInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChainUpdateOneRequiredWithoutMessages_fromNestedInput = {
    create?: XOR<ChainCreateWithoutMessages_fromInput, ChainUncheckedCreateWithoutMessages_fromInput>
    connectOrCreate?: ChainCreateOrConnectWithoutMessages_fromInput
    upsert?: ChainUpsertWithoutMessages_fromInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutMessages_fromInput, ChainUpdateWithoutMessages_fromInput>, ChainUncheckedUpdateWithoutMessages_fromInput>
  }

  export type ChainUpdateOneRequiredWithoutMessages_toNestedInput = {
    create?: XOR<ChainCreateWithoutMessages_toInput, ChainUncheckedCreateWithoutMessages_toInput>
    connectOrCreate?: ChainCreateOrConnectWithoutMessages_toInput
    upsert?: ChainUpsertWithoutMessages_toInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutMessages_toInput, ChainUpdateWithoutMessages_toInput>, ChainUncheckedUpdateWithoutMessages_toInput>
  }

  export type TransactionUpdateOneRequiredWithoutMessages_sentNestedInput = {
    create?: XOR<TransactionCreateWithoutMessages_sentInput, TransactionUncheckedCreateWithoutMessages_sentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMessages_sentInput
    upsert?: TransactionUpsertWithoutMessages_sentInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutMessages_sentInput, TransactionUpdateWithoutMessages_sentInput>, TransactionUncheckedUpdateWithoutMessages_sentInput>
  }

  export type TransactionUpdateOneWithoutMessages_recvNestedInput = {
    create?: XOR<TransactionCreateWithoutMessages_recvInput, TransactionUncheckedCreateWithoutMessages_recvInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutMessages_recvInput
    upsert?: TransactionUpsertWithoutMessages_recvInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutMessages_recvInput, TransactionUpdateWithoutMessages_recvInput>, TransactionUncheckedUpdateWithoutMessages_recvInput>
  }

  export type OperationUpdateManyWithoutMessageNestedInput = {
    create?: XOR<OperationCreateWithoutMessageInput, OperationUncheckedCreateWithoutMessageInput> | OperationCreateWithoutMessageInput[] | OperationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutMessageInput | OperationCreateOrConnectWithoutMessageInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutMessageInput | OperationUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: OperationCreateManyMessageInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutMessageInput | OperationUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutMessageInput | OperationUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<OperationCreateWithoutMessageInput, OperationUncheckedCreateWithoutMessageInput> | OperationCreateWithoutMessageInput[] | OperationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutMessageInput | OperationCreateOrConnectWithoutMessageInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutMessageInput | OperationUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: OperationCreateManyMessageInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutMessageInput | OperationUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutMessageInput | OperationUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type ChainCreateNestedOneWithoutOperations_fromInput = {
    create?: XOR<ChainCreateWithoutOperations_fromInput, ChainUncheckedCreateWithoutOperations_fromInput>
    connectOrCreate?: ChainCreateOrConnectWithoutOperations_fromInput
    connect?: ChainWhereUniqueInput
  }

  export type ChainCreateNestedOneWithoutOperations_toInput = {
    create?: XOR<ChainCreateWithoutOperations_toInput, ChainUncheckedCreateWithoutOperations_toInput>
    connectOrCreate?: ChainCreateOrConnectWithoutOperations_toInput
    connect?: ChainWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutOperationsInput = {
    create?: XOR<MessageCreateWithoutOperationsInput, MessageUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutOperationsInput
    connect?: MessageWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutOperations_startInput = {
    create?: XOR<TransactionCreateWithoutOperations_startInput, TransactionUncheckedCreateWithoutOperations_startInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOperations_startInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutOperations_endInput = {
    create?: XOR<TransactionCreateWithoutOperations_endInput, TransactionUncheckedCreateWithoutOperations_endInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOperations_endInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumOperationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OperationType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumOperationStatusFieldUpdateOperationsInput = {
    set?: $Enums.OperationStatus
  }

  export type ChainUpdateOneRequiredWithoutOperations_fromNestedInput = {
    create?: XOR<ChainCreateWithoutOperations_fromInput, ChainUncheckedCreateWithoutOperations_fromInput>
    connectOrCreate?: ChainCreateOrConnectWithoutOperations_fromInput
    upsert?: ChainUpsertWithoutOperations_fromInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutOperations_fromInput, ChainUpdateWithoutOperations_fromInput>, ChainUncheckedUpdateWithoutOperations_fromInput>
  }

  export type ChainUpdateOneRequiredWithoutOperations_toNestedInput = {
    create?: XOR<ChainCreateWithoutOperations_toInput, ChainUncheckedCreateWithoutOperations_toInput>
    connectOrCreate?: ChainCreateOrConnectWithoutOperations_toInput
    upsert?: ChainUpsertWithoutOperations_toInput
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutOperations_toInput, ChainUpdateWithoutOperations_toInput>, ChainUncheckedUpdateWithoutOperations_toInput>
  }

  export type MessageUpdateOneWithoutOperationsNestedInput = {
    create?: XOR<MessageCreateWithoutOperationsInput, MessageUncheckedCreateWithoutOperationsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutOperationsInput
    upsert?: MessageUpsertWithoutOperationsInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutOperationsInput, MessageUpdateWithoutOperationsInput>, MessageUncheckedUpdateWithoutOperationsInput>
  }

  export type TransactionUpdateOneRequiredWithoutOperations_startNestedInput = {
    create?: XOR<TransactionCreateWithoutOperations_startInput, TransactionUncheckedCreateWithoutOperations_startInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOperations_startInput
    upsert?: TransactionUpsertWithoutOperations_startInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutOperations_startInput, TransactionUpdateWithoutOperations_startInput>, TransactionUncheckedUpdateWithoutOperations_startInput>
  }

  export type TransactionUpdateOneWithoutOperations_endNestedInput = {
    create?: XOR<TransactionCreateWithoutOperations_endInput, TransactionUncheckedCreateWithoutOperations_endInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutOperations_endInput
    upsert?: TransactionUpsertWithoutOperations_endInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutOperations_endInput, TransactionUpdateWithoutOperations_endInput>, TransactionUncheckedUpdateWithoutOperations_endInput>
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

  export type NestedEnumChainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainStatus | EnumChainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainStatusFilter<$PrismaModel> | $Enums.ChainStatus
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumChainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainStatus | EnumChainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainStatus[] | ListEnumChainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChainStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainStatusFilter<$PrismaModel>
    _max?: NestedEnumChainStatusFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumContractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeFilter<$PrismaModel> | $Enums.ContractType
  }

  export type NestedEnumContractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractType | EnumContractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContractType[] | ListEnumContractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractTypeFilter<$PrismaModel>
    _max?: NestedEnumContractTypeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumBufferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BufferStatus | EnumBufferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBufferStatusFilter<$PrismaModel> | $Enums.BufferStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type NestedEnumBufferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BufferStatus | EnumBufferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BufferStatus[] | ListEnumBufferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBufferStatusWithAggregatesFilter<$PrismaModel> | $Enums.BufferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBufferStatusFilter<$PrismaModel>
    _max?: NestedEnumBufferStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
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

  export type NestedEnumOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeFilter<$PrismaModel> | $Enums.OperationType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumOperationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationStatusFilter<$PrismaModel> | $Enums.OperationStatus
  }

  export type NestedEnumOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OperationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationTypeFilter<$PrismaModel>
    _max?: NestedEnumOperationTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationStatus | EnumOperationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationStatus[] | ListEnumOperationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OperationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationStatusFilter<$PrismaModel>
    _max?: NestedEnumOperationStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContractCreateWithoutChainInput = {
    address: string
    type: $Enums.ContractType
    deployment_block: bigint | number
    abi_hash: string
  }

  export type ContractUncheckedCreateWithoutChainInput = {
    address: string
    type: $Enums.ContractType
    deployment_block: bigint | number
    abi_hash: string
  }

  export type ContractCreateOrConnectWithoutChainInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput>
  }

  export type ContractCreateManyChainInputEnvelope = {
    data: ContractCreateManyChainInput | ContractCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutChainInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    events?: EventCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionUncheckedCreateWithoutChainInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    events?: EventUncheckedCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageUncheckedCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageUncheckedCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationUncheckedCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationUncheckedCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionCreateOrConnectWithoutChainInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutChainInput, TransactionUncheckedCreateWithoutChainInput>
  }

  export type TransactionCreateManyChainInputEnvelope = {
    data: TransactionCreateManyChainInput | TransactionCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutChainInput = {
    event_id?: string
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
    transaction: TransactionCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutChainInput = {
    event_id?: string
    tx_hash: string
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
  }

  export type EventCreateOrConnectWithoutChainInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutChainInput, EventUncheckedCreateWithoutChainInput>
  }

  export type EventCreateManyChainInputEnvelope = {
    data: EventCreateManyChainInput | EventCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutFrom_chain_relInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    to_chain_rel: ChainCreateNestedOneWithoutMessages_toInput
    sent_transaction: TransactionCreateNestedOneWithoutMessages_sentInput
    recv_transaction?: TransactionCreateNestedOneWithoutMessages_recvInput
    operations?: OperationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutFrom_chain_relInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    to_chain: number
    sent_tx_id: string
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    operations?: OperationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutFrom_chain_relInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFrom_chain_relInput, MessageUncheckedCreateWithoutFrom_chain_relInput>
  }

  export type MessageCreateManyFrom_chain_relInputEnvelope = {
    data: MessageCreateManyFrom_chain_relInput | MessageCreateManyFrom_chain_relInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutTo_chain_relInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    from_chain_rel: ChainCreateNestedOneWithoutMessages_fromInput
    sent_transaction: TransactionCreateNestedOneWithoutMessages_sentInput
    recv_transaction?: TransactionCreateNestedOneWithoutMessages_recvInput
    operations?: OperationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutTo_chain_relInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    sent_tx_id: string
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    operations?: OperationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutTo_chain_relInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutTo_chain_relInput, MessageUncheckedCreateWithoutTo_chain_relInput>
  }

  export type MessageCreateManyTo_chain_relInputEnvelope = {
    data: MessageCreateManyTo_chain_relInput | MessageCreateManyTo_chain_relInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutFrom_chain_relInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    to_chain_rel: ChainCreateNestedOneWithoutOperations_toInput
    message?: MessageCreateNestedOneWithoutOperationsInput
    start_transaction: TransactionCreateNestedOneWithoutOperations_startInput
    end_transaction?: TransactionCreateNestedOneWithoutOperations_endInput
  }

  export type OperationUncheckedCreateWithoutFrom_chain_relInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateOrConnectWithoutFrom_chain_relInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutFrom_chain_relInput, OperationUncheckedCreateWithoutFrom_chain_relInput>
  }

  export type OperationCreateManyFrom_chain_relInputEnvelope = {
    data: OperationCreateManyFrom_chain_relInput | OperationCreateManyFrom_chain_relInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutTo_chain_relInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel: ChainCreateNestedOneWithoutOperations_fromInput
    message?: MessageCreateNestedOneWithoutOperationsInput
    start_transaction: TransactionCreateNestedOneWithoutOperations_startInput
    end_transaction?: TransactionCreateNestedOneWithoutOperations_endInput
  }

  export type OperationUncheckedCreateWithoutTo_chain_relInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateOrConnectWithoutTo_chain_relInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutTo_chain_relInput, OperationUncheckedCreateWithoutTo_chain_relInput>
  }

  export type OperationCreateManyTo_chain_relInputEnvelope = {
    data: OperationCreateManyTo_chain_relInput | OperationCreateManyTo_chain_relInput[]
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithWhereUniqueWithoutChainInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutChainInput, ContractUncheckedUpdateWithoutChainInput>
    create: XOR<ContractCreateWithoutChainInput, ContractUncheckedCreateWithoutChainInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutChainInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutChainInput, ContractUncheckedUpdateWithoutChainInput>
  }

  export type ContractUpdateManyWithWhereWithoutChainInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutChainInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    address?: StringFilter<"Contract"> | string
    chain_id?: IntFilter<"Contract"> | number
    type?: EnumContractTypeFilter<"Contract"> | $Enums.ContractType
    deployment_block?: BigIntFilter<"Contract"> | bigint | number
    abi_hash?: StringFilter<"Contract"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutChainInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutChainInput, TransactionUncheckedUpdateWithoutChainInput>
    create: XOR<TransactionCreateWithoutChainInput, TransactionUncheckedCreateWithoutChainInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutChainInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutChainInput, TransactionUncheckedUpdateWithoutChainInput>
  }

  export type TransactionUpdateManyWithWhereWithoutChainInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutChainInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    tx_id?: UuidFilter<"Transaction"> | string
    chain_id?: IntFilter<"Transaction"> | number
    hash?: StringFilter<"Transaction"> | string
    block_number?: BigIntFilter<"Transaction"> | bigint | number
    block_hash?: StringFilter<"Transaction"> | string
    timestamp?: DateTimeFilter<"Transaction"> | Date | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    confirmations?: IntFilter<"Transaction"> | number
  }

  export type EventUpsertWithWhereUniqueWithoutChainInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutChainInput, EventUncheckedUpdateWithoutChainInput>
    create: XOR<EventCreateWithoutChainInput, EventUncheckedCreateWithoutChainInput>
  }

  export type EventUpdateWithWhereUniqueWithoutChainInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutChainInput, EventUncheckedUpdateWithoutChainInput>
  }

  export type EventUpdateManyWithWhereWithoutChainInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutChainInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    event_id?: UuidFilter<"Event"> | string
    chain_id?: IntFilter<"Event"> | number
    tx_hash?: StringFilter<"Event"> | string
    log_index?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    contract_address?: StringFilter<"Event"> | string
    params?: JsonFilter<"Event">
    correlation_window_id?: UuidNullableFilter<"Event"> | string | null
    buffer_status?: EnumBufferStatusFilter<"Event"> | $Enums.BufferStatus
  }

  export type MessageUpsertWithWhereUniqueWithoutFrom_chain_relInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutFrom_chain_relInput, MessageUncheckedUpdateWithoutFrom_chain_relInput>
    create: XOR<MessageCreateWithoutFrom_chain_relInput, MessageUncheckedCreateWithoutFrom_chain_relInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutFrom_chain_relInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutFrom_chain_relInput, MessageUncheckedUpdateWithoutFrom_chain_relInput>
  }

  export type MessageUpdateManyWithWhereWithoutFrom_chain_relInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutFrom_chain_relInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    message_id?: UuidFilter<"Message"> | string
    nonce?: DecimalFilter<"Message"> | Decimal | DecimalJsLike | number | string
    from_chain?: IntFilter<"Message"> | number
    to_chain?: IntFilter<"Message"> | number
    sent_tx_id?: UuidFilter<"Message"> | string
    recv_tx_id?: UuidNullableFilter<"Message"> | string | null
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    sent_at?: DateTimeFilter<"Message"> | Date | string
    received_at?: DateTimeNullableFilter<"Message"> | Date | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutTo_chain_relInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutTo_chain_relInput, MessageUncheckedUpdateWithoutTo_chain_relInput>
    create: XOR<MessageCreateWithoutTo_chain_relInput, MessageUncheckedCreateWithoutTo_chain_relInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutTo_chain_relInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutTo_chain_relInput, MessageUncheckedUpdateWithoutTo_chain_relInput>
  }

  export type MessageUpdateManyWithWhereWithoutTo_chain_relInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutTo_chain_relInput>
  }

  export type OperationUpsertWithWhereUniqueWithoutFrom_chain_relInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutFrom_chain_relInput, OperationUncheckedUpdateWithoutFrom_chain_relInput>
    create: XOR<OperationCreateWithoutFrom_chain_relInput, OperationUncheckedCreateWithoutFrom_chain_relInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutFrom_chain_relInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutFrom_chain_relInput, OperationUncheckedUpdateWithoutFrom_chain_relInput>
  }

  export type OperationUpdateManyWithWhereWithoutFrom_chain_relInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutFrom_chain_relInput>
  }

  export type OperationScalarWhereInput = {
    AND?: OperationScalarWhereInput | OperationScalarWhereInput[]
    OR?: OperationScalarWhereInput[]
    NOT?: OperationScalarWhereInput | OperationScalarWhereInput[]
    op_id?: UuidFilter<"Operation"> | string
    op_type?: EnumOperationTypeFilter<"Operation"> | $Enums.OperationType
    user_address?: StringFilter<"Operation"> | string
    from_chain?: IntFilter<"Operation"> | number
    to_chain?: IntFilter<"Operation"> | number
    message_nonce?: DecimalNullableFilter<"Operation"> | Decimal | DecimalJsLike | number | string | null
    message_id?: UuidNullableFilter<"Operation"> | string | null
    start_tx_id?: UuidFilter<"Operation"> | string
    end_tx_id?: UuidNullableFilter<"Operation"> | string | null
    status?: EnumOperationStatusFilter<"Operation"> | $Enums.OperationStatus
    substatus?: StringNullableFilter<"Operation"> | string | null
    details?: JsonFilter<"Operation">
    retry_count?: IntFilter<"Operation"> | number
    created_at?: DateTimeFilter<"Operation"> | Date | string
    updated_at?: DateTimeFilter<"Operation"> | Date | string
    last_event_at?: DateTimeFilter<"Operation"> | Date | string
    next_retry_at?: DateTimeNullableFilter<"Operation"> | Date | string | null
    error_context?: JsonNullableFilter<"Operation">
  }

  export type OperationUpsertWithWhereUniqueWithoutTo_chain_relInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutTo_chain_relInput, OperationUncheckedUpdateWithoutTo_chain_relInput>
    create: XOR<OperationCreateWithoutTo_chain_relInput, OperationUncheckedCreateWithoutTo_chain_relInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutTo_chain_relInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutTo_chain_relInput, OperationUncheckedUpdateWithoutTo_chain_relInput>
  }

  export type OperationUpdateManyWithWhereWithoutTo_chain_relInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutTo_chain_relInput>
  }

  export type ChainCreateWithoutContractsInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    transactions?: TransactionCreateNestedManyWithoutChainInput
    events?: EventCreateNestedManyWithoutChainInput
    messages_from?: MessageCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUncheckedCreateWithoutContractsInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    transactions?: TransactionUncheckedCreateNestedManyWithoutChainInput
    events?: EventUncheckedCreateNestedManyWithoutChainInput
    messages_from?: MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageUncheckedCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationUncheckedCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainCreateOrConnectWithoutContractsInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
  }

  export type ChainUpsertWithoutContractsInput = {
    update: XOR<ChainUpdateWithoutContractsInput, ChainUncheckedUpdateWithoutContractsInput>
    create: XOR<ChainCreateWithoutContractsInput, ChainUncheckedCreateWithoutContractsInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutContractsInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutContractsInput, ChainUncheckedUpdateWithoutContractsInput>
  }

  export type ChainUpdateWithoutContractsInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    transactions?: TransactionUpdateManyWithoutChainNestedInput
    events?: EventUpdateManyWithoutChainNestedInput
    messages_from?: MessageUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUncheckedUpdateWithoutContractsInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    transactions?: TransactionUncheckedUpdateManyWithoutChainNestedInput
    events?: EventUncheckedUpdateManyWithoutChainNestedInput
    messages_from?: MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainCreateWithoutTransactionsInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractCreateNestedManyWithoutChainInput
    events?: EventCreateNestedManyWithoutChainInput
    messages_from?: MessageCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUncheckedCreateWithoutTransactionsInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    events?: EventUncheckedCreateNestedManyWithoutChainInput
    messages_from?: MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageUncheckedCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationUncheckedCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainCreateOrConnectWithoutTransactionsInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutTransactionsInput, ChainUncheckedCreateWithoutTransactionsInput>
  }

  export type EventCreateWithoutTransactionInput = {
    event_id?: string
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
    chain: ChainCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutTransactionInput = {
    event_id?: string
    chain_id: number
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
  }

  export type EventCreateOrConnectWithoutTransactionInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput>
  }

  export type EventCreateManyTransactionInputEnvelope = {
    data: EventCreateManyTransactionInput | EventCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSent_transactionInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    from_chain_rel: ChainCreateNestedOneWithoutMessages_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutMessages_toInput
    recv_transaction?: TransactionCreateNestedOneWithoutMessages_recvInput
    operations?: OperationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSent_transactionInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    to_chain: number
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    operations?: OperationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSent_transactionInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSent_transactionInput, MessageUncheckedCreateWithoutSent_transactionInput>
  }

  export type MessageCreateManySent_transactionInputEnvelope = {
    data: MessageCreateManySent_transactionInput | MessageCreateManySent_transactionInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRecv_transactionInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    from_chain_rel: ChainCreateNestedOneWithoutMessages_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutMessages_toInput
    sent_transaction: TransactionCreateNestedOneWithoutMessages_sentInput
    operations?: OperationCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutRecv_transactionInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    to_chain: number
    sent_tx_id: string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    operations?: OperationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutRecv_transactionInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRecv_transactionInput, MessageUncheckedCreateWithoutRecv_transactionInput>
  }

  export type MessageCreateManyRecv_transactionInputEnvelope = {
    data: MessageCreateManyRecv_transactionInput | MessageCreateManyRecv_transactionInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutStart_transactionInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel: ChainCreateNestedOneWithoutOperations_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutOperations_toInput
    message?: MessageCreateNestedOneWithoutOperationsInput
    end_transaction?: TransactionCreateNestedOneWithoutOperations_endInput
  }

  export type OperationUncheckedCreateWithoutStart_transactionInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateOrConnectWithoutStart_transactionInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutStart_transactionInput, OperationUncheckedCreateWithoutStart_transactionInput>
  }

  export type OperationCreateManyStart_transactionInputEnvelope = {
    data: OperationCreateManyStart_transactionInput | OperationCreateManyStart_transactionInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutEnd_transactionInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel: ChainCreateNestedOneWithoutOperations_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutOperations_toInput
    message?: MessageCreateNestedOneWithoutOperationsInput
    start_transaction: TransactionCreateNestedOneWithoutOperations_startInput
  }

  export type OperationUncheckedCreateWithoutEnd_transactionInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateOrConnectWithoutEnd_transactionInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutEnd_transactionInput, OperationUncheckedCreateWithoutEnd_transactionInput>
  }

  export type OperationCreateManyEnd_transactionInputEnvelope = {
    data: OperationCreateManyEnd_transactionInput | OperationCreateManyEnd_transactionInput[]
    skipDuplicates?: boolean
  }

  export type ChainUpsertWithoutTransactionsInput = {
    update: XOR<ChainUpdateWithoutTransactionsInput, ChainUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ChainCreateWithoutTransactionsInput, ChainUncheckedCreateWithoutTransactionsInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutTransactionsInput, ChainUncheckedUpdateWithoutTransactionsInput>
  }

  export type ChainUpdateWithoutTransactionsInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUpdateManyWithoutChainNestedInput
    events?: EventUpdateManyWithoutChainNestedInput
    messages_from?: MessageUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUncheckedUpdateWithoutTransactionsInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    events?: EventUncheckedUpdateManyWithoutChainNestedInput
    messages_from?: MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutTransactionInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutTransactionInput, EventUncheckedUpdateWithoutTransactionInput>
    create: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput>
  }

  export type EventUpdateWithWhereUniqueWithoutTransactionInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutTransactionInput, EventUncheckedUpdateWithoutTransactionInput>
  }

  export type EventUpdateManyWithWhereWithoutTransactionInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutTransactionInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSent_transactionInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSent_transactionInput, MessageUncheckedUpdateWithoutSent_transactionInput>
    create: XOR<MessageCreateWithoutSent_transactionInput, MessageUncheckedCreateWithoutSent_transactionInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSent_transactionInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSent_transactionInput, MessageUncheckedUpdateWithoutSent_transactionInput>
  }

  export type MessageUpdateManyWithWhereWithoutSent_transactionInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSent_transactionInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutRecv_transactionInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRecv_transactionInput, MessageUncheckedUpdateWithoutRecv_transactionInput>
    create: XOR<MessageCreateWithoutRecv_transactionInput, MessageUncheckedCreateWithoutRecv_transactionInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRecv_transactionInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRecv_transactionInput, MessageUncheckedUpdateWithoutRecv_transactionInput>
  }

  export type MessageUpdateManyWithWhereWithoutRecv_transactionInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRecv_transactionInput>
  }

  export type OperationUpsertWithWhereUniqueWithoutStart_transactionInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutStart_transactionInput, OperationUncheckedUpdateWithoutStart_transactionInput>
    create: XOR<OperationCreateWithoutStart_transactionInput, OperationUncheckedCreateWithoutStart_transactionInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutStart_transactionInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutStart_transactionInput, OperationUncheckedUpdateWithoutStart_transactionInput>
  }

  export type OperationUpdateManyWithWhereWithoutStart_transactionInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutStart_transactionInput>
  }

  export type OperationUpsertWithWhereUniqueWithoutEnd_transactionInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutEnd_transactionInput, OperationUncheckedUpdateWithoutEnd_transactionInput>
    create: XOR<OperationCreateWithoutEnd_transactionInput, OperationUncheckedCreateWithoutEnd_transactionInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutEnd_transactionInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutEnd_transactionInput, OperationUncheckedUpdateWithoutEnd_transactionInput>
  }

  export type OperationUpdateManyWithWhereWithoutEnd_transactionInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutEnd_transactionInput>
  }

  export type ChainCreateWithoutEventsInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractCreateNestedManyWithoutChainInput
    transactions?: TransactionCreateNestedManyWithoutChainInput
    messages_from?: MessageCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUncheckedCreateWithoutEventsInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChainInput
    messages_from?: MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageUncheckedCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationUncheckedCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainCreateOrConnectWithoutEventsInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutEventsInput, ChainUncheckedCreateWithoutEventsInput>
  }

  export type TransactionCreateWithoutEventsInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    chain: ChainCreateNestedOneWithoutTransactionsInput
    messages_sent?: MessageCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionUncheckedCreateWithoutEventsInput = {
    tx_id?: string
    chain_id: number
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    messages_sent?: MessageUncheckedCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageUncheckedCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationUncheckedCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationUncheckedCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionCreateOrConnectWithoutEventsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEventsInput, TransactionUncheckedCreateWithoutEventsInput>
  }

  export type ChainUpsertWithoutEventsInput = {
    update: XOR<ChainUpdateWithoutEventsInput, ChainUncheckedUpdateWithoutEventsInput>
    create: XOR<ChainCreateWithoutEventsInput, ChainUncheckedCreateWithoutEventsInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutEventsInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutEventsInput, ChainUncheckedUpdateWithoutEventsInput>
  }

  export type ChainUpdateWithoutEventsInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUpdateManyWithoutChainNestedInput
    transactions?: TransactionUpdateManyWithoutChainNestedInput
    messages_from?: MessageUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUncheckedUpdateWithoutEventsInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChainNestedInput
    messages_from?: MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput
  }

  export type TransactionUpsertWithoutEventsInput = {
    update: XOR<TransactionUpdateWithoutEventsInput, TransactionUncheckedUpdateWithoutEventsInput>
    create: XOR<TransactionCreateWithoutEventsInput, TransactionUncheckedCreateWithoutEventsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutEventsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutEventsInput, TransactionUncheckedUpdateWithoutEventsInput>
  }

  export type TransactionUpdateWithoutEventsInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    chain?: ChainUpdateOneRequiredWithoutTransactionsNestedInput
    messages_sent?: MessageUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEventsInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    messages_sent?: MessageUncheckedUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUncheckedUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUncheckedUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUncheckedUpdateManyWithoutEnd_transactionNestedInput
  }

  export type ChainCreateWithoutMessages_fromInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractCreateNestedManyWithoutChainInput
    transactions?: TransactionCreateNestedManyWithoutChainInput
    events?: EventCreateNestedManyWithoutChainInput
    messages_to?: MessageCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUncheckedCreateWithoutMessages_fromInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChainInput
    events?: EventUncheckedCreateNestedManyWithoutChainInput
    messages_to?: MessageUncheckedCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationUncheckedCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainCreateOrConnectWithoutMessages_fromInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutMessages_fromInput, ChainUncheckedCreateWithoutMessages_fromInput>
  }

  export type ChainCreateWithoutMessages_toInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractCreateNestedManyWithoutChainInput
    transactions?: TransactionCreateNestedManyWithoutChainInput
    events?: EventCreateNestedManyWithoutChainInput
    messages_from?: MessageCreateNestedManyWithoutFrom_chain_relInput
    operations_from?: OperationCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUncheckedCreateWithoutMessages_toInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChainInput
    events?: EventUncheckedCreateNestedManyWithoutChainInput
    messages_from?: MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput
    operations_from?: OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput
    operations_to?: OperationUncheckedCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainCreateOrConnectWithoutMessages_toInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutMessages_toInput, ChainUncheckedCreateWithoutMessages_toInput>
  }

  export type TransactionCreateWithoutMessages_sentInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    chain: ChainCreateNestedOneWithoutTransactionsInput
    events?: EventCreateNestedManyWithoutTransactionInput
    messages_recv?: MessageCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionUncheckedCreateWithoutMessages_sentInput = {
    tx_id?: string
    chain_id: number
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    events?: EventUncheckedCreateNestedManyWithoutTransactionInput
    messages_recv?: MessageUncheckedCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationUncheckedCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationUncheckedCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionCreateOrConnectWithoutMessages_sentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutMessages_sentInput, TransactionUncheckedCreateWithoutMessages_sentInput>
  }

  export type TransactionCreateWithoutMessages_recvInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    chain: ChainCreateNestedOneWithoutTransactionsInput
    events?: EventCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageCreateNestedManyWithoutSent_transactionInput
    operations_start?: OperationCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionUncheckedCreateWithoutMessages_recvInput = {
    tx_id?: string
    chain_id: number
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    events?: EventUncheckedCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageUncheckedCreateNestedManyWithoutSent_transactionInput
    operations_start?: OperationUncheckedCreateNestedManyWithoutStart_transactionInput
    operations_end?: OperationUncheckedCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionCreateOrConnectWithoutMessages_recvInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutMessages_recvInput, TransactionUncheckedCreateWithoutMessages_recvInput>
  }

  export type OperationCreateWithoutMessageInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel: ChainCreateNestedOneWithoutOperations_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutOperations_toInput
    start_transaction: TransactionCreateNestedOneWithoutOperations_startInput
    end_transaction?: TransactionCreateNestedOneWithoutOperations_endInput
  }

  export type OperationUncheckedCreateWithoutMessageInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateOrConnectWithoutMessageInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutMessageInput, OperationUncheckedCreateWithoutMessageInput>
  }

  export type OperationCreateManyMessageInputEnvelope = {
    data: OperationCreateManyMessageInput | OperationCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ChainUpsertWithoutMessages_fromInput = {
    update: XOR<ChainUpdateWithoutMessages_fromInput, ChainUncheckedUpdateWithoutMessages_fromInput>
    create: XOR<ChainCreateWithoutMessages_fromInput, ChainUncheckedCreateWithoutMessages_fromInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutMessages_fromInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutMessages_fromInput, ChainUncheckedUpdateWithoutMessages_fromInput>
  }

  export type ChainUpdateWithoutMessages_fromInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUpdateManyWithoutChainNestedInput
    transactions?: TransactionUpdateManyWithoutChainNestedInput
    events?: EventUpdateManyWithoutChainNestedInput
    messages_to?: MessageUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUncheckedUpdateWithoutMessages_fromInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChainNestedInput
    events?: EventUncheckedUpdateManyWithoutChainNestedInput
    messages_to?: MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUpsertWithoutMessages_toInput = {
    update: XOR<ChainUpdateWithoutMessages_toInput, ChainUncheckedUpdateWithoutMessages_toInput>
    create: XOR<ChainCreateWithoutMessages_toInput, ChainUncheckedCreateWithoutMessages_toInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutMessages_toInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutMessages_toInput, ChainUncheckedUpdateWithoutMessages_toInput>
  }

  export type ChainUpdateWithoutMessages_toInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUpdateManyWithoutChainNestedInput
    transactions?: TransactionUpdateManyWithoutChainNestedInput
    events?: EventUpdateManyWithoutChainNestedInput
    messages_from?: MessageUpdateManyWithoutFrom_chain_relNestedInput
    operations_from?: OperationUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUncheckedUpdateWithoutMessages_toInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChainNestedInput
    events?: EventUncheckedUpdateManyWithoutChainNestedInput
    messages_from?: MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    operations_from?: OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    operations_to?: OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput
  }

  export type TransactionUpsertWithoutMessages_sentInput = {
    update: XOR<TransactionUpdateWithoutMessages_sentInput, TransactionUncheckedUpdateWithoutMessages_sentInput>
    create: XOR<TransactionCreateWithoutMessages_sentInput, TransactionUncheckedCreateWithoutMessages_sentInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutMessages_sentInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutMessages_sentInput, TransactionUncheckedUpdateWithoutMessages_sentInput>
  }

  export type TransactionUpdateWithoutMessages_sentInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    chain?: ChainUpdateOneRequiredWithoutTransactionsNestedInput
    events?: EventUpdateManyWithoutTransactionNestedInput
    messages_recv?: MessageUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutMessages_sentInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutTransactionNestedInput
    messages_recv?: MessageUncheckedUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUncheckedUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUncheckedUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUpsertWithoutMessages_recvInput = {
    update: XOR<TransactionUpdateWithoutMessages_recvInput, TransactionUncheckedUpdateWithoutMessages_recvInput>
    create: XOR<TransactionCreateWithoutMessages_recvInput, TransactionUncheckedCreateWithoutMessages_recvInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutMessages_recvInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutMessages_recvInput, TransactionUncheckedUpdateWithoutMessages_recvInput>
  }

  export type TransactionUpdateWithoutMessages_recvInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    chain?: ChainUpdateOneRequiredWithoutTransactionsNestedInput
    events?: EventUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUpdateManyWithoutSent_transactionNestedInput
    operations_start?: OperationUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutMessages_recvInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUncheckedUpdateManyWithoutSent_transactionNestedInput
    operations_start?: OperationUncheckedUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUncheckedUpdateManyWithoutEnd_transactionNestedInput
  }

  export type OperationUpsertWithWhereUniqueWithoutMessageInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutMessageInput, OperationUncheckedUpdateWithoutMessageInput>
    create: XOR<OperationCreateWithoutMessageInput, OperationUncheckedCreateWithoutMessageInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutMessageInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutMessageInput, OperationUncheckedUpdateWithoutMessageInput>
  }

  export type OperationUpdateManyWithWhereWithoutMessageInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutMessageInput>
  }

  export type ChainCreateWithoutOperations_fromInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractCreateNestedManyWithoutChainInput
    transactions?: TransactionCreateNestedManyWithoutChainInput
    events?: EventCreateNestedManyWithoutChainInput
    messages_from?: MessageCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageCreateNestedManyWithoutTo_chain_relInput
    operations_to?: OperationCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainUncheckedCreateWithoutOperations_fromInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChainInput
    events?: EventUncheckedCreateNestedManyWithoutChainInput
    messages_from?: MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageUncheckedCreateNestedManyWithoutTo_chain_relInput
    operations_to?: OperationUncheckedCreateNestedManyWithoutTo_chain_relInput
  }

  export type ChainCreateOrConnectWithoutOperations_fromInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutOperations_fromInput, ChainUncheckedCreateWithoutOperations_fromInput>
  }

  export type ChainCreateWithoutOperations_toInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractCreateNestedManyWithoutChainInput
    transactions?: TransactionCreateNestedManyWithoutChainInput
    events?: EventCreateNestedManyWithoutChainInput
    messages_from?: MessageCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationCreateNestedManyWithoutFrom_chain_relInput
  }

  export type ChainUncheckedCreateWithoutOperations_toInput = {
    chain_id: number
    name: string
    status: $Enums.ChainStatus
    last_block_processed: bigint | number
    provider_urls: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedCreateNestedManyWithoutChainInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChainInput
    events?: EventUncheckedCreateNestedManyWithoutChainInput
    messages_from?: MessageUncheckedCreateNestedManyWithoutFrom_chain_relInput
    messages_to?: MessageUncheckedCreateNestedManyWithoutTo_chain_relInput
    operations_from?: OperationUncheckedCreateNestedManyWithoutFrom_chain_relInput
  }

  export type ChainCreateOrConnectWithoutOperations_toInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutOperations_toInput, ChainUncheckedCreateWithoutOperations_toInput>
  }

  export type MessageCreateWithoutOperationsInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
    from_chain_rel: ChainCreateNestedOneWithoutMessages_fromInput
    to_chain_rel: ChainCreateNestedOneWithoutMessages_toInput
    sent_transaction: TransactionCreateNestedOneWithoutMessages_sentInput
    recv_transaction?: TransactionCreateNestedOneWithoutMessages_recvInput
  }

  export type MessageUncheckedCreateWithoutOperationsInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    to_chain: number
    sent_tx_id: string
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutOperationsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutOperationsInput, MessageUncheckedCreateWithoutOperationsInput>
  }

  export type TransactionCreateWithoutOperations_startInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    chain: ChainCreateNestedOneWithoutTransactionsInput
    events?: EventCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageCreateNestedManyWithoutRecv_transactionInput
    operations_end?: OperationCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionUncheckedCreateWithoutOperations_startInput = {
    tx_id?: string
    chain_id: number
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    events?: EventUncheckedCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageUncheckedCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageUncheckedCreateNestedManyWithoutRecv_transactionInput
    operations_end?: OperationUncheckedCreateNestedManyWithoutEnd_transactionInput
  }

  export type TransactionCreateOrConnectWithoutOperations_startInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOperations_startInput, TransactionUncheckedCreateWithoutOperations_startInput>
  }

  export type TransactionCreateWithoutOperations_endInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    chain: ChainCreateNestedOneWithoutTransactionsInput
    events?: EventCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationCreateNestedManyWithoutStart_transactionInput
  }

  export type TransactionUncheckedCreateWithoutOperations_endInput = {
    tx_id?: string
    chain_id: number
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
    events?: EventUncheckedCreateNestedManyWithoutTransactionInput
    messages_sent?: MessageUncheckedCreateNestedManyWithoutSent_transactionInput
    messages_recv?: MessageUncheckedCreateNestedManyWithoutRecv_transactionInput
    operations_start?: OperationUncheckedCreateNestedManyWithoutStart_transactionInput
  }

  export type TransactionCreateOrConnectWithoutOperations_endInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOperations_endInput, TransactionUncheckedCreateWithoutOperations_endInput>
  }

  export type ChainUpsertWithoutOperations_fromInput = {
    update: XOR<ChainUpdateWithoutOperations_fromInput, ChainUncheckedUpdateWithoutOperations_fromInput>
    create: XOR<ChainCreateWithoutOperations_fromInput, ChainUncheckedCreateWithoutOperations_fromInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutOperations_fromInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutOperations_fromInput, ChainUncheckedUpdateWithoutOperations_fromInput>
  }

  export type ChainUpdateWithoutOperations_fromInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUpdateManyWithoutChainNestedInput
    transactions?: TransactionUpdateManyWithoutChainNestedInput
    events?: EventUpdateManyWithoutChainNestedInput
    messages_from?: MessageUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUpdateManyWithoutTo_chain_relNestedInput
    operations_to?: OperationUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUncheckedUpdateWithoutOperations_fromInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChainNestedInput
    events?: EventUncheckedUpdateManyWithoutChainNestedInput
    messages_from?: MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput
    operations_to?: OperationUncheckedUpdateManyWithoutTo_chain_relNestedInput
  }

  export type ChainUpsertWithoutOperations_toInput = {
    update: XOR<ChainUpdateWithoutOperations_toInput, ChainUncheckedUpdateWithoutOperations_toInput>
    create: XOR<ChainCreateWithoutOperations_toInput, ChainUncheckedCreateWithoutOperations_toInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutOperations_toInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutOperations_toInput, ChainUncheckedUpdateWithoutOperations_toInput>
  }

  export type ChainUpdateWithoutOperations_toInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUpdateManyWithoutChainNestedInput
    transactions?: TransactionUpdateManyWithoutChainNestedInput
    events?: EventUpdateManyWithoutChainNestedInput
    messages_from?: MessageUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUpdateManyWithoutFrom_chain_relNestedInput
  }

  export type ChainUncheckedUpdateWithoutOperations_toInput = {
    chain_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumChainStatusFieldUpdateOperationsInput | $Enums.ChainStatus
    last_block_processed?: BigIntFieldUpdateOperationsInput | bigint | number
    provider_urls?: JsonNullValueInput | InputJsonValue
    contracts?: ContractUncheckedUpdateManyWithoutChainNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChainNestedInput
    events?: EventUncheckedUpdateManyWithoutChainNestedInput
    messages_from?: MessageUncheckedUpdateManyWithoutFrom_chain_relNestedInput
    messages_to?: MessageUncheckedUpdateManyWithoutTo_chain_relNestedInput
    operations_from?: OperationUncheckedUpdateManyWithoutFrom_chain_relNestedInput
  }

  export type MessageUpsertWithoutOperationsInput = {
    update: XOR<MessageUpdateWithoutOperationsInput, MessageUncheckedUpdateWithoutOperationsInput>
    create: XOR<MessageCreateWithoutOperationsInput, MessageUncheckedCreateWithoutOperationsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutOperationsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutOperationsInput, MessageUncheckedUpdateWithoutOperationsInput>
  }

  export type MessageUpdateWithoutOperationsInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    from_chain_rel?: ChainUpdateOneRequiredWithoutMessages_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutMessages_toNestedInput
    sent_transaction?: TransactionUpdateOneRequiredWithoutMessages_sentNestedInput
    recv_transaction?: TransactionUpdateOneWithoutMessages_recvNestedInput
  }

  export type MessageUncheckedUpdateWithoutOperationsInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpsertWithoutOperations_startInput = {
    update: XOR<TransactionUpdateWithoutOperations_startInput, TransactionUncheckedUpdateWithoutOperations_startInput>
    create: XOR<TransactionCreateWithoutOperations_startInput, TransactionUncheckedCreateWithoutOperations_startInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutOperations_startInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutOperations_startInput, TransactionUncheckedUpdateWithoutOperations_startInput>
  }

  export type TransactionUpdateWithoutOperations_startInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    chain?: ChainUpdateOneRequiredWithoutTransactionsNestedInput
    events?: EventUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUpdateManyWithoutRecv_transactionNestedInput
    operations_end?: OperationUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOperations_startInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUncheckedUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUncheckedUpdateManyWithoutRecv_transactionNestedInput
    operations_end?: OperationUncheckedUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUpsertWithoutOperations_endInput = {
    update: XOR<TransactionUpdateWithoutOperations_endInput, TransactionUncheckedUpdateWithoutOperations_endInput>
    create: XOR<TransactionCreateWithoutOperations_endInput, TransactionUncheckedCreateWithoutOperations_endInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutOperations_endInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutOperations_endInput, TransactionUncheckedUpdateWithoutOperations_endInput>
  }

  export type TransactionUpdateWithoutOperations_endInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    chain?: ChainUpdateOneRequiredWithoutTransactionsNestedInput
    events?: EventUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUpdateManyWithoutStart_transactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOperations_endInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUncheckedUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUncheckedUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUncheckedUpdateManyWithoutStart_transactionNestedInput
  }

  export type ContractCreateManyChainInput = {
    address: string
    type: $Enums.ContractType
    deployment_block: bigint | number
    abi_hash: string
  }

  export type TransactionCreateManyChainInput = {
    tx_id?: string
    hash: string
    block_number: bigint | number
    block_hash: string
    timestamp: Date | string
    status: $Enums.TransactionStatus
    confirmations: number
  }

  export type EventCreateManyChainInput = {
    event_id?: string
    tx_hash: string
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
  }

  export type MessageCreateManyFrom_chain_relInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    to_chain: number
    sent_tx_id: string
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
  }

  export type MessageCreateManyTo_chain_relInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    sent_tx_id: string
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
  }

  export type OperationCreateManyFrom_chain_relInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateManyTo_chain_relInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ContractUpdateWithoutChainInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    deployment_block?: BigIntFieldUpdateOperationsInput | bigint | number
    abi_hash?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateWithoutChainInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    deployment_block?: BigIntFieldUpdateOperationsInput | bigint | number
    abi_hash?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateManyWithoutChainInput = {
    address?: StringFieldUpdateOperationsInput | string
    type?: EnumContractTypeFieldUpdateOperationsInput | $Enums.ContractType
    deployment_block?: BigIntFieldUpdateOperationsInput | bigint | number
    abi_hash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutChainInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    events?: EventUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutChainInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
    events?: EventUncheckedUpdateManyWithoutTransactionNestedInput
    messages_sent?: MessageUncheckedUpdateManyWithoutSent_transactionNestedInput
    messages_recv?: MessageUncheckedUpdateManyWithoutRecv_transactionNestedInput
    operations_start?: OperationUncheckedUpdateManyWithoutStart_transactionNestedInput
    operations_end?: OperationUncheckedUpdateManyWithoutEnd_transactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutChainInput = {
    tx_id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    block_number?: BigIntFieldUpdateOperationsInput | bigint | number
    block_hash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    confirmations?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpdateWithoutChainInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
    transaction?: TransactionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutChainInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
  }

  export type EventUncheckedUpdateManyWithoutChainInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    tx_hash?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
  }

  export type MessageUpdateWithoutFrom_chain_relInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    to_chain_rel?: ChainUpdateOneRequiredWithoutMessages_toNestedInput
    sent_transaction?: TransactionUpdateOneRequiredWithoutMessages_sentNestedInput
    recv_transaction?: TransactionUpdateOneWithoutMessages_recvNestedInput
    operations?: OperationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutFrom_chain_relInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    to_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operations?: OperationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutFrom_chain_relInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    to_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutTo_chain_relInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    from_chain_rel?: ChainUpdateOneRequiredWithoutMessages_fromNestedInput
    sent_transaction?: TransactionUpdateOneRequiredWithoutMessages_sentNestedInput
    recv_transaction?: TransactionUpdateOneWithoutMessages_recvNestedInput
    operations?: OperationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutTo_chain_relInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operations?: OperationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutTo_chain_relInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OperationUpdateWithoutFrom_chain_relInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    to_chain_rel?: ChainUpdateOneRequiredWithoutOperations_toNestedInput
    message?: MessageUpdateOneWithoutOperationsNestedInput
    start_transaction?: TransactionUpdateOneRequiredWithoutOperations_startNestedInput
    end_transaction?: TransactionUpdateOneWithoutOperations_endNestedInput
  }

  export type OperationUncheckedUpdateWithoutFrom_chain_relInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUncheckedUpdateManyWithoutFrom_chain_relInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUpdateWithoutTo_chain_relInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel?: ChainUpdateOneRequiredWithoutOperations_fromNestedInput
    message?: MessageUpdateOneWithoutOperationsNestedInput
    start_transaction?: TransactionUpdateOneRequiredWithoutOperations_startNestedInput
    end_transaction?: TransactionUpdateOneWithoutOperations_endNestedInput
  }

  export type OperationUncheckedUpdateWithoutTo_chain_relInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUncheckedUpdateManyWithoutTo_chain_relInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventCreateManyTransactionInput = {
    event_id?: string
    chain_id: number
    log_index: number
    name: string
    contract_address: string
    params: JsonNullValueInput | InputJsonValue
    correlation_window_id?: string | null
    buffer_status: $Enums.BufferStatus
  }

  export type MessageCreateManySent_transactionInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    to_chain: number
    recv_tx_id?: string | null
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
  }

  export type MessageCreateManyRecv_transactionInput = {
    message_id?: string
    nonce: Decimal | DecimalJsLike | number | string
    from_chain: number
    to_chain: number
    sent_tx_id: string
    status: $Enums.MessageStatus
    sent_at: Date | string
    received_at?: Date | string | null
  }

  export type OperationCreateManyStart_transactionInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateManyEnd_transactionInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    message_id?: string | null
    start_tx_id: string
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventUpdateWithoutTransactionInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
    chain?: ChainUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTransactionInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
  }

  export type EventUncheckedUpdateManyWithoutTransactionInput = {
    event_id?: StringFieldUpdateOperationsInput | string
    chain_id?: IntFieldUpdateOperationsInput | number
    log_index?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    params?: JsonNullValueInput | InputJsonValue
    correlation_window_id?: NullableStringFieldUpdateOperationsInput | string | null
    buffer_status?: EnumBufferStatusFieldUpdateOperationsInput | $Enums.BufferStatus
  }

  export type MessageUpdateWithoutSent_transactionInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    from_chain_rel?: ChainUpdateOneRequiredWithoutMessages_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutMessages_toNestedInput
    recv_transaction?: TransactionUpdateOneWithoutMessages_recvNestedInput
    operations?: OperationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSent_transactionInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operations?: OperationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSent_transactionInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    recv_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutRecv_transactionInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    from_chain_rel?: ChainUpdateOneRequiredWithoutMessages_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutMessages_toNestedInput
    sent_transaction?: TransactionUpdateOneRequiredWithoutMessages_sentNestedInput
    operations?: OperationUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRecv_transactionInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    operations?: OperationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRecv_transactionInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    nonce?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    sent_tx_id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    received_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OperationUpdateWithoutStart_transactionInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel?: ChainUpdateOneRequiredWithoutOperations_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutOperations_toNestedInput
    message?: MessageUpdateOneWithoutOperationsNestedInput
    end_transaction?: TransactionUpdateOneWithoutOperations_endNestedInput
  }

  export type OperationUncheckedUpdateWithoutStart_transactionInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUncheckedUpdateManyWithoutStart_transactionInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUpdateWithoutEnd_transactionInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel?: ChainUpdateOneRequiredWithoutOperations_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutOperations_toNestedInput
    message?: MessageUpdateOneWithoutOperationsNestedInput
    start_transaction?: TransactionUpdateOneRequiredWithoutOperations_startNestedInput
  }

  export type OperationUncheckedUpdateWithoutEnd_transactionInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUncheckedUpdateManyWithoutEnd_transactionInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationCreateManyMessageInput = {
    op_id?: string
    op_type: $Enums.OperationType
    user_address: string
    from_chain: number
    to_chain: number
    message_nonce?: Decimal | DecimalJsLike | number | string | null
    start_tx_id: string
    end_tx_id?: string | null
    status: $Enums.OperationStatus
    substatus?: string | null
    details: JsonNullValueInput | InputJsonValue
    retry_count: number
    created_at?: Date | string
    updated_at?: Date | string
    last_event_at: Date | string
    next_retry_at?: Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUpdateWithoutMessageInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
    from_chain_rel?: ChainUpdateOneRequiredWithoutOperations_fromNestedInput
    to_chain_rel?: ChainUpdateOneRequiredWithoutOperations_toNestedInput
    start_transaction?: TransactionUpdateOneRequiredWithoutOperations_startNestedInput
    end_transaction?: TransactionUpdateOneWithoutOperations_endNestedInput
  }

  export type OperationUncheckedUpdateWithoutMessageInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OperationUncheckedUpdateManyWithoutMessageInput = {
    op_id?: StringFieldUpdateOperationsInput | string
    op_type?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    user_address?: StringFieldUpdateOperationsInput | string
    from_chain?: IntFieldUpdateOperationsInput | number
    to_chain?: IntFieldUpdateOperationsInput | number
    message_nonce?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    start_tx_id?: StringFieldUpdateOperationsInput | string
    end_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus
    substatus?: NullableStringFieldUpdateOperationsInput | string | null
    details?: JsonNullValueInput | InputJsonValue
    retry_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_event_at?: DateTimeFieldUpdateOperationsInput | Date | string
    next_retry_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_context?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ChainCountOutputTypeDefaultArgs instead
     */
    export type ChainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionCountOutputTypeDefaultArgs instead
     */
    export type TransactionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageCountOutputTypeDefaultArgs instead
     */
    export type MessageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChainDefaultArgs instead
     */
    export type ChainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperationDefaultArgs instead
     */
    export type OperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperationDefaultArgs<ExtArgs>

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