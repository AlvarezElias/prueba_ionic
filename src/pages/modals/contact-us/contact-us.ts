import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
    selector: 'contact-us',
    templateUrl: 'contact-us.html'
})

export class ContactUs {
    datos: string;
    constructor (public platform: Platform, public params: NavParams, public viewCtrl: ViewController){
        this.datos = this.params.get('telefono');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}