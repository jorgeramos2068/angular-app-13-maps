import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat: [number, number] = [0, 0];
  @ViewChild('map') mapDiv!: ElementRef;
  public map!: mapboxgl.Map;

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      center: this.lngLat,
      container: this.mapDiv.nativeElement,
      interactive: false,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15,
    });

    new mapboxgl.Marker().setLngLat(this.lngLat).addTo(this.map);
  }
}
