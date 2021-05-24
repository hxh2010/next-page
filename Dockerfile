FROM node
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /usr/my-app
COPY . /usr/my-app
WORKDIR /usr/my-app
RUN ls -l
CMD ["npm", "start"]
