import { LightningElement,track, api, wire } from 'lwc';
import checkRecordLock from '@salesforce/apex/IsRecordLocked.checkRecordLock';
export default class ModalPopupLWC extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;
    @api recordId;

    connectedCallback(){
        this.checkRecordLock();
    }

    checkRecordLock(){
        checkRecordLock({recordId: this.recordId})
        .then(result => {
            if(result) {
                this.isModalOpen = true;
                console.log('Opp is Locked!!!');
            } else {
                console.log('Opp is not locked');
            }
        })
        .catch(error => {
            console.log('error: ', error);
        });
    } 
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}