import template from "./score.component.html";
import { Component } from "../../scripts/component";
import { parseUrl } from "../../scripts/utils";
import "./score.component.css";

  /* class ScoreComponent constructor */
  export class ScoreComponent extends Component {
    constructor() {
      super(template)
        let params = parseUrl();
        this.template = template;
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }
    init(){
        document.getElementById("name").innerText = this.name;
        document.getElementById("size").innerText = this.size;
        document.getElementById("time").innerText = this.time;
    }
  }


  // put component in global scope, to be runnable right from the HTML.