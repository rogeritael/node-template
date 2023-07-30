<!-- IAM -->
<!--
  configurar usuário
  IAM -> usuarios -> adicionar usuarios -> anexar politicas existentes -> s3? full access(para os buckets) -> CRIAR

  chave de acesso
  Credenciais de segurança -> criar chave de acesso -> copia a publica e a secreta e adiciona no projeto
 -->


<!-- EC2 -->
<!--
  EC2 -> Instancias -> executar instancias -> Ubunto -> 20.04LTS -> criar novo par de chaves -> executar instancia -> muda o nome da instancia
 -->

<!-- conectar o nosso terminal ao servidor AWS -->

<!-- CONFIGURAÇÃO DA INSTANCIA -->
<!--
  sudo adduser nome_novo_usuario :criar usuário, passar senha
  sudo usermod -aG sudo nome_usuario :dar permissã de root ao usuário
  sudo su - nome_usuario: logar no usuário

  _dentro de usuario_
  mkdir .shh : criar pasta .ssh
  chmod 700.ssh/ :dar permissao para o ssh (700: ler, gravar, abrir diretorio)
  cd .ssh/
  touch authorized_keys :cria o arquivo authorized_keys
  vi authorized keys :abre editor de texto (pressione i para editar)
  cola a chave publica gerada no nosso computador local

  sudo apt update
  instalar node, docker e docker-compose
  node: [
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
  ]
  docker-compose: [
    sudo apt  install docker-compose
  ]
-->


<!-- DEPLOY -->
<!--
  ssh-keygen
 -->
