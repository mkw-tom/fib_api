ARG NODE_VERSION=20.17.0

FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production

WORKDIR /app

COPY package.json package-lock.json nodemon.json ./

RUN --mount=type=bind,source=package.json,target=package.json \
--mount=type=bind,source=package-lock.json,target=package-lock.json \
--mount=type=cache,target=/root/.npm \
npm ci --omit=dev

RUN npm install -g typescript 

COPY dist ./

USER node

COPY . .

EXPOSE 8000

CMD ["npm", "start"]


