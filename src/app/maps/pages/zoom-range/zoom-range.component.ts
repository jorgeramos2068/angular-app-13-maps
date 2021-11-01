import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
})
export class ZoomRangeComponent implements AfterViewInit {
  @ViewChild('zoomMap') mapDiv!: ElementRef;
  public map!: mapboxgl.Map;
  public zoomLevel: number = 10;

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      center: [-103.38991542336164, 20.65440818024887],
      container: this.mapDiv.nativeElement,
      minZoom: 2,
      maxZoom: 17,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: this.zoomLevel,
    });
  }

  zoomOut(): void {
    this.map.zoomOut();
    this.zoomLevel = this.map.getZoom();
  }

  zoomIn(): void {
    this.map.zoomIn();
    this.zoomLevel = this.map.getZoom();
  }
}
