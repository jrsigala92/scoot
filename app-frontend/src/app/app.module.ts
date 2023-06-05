import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ToDoComponent } from './to-do/to-do.component';
import { ListComponent } from './to-do/list/list.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import * as fromToDoReducer from '../app/store/reducers/todo.reducers';
import { ToDosEffects } from './store/effects/todo.effects';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forRoot({}), 
    StoreModule.forFeature(
       fromToDoReducer.customerFeatureKey,
       fromToDoReducer.reducer),
    EffectsModule.forRoot([ToDosEffects]),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
