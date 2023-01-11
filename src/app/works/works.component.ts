import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WorksService } from './works.service';

const apiUrl = environment.apiUrl;
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  currentIndex: any = -1;
  showFlag: any = false;
  listOfworks: Array<any> = [];
  work:Array<any> = [];
  imgaes:Array<object>;
  title: string;
  description: string;
  actualImages:Array<any> = [];
  datos: Array<any>=[];

  constructor(private trabajoService: WorksService) { }

  ngOnInit():void{
    this.trabajoService.getAllWorks().subscribe(respose =>{
      this.datos = respose;
      respose.forEach(element => {
        //element.imagesDto[0].path = `${apiUrl}/${element.imagesDto[0].path}`; 
        
        var trabajo:Array<any> = [];

        trabajo[0] = element.name;
        trabajo[1] = element.description;

        var images:Array<object> = [];

        element.imagesDto.forEach(e =>{
          var img = decodeURIComponent(`${apiUrl}/${e.path}`);
          // console.log(img);
          images.push({image:img});
        })
        // console.log(images);
        trabajo[2]= images;
        trabajo[3] = element.id;
        this.listOfworks.push(trabajo);
        console.log(this.listOfworks);
        
      });
      // this.work = [];
    });
  }

  COso(): void {
    // ************Nuevo Trabajo****************

    this.title="Banco Sauce"; //Cambiar esto para cada nuevo proyecto
    this.description="Esto es una descripción del proyecto: Banco Sauce";//Cambiar esto para cada nuevo proyecto
    this.imgaes = [
      //Cambiar esto para cada nuevo proyecto. Cada imagen es un objeto distinto
      {
        image:"../../assets/img/Trabajos/Banco Sauce/BancoSauce.jpeg",
      },
      {
        image: "../../assets/img/Trabajos/Banco Sauce/BancoSauce_2.jpeg",
      }
    ]
    this.work[0] = this.title;
    this.work[1] = this.description;
    this.work[2] = this.imgaes;
    this.listOfworks.push(this.work);
    this.work = [];
    // ************Fin Nuevo Trabajo****************

    // ************Nuevo Trabajo****************

    this.title="Chavarría"; //Cambiar esto para cada nuevo proyecto
    this.description="Esto es una descripción del proyecto: Chavarria";//Cambiar esto para cada nuevo proyecto
    this.imgaes = [
      //Cambiar esto para cada nuevo proyecto. Cada imagen es un objeto distinto
      {
        image:"../../assets/img/Trabajos/Chavarria/Chavarria.jpg",
        title:"Chavarria"
      },
      {
        image:"../../assets/img/Trabajos/Chavarria/Chavarria_2.jpg",
        title:"Chavarria"
      },
      {
        image:"../../assets/img/Trabajos/Chavarria/Chavarria_3.jpg",
        title:"Chavarria"
      },
      {
        image:"../../assets/img/Trabajos/Chavarria/Chavarria_4.jpg",
        title:"Chavarria"
      }
    ]
    this.work[0] = this.title;
    this.work[1] = this.description;
    this.work[2] = this.imgaes;
    this.listOfworks.push(this.work);
    this.work = [];
    // ************Fin Nuevo Trabajo****************

    // ************Nuevo Trabajo****************

    this.title="Edificio"; //Cambiar esto para cada nuevo proyecto
    this.description="Esto es una descripción del proyecto: Edificio";//Cambiar esto para cada nuevo proyecto
    this.imgaes = [
      //Cambiar esto para cada nuevo proyecto. Cada imagen es un objeto distinto
      {
        image:"../../assets/img/Trabajos/Edificio1/Edificio.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Edificio1/Edificio_2.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Edificio1/Edificio_3.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Edificio1/Edificio_4.PNG",
      }
    ]
    this.work[0] = this.title;
    this.work[1] = this.description;
    this.work[2] = this.imgaes;
    this.listOfworks.push(this.work);
    this.work = [];
    // ************Fin Nuevo Trabajo****************

    // ************Nuevo Trabajo****************

    this.title="Ita Ibaté"; //Cambiar esto para cada nuevo proyecto
    this.description="Esto es una descripción del proyecto: Ita Ibaté";//Cambiar esto para cada nuevo proyecto
    this.imgaes = [
      //Cambiar esto para cada nuevo proyecto. Cada imagen es un objeto distinto
      {
        image:"../../assets/img/Trabajos/Ita Ibate/ItaIbate.jpeg",
      },
      {
        image:"../../assets/img/Trabajos/Ita Ibate/ItaIbate_2.jpeg",
      }
    ]
    this.work[0] = this.title;
    this.work[1] = this.description;
    this.work[2] = this.imgaes;
    this.listOfworks.push(this.work);
    this.work = [];
    // ************Fin Nuevo Trabajo****************

    // ************Nuevo Trabajo****************

    this.title="Puente Nuevo"; //Cambiar esto para cada nuevo proyecto
    this.description="Esto es una descripción del proyecto: Puente Nuevo";//Cambiar esto para cada nuevo proyecto
    this.imgaes = [
      //Cambiar esto para cada nuevo proyecto. Cada imagen es un objeto distinto
      {
        image:"../../assets/img/Trabajos/Puente Nuevo/PuenteNuevo.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Puente Nuevo/PuenteNuevo_2.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Puente Nuevo/PuenteNuevo_3.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Puente Nuevo/PuenteNuevo_4.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Puente Nuevo/PuenteNuevo_5.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Puente Nuevo/PuenteNuevo_6.jpg",
      },
      {
        image:"../../assets/img/Trabajos/Puente Nuevo/PuenteNuevo_7.jpg",
      }
    ]
    this.work[0] = this.title;
    this.work[1] = this.description;
    this.work[2] = this.imgaes;
    this.listOfworks.push(this.work);
    this.work = [];
    // ************Fin Nuevo Trabajo****************

      // ************Nuevo Trabajo****************

      this.title="Puente Reparación"; //Cambiar esto para cada nuevo proyecto
      this.description="Esto es una descripción del proyecto: Puente Reparación";//Cambiar esto para cada nuevo proyecto
      this.imgaes = [
        //Cambiar esto para cada nuevo proyecto. Cada imagen es un objeto distinto
        {
          image:"../../assets/img/Trabajos/Puente Reparacion/PuenteReparacion.jpg",
        },
        {
          image:"../../assets/img/Trabajos/Puente Reparacion/PuenteReparacion_2.jpg",
        },
        {
          image:"../../assets/img/Trabajos/Puente Reparacion/PuenteReparacion_3.jpg",
        },
        {
          image:"../../assets/img/Trabajos/Puente Reparacion/PuenteReparacion_4.jpg",
        }
      ]
      this.work[0] = this.title;
      this.work[1] = this.description;
      this.work[2] = this.imgaes;
      this.listOfworks.push(this.work);
      this.work = [];
      // ************Fin Nuevo Trabajo****************
  }

  showLightbox(index) {
    this.actualImages= this.listOfworks[index][2];
    this.currentIndex = 0;
    this.showFlag = true;
  }
  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

}

