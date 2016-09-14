import * as Modules from '../../utils/module-extensions';
import {Dashboard_Component} from './dashboard.component';
import {routing} from './dashboard.routing';

@Modules.NgModule({
    imports:[Modules.CommonModule,routing],
    declarations:[Dashboard_Component],
    bootstrap:[Dashboard_Component]
})
export default class Dashboard_Module{

}
