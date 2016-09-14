
/**
 *
 */
import {Component,Input} from '@angular/core';
// import {Lo} from '../structures/loop-structure';
import {IF_Structure} from './structures/if-structure';
import {TreeView} from '../../ui-elements/treeview/treeview';
import {TreeNode} from '../../ui-elements/treeview/treenode';
@Component({
    selector:`script-editor`,
    template:`<link href='/libs/css/prism.min.css' />
    <div class="col-lg-4">
        <div class="form-group">
            <tree-view [nodes]="nodes"></tree-view>
        </div>
    </div>
    <div className="col-lg-4">

    </div>
    <div class="col-lg-4">
        <pre>
            <code  class="language-css">{{code}}
            </code>
        </pre>
    </div>

`,
directives:[TreeView]
})
export class Script_Editor_Component{

    nodes: Array<TreeNode> = [];
    code:string;
    ngOnInit() {

        this.code = `p:{color:red}`;
        var m1 = new TreeNode();
        m1.text = 'root 1';
        var m11 = new TreeNode();
        m11.text = 'm 11';
        var m111 = new TreeNode();
        m111.text = 'm 111';
        m11.addChild(m111);
        m1.addChild(m11);
        var m2 = new TreeNode();
        m2.text = 'root 2';
        var m3 = new TreeNode();
        m3.text = 'root 3';
        var m4 = new TreeNode();
        m4.text = 'root 4';

        this.nodes.push(m1, m2, m3, m4);
    }
}
