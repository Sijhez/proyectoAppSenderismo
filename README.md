# Andare APP
![index_api](https://i.postimg.cc/B6d9jGkR/index.jpg)
## Autoría: GeorgeLR87 / Sijhez
<br>

## Introducción :
Este proyecto esta enfocado a todos aquellos que quieran iniciarse en el mundo del senderismo, y no saben cómo.
El desarrollo esta enfocado a convertirse en una red social de senderismo amateur con enfoque turístico, en la cual los usuarios podrán compartir las rutas que han realizado, hospedajes, registro fotográfico y descripción de la ruta.

## Componentes : 
 El proyecto esta armado en Node.js, con Express MongoDB para generación de base de datos, y Handlebars como renderizador de vistas.
 Puede instalar los componentes del `package.json` con npm install --yes 
<br>

# Instrucciones :
## instalar proyecto

Descargar el proyecto desde:

- https://github.com/GeorgeLR87/proyectoAppSenderismo.git  :Repo Jorge
- https://github.com/Sijhez/proyectoAppSenderismo.git :Repo Sinuhé

```bash
$ cd proyectoAppSenderismo
$ git clone https://github.com/GeorgeLR87/proyectoAppSenderismo.git 
$ npm install --yes
```

## Sembrado de bases de datos
Una vez instalados los componentes, generar un archivo `.env`. Instalar las siguientes variables globales : 
*  PORT=3000
*  MONGODB_URI= 'mongodb://localhost:27017/'
*  SESSION='palabraSecreta'

Una vez conectadas las bases de datos, levantar server con 
```bash
npm run dev
```
Debe mostrar el siguiente mensaje en console:
```bash
Servidor conectado en el puerto: http://localhost:3000
Base de datos conectada
```
Ejecutar el sembrado de datos: El archivo `seeds/routeSeeds.js` ejecuta el sembrado de los primeros dos models de Routes:

```bash
$ cd seeds
$ node routesSeeds.js
```


El proyecto presenta tres models que se encuentran en `/models/`: Perfil, Route y User.

