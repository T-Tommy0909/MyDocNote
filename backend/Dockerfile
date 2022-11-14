# Dockerfile for production
# Referred to https://www.codemochi.com/blog/2022-01-01-dockerizing-nextjs-with-prisma-for-production

FROM node:lts-buster-slim AS base
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /app

COPY package.json yarn.lock start.sh ./

FROM base as build
RUN export NODE_ENV=production
RUN yarn

COPY . .
RUN yarn run prisma:generate
RUN yarn build

FROM base as prod-build

RUN yarn install --production
COPY prisma prisma
RUN yarn run prisma:generate
RUN cp -R node_modules prod_node_modules

FROM base as prod

COPY --from=prod-build /app/prod_node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
COPY --from=build /app/prisma /app/prisma

EXPOSE 3000
RUN chmod +x ./start.sh
CMD ["./start.sh"]
