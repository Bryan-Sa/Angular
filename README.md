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
If you want to pass children to component do not forgot to use : <ng-content>

Use of @Input "props name": initialization in class component (go tu button component for exemple)

How to style component with props:

use of Ngstyle if props is an object style exemple : [styleProps]="{obj declared in class}" // inside component =  @Input() styleProps: { [klass: string]: any; } = {} [ngStyle]="styleProps";

use of Ngclass ex: [ngClass]="["props"]" | [ngClass]="[props, {class: props === condition}]" ();

Two way binding data:
pass the variable to the custom component with

inside custom component :
@Input() variable name
@Output() variable name + Change : EventEmitter<type of varibale> = new EventEmitter<type of variable>();


/////////////////
color code : blue: #3F557F
light dark: #34373D
light blue: #B9C5DC