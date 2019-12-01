export class Flower {
  public label: string;
  public smallImgSrc: string;
  public largeImgSrc: string;
  constructor(name) {
    this.label = Flower.capitalizeFirstLetter(name);
    this.smallImgSrc = `assets/images/flowers/${name}_small.jpeg`;
    this.largeImgSrc = `assets/images/flowers/${name}_large.jpeg`;
  }

  // make the first letter capital
  private static capitalizeFirstLetter( /* string */ str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
