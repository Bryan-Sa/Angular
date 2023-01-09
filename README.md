create angular repo: 
ng n "name"

install:
npm install

run:
npm start

usefull command:
add --flat to command if you do not want to create a folder while generating
create component: ng g c "path/name" from app/src (do not add app/src) will create a folder with name
create module: ng g m "path/name" from "app/src" will create a module with name

Structure:

src/app/app-routing : declare screen component with associated route.

src/app/component : will contain custom lib (button, input, switch, ect...) everything will be export in component.module, just call component module to use each component.

src/app/screen: will contain all web screen all screen declare in screen.module.

How to pass props to component:
Use of @Input "props name": initialization in class component (go tu button component for exemple)
