<!-- fazer login no usuário app -->
sudo su - app






<!-- ativar permissão para o docker | deslogar e logar novamente após inserir o comando -->
sudo groupadd docker
sudo usermod -aG docker $USER

docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 8969:5432 -d postgres
