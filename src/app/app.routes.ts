import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursedetailsComponent } from './pages/coursedetails/coursedetails.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"coursedetails",
        component:CoursedetailsComponent
    },
    
    {
        path:"my-courses",
        component:MyCoursesComponent
    },
    { path: "register", 
        component: RegisterComponent },

    { path: "login",
         component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
