import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatCardModule, MatGridListModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChunkPipe } from './pipes/chunk.pipe';


@NgModule({
  imports: [
    CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatTabsModule,
		MatCardModule,
		MatGridListModule,
		RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, ChunkPipe],
	exports: [HeaderComponent, FooterComponent, MatTabsModule, MatCardModule,MatGridListModule, ChunkPipe]
})
export class BaseModule { }
