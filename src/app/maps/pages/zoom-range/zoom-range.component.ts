import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('zoomMap') mapDiv!: ElementRef;
  public map!: mapboxgl.Map;
  public zoomLevel: number = 15;
  public mapCenter: [number, number] = [-103.38991542336164, 20.65440818024887];

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      center: this.mapCenter,
      container: this.mapDiv.nativeElement,
      minZoom: 2,
      maxZoom: 18,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: this.zoomLevel,
    });

    this.map.on('zoom', (event) => {
      this.zoomLevel = this.map.getZoom();
    });

    this.map.on('move', (event) => {
      const target: mapboxgl.Map = event.target;
      const { lng, lat } = target.getCenter();
      this.mapCenter = [lng, lat];
    });
  }

  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }

  zoomOut(): void {
    this.map.zoomOut();
  }

  zoomIn(): void {
    this.map.zoomIn();
  }

  updateZoom(value: string): void {
    this.map.zoomTo(parseInt(value));
  }
}
