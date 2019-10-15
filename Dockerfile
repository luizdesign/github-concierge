FROM node:10.16.3-alpine

LABEL project="Github Concierge"

WORKDIR /app/

COPY . /app/

RUN npm install

CMD ["npm", "start"]