FROM node:14

# Create app directory
WORKDIR /app

COPY /api/package.json ./

RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
COPY . .

EXPOSE ${PORT}
# CMD [ "node", "server.js" ]

CMD ["sleep", "infinity"]