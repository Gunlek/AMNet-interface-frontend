FROM node:18.8.0-alpine3.16

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]