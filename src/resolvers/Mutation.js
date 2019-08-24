const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')

async function createUser(parent, args, context, info) {
  const userExists = await context.prisma.user({ name: `${args.name}` })
  if (userExists) {
    throw new Error('User already exists')
  }
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2

  console.log(args)
  const user = await context.prisma.createUser({ ...args, password })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ name: `${args.name}` })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

async function postMovie(parent, args, context, info) {
  // 2
  const movieExists = await context.prisma.$exists.movie({ title: `${args.title}` })
  if (movieExists) {
    throw new Error(`Already created : ${args.title}`)
  }
  let actors = args.actors
  actors = actors.map(actor => {
    return  { id: actor }
  })

  // 3
  return context.prisma.createMovie({
    title: args.title,
    year: args.year,
    rating: args.rating,
    actors: { connect: actors }
  })
}

async function postActor(parent, args, context, info) {
  // 2
  const actorExists = await context.prisma.$exists.movie({ name: `${args.name}` })
  if (actorExists) {
    throw new Error(`Already created : ${args.name}`)
  }
  let directors = args.directors
  directors = directors.map(director => {
    return  { id: director }
  })

  // 3
  return context.prisma.createActor({
    name: args.name,
    birthday: args.birthday,
    country: args.country,
    directors: { connect: directors }
  })
}

async function postDirector(parent, args, context, info) {
  const directorExists = await context.prisma.$exists.movie({ name: `${args.name}` })
  if (directorExists) {
    throw new Error(`Already created : ${args.name}`)
  }

  return context.prisma.createDirector({
    name: args.name,
    birthday: args.birthday,
    country: args.country
  })
}

module.exports = {
  createUser,
  login,
  postMovie,
  postActor,
  postDirector
}