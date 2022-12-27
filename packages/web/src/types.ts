export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
  uuid: string
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']>
  readonly _gt?: InputMaybe<Scalars['String']>
  readonly _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  readonly _ilike?: InputMaybe<Scalars['String']>
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex?: InputMaybe<Scalars['String']>
  readonly _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  readonly _like?: InputMaybe<Scalars['String']>
  readonly _lt?: InputMaybe<Scalars['String']>
  readonly _lte?: InputMaybe<Scalars['String']>
  readonly _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike?: InputMaybe<Scalars['String']>
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  readonly _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  readonly _similar?: InputMaybe<Scalars['String']>
}

/** ordering argument of a cursor */
export const Cursor_Ordering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC',
} as const

export type Cursor_Ordering =
  typeof Cursor_Ordering[keyof typeof Cursor_Ordering]
/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root'
  /** delete data from the table: "test" */
  readonly delete_test?: Maybe<Test_Mutation_Response>
  /** delete single row from the table: "test" */
  readonly delete_test_by_pk?: Maybe<Test>
  /** insert data into the table: "test" */
  readonly insert_test?: Maybe<Test_Mutation_Response>
  /** insert a single row into the table: "test" */
  readonly insert_test_one?: Maybe<Test>
  /** update data of the table: "test" */
  readonly update_test?: Maybe<Test_Mutation_Response>
  /** update single row of the table: "test" */
  readonly update_test_by_pk?: Maybe<Test>
  /** update multiples rows of table: "test" */
  readonly update_test_many?: Maybe<
    ReadonlyArray<Maybe<Test_Mutation_Response>>
  >
}

/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: ReadonlyArray<Test_Insert_Input>
  on_conflict?: InputMaybe<Test_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input
  on_conflict?: InputMaybe<Test_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _set?: InputMaybe<Test_Set_Input>
  where: Test_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _set?: InputMaybe<Test_Set_Input>
  pk_columns: Test_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Test_ManyArgs = {
  updates: ReadonlyArray<Test_Updates>
}

/** column ordering options */
export const Order_By = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last',
} as const

export type Order_By = typeof Order_By[keyof typeof Order_By]
export type Query_Root = {
  readonly __typename?: 'query_root'
  /** fetch data from the table: "test" */
  readonly test: ReadonlyArray<Test>
  /** fetch aggregated fields from the table: "test" */
  readonly test_aggregate: Test_Aggregate
  /** fetch data from the table: "test" using primary key columns */
  readonly test_by_pk?: Maybe<Test>
}

export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Test_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<ReadonlyArray<Test_Order_By>>
  where?: InputMaybe<Test_Bool_Exp>
}

export type Query_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Test_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<ReadonlyArray<Test_Order_By>>
  where?: InputMaybe<Test_Bool_Exp>
}

export type Query_RootTest_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_Root = {
  readonly __typename?: 'subscription_root'
  /** fetch data from the table: "test" */
  readonly test: ReadonlyArray<Test>
  /** fetch aggregated fields from the table: "test" */
  readonly test_aggregate: Test_Aggregate
  /** fetch data from the table: "test" using primary key columns */
  readonly test_by_pk?: Maybe<Test>
  /** fetch data from the table in a streaming manner: "test" */
  readonly test_stream: ReadonlyArray<Test>
}

export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Test_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<ReadonlyArray<Test_Order_By>>
  where?: InputMaybe<Test_Bool_Exp>
}

export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Test_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<ReadonlyArray<Test_Order_By>>
  where?: InputMaybe<Test_Bool_Exp>
}

export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootTest_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: ReadonlyArray<InputMaybe<Test_Stream_Cursor_Input>>
  where?: InputMaybe<Test_Bool_Exp>
}

/** test table */
export type Test = {
  readonly __typename?: 'test'
  readonly created_at: Scalars['timestamptz']
  readonly id: Scalars['uuid']
  readonly memo: Scalars['String']
  readonly updated_at: Scalars['timestamptz']
}

/** aggregated selection of "test" */
export type Test_Aggregate = {
  readonly __typename?: 'test_aggregate'
  readonly aggregate?: Maybe<Test_Aggregate_Fields>
  readonly nodes: ReadonlyArray<Test>
}

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  readonly __typename?: 'test_aggregate_fields'
  readonly count: Scalars['Int']
  readonly max?: Maybe<Test_Max_Fields>
  readonly min?: Maybe<Test_Min_Fields>
}

/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Test_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<Test_Bool_Exp>>
  readonly _not?: InputMaybe<Test_Bool_Exp>
  readonly _or?: InputMaybe<ReadonlyArray<Test_Bool_Exp>>
  readonly created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  readonly id?: InputMaybe<Uuid_Comparison_Exp>
  readonly memo?: InputMaybe<String_Comparison_Exp>
  readonly updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "test" */
export const Test_Constraint = {
  /** unique or primary key constraint on columns "id" */
  TestPkey: 'test_pkey',
} as const

export type Test_Constraint =
  typeof Test_Constraint[keyof typeof Test_Constraint]
/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  readonly created_at?: InputMaybe<Scalars['timestamptz']>
  readonly id?: InputMaybe<Scalars['uuid']>
  readonly memo?: InputMaybe<Scalars['String']>
  readonly updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Test_Max_Fields = {
  readonly __typename?: 'test_max_fields'
  readonly created_at?: Maybe<Scalars['timestamptz']>
  readonly id?: Maybe<Scalars['uuid']>
  readonly memo?: Maybe<Scalars['String']>
  readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Test_Min_Fields = {
  readonly __typename?: 'test_min_fields'
  readonly created_at?: Maybe<Scalars['timestamptz']>
  readonly id?: Maybe<Scalars['uuid']>
  readonly memo?: Maybe<Scalars['String']>
  readonly updated_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  readonly __typename?: 'test_mutation_response'
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Test>
}

/** on_conflict condition type for table "test" */
export type Test_On_Conflict = {
  readonly constraint: Test_Constraint
  readonly update_columns?: ReadonlyArray<Test_Update_Column>
  readonly where?: InputMaybe<Test_Bool_Exp>
}

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  readonly created_at?: InputMaybe<Order_By>
  readonly id?: InputMaybe<Order_By>
  readonly memo?: InputMaybe<Order_By>
  readonly updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  readonly id: Scalars['uuid']
}

/** select columns of table "test" */
export const Test_Select_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Memo: 'memo',
  /** column name */
  UpdatedAt: 'updated_at',
} as const

export type Test_Select_Column =
  typeof Test_Select_Column[keyof typeof Test_Select_Column]
/** input type for updating data in table "test" */
export type Test_Set_Input = {
  readonly created_at?: InputMaybe<Scalars['timestamptz']>
  readonly id?: InputMaybe<Scalars['uuid']>
  readonly memo?: InputMaybe<Scalars['String']>
  readonly updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** Streaming cursor of the table "test" */
export type Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  readonly initial_value: Test_Stream_Cursor_Value_Input
  /** cursor ordering */
  readonly ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Test_Stream_Cursor_Value_Input = {
  readonly created_at?: InputMaybe<Scalars['timestamptz']>
  readonly id?: InputMaybe<Scalars['uuid']>
  readonly memo?: InputMaybe<Scalars['String']>
  readonly updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** update columns of table "test" */
export const Test_Update_Column = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  Memo: 'memo',
  /** column name */
  UpdatedAt: 'updated_at',
} as const

export type Test_Update_Column =
  typeof Test_Update_Column[keyof typeof Test_Update_Column]
export type Test_Updates = {
  /** sets the columns of the filtered rows to the given values */
  readonly _set?: InputMaybe<Test_Set_Input>
  readonly where: Test_Bool_Exp
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamptz']>
  readonly _gt?: InputMaybe<Scalars['timestamptz']>
  readonly _gte?: InputMaybe<Scalars['timestamptz']>
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>
  readonly _is_null?: InputMaybe<Scalars['Boolean']>
  readonly _lt?: InputMaybe<Scalars['timestamptz']>
  readonly _lte?: InputMaybe<Scalars['timestamptz']>
  readonly _neq?: InputMaybe<Scalars['timestamptz']>
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['uuid']>
  readonly _gt?: InputMaybe<Scalars['uuid']>
  readonly _gte?: InputMaybe<Scalars['uuid']>
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']>>
  readonly _is_null?: InputMaybe<Scalars['Boolean']>
  readonly _lt?: InputMaybe<Scalars['uuid']>
  readonly _lte?: InputMaybe<Scalars['uuid']>
  readonly _neq?: InputMaybe<Scalars['uuid']>
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['uuid']>>
}
