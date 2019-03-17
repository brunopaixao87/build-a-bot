# build-a-bot

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint

```
###NOTES
```
Adcionando sass ao projeto
npm i node-sass sass-loader --save-dev 

Lifecycle vue
https://alligator.io/vuejs/component-lifecycle/
https://br.vuejs.org/v2/guide/instance.html
beforeCreate()
created()
beforeMount()

Duas formas de utilizar router link
<router-link to="/build">
<router-link :to="{name: 'Home'}" >
exact add no router-link para css assim a examente a rota ativa

npm run build -> default npm run build -- --mode=production

npm run build -- --mode=development
npm run build -- --mode=staging
No arquivo de env exceto a var NODE_ENV todas as outras que forem criadas deve começar com VUE_APP...
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
