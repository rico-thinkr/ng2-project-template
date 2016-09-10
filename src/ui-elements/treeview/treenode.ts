/**
 * tree node control of ui-tree.
 */
export class TreeNode {
    /**
     * text.
     */
    text: string;

    Parent: TreeNode;

    selected:boolean;

    tag:any;
    /**
     * child nodes.
     */
    private _nodes: Array<TreeNode> = [];

    /**
     *
     */
    get hasChildNodes(): boolean {
        return this._nodes.length !== 0;
    }



    get Nodes(): Array<TreeNode> {
        return this._nodes;
    }

    addChild(sub: TreeNode) {
        this._nodes.push(sub);
        sub.Parent = this;
    }

}
