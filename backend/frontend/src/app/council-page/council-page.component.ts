import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-council-page',
  templateUrl: './council-page.component.html',
  styleUrls: ['./council-page.component.css']
})
export class CouncilPageComponent implements OnInit {
council: any;
  constructor() { 
    this.council = {
      name:"Student Council",
      email:"studentcouncilcrce@gmail.com",
      members:[
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg"
        },
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg"
        },
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg"
        }
      ]
    }
  }

  ngOnInit() {
  }

}
