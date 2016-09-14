
import {register,RouterType} from '../../utils/router-extensions';
import {Script_Editor_Component} from './script.component';
let list = [
    {path:'',component:Script_Editor_Component}
]

export const routing = register(list,RouterType.Child);
