FROM node:16-alpine

WORKDIR /app/frontend 

COPY package.json package-lock.json ./ 

RUN npm install 

RUN npm install react-scripts@3.4.1 

COPY . ./ 

EXPOSE 3000