import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id : number = 0;
  name="";
  apellidos="";
  documento="";
  correo="";
  genero="";
  edad="";
  pasatiempo="";
  estatura="";
  constructor(private router:Router, private service:ServiceService) {}

  ngOnInit()  {
  }
 
  Guardar()
  {
    const persona = new Persona(this.id,this.name,this.apellidos,this.documento,this.correo,this.genero,
      this.edad,this.pasatiempo);
    alert("valor id"+this.id);
    this.service.createPersona(persona).subscribe(
      data=>{
        alert("se agrego con exito"+this.id);
       this.router.navigate(["listar"]);
      },
      error=>{

      }
      
    )
}

 /*
    Guardar(persona:Persona){
      this.service.createPersona(persona)
      .subscribe(data=>{
        alert("se agrego con exito");
       this.router.navigate(["listar"]);
      })
  }
  */

}