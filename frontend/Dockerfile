FROM node:10
COPY . /frontend
WORKDIR /frontend
RUN npm install
RUN npm rebuild node-sass
EXPOSE 4200
