import * as Modules from './utils/module-extensions';
import {App_Component} from './modules/app.component';
import {routing} from './app.routing';

@Modules.NgModule({
    imports:[Modules.BrowserModule,routing],
    declarations:[App_Component],
    bootstrap:[App_Component]
})
export class App_Module{

}
