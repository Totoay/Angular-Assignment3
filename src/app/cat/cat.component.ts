import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router , RouterOutlet } from '@angular/router';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,JsonPipe],
  providers: [DocumentService],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {
  data:any;
  catService = this.service.getCatFact()

  constructor(private service:DocumentService,private router:Router){
    this.service.getCatFact().subscribe(value => {
      this.data = value
    })
  }

  reloadPage(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['cat']);
  }); 
  }
}
