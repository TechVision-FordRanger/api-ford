# Fase de construção
FROM node:16-alpine AS build

WORKDIR /app

# Copia o arquivo package.json e package-lock.json para instalar as dependências
COPY package*.json ./

RUN npm install

#RUN npm rebuild bcrypt --build-from-source

# Copia o código fonte do aplicativo Nest
COPY . .

# Constrói o aplicativo para produção
RUN npm run build

# Fase de execução
FROM node:16-alpine AS runtime

WORKDIR /app

# Copie a pasta dist e node_modules do estágio de construção
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

#RUN npm uninstall bcrypt
#RUN npm i bcrypt

# Exponha a porta em que o servidor SSR será executado, geralmente 3000 para o Node
EXPOSE 3000

# Comando para executar o servidor Nest js
# CMD ["npm", "run", "start:prod"]
CMD ["node", "dist/main"]