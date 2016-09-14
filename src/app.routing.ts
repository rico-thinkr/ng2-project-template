
import {register,RouterType} from './utils/router-extensions';

let list = [
    {path:'',redirectTo:'account',pathMatch:'full'},
    {path:'account',loadChildren:'app/modules/account/account.module'},
    {path:'dashboard',loadChildren:'app/modules/dashboard/dashboard.module'}
]

export const routing = register(list,RouterType.Root);
