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
        if(!element.isDeleted){
              var trabajo:Array<any> = [];

            trabajo[0] = element.name;
            trabajo[1] = element.description;

            var images:Array<object> = [];

            element.imagesDto.forEach(e =>{
              var img = decodeURIComponent(`${apiUrl}/${e.path}`);
              images.push({image:img});
            })
            trabajo[2]= images;
            trabajo[3] = element.id;
            this.listOfworks.push(trabajo);
        }
      });
      // this.work = [];
    });
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

