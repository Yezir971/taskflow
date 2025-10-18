import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBar } from './components/side-bar/side-bar';


@NgModule({
  imports: [CommonModule, SideBar], 
  exports: [SideBar]
  // exports: [SideBar],
})
export class SharedModule {}


