
import {NgComponent} from '../utils/component-extensions';
import {Nav_Component} from '../ui-elements/navbar/nav.component';

import {Footer_Component} from '../ui-elements/footer/footer.component';
@NgComponent({
    selector:'app',
    template:`<div id="wrapper">
            <router-outlet></router-outlet>
    </div>
    <footer></footer>`,
    directives:[Footer_Component]
})
export class App_Component{


}
