import {NgModule,CommonModule} from '../../utils/module-extensions';
import {Script_Editor_Component} from './script.component';
import {routing} from './script.routing';
@NgModule({
  imports:      [ CommonModule,routing ],
  declarations: [ Script_Editor_Component ],
  providers:[]
})
export default class ScriptModule {}
