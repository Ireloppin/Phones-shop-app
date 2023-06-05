export class ProductDetail {
  constructor({
    id,
    brand,
    model,
    price,
    imageUrl,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCamera,
    dimentions,
    weight,
    colors,
    storages,
    options,
  }) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.cpu = cpu;
    this.ram = ram;
    this.os = os;
    this.displayResolution = displayResolution;
    this.battery = battery;
    this.primaryCamera = primaryCamera;
    this.secondaryCamera = secondaryCamera;
    this.dimentions = dimentions;
    this.weight = weight;
    this.imageUrl = imageUrl;
    this.colors = colors;
    this.storages = storages;
    this.options = options;
  }
}
