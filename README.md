BoostAll
-------------
BoostAll it's a platform for designing, relieving and analazing in order to improve the performance of an athlete, the training methods and the performance of an entire team.
in a first instance it's focused for any sport team, but as time passes and the project grows it'll be useful not just for a sport team but for any team of any nature

This tool consists of three levels being web the first one, for the coach to manage the athletes, build the teams, the routines for each team and for keeping control of every aspect.
The second level consists of a mobile application that allows the athlete to give a feedback of how the training went
And the third and last level is composed by an specific tracking hardware or a smart watch that will collect all data related to the athlete.


BoostAll it's the tool every trainer, project managers, or other person that is in charge of a team MUST have.
This platform will change the way you manage your team. It will make you to be in full control of every aspect anytime.


Whit this tool they will manage every individual person in the team, creating groups of people, and assigning tasks to them.
The level of detail of each task allows the person in charge to specify the day, hour and duration with a
description. You can make a routine gathering different tasks and specifying who will be responsible to perform them.
Inside the routine you have a list specifying every chore, with their corresponding data. As time passes you can mark each task with a check if it was properly made, or in the other case you can mark it with a cross. Either way you can add a description
about the performance of the task.

####Main Included Technologies
#####Backend
- [Nodejs](https://nodejs.org/)
- [MongoDB](https://www.mongodb.org/)
- [Mongoose](http://mongoosejs.com/)
- [Express](http://expressjs.com/es/)
- [Jade](http://jade-lang.com/)
- [Stylus](https://learnboost.github.io/stylus/)
- [Passport](http://passportjs.org/)
- [Anyandgo](http://anyandgo.io/)

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

##Installation guide

First you need to clone the project repository. Just execute in your terminal:
```bash
$ git clone https://github.com/EmprendedoresLA/emprendevs-equipo-3
```

Then you have to install all the modules the application requires, both in the backend and in the frontend.
```bash
$ cd emprendevs-equipo-3
$ npm install && bower install
```

That's all! You're ready to start using the application.

##Usage
To start the server and the aplication, you have to execute the following command in your terminal prompt:

```bash
$ Grunt
```

It'll be listening for requests at the port 3000.

###Landing Page  - *Public side*
This is the first screen you'll see, where it describes the characteristics of BoostAll, the team involved in the development, a contact form where you can send and email to the administrator of the page regarding your request and a login option just for users only.

###Log in as Administrator - *Public side*
If you have administrator credentials (**hint**: *username: mgallardo, password: asd123*), you will be able to enter to the private side of the application, the one that lets you administrate the athletes. To make this happen, you should click in the option **_Login_** in the navbar at the top of the page. The application will load the login page, where you can insert the correct credentials and get into the interesting part.

When you access successfully, you'll be redirected to the panel page where you'll see a calendar with the routines of each day.

###Listing all the trainings of a routine - *Private side*
Once you're in the panel page, you'll see a calendar with the routines of each day. Inside each routine you have the list of every training involved. To see this, you should click in the routine you want to consult in the calendar. The application will load another page and list all the activityes envolved. This will show you the activity with a description and a comment section. It also allows you to mark it as finished succesfully with a check or unfinished for any reason with a cross


###Listing all the athletes - *Private side*
To accomplish this, you should click in the option **_Players_** in the menu at the left side of the screen. The application will load another page and list all the athletes in a table. It will also give you the possibility to edit each athlete and add new ones.
Inside this page you can filter the athletes by name.


###Deleting an athlete - *Private side*
All you have to do is click in the *[edit]()* option on the column at the right of the table. The application will load the editin page page with the data of the athlete. Then you have to click in the *[delete]()* option at the bottom.

###Editing an athlete - *Private side*
First you should click on the *[edit]()* option on the column at the right of the table and the application will load the editing page. It allows you to edit only the **Name**, the **Lastname**, **Phone**, the **Height** and **Weight** and the **Email** of the athlete. Once you're done, click in the *Save* button.

###Adding a new athlete - *Private side*
To add a new athlete at the database, you have to click in the *[new]()* option at the top of the table. The application will load the new at page and you'll be able to complete each field and *Save* the new athlete. Once you saved it, you'll  be redirected to the athlete list page.

###Adding a new routine - *Private side*
To add a new routine to the database, you have to click in the **_Training_** option in the menu at the left side of the screen. This use a multiple step procedure. 
First the application will load the group page and you'll have to select an existing group or create a new one and *Save* the new athlete. Once you saved it, the application will load a new page with a calendar where you can choose the day and hour of the routine and add the fields **Name**, **Description** and **Activity**. Once you complete this fields you'll have to complete the fields **Name**, **Description** and **Time** for every training inside the routine. Then, after doing all of this, the application will load a page showing the routine, group and activities information, and you'll be able to *Save* it. Once you saved it, you'll be redirect to the panel page.




##Credits
[@jacodom](https://twitter.com/jacodom)
[@pablocordoba11](https://twitter.com/pablo_tico)
[@cantoia](https://facebook.com/noel.cantoia)
[@predaignacio](https://facebook.com/ignaciopreda)
[@guiso92](https://facebook.com/emilio.guisolfo)