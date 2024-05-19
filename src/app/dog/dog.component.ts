import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,JsonPipe],
  providers: [DocumentService],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})

export class DogComponent {
  data:any;
  catService = this.service.getDog()

  constructor(private service:DocumentService,private router:Router){
    this.service.getDog().subscribe(value => {
      this.data = value
    })
  }

  reloadPage(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dog']);
  }); 
  }

}
