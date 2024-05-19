import { Routes } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { HomeComponent } from './home/home.component';
import { CatComponent } from './cat/cat.component';

export const routes: Routes = [
    { path: 'home', component:HomeComponent },
    { path: 'dog', component:DogComponent },
    { path: 'cat', component:CatComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
