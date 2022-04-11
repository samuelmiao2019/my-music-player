import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const MUSIC_PLAYER_MODULE: string = 'music-player';

const routes: Routes = [{
  path: '',
  redirectTo: MUSIC_PLAYER_MODULE,
  pathMatch: 'full',
},
{
  path: MUSIC_PLAYER_MODULE,
  loadChildren: () => import('app/music-player/music-player.module').then(m => m.MusicPlayerModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
