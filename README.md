#  Aplicação de fluxo de aprovação para compra de material de escritório - Approval Flow Application WEB
Descrição
Este projeto é uma aplicação web desenvolvida utilizando Angular, TypeScript, RxJS, ngx-mask, SCSS e Angular Material, que implementa um sistema de fluxo de aprovação para compras de material de escritório. A aplicação permite aos usuários criar solicitações de compra especificando os itens necessários. Além disso, os usuários com permissões de aprovação podem visualizar e aprovar/rejeitar as solicitações de compra pendentes.

O uso de TypeScript oferece tipagem estática para um desenvolvimento mais seguro e robusto, enquanto o RxJS é utilizado para programação reativa, facilitando o gerenciamento de fluxos de dados assíncronos. O ngx-mask é utilizado para máscaras de entrada, garantindo que os dados inseridos pelos usuários sigam um formato específico.

O Angular Material é utilizado para fornecer uma ampla variedade de componentes de interface do usuário predefinidos e estilizados, garantindo uma experiência de usuário consistente e responsiva.

O SCSS é utilizado para estilização personalizada, oferecendo maior flexibilidade no design da interface do usuário e permitindo a criação de estilos mais complexos e reutilizáveis.

[https://alinebarbosasilva.github.io/approval-flow-app-web/login/](https://alinebarbosasilva.github.io/approval-flow-app-web/login)

![image](https://github.com/alinebarbosasilva/approval-flow-app-web/assets/80774707/b37399fe-32aa-40fb-9646-6c4de504aad1)

![image](https://github.com/alinebarbosasilva/approval-flow-app-web/assets/80774707/8b249934-2efa-4064-b90f-3d9a97402bf1)

![image](https://github.com/alinebarbosasilva/approval-flow-app-web/assets/80774707/c0cf706c-9180-486c-a0fd-1a91517afad2)

![image](https://github.com/alinebarbosasilva/approval-flow-app-web/assets/80774707/9c50b10b-0d7d-47b7-97cc-ea790dc3f20b)


- No projeto contém uma tela de login que pode ser acessada através de 3 tipos de usários com visões e permissões diferentes:
  - SOLICITANTE -- solicitante@company.com.br utilizando a senha Senha@123
  - ALMOXARIFE --  almoxarife@company.com.br  utilizando senha Senha@123
  - ADMININSTRATIVO -- administrativo@company.com.br  utilizando senha Senha@123

Este é um projeto atualizado com a versão mais recente do framework Angular - 17.0.6 

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

- Node.js: https://nodejs.org/  --- (Versão minima 20.9.0) compatível com Angular 17.0.6
- Angular CLI: `npm install -g @angular/cli`

## Instalação

1. Clone o repositório: `git clone [https://github.com/alinebarbosasilva/approval-flow-app-web.git]`
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
