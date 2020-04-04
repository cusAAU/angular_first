import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// import {CdkTableModule} from '@angular/cdk/table'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {OwnerComponent} from './component/owner/owner.component';
import {HttpClientModule} from '@angular/common/http';
import { HorsetableComponent } from './component/horsetable/horsetable.component';
import { HorserowComponent } from './component/horsetable/horserow/horserow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ng material modules
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OwnerComponent,
    HorsetableComponent,
    HorserowComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
