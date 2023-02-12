# Chat App con Express, React y Socket.io

Este proyecto es una aplicación de chat básica que utiliza [Express](https://expressjs.com/), [React](https://reactjs.org/) y [Socket.io](https://socket.io/). La aplicación está dividida en dos carpetas: una para el servidor de Express y otra para el cliente de React.

## Pre-requisitos

Antes de iniciar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu equipo.

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la raíz del proyecto:
```
npm i
```

## Entorno de desarrollo

Para iniciar el entorno de desarrollo, ejecuta el siguiente comando en la raíz del proyecto:
```
npm run dev
```
## Compilación para producción

Para compilar el entorno de producción, ejecuta el siguiente comando en la raíz del proyecto:
```
npm run build
```


## Nota sobre la carpeta "client"

La carpeta "client" contiene el código del cliente de React, que funciona como un servidor estático en Express, pero también puede funcionar de manera independiente.

## ES modules

Este proyecto utiliza ES modules para una mejor organización y mantenimiento del código.

## Uso
Una vez que se haya ejecutado correctamente el servidor, puedes acceder a la aplicación de chat a través de tu navegador en http://localhost:8080. Puedes abrir varias pestañas para simular múltiples usuarios y comenzar a chatear en tiempo real.

## Contribución
Si deseas contribuir a este proyecto, por favor, haz un fork y envía tus cambios a través de una solicitud de pull. Estamos abiertos a todas las sugerencias y mejoras.

## Licencia
Este proyecto está licenciado bajo la licencia MIT. Para obtener más información, consulta el archivo LICENSE.