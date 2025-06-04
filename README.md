# Saudações 🖖
Se você for alguém que, de alguma forma, veio parar aqui, sinta-se à vontade para clonar este repositório.
Agora se você é da SAGAT AI, segue a fio um breve guia dessa aplicação.

## Rodar o aplicativo 📱
Para testemunhar o pleno funcionamento do aplicativo, você deve ter instalado algumas coisas que vou presumir que já tenha instalado. De resto, clone este repositório e siga os passos abaixo. Qualquer dúvida,podem entrar em contato comigo.

```sh
# Usando npm
npm install
npm run ios # Para rodar no iOS
npm run android # Para rodar no Android

# Ou usando Yarn
yarn
yarn ios # Para rodar no iOS
yarn android # Para rodar no Android
```

## Funcionalidades ⚙️
Esse aplicativo tem diversas funcionalidades, entre elas estão:

#### Tema claro e tema escuro 🌓
O tema claro e o tema escuro é algo que eu, particularmente, gosto muito de entregar nas minhas aplicações. Nesse projeto, esses temas variam de acordo com o tema do seu dispositivo.

#### Registro de conta ™️
Apesar de não estar explicitado nas instruções, fica implícita a necessidade de registrar contas.

### Autenticação ✅
Outra parte que eu gosto muito que tenha em minhas aplicações é a parte de autenticação, onde, nesse caso, é necessário ter um e-mail e uma senha.

### Painel de conta 💳
É exbido na Header os dados do usuário, podendo ocultar o seu saldo atual.

### Extrato completo com filtro e scroll infinito 📋
É possível verificar o extrato com filtro de recebidas e entradas, valor máximo e mínimo, e intervalo de data.

### Recarregar 🔋
Se os dados da sua conta ainda não foram atualizados, não se preocupe: você pode recarregar os dados com um reloadng ao deslizar o dedo para baixo.

### Transferência 🏦
É possível fazer e receber transferências entre uma conta e outra, selecionando para quem você quer transferir, o que facilita o processo de digitação.

### TabBar
Não sei vocês, mas gosto muito de implementar TabBar nas aplicações.

## Endpoints utilizados
- */auth/sign_in*
- */auth/sign_up*
- */users/bank_accounts*
- */users/bank_accounts/my*
- */users/bank_account_transfers*
- */users/bank_account_transfers/statement*

## O que eu faria se tivesse mais tempo? ⏱️

### Leitura digital para entrar 🫆
Certamente faria isso, além de ser algo bem moderno, é muito interessante do ponto de vista da segurança digital, tema muito debatido hoje em dia.

### Corrigiria pequenos pontos de problema ❌
Todo aplicativo tem algum pequeno problema que pode comprometer o sistema, seria mais cauteloso com esses pontos e me comprometeria mais com os dados que estão sendo expostos.

## Figma ✏️
Para mostrar que tenho um pézinho com design, fiz um pequeno esboço do que seria entregue. Pelo pouco tempo de tinha, não consegui concluir, mas segue o link abaixo, caso queiram conferir.
[You Bank Figma](https://www.figma.com/design/QyQZgz8wJqGFTSJJwdauaU/You-Bank?node-id=0-1&t=0IdKjSBY7zmjPkB7-1)

## Imagens e Vídeos 🎥📷
Segue um link com os vídeos e imagens dos testes do aplicativo.
[Imagens e Vídeos](https://github.com/Quindinzao/you-bank-helper)
