import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListFilterPipeComponent } from './list-filter-pipe/list-filter-pipe.component';
import { LoginComponent } from './login/login.component';
import { BookCategoryComponent } from './book-category/book-category.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'item-list',component:ItemListComponent},
  {path:'item-list/:msg',component:ItemListComponent},
  {path:'add',component:CreateItemComponent},
  {path:'edit/:id',component:EditListComponent},
  {path:'details/:id',component:ItemDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'search/:id',component:ItemDetailsComponent},
  {path: 'category/:id', component: BookCategoryComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
