import {Flower} from './flower';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FlowerDataService {
  // to initialize the flowers
  private static names: string[] = ['aster', 'carnation', 'daffodil', 'orchid', 'rose'];
  // all flower objects
  private readonly flowers: Flower[];
  // noinspection JSMismatchedCollectionQueryUpdate
  private images: HTMLImageElement[];
  constructor() {
    this.flowers = [];
    this.images = [];
    this.makeFlowers();
    this.preloadImages();
  }
  // get the list of the Flower objects
  public getFlowers(): Flower[] {
    return this.flowers;
  }
  // make flower objects
  private makeFlowers() {
    FlowerDataService.names.forEach(name => {
      this.flowers.push(new Flower(name));
    });
  }
  // preload the large images from the server
  private preloadImages() {
    this.flowers.forEach(flower => {
      const image: HTMLImageElement = new Image();
      image.src = flower.largeImgSrc;
      this.images.push(image);
    });
  }
}
