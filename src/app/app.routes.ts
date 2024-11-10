import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ImageComponent } from './image/image.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "detail/:id", component: DetailComponent },
    { path: "form", component: FormComponent},
    { path: "image", component: ImageComponent}
];
