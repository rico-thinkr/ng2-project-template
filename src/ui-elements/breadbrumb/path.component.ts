
import {Component,Input,OnInit} from '@angular/core';
@Component({
    selector:`breadcrumb`,
    template:`<div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-12">
            <ol class="breadcrumb pull-left">
                <li>
                    <a href="/">Home</a>
                </li>
                <li class="active">
                    <strong>{{title}}</strong>
                </li>
            </ol>
        </div>
    </div>
`
})
export class breadcrumb_Component implements OnInit{
    @Input()
    title:string;

    ngOnInit(){
        console.log(this.title);
    }

}
