import { Component, Output } from "@angular/core";
import { array,flag } from "../example";
@Component({
    selector : 'app-form',
    templateUrl : './form.component.html',
    styleUrls : ['./form.component.css']
})
export class FormComponent {
    
    flag=false;
    onSubmit(data :any) {
        if(flag)
        {
            this.flag=false;
        }
        array.push(data.value)
       // console.log(array)
    }
    

}
