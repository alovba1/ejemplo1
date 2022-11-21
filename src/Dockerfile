FROM node:10-alpine
WORKDIR /ejemplo1
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8081
CMD ["node","index.html"]