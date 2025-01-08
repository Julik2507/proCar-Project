FROM node
WORKDIR /backend/
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
EXPOSE 3000
ENTRYPOINT npm run start

