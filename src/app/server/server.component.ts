import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
username = '';
clickable=false;
event:Event;
    constructor(){}
    setUsername(event:Event){
        this.event = event;
        this.username = (<HTMLInputElement>event.target).value;
        
    }
    getUsername(){
        this.checkClickable();
        return this.username;
    }

    checkClickable(){
        if(this.username.length===0){
            this.clickable = false;
        }else{
            this.clickable = true;
        }
    }

    resetString(){
        this.username = "";
        this.checkClickable();
    }
    

}