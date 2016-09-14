
import {register,RouterType} from '../../utils/router-extensions';
import {Login_Component} from './login.component';

let list = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:Login_Component}
]

export const routing = register(list,RouterType.Child);
