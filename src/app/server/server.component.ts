import { Component } from "@angular/core";
@Component
({
        selector:"app-server",
        templateUrl:"./server.component.html"
    
})
export class ServerComponent{
        allowNewServer=false;
        serverCreationStatus='No server!';
        serverName='TestServer';
        serverCreated=false;

        constructor(){
                setTimeout(()=>{
                        this.allowNewServer=true;

                }, 2000);
        }
        onCreateServer(){
                this.serverCreated=true;
                this.serverCreationStatus='server created! Name is ' +this.serverName;

        }
        onUpdateServerName(event: Event){
                this.serverName=(<HTMLInputElement>event.target).value;
        }

}