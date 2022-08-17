import { Component } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html"
})
export class ServersComponent {
  allowServers = false;
  alloServerMessage = "";
  noServerMsg = "No server is created";
  inputValue = "";
  isServerAdded: boolean = false;
  serversList = [];
  constructor() {
    setTimeout(() => (this.allowServers = true), 2000);
  }
  addServerButtonClick(): void {
    this.isServerAdded = true;
    this.alloServerMessage = "Server: " + this.inputValue + " added!!";
    this.serversList.push(this.inputValue);
  }
}
