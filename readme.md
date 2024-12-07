# Localização em Tempo Real (React Native)

Bem-vindo ao **Localiza**! Este é um aplicativo desenvolvido em **React Native** que permite que você consiga ver em um mapa sua localização em tempo real.

## 🚀 Tecnologias Utilizadas

- **Front-end**: React Native
- **Back-end**: Node.js, Express.js
- **Banco de Dados**: MongoDB

## 📋 Funcionalidades

🌍 Mapa em Tempo Real
- Visualize sua localização no mapa em tempo real.
- Utilize mapas com zoom e interação amigável.

📊 Exibição de Coordenadas no Mapa
- Dados de localização puxados diretamente do GPS do usuário.

## 📦 Como Rodar o Projeto

### 📲 Configuração do Frontend

### 1. Clonar o Repositório

```bash
git clone https://github.com/Vieirinha122/LOCALIZACAO_REACT_NATIVE.git
cd LOCALIZACAO_REACT_NATIVE
```

### 2. Instalar dependências do Frontend

```bash
npm install 
```

### 3. Inicialize o App com Expo

```bash
npx expo start
```
### 4. Acesse pelo Celular ou Emulador

- Após executar npx expo start, pressione a tecla s para abrir o QR Code.
- Escaneie-o no app Expo Go no celular para acessar o app.

### 📂 Configuração do Backend

## 1. Abra outro terminal e entre dentro da pasta Backend

- cd LOCALIZACAO_REACT_NATIVE/Backend

## 2. Instale as Dependências Backend

```bash
npm install
```

## 3. Crie um arquivo chamado .env e configure o MongoDB.

- Configure o arquivo .env com a variável de ambiente MONGO_URI.

```bash
MONGO_URI=mongodb://localhost:27017/yourdb
```
## 4. Inicie o servidor Backend.

```bash
node server.js
```


### 📊 Exemplo de Funcionalidade
Após configurar, você poderá:

- Visualizar sua localização no mapa em tempo real.