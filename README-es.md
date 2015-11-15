BoostAll
-------------


BoostAll es una plataforma para el diseño, el relevamiento y el análisis con el fin de mejorar el rendimiento de un atleta, los métodos de entrenamiento y el rendimiento de todo un equipo.
En una primera instancia esta enfocado para cualquier equipo deportivo, pero a medida que pase el tiempo y que el proyecto crezca va a ser útil no sólo para un equipo deportivo, sino para cualquier equipo de cualquier naturaleza.
Esta herramienta consta de tres niveles que la primera una parte web, para el entrenador para gestionar los atletas, formar los grupos, las rutinas para cada grupo y para mantener el control de todos los aspectos.
El segundo nivel consiste en una aplicación móvil que permite al atleta dar una devolucion de cómo fue el entrenamiento y como se sintio realizando alguna actividad de la rutina.
Y el tercer y último nivel está compuesto por un hardware de seguimiento específico o un reloj inteligente que recogerá todos los datos relacionados con el atleta para su uso.

BoostAll es la herramienta que cada entrenador, jefes de proyecto, u otra persona que está a cargo de un equipo debe tener.
Esta plataforma va a cambiar la forma de gestionar su equipo. Esto hará que usted esté en control total de cada aspecto de un equipo en cualquier momento.
Con esta herramienta se encargará de gestionar cada persona de forma individual en el equipo, la creación de grupos de personas, y la asignación de tareas a los mismos.
El nivel de detalle de cada tarea permite a la persona a cargo especificar el día, hora y duración de la misma y permite tambien realizar una descripción de la misma. Usted puede hacer una rutina agrupando diferentes tareas y especificar quién será el responsable de realizarlas.
Dentro de la rutina tiene una lista especificando cada tarea, con sus datos correspondientes. A medida que pasa el tiempo se puede marcar cada tarea con un check si fue correctamente hecha, o en el otro caso se puede marcar con una cruz. De cualquier manera usted puede añadir una descripción sobre el desarrollo de la misma.


####Main Included Technologies
#####Backend
- [Nodejs](https://nodejs.org/)
- [MongoDB](https://www.mongodb.org/)
- [Mongoose](http://mongoosejs.com/)
- [Express](http://expressjs.com/es/)
- [Jade](http://jade-lang.com/)
- [Stylus](https://learnboost.github.io/stylus/)
- [Passport](http://passportjs.org/)

####Frontend
- [Bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [jQuery validator plugin](http://jqueryvalidation.org/)
- [Angular](https://angularjs.org/)

####Develop
- [NPM](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Mocha](http://mochajs.org/)
- [Yeoman](http://yeoman.io/)
- [Anyandgo](http://anyandgo.io/)

##Installation guide

Primero necesitas clonarte el repositorio del proyecto. Solo ejecuta en tu terminal:
```bash
$ git clone https://github.com/EmprendedoresLA/emprendevs-equipo-3
```

Luego tenes que instalar todos los modulos que requiere la aplicacion, tanto en el backend como en el frontend.
```bash
$ cd emprendevs-equipo-3
$ npm install && bower install
```

Eso es todo! Ya estas listo para empezar a usar la aplicacion.

##Usage
Para arrancar el server y la aplicacion, tenes que ejecutar el siguiente comando en tu terminal:

```bash
$ Grunt
```

Va a estar escuchando request en el puerto 3000.

###Landing Page  - *Public side*
Esta es la primer pantalla que verá, en la que se describen las características de BoostAll, el equipo involucrado en el desarrollo, un formulario de contacto donde se puede enviar un correo electrónico al administrador de la página respecto a su solicitud y una opción de inicio de sesión sólo para usuarios.

###Loguearte como Administrador - *Public side*
Si posees las credenciales de administrador (**hint**: *username: mgallardo, password: asd123*), usted será capaz de entrar a la parte privada de la aplicación, la que le permite administrar los atletas. Para que esto suceda, debe hacer clic en la opción **_Login _** en la barra de navegación en la parte superior de la página. La aplicación carga la página de inicio de sesión, donde puedes insertar los datos correspondientes y entrar en la parte interesante

Cuando accede con éxito, se le redirige a la página del panel donde veras encontrar un calendario con las rutinas de cada día.

###Listando todas las actividades de una rutina - *Private side*
Una vez que estás en la página de inicio, verás un calendario con las rutinas de cada día. Dentro de cada rutina tiene la lista de cada actividad. Para ver esto, debe hacer clic en el calendario en la rutina que desea consultar. La aplicación carga otra página y una lista de todos las actividades involucradas. Esto le mostrará la actividad con una descripción y una sección de comentarios. También le permite marcar como terminada la actividad con éxito con un check o sin terminar por cualquier motivo con una cruz

###Listar todos los atletas - *Private side*
Para lograr esto, debe hacer clic en la opción **_Players_** en el menú en la parte izquierda de la pantalla. La aplicación carga otra página y una lista de todos los atletas en una tabla. También le dará la posibilidad de editar cada atleta y añadir otros nuevos al sistema.
Dentro de esta página puede filtrar los atletas por su nombre.


###Eliminar un atleta - *Private side*
All you have to do is click in the *[edit]()* option on the column at the right of the table. The application will load the editin page page with the data of the athlete. Then you have to click in the *[delete]()* option at the bottom.

###Editar un atleta - *Private side*
First you should click on the *[edit]()* option on the column at the right of the table and the application will load the editing page. It allows you to edit only the **Name**, the **Lastname**, **Phone**, the **Height** and **Weight** and the **Email** of the athlete. Once you're done, click in the *Save* button.

###Ingresar un nuevo atleta - *Private side*
To add a new athlete at the database, you have to click in the *[new]()* option at the top of the table. The application will load the new at page and you'll be able to complete each field and *Save* the new athlete. Once you saved it, you'll  be redirected to the athlete list page.

###Ingresar una nueva rutina - *Private side*
To add a new routine to the database, you have to click in the **_Training_** option in the menu at the left side of the screen. This use a multiple step procedure. 
First the application will load the group page and you'll have to select an existing group or create a new one and *Save* the new athlete. Once you saved it, the application will load a new page with a calendar where you can choose the day and hour of the routine and add the fields **Name**, **Description** and **Activity**. Once you complete this fields you'll have to complete the fields **Name**, **Description** and **Time** for every training inside the routine. Then, after doing all of this, the application will load a page showing the routine, group and activities information, and you'll be able to *Save* it. Once you saved it, you'll be redirect to the panel page.




##Credits
[@jacodom](https://twitter.com/jacodom)
[@pablocordoba11](https://twitter.com/pablo_tico)
[@cantoia](https://facebook.com/noel.cantoia)
[@predaignacio](https://facebook.com/ignaciopreda)
[@guiso92](https://facebook.com/emilio.guisolfo)