import { Component } from "@angular/core";
import { array} from "../example";
@Component({
    selector : 'app-output',
    templateUrl :'./output.component.html',
    styleUrls : ['./output.component.css']
})
export class OutputComponent {
    types = array;
    input:any=""
    flag=false
    onClick(){
        this.flag=true;
    }
    onInput(data :any)
    {
        this.input=(<HTMLInputElement>data.target).value;
        console.log(this.input);
    }
    onDelete() {
        for(let i=0;i<this.types.length;i++){
                 console.log(this.types[i].firstname);
                 console.log(this.input);
            if((this.types[i].firstname === this.input)){
                console.log(this.types[i].firstname)
                this.types.splice(i,1);
            }
        }
    }
}