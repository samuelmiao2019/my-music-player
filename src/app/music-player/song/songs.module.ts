import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SongItemComponent } from "./song-item/song-item.component";
import { SongListComponent } from "./song-list/song-list.component";

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations: [
    SongItemComponent,
    SongListComponent,
  ],
})
export class SongsModule {
}