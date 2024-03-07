#  Aplicação de fluxo de aprovação para compra de material de escritório - Approval Flow Application WEB
Descrição
Este projeto é uma aplicação web desenvolvida utilizando Angular, TypeScript, RxJS, ngx-mask, SCSS e Angular Material, que implementa um sistema de fluxo de aprovação para compras de material de escritório. A aplicação permite aos usuários criar solicitações de compra especificando os itens necessários. Além disso, os usuários com permissões de aprovação podem visualizar e aprovar/rejeitar as solicitações de compra pendentes.

O uso de TypeScript oferece tipagem estática para um desenvolvimento mais seguro e robusto, enquanto o RxJS é utilizado para programação reativa, facilitando o gerenciamento de fluxos de dados assíncronos. O ngx-mask é utilizado para máscaras de entrada, garantindo que os dados inseridos pelos usuários sigam um formato específico.

O Angular Material é utilizado para fornecer uma ampla variedade de componentes de interface do usuário predefinidos e estilizados, garantindo uma experiência de usuário consistente e responsiva.

O SCSS é utilizado para estilização personalizada, oferecendo maior flexibilidade no design da interface do usuário e permitindo a criação de estilos mais complexos e reutilizáveis.

https://alinebarbosasilva.github.io/approval-flow-application-web/login/

![image](https://github.com/alinebarbosasilva/approval-flow-application-web/assets/80774707/38a9ea8b-57ae-45af-a62f-70ff9442c6b7)


- No projeto contém uma tela de login que pode ser acessada através de 3 tipos de usários com visões e permissões diferentes:
  - SOLICITANTE -- solicitante@senior.com.br utilizando a senha Senior@123
  - ALMOXARIFE --  almoxarife@senior.com.br  utilizando senha Senior@123
  - ADMININSTRATIVO -- administrativo@senior.com.br  utilizando senha Senior@123

Este é um projeto atualizado com a versão mais recente do framework Angular - 17.0.6 

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

- Node.js: https://nodejs.org/  --- (Versão minima 20.9.0) compatível com Angular 17.0.6
- Angular CLI: `npm install -g @angular/cli`

## Instalação

1. Clone o repositório: `git clone [https://github.com/alinebarbosasilva/approval-flow-application-web.git]`
2. Navegue até o diretório do projeto: `cd approval-flow-application-web/approval-flow-application`
3. Instale as dependências: `npm install`
4. Execute npm start no terminal
   
## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm start

Agora você pode abrir o seu navegador e visitar http://localhost:4200.

Build
Para criar uma build de produção, execute o seguinte comando:

npm run build --prod


Os arquivos de build serão armazenados no diretório dist/.
