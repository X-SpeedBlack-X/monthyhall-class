export default class DoorModel {
  #numberDoor: number;
  #haveGift: boolean;
  #selected: boolean;
  #openDoor: boolean;

  constructor(
    numberDoor: number,
    haveGift = false,
    selected = false,
    openDoor = false
  ) {
    this.#numberDoor = numberDoor;
    this.#haveGift = haveGift;
    this.#selected = selected;
    this.#openDoor = openDoor;
  }

  get numberDoor() {
    return this.#numberDoor;
  }

  get haveGift() {
    return this.#haveGift;
  }

  get selected() {
    return this.#selected;
  }

  get openDoor() {
    return this.#openDoor;
  }

  get closeDoor() {
    return !this.#openDoor;
  }

  deselect() {
    const selected = false;
    return new DoorModel(
      this.numberDoor,
      this.haveGift,
      selected,
      this.openDoor
    );
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(
      this.numberDoor,
      this.haveGift,
      selected,
      this.openDoor
    );
  }

  opening() {
    const openDoor = true;
    return new DoorModel(
      this.numberDoor,
      this.haveGift,
      this.selected,
      openDoor
    );
  }
}
