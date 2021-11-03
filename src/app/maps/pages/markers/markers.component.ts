import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface CustomMarker {
  color: string;
  marker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
})
export class MarkersComponent implements AfterViewInit {
  @ViewChild('map') mapDiv!: ElementRef;
  public map!: mapboxgl.Map;
  public zoomLevel: number = 15;
  public mapCenter: [number, number] = [-103.38991542336164, 20.65440818024887];
  public markers: CustomMarker[] = [];

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
  }

  addMarker(): void {
    const color: string = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const newMarker: mapboxgl.Marker = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.mapCenter)
      .addTo(this.map);
    this.markers.push({
      color,
      marker: newMarker,
    });
  }

  goToMarker(): void {
    console.log('goToMarker');
  }
}
