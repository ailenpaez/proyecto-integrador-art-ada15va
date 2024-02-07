# Trabajo integrador del módulo 4 - Asincronía/Api.

![Art Institute of Chicago.](https://pentagram-production.imgix.net/d88b76cb-7f59-4bd5-8a27-871aeacbb8cf/am_artinstituteofchicago_01.jpg?rect=0%2C460%2C3020%2C1888&w=1500&fit=crop&fm=jpg&q=70&auto=format&h=935 )

## 🔸 Introducción:

En este trabajo implementamos el uso de asíncronia para obtener respuestas de una api asignada. En este caso se utilizó la api del **Art Institute of Chicago**.
Se asignaron cinco métodos a utilizar con esta api:

1. *  getAllData().
2. * getAllTitlesArts().
3. * getAllMappedArts().
4. * getPublicationHistoryById(id).
5. * getDateDisplayById(id).

Estos métodos se ejecutarán por la terminal, cada uno con un comando distinto y nos mostrarán un resultado determinado.

## 🔸 Formato de trabajo:

* Esta aplicación tiene un formato MVC, con una carpeta **src** que contiene archivos controller, database,model en sus carpetas correspondientes del mismo nombre. En model se alojaron los cinco métodos que se asignaron y que manejan las consultas de la api. También contiene el archivo **index**, que contiene un switch que ejecuta a las funciones exportadas del model.
    A medida que se fue desarrollando el proyecto, agregamos una carpeta *interfaces* que contiene el tipado de varios objetos que se utilizaron para tipar los metodos en el archivo model.
* Fuera de la carpeta **src**, tenemos el archivo ejemplo donde ira alojada la api a utilizar. Este archivo es *.env.example*. 

## 🔸 Modo de ejecución:

 Para ejecutar estos procesos y poder ver la información solicitada, se debe pasar una serie de palabras ordenadas por la terminal que consisten de un **comando de ejecución**, una **palabra clave** y en algunos casos, un **número de id**.
 
|  🎨   | COMANDO DE EJECUCIÓN | PALABRA CLAVE (KEY) |  ID   |
| :---: | -------------------- | :-----------------: | :---: |
|  1.   | npm run start        |       allData       |       |
|  2.   | npm run start        |      allTitles      |       |
|  3.   | npm run start        |       allArts       |       |
|  4.   | npm run start        | publicationHistory  |  ID   |
|  5.   | npm run start        |     displayDate     |  ID   |

 
 ## 🔸 Respuestas:

 1. Muestra por la consola un objeto con toda la información pura de la API.
 2. Muestra por la consola un array de strings con los *títulos* de las obras de arte.
 3. Muestra por la consola una array de objetos con datos generales como *id*, *título*, *departamento* al que pertenece y *dimensiones* de la obra.
 4. Muestra por la consola string con la *publicación histórica* de la obra correspondiente al *ID* agregado luego de la 'palabra clave'.
 5. Muestra por la consola string con la *fecha indicada o aproximada* correspondiente a la obra del *ID* pasado como parámetro.

***
### 🗿 Fuentes ###

 * LINK API -> [Art Institute of Chicago.](https://api.artic.edu/api/v1/artworks/)
 * Documentación -> [Documentation - Art Institute of Chicago.](https://api.artic.edu/docs/)
 * IIFE - Autoinvocación de funciones. -> [IIFE](https://developer.mozilla.org/es/docs/Glossary/IIFE)
 
***


