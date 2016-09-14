
import {register,RouterType} from '../../utils/router-extensions';
import {Dashboard_Component} from './dashboard.component';

let list = [
    {path:'',component:Dashboard_Component,loadChildren:'app/modules/scripts-editor/script-editor.module'}
]

export const routing = register(list,RouterType.Child);
