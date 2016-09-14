import {Generic} from '../../utils/dictionary';
import {TreeNode} from './treenode';
import {NgComponent,OnInitComponent} from '../../utils/component-extensions';
import {Input} from '@angular/core';

@NgComponent({
    selector: `tree-view`,
    template:`<ul *ngIf='nodes' class="angular-ui-tree-nodes">
        <li  class="angular-ui-tree-node" *ngFor='let node of nodes' (click)='selected(node)'>
            <div class=" angular-ui-tree-handle ibox ibox-content tree-item" style="margin-bottom:5px">
                {{node.text}}
                <a class="pull-right btn btn-danger btn-xs" (click)="remove(node)">
                    <span class="fa fa-remove"></span>
                </a>
                <a class="pull-right btn btn-primary btn-xs" style="margin-right: 8px;" (click)="addChild(node)">
                    <span class="fa fa-plus"></span>
                </a>
            </div>
            <tree-view [nodes]="node.Nodes"></tree-view>
        </li>
    </ul>`,
    styles:[`.angular-ui-tree {
    }

    .angular-ui-tree-empty {
        border: 1px dashed #bbb;
        min-height: 100px;
        background-color: #e5e5e5;
        background-image: -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), -webkit-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
        background-image: -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), -moz-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
        background-image: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
        background-size: 60px 60px;
        background-position: 0 0, 30px 30px;
        pointer-events: none;
    }

    .angular-ui-tree-nodes {
        position: relative;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .angular-ui-tree-nodes .angular-ui-tree-nodes {
        padding-left: 20px;
    }

    .angular-ui-tree-node, .angular-ui-tree-placeholder {
        position: relative;
        margin: 0;
        padding: 0;
        min-height: 20px;
        line-height: 20px;
    }

    .angular-ui-tree-hidden {
        display: none;
    }

    .angular-ui-tree-placeholder {
        margin: 5px 0;
        padding: 0;
        min-height: 30px;
    }

    .angular-ui-tree-handle {
        cursor: move;
        text-decoration: none;
        font-weight: bold;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 20px;
        line-height: 20px;
            padding: 10px 10px;
    }

    .angular-ui-tree-drag {
        position: absolute;
        pointer-events: none;
        z-index: 999;
        opacity: .8;
    }

    /* --- Tree --- */
    .tree-node {
        border: 1px solid #dae2ea;
        background: #f8faff;
        color: #7c9eb2;
    }

    .nodrop {
        background-color: #f2dede;
    }

    .tree-node-content {
        margin: 10px;
    }
    .tree-handle {
        padding: 10px;
        background: #428bca;
        color: #FFF;
        margin-right: 10px;
    }

    .tree-item{
        border:1px solid #e5e6e7;
            box-shadow:none;
    }`]
})
export class TreeView implements OnInitComponent {

    @Input()
    nodes: Array<TreeNode>;



    selectedNode:TreeNode;

    selected(node:TreeNode){
        node.selected = !node.selected;
            this.selectedNode = this.selectedNode===node ? null:node;
            console.log('selected function');
            console.log(this.selectedNode);
    }

    ngOnInit() {

    }

    public addChild(node: TreeNode) {
        console.log('addChild function');

        var n = new TreeNode();
        n.text = Date.now() + "";
        node.addChild(n);
        console.log(node);
    }


    public remove(node: TreeNode) {
        console.log('remove function');

        if (node.Parent === null || node.Parent === undefined)
            return this.nodes.splice(this.nodes.indexOf(node), 1)[0];
        var index = node.Parent.Nodes.indexOf(node);
        if (index > -1) {
            return node.Parent.Nodes.splice(index, 1)[0];
        }
    }
}
