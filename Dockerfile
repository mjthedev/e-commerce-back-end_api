# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "devStart"]
EXPOSE 9000