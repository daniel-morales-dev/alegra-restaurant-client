# Etapa de construcción
FROM node:20 AS build

# Define build arguments for environment variables
ARG VITE_ORDERS_HOST
ARG VITE_KITCHEN_HOST
ARG VITE_WAREHOUSE_HOST

# Set environment variables during the build process
ENV VITE_ORDERS_HOST=$VITE_ORDERS_HOST
ENV VITE_KITCHEN_HOST=$VITE_KITCHEN_HOST
ENV VITE_WAREHOUSE_HOST=$VITE_WAREHOUSE_HOST

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de ejecución
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
