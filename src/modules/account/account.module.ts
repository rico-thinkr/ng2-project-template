import {NgModule,CommonModule} from '../../utils/module-extensions';
import {Login_Component} from './login.component';
import { routing }       from './account.routing';

@NgModule({
  imports:      [ CommonModule, routing ],
  declarations: [ Login_Component ],
  providers:[]
})
export default class HomeModule {}
