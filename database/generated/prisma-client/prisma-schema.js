module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Actor {
  id: ID!
  name: String!
  birthday: String!
  country: String!
  directors(where: DirectorWhereInput, orderBy: DirectorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Director!]
}

type ActorConnection {
  pageInfo: PageInfo!
  edges: [ActorEdge]!
  aggregate: AggregateActor!
}

input ActorCreateInput {
  id: ID
  name: String!
  birthday: String!
  country: String!
  directors: DirectorCreateManyInput
}

input ActorCreateManyInput {
  create: [ActorCreateInput!]
  connect: [ActorWhereUniqueInput!]
}

type ActorEdge {
  node: Actor!
  cursor: String!
}

enum ActorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  birthday_ASC
  birthday_DESC
  country_ASC
  country_DESC
}

type ActorPreviousValues {
  id: ID!
  name: String!
  birthday: String!
  country: String!
}

input ActorScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  birthday: String
  birthday_not: String
  birthday_in: [String!]
  birthday_not_in: [String!]
  birthday_lt: String
  birthday_lte: String
  birthday_gt: String
  birthday_gte: String
  birthday_contains: String
  birthday_not_contains: String
  birthday_starts_with: String
  birthday_not_starts_with: String
  birthday_ends_with: String
  birthday_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [ActorScalarWhereInput!]
  OR: [ActorScalarWhereInput!]
  NOT: [ActorScalarWhereInput!]
}

type ActorSubscriptionPayload {
  mutation: MutationType!
  node: Actor
  updatedFields: [String!]
  previousValues: ActorPreviousValues
}

input ActorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActorWhereInput
  AND: [ActorSubscriptionWhereInput!]
  OR: [ActorSubscriptionWhereInput!]
  NOT: [ActorSubscriptionWhereInput!]
}

input ActorUpdateDataInput {
  name: String
  birthday: String
  country: String
  directors: DirectorUpdateManyInput
}

input ActorUpdateInput {
  name: String
  birthday: String
  country: String
  directors: DirectorUpdateManyInput
}

input ActorUpdateManyDataInput {
  name: String
  birthday: String
  country: String
}

input ActorUpdateManyInput {
  create: [ActorCreateInput!]
  update: [ActorUpdateWithWhereUniqueNestedInput!]
  upsert: [ActorUpsertWithWhereUniqueNestedInput!]
  delete: [ActorWhereUniqueInput!]
  connect: [ActorWhereUniqueInput!]
  set: [ActorWhereUniqueInput!]
  disconnect: [ActorWhereUniqueInput!]
  deleteMany: [ActorScalarWhereInput!]
  updateMany: [ActorUpdateManyWithWhereNestedInput!]
}

input ActorUpdateManyMutationInput {
  name: String
  birthday: String
  country: String
}

input ActorUpdateManyWithWhereNestedInput {
  where: ActorScalarWhereInput!
  data: ActorUpdateManyDataInput!
}

input ActorUpdateWithWhereUniqueNestedInput {
  where: ActorWhereUniqueInput!
  data: ActorUpdateDataInput!
}

input ActorUpsertWithWhereUniqueNestedInput {
  where: ActorWhereUniqueInput!
  update: ActorUpdateDataInput!
  create: ActorCreateInput!
}

input ActorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  birthday: String
  birthday_not: String
  birthday_in: [String!]
  birthday_not_in: [String!]
  birthday_lt: String
  birthday_lte: String
  birthday_gt: String
  birthday_gte: String
  birthday_contains: String
  birthday_not_contains: String
  birthday_starts_with: String
  birthday_not_starts_with: String
  birthday_ends_with: String
  birthday_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  directors_every: DirectorWhereInput
  directors_some: DirectorWhereInput
  directors_none: DirectorWhereInput
  AND: [ActorWhereInput!]
  OR: [ActorWhereInput!]
  NOT: [ActorWhereInput!]
}

input ActorWhereUniqueInput {
  id: ID
}

type AggregateActor {
  count: Int!
}

type AggregateDirector {
  count: Int!
}

type AggregateMovie {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Director {
  id: ID!
  name: String!
  birthday: String!
  country: String!
}

type DirectorConnection {
  pageInfo: PageInfo!
  edges: [DirectorEdge]!
  aggregate: AggregateDirector!
}

input DirectorCreateInput {
  id: ID
  name: String!
  birthday: String!
  country: String!
}

input DirectorCreateManyInput {
  create: [DirectorCreateInput!]
  connect: [DirectorWhereUniqueInput!]
}

type DirectorEdge {
  node: Director!
  cursor: String!
}

enum DirectorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  birthday_ASC
  birthday_DESC
  country_ASC
  country_DESC
}

type DirectorPreviousValues {
  id: ID!
  name: String!
  birthday: String!
  country: String!
}

input DirectorScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  birthday: String
  birthday_not: String
  birthday_in: [String!]
  birthday_not_in: [String!]
  birthday_lt: String
  birthday_lte: String
  birthday_gt: String
  birthday_gte: String
  birthday_contains: String
  birthday_not_contains: String
  birthday_starts_with: String
  birthday_not_starts_with: String
  birthday_ends_with: String
  birthday_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [DirectorScalarWhereInput!]
  OR: [DirectorScalarWhereInput!]
  NOT: [DirectorScalarWhereInput!]
}

type DirectorSubscriptionPayload {
  mutation: MutationType!
  node: Director
  updatedFields: [String!]
  previousValues: DirectorPreviousValues
}

input DirectorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DirectorWhereInput
  AND: [DirectorSubscriptionWhereInput!]
  OR: [DirectorSubscriptionWhereInput!]
  NOT: [DirectorSubscriptionWhereInput!]
}

input DirectorUpdateDataInput {
  name: String
  birthday: String
  country: String
}

input DirectorUpdateInput {
  name: String
  birthday: String
  country: String
}

input DirectorUpdateManyDataInput {
  name: String
  birthday: String
  country: String
}

input DirectorUpdateManyInput {
  create: [DirectorCreateInput!]
  update: [DirectorUpdateWithWhereUniqueNestedInput!]
  upsert: [DirectorUpsertWithWhereUniqueNestedInput!]
  delete: [DirectorWhereUniqueInput!]
  connect: [DirectorWhereUniqueInput!]
  set: [DirectorWhereUniqueInput!]
  disconnect: [DirectorWhereUniqueInput!]
  deleteMany: [DirectorScalarWhereInput!]
  updateMany: [DirectorUpdateManyWithWhereNestedInput!]
}

input DirectorUpdateManyMutationInput {
  name: String
  birthday: String
  country: String
}

input DirectorUpdateManyWithWhereNestedInput {
  where: DirectorScalarWhereInput!
  data: DirectorUpdateManyDataInput!
}

input DirectorUpdateWithWhereUniqueNestedInput {
  where: DirectorWhereUniqueInput!
  data: DirectorUpdateDataInput!
}

input DirectorUpsertWithWhereUniqueNestedInput {
  where: DirectorWhereUniqueInput!
  update: DirectorUpdateDataInput!
  create: DirectorCreateInput!
}

input DirectorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  birthday: String
  birthday_not: String
  birthday_in: [String!]
  birthday_not_in: [String!]
  birthday_lt: String
  birthday_lte: String
  birthday_gt: String
  birthday_gte: String
  birthday_contains: String
  birthday_not_contains: String
  birthday_starts_with: String
  birthday_not_starts_with: String
  birthday_ends_with: String
  birthday_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [DirectorWhereInput!]
  OR: [DirectorWhereInput!]
  NOT: [DirectorWhereInput!]
}

input DirectorWhereUniqueInput {
  id: ID
}

scalar Long

type Movie {
  id: ID!
  title: String!
  year: Int!
  rating: Float!
  actors(where: ActorWhereInput, orderBy: ActorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Actor!]
}

type MovieConnection {
  pageInfo: PageInfo!
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreateInput {
  id: ID
  title: String!
  year: Int!
  rating: Float!
  actors: ActorCreateManyInput
}

type MovieEdge {
  node: Movie!
  cursor: String!
}

enum MovieOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  year_ASC
  year_DESC
  rating_ASC
  rating_DESC
}

type MoviePreviousValues {
  id: ID!
  title: String!
  year: Int!
  rating: Float!
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
  AND: [MovieSubscriptionWhereInput!]
  OR: [MovieSubscriptionWhereInput!]
  NOT: [MovieSubscriptionWhereInput!]
}

input MovieUpdateInput {
  title: String
  year: Int
  rating: Float
  actors: ActorUpdateManyInput
}

input MovieUpdateManyMutationInput {
  title: String
  year: Int
  rating: Float
}

input MovieWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  actors_every: ActorWhereInput
  actors_some: ActorWhereInput
  actors_none: ActorWhereInput
  AND: [MovieWhereInput!]
  OR: [MovieWhereInput!]
  NOT: [MovieWhereInput!]
}

input MovieWhereUniqueInput {
  id: ID
}

type Mutation {
  createActor(data: ActorCreateInput!): Actor!
  updateActor(data: ActorUpdateInput!, where: ActorWhereUniqueInput!): Actor
  updateManyActors(data: ActorUpdateManyMutationInput!, where: ActorWhereInput): BatchPayload!
  upsertActor(where: ActorWhereUniqueInput!, create: ActorCreateInput!, update: ActorUpdateInput!): Actor!
  deleteActor(where: ActorWhereUniqueInput!): Actor
  deleteManyActors(where: ActorWhereInput): BatchPayload!
  createDirector(data: DirectorCreateInput!): Director!
  updateDirector(data: DirectorUpdateInput!, where: DirectorWhereUniqueInput!): Director
  updateManyDirectors(data: DirectorUpdateManyMutationInput!, where: DirectorWhereInput): BatchPayload!
  upsertDirector(where: DirectorWhereUniqueInput!, create: DirectorCreateInput!, update: DirectorUpdateInput!): Director!
  deleteDirector(where: DirectorWhereUniqueInput!): Director
  deleteManyDirectors(where: DirectorWhereInput): BatchPayload!
  createMovie(data: MovieCreateInput!): Movie!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateManyMovies(data: MovieUpdateManyMutationInput!, where: MovieWhereInput): BatchPayload!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  actor(where: ActorWhereUniqueInput!): Actor
  actors(where: ActorWhereInput, orderBy: ActorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Actor]!
  actorsConnection(where: ActorWhereInput, orderBy: ActorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActorConnection!
  director(where: DirectorWhereUniqueInput!): Director
  directors(where: DirectorWhereInput, orderBy: DirectorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Director]!
  directorsConnection(where: DirectorWhereInput, orderBy: DirectorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DirectorConnection!
  movie(where: MovieWhereUniqueInput!): Movie
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  actor(where: ActorSubscriptionWhereInput): ActorSubscriptionPayload
  director(where: DirectorSubscriptionWhereInput): DirectorSubscriptionPayload
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  password: String
}

input UserUpdateManyMutationInput {
  name: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
}
`
      }
    