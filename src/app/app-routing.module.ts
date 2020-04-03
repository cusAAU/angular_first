import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OwnerComponent} from './component/owner/owner.component';
import {PlatformEditorComponent} from './component/platformeditor/platformeditor.component';


const routes: Routes = [
  {path: '', redirectTo: 'owner', pathMatch: 'full'},
  {path: 'owner', component: OwnerComponent},
  {path: 'platformeditor', component: PlatformEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
