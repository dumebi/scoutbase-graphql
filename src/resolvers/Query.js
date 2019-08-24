const { getUser } = require('../utils')

async function movies(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      }
    : {}

  const movies = await context.prisma.movies({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })

  const user = await getUser(context)

  console.log(user)
  return movies.map(movie => ({
    ...movie,
    scoutbase_rating: user.status ? getRndInteger(5, 9) : null 
  }))
}

async function directors(parent, args, context) {
  return context.prisma.directors()
}

async function actors(parent, args, context) {
  return context.prisma.actors()
}


function getRndInteger(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(1);
}


module.exports = {
  movies,
  directors,
  actors
}