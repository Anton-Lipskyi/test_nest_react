FROM node:14.17.0

WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install

EXPOSE 8000

#CMD ["npm", "run", "start:dev"]

CMD [ "sh","-c", "npm run typeorm:generate-migration && npm run migrations:up && npm run start:dev"]
