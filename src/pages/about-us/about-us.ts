import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { ContactUs } from '../modals/contact-us/contact-us';

@Component( {
    selector: 'about-us',
    templateUrl: 'about-us.html'
})

export class AboutUs {
    constructor(public modalCtrl: ModalController) { }

    openModal(telefono) {
        let contactModal = this.modalCtrl.create(ContactUs, telefono);
        contactModal.present();
    }    
}