import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MusicPlayerComponent } from "./music-player.component";
import { PlayConrolComponent } from "./play-control/play-control.component";

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations: [
    MusicPlayerComponent,
    PlayConrolComponent,
  ],
  exports: [
    MusicPlayerComponent,
  ]
})
export class MusicPlayerModule {
}