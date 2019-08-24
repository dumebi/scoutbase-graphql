const { getUser } = require('../utils')

const directiveResolvers = {
  isAuthenticated: (next, source, context) => {
    const user = getUser(context)
    if (user) return next();
    throw new Error(`This user is not authenticated`)
  },
}

module.exports = {
  directiveResolvers
}