# TRABAJO MONGODB-Mercedes Rey Lara :grin::thumbsup::computer:
### ENUNCIADO DEL TRABAJO
El proyecto que tenéis que hacer se divide en 2 partes. En primer lugar os doy el contexto de lo que se pretende y luego será explicada cada una de las partes.
	Se tiene que hacer una página que al darle a un botón muestre una frase aleatoria de la base de datos y tiene que haber una segunda página donde se puedan guardar las frases en la base de datos.
	Para ello, se tiene que poner un botón que cambie de una página a otra y así poder hacer uso de la plataforma completa.
	La página principal será la que muestre el aleatorio y responderá a la ruta http://localhost/ y la página que permita guardar la frase debe ser http://localhost/guardar. Se deben añadir las rutas que se consideren necesarias para que el sistema funcione.
Las librerías y páginas que se pueden usar de referencia están en la sección de Librerias.

## PASOS PARA LA EJECUCIÓN DEL TRABAJO :one::two::three:...

Primero de todo tenemos que, en una carpeta vacía, instalar ejs(para renderizar la página web), mongoose(para poder conectarnos con la base de datos) y express(para poder crear nuestro propio servidor y hostear la página).Para ello abrimos el terminal y con el comando npm init,para iniciar node y posteriomente el comando npm install,instalaremos las distintas librerías para poder trabajar.
Una vez hecho esto,tenemos que crear los respectivos archivos que vamos a usar.
Yo he usado un modelo para las frases y el autor,dos .ejs tanto para insertar la frase como para el menú inicial de generación de la frase y dos .js para las funciones y renderizar las páginas.

![MIS ARCHIVOS ](https://github.com/MercedesReyLara/MercedesReyLara/blob/master/mis%20archivos.png)

##### Los packaje.json se crean al insertar las librerías y el .gitignore sirve para que el github no lea todos los módulos de node insertados anteriormente.
## CREAR EL MODELO
Para ello tenemos que pensar en la estructura, la cual es muy simple.Una frase y un autor,son 2 strings.

## CONECTAR LA BASE DE DATOS
Para ello utilizaremos mongoDB. Crearemos un cluster vacío y utilizaremos el enlace obtenido en la función "conectar" para conectarla.En nuestro código usaremos comandos como .await mongoose conect para que se pueda conectar correctamente.
