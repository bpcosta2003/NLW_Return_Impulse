# RocketSeat NLW Return - Impulse

Elaborado pela  [RocketSeat](https://www.rocketseat.com.br/) na NLW Return - Impulse team.

## Professores 👨🏽‍🏫
- [Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)

## Projeto 🖱️

<h3>Widget para realizar Feedbacks - Reportar BUGS, Dar IDEIAS ou Outro</h3>
<h3>A mensagem é enviada para o banco e dados com a screenshot tirada da tela ( há um botão que realiza essa função dentro do Widget )</h3>
<h3>A mensagem também é enviada por email ( para testar foi usado o [Mailtrap](https://mailtrap.io/))</h3>
</br>

Veja o exemplo de uso do projeto: 

![image](https://user-images.githubusercontent.com/69023428/173976232-56f61523-c451-4e25-b318-caad0467d725.png)
![image](https://user-images.githubusercontent.com/69023428/173976361-761fc12d-e216-42c7-ab9d-6fc9345be813.png)

## Tecnologias utilizadas 💻 WEB
<div style="display: inline_block"><br>
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
 <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg">
 <img align="center" height="30" width="40" src="https://user-images.githubusercontent.com/69023428/173976855-1ea3994f-570c-49a5-bd43-67b746fd239a.png" /> 
 <img align="center" height="30" width="150" src="https://user-images.githubusercontent.com/69023428/173977057-570c0120-b8b6-4a58-840a-abb0ab85edfd.png" />
</div>

</br>

## Tecnologias utilizadas 📋 SERVER
<div style="display: inline_block"><br>
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
 <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
 <img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg">
</div>

</br>

### Extensões e outros packages utilizados 🔧
- Cors
- NodeMailer
- Prisma
- html2canvas
- phosphor-react

## Funcionalidades ⚙️
- Screenshot da tela atual ✔️
- Envio e email com a mensagem e o screenshhot ✔️
- Tstes unitários com JEST ✔️

## Configuração inicial
- Clone o projeto com ```git clone```
- Acesse o terminal e digite ```npm i``` para baixar todas as dependências de acordo com o package.json
- Após ter instalado as dependências, digite no terminal ```npm run dev``` para executar a aplicação WEB e também abra o SERVER e digite no terminal ```npm run dev```

## Configuração Nodemailer
 - Crie sua conta no [Mailtrap](https://mailtrap.io/)
 - Clique em ADD INBOX e clique no INBOX criado
 - Em INTEGRATIONS selecione Nodemailer
 - Copie o HOST, PORT e AUTH
 - Abra o arquivo ```nodemailer-mail-adapter.ts``` dentro do WEB
 - Substitua os atuais HOST, PORT e AUTH da const transport pelas suas credenciais antes copiadas.

### Aviso ⚠️
Troque a variável e ambiente 'VITE_API_URL' pela url de acesso de sua API do servidor.

