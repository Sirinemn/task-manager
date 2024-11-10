import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ImageComponent } from './image/image.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "tips", component: TipsComponent},
    { path: "detail/:id", component: DetailComponent },
    { path: "form", component: FormComponent},
    { path: "image", component: ImageComponent},
    { path: '404',component: NotFoundComponent },
    { path: '**',redirectTo: '404' }
];
