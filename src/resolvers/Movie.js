function actors(parent, args, context) {
  return context.prisma.movie({ id: parent.id }).actors()
}

module.exports = {
  actors
}