
import {Component} from '@angular/core';

@Component({
    selector:`login`,
    template:`<div class="loginColumns animated fadeInDown">
        <div class="row">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <h3 class="m-t-none m-b text-center">Sign in</h3>
                            <hr />
                            <form>
                                <fieldset>
                                    <div class="form-group has-feedback">
                                        <input class="form-control" placeholder="Enter email" type="email" />
                                    </div>
                                    <div class="form-group has-feedback">
                                        <input class="form-control" placeholder="Enter password" type="password" />
                                    </div>
                                    <div class="form-group">
                                        <label>
                                            <input type="checkbox" id="checkboxSuccess">
                                            Remember me.
                                        </label>
                                        <a href="/" class="pull-right">Forgot password?</a>
                                    </div>
                                    <div class="form-group">
                                        <a class="btn btn-sm btn-primary  btn-block"  style="color:#fff" routerLink="/dashboard">
                                            Log in
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
})
export class Login_Component{

}
