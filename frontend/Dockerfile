FROM node
WORKDIR /frontend/
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
EXPOSE 4000
RUN npm run build
ENTRYPOINT HOST=176.109.107.106 PORT=4000 node ./build/index.js