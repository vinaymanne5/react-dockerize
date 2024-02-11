FROM node:18-alpine3.17

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev"]  