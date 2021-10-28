import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstatesComponent } from './pages/estates/estates.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkupsComponent } from './pages/markups/markups.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'fullscreen', component: FullScreenComponent },
      { path: 'zoom-range', component: ZoomRangeComponent },
      { path: 'markups', component: MarkupsComponent },
      { path: 'estates', component: EstatesComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
