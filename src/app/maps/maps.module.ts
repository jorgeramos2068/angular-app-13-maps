import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { EstatesComponent } from './pages/estates/estates.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    FullScreenComponent,
    MarkersComponent,
    ZoomRangeComponent,
    EstatesComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}
