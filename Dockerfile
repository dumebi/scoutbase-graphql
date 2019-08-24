FROM node:latest
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn add prisma -g
# RUN cd database/
# RUN yarn run prisma
CMD ["yarn", "run", "dev"]