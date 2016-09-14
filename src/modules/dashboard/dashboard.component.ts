

import {NgComponent,OnInitComponent} from '../../utils/component-extensions';
import {Nav_Component} from '../../ui-elements/navbar/nav.component';
import {breadcrumb_Component} from '../../ui-elements/breadbrumb/path.component';
@NgComponent({
    selector:`dashboard`,
    template:`<!--导航-->
            <navbar></navbar>
            <div id="page-wrapper">
                <breadcrumb title="{{title}}"></breadcrumb>
                <div class="wrapper wrapper-content">
                    <div class="row">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>
            `,
    directives:[Nav_Component,breadcrumb_Component]
})
export class Dashboard_Component implements OnInitComponent{

    title:string;

    ngOnInit(){
        this.title = "Dashboard";
    }
}
