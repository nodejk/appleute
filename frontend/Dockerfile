FROM node:14

# Create app directory
WORKDIR /frontend

# COPY /frontend/package*.json ./
# RUN chown -Rh $user:$user ./frontend
# RUN npm install
# # # If you are building your code for production
# # # RUN npm ci --only=production

# # # Bundle app source
COPY ./frontend/package.json .
RUN chown -Rh $user:$user /frontend
RUN npm install

COPY . .

EXPOSE 3000
# CMD [ "node", "server.js" ]

USER node
CMD ["sleep", "infinity"]