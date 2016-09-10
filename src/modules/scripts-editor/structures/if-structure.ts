

import {Validator} from '../validator';
/**
 *
 *
 * @export
 * @class IF_Structure
 */
export class IF_Structure{

        if_temp:string= `if ({_condition_}){
            {_block_};
        }`;

        else_temp:string= `else{
            {_block_};
        }`;

        elseif_temp:string =`else if (_condition_){
            {_block_};
        }`;


}
