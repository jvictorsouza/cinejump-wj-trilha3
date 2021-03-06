![image](https://user-images.githubusercontent.com/54218892/157514460-a1302985-4a3e-4306-9ca2-0d4ef81ab143.png)

# Cinejump

Projeto final da Trilha 3 para desenvolvedores Frontend React disponibilizado pela Academia Webjump, programa de capacitação interno da empresa Webjump Design em Informática. O projeto consiste em um website voltado para amostragem de filmes e séries.

O presente repositório foi originado a partir do _fork_ da [Trilha 2](https://github.com/jvictorsouza/cinejump-wj-trilha2), onde os seguintes componentes e módulos foram desenvolvidos:

- TextInput
- ToastNotification
- Header
- Footer
- Login (LocalStorage)
- Cadatro (LocalStorage)
- Home
- Favorites (LocalStorage)

O projeto da [Trilha 2](https://github.com/jvictorsouza/cinejump-wj-trilha2), teve como pilar as seguintes características/ferramentas:

- React
- Typescript - interfaces and types
- MUI - material-UI package
- TMDB API - axios package
- Youtube API - youtube-search package

## Motivação

Criação de uma plataforma com login, cadastro e home page com ReactJS, Typescript, Design System e Storybook.

## Métodos e resultados

O projeto visa documentar e padronizar os principais componentes e módulos do projeto, como também substituir os usos do LocalStorage pela [Cinejump API](https://github.com/90lucasgabriel/cinejump-api#live-api) . As ferramentas adicionadas ao projeto [Trilha 2](https://github.com/jvictorsouza/cinejump-wj-trilha2) para atingir tal objetivo foram:

- Default Theme
- Design System
  - values
  - components
- Storybook

## Projeto

O projeto tem como pilar as seguintes características/ferramentas:

- React
- Typescript - interfaces and types
- MUI - material-UI package
- TMDB API - axios package
- Youtube API - youtube-search package

## Requisitos e Instruções de execução

### Aplicação
Primeiro de tudo é necessário configurar o arquivo .env com a url da API TMDB (REACT_APP_TMDB_API_BASE_URL) juntamente com a key de acesso pessoal (REACT_APP_TMB_API_KEY), a url de acesso às imagens (IMAGE_BASE_URL) e por fim o token para acesso à API do Google, mais precisamente para a API Youtube Search (REACT_APP_API_GOOGLE_YOUTUBE_V3)

Valores exemplo:

- REACT_APP_TMDB_API_BASE_URL = 'https://api.themoviedb.org/3'
- REACT_APP_TMB_API_KEY = 'AIzaSyB0dAPeTlnv9j-7vM3-RCNPWA0NFmppvo0'
- REACT_APP_CINEJUMP_API_BASE_URL = 'https://cinejump-api.herokuapp.com'
- IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
- REACT_APP_API_GOOGLE_YOUTUBE_V3 = 'b9e1384462905203809836896979951d'

Configurado o arquivo .env, agora com o software NODE.js e o gerenciador de pacotes npm instalados, execute as instruções abaixo na pasta raiz do projeto:

```console
npm install
npm run start
```

Acesse a url http://localhost:8080/

### Storybook
Após já ter instalado as dependencias do projeto, execute o comando abaixo na pasta raiz do projeto:
```console
npm run storybook
```

## Vídeo demonstrativo

https://user-images.githubusercontent.com/54218892/157513797-76f2ea2b-0ba5-4894-a40f-725f438a32fe.mp4

https://user-images.githubusercontent.com/54218892/157514029-ce446c89-b890-4848-808e-fa4a139fee14.mp4

