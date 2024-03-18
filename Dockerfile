# Use uma imagem base do Node.js
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /src/api-do-it

# Copia os arquivos de configuração do projeto (package.json e package-lock.json)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o código fonte da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

ENV database_host=20.84.55.245
ENV database_name=doit
ENV database_password=senai115
ENV database_user=root

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD [ "npm", "start" ]
