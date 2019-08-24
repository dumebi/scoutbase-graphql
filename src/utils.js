const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

async function getUser(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)

    const user = await context.prisma.user({ id: userId })
    if (!user) {
      // throw new Error('No such user found')
      return {status: false, message: 'No such user found' }
    }
    return {status: true, data: user }
  }

  return {status: false, message: 'Not authenticated' }
  // throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getUser,
}