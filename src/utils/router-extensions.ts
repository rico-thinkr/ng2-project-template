import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule }  from '@angular/router';

export enum RouterType{Root,Child}
/**
 * register router list.
 * @param  {Routes}                 list [route list.]
 * @param  {RouterType}          type [type of route list]
 * @return {ModuleWithProviders}      [return register result]
 */
export function register(list:Routes,type:RouterType):ModuleWithProviders{
        return type==RouterType.Root?RouterModule.forRoot(list):RouterModule.forChild(list);
}
