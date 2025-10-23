LEIA COM MUITA ATENÇÃO! 
=======================

Passo 1)
Para testar o conteúdo desta aula, você obrigatoriamente tem que ter assistido e executado os passos descritos na  aula número 1 da playlist: 
https://www.youtube.com/watch?v=4ijU5fdkag8&list=PL4x1btvjpIuBOYaXjeHpX7r5_c2ysUUH8&index=6


Passo 2)
Instalado o pacote nodemon:
  > npm install --save-dev nodemon

Passo 3)
Se os passos anteriores estiverem corretos e você estiver acessando a aplicação em http://localhost:3000
Baixe o conteúdo de github.com/prof-saulo-santos/projeto_universidade_web_aula_8

Passo 4)
Descompacte o conteúdo. 
Você verá as seguintes subpastas:
  +public
  +src
e os dois arquivos:
  -package.json
  -package-lock.json

Passo 5)
Copie a pasta "node_modules" do projeto criado durante a aula número 1 da playlist (com nodemon) e cole na pasta descompactada do passo 4.
Sua estrutura de pastas deve ficar como:
  +node_modules
  +public
  +src
e os dois arquivos:
  -package.json
  -package-lock.json

Passo 6)
Gerando os registros fakes:
  > npm run seed:alunos
  > npm run seed:pagamentos

Passo 7)
Rode a aplicação:
  > npm run dev
