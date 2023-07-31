<!-- inicializar -->
<!--
  sudo systemctl start docker
  docker start

 -->

<!-- Crie um arquivo chamado "Dockerfile" -->


<!-- utilizar a imagem node -->
FROM node

<!-- diretório de trabalho onde vamos colocar as nossas informações  -->
WORKDIR /usr/app

<!-- copia o package.json para ./-->
COPY package.json ./

RUN npm install

<!-- depois de instalar as dependencias copia tudo para a pasta raiz -->
COPY . .

<!-- expose na porta que estamos utilizando no nosso container -->
EXPOSE 3333

CMD ["npm","run", "dev"]




<!--
  <SCRIPTS>
  docker build -t nome_da_imagem_que_quer_criar onde_esta_o_arquivo_dockerfile
  docker build -t quandolanca .
  docker run -p 3333:3333 quandolanca
-->


<!--
  INICIAR O DOCKER
  sudo systemctl start docker

 -->


<!--
docker ps -a: lista todos os containers instalados
docker stop nome_container: parar container
docker start nome_container: iniciar container
docker container rm nome_container: deletar
docker rmi come_container : deletar

docker exec -it name_container bash: habilitar escrever comandos
psql -U root: para logar no postgress com o nome de usuário

\l: lista as bases de dados criadas
\C nome_database: selecionar a base de dados

*baixar imagem para depois criar o conteiner
docker pull postgress

docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

--name: define o nome do container
-e:define variáveis de ambiente
-p: porta
-d: detatched, para rodar em background
e por fim a imagem que a gente vai utilizar no container


[
	psql
	-it bash

]




*se pacote nao estiver instaldo na maquina ele faz a instalação
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres





*PRECISA DO POSTGRESS INSTALADO
npm install pg


 -->
