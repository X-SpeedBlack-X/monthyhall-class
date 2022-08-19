import DoorModel from "../model/door";

export function createDoors(qtde: number, doorGift: number): DoorModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const number = i + 1;
    const haveGift = number === doorGift;
    return new DoorModel(number, haveGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  doorModified: DoorModel
): DoorModel[] {
  return doors.map((doorCurrent) => {
    const doorModifiedEqual =
      doorCurrent.numberDoor === doorModified.numberDoor;

    if (doorModifiedEqual) {
      return doorModified;
    } else {
      return doorModified.openDoor ? doorCurrent : doorCurrent.deselect();
    }
  });
}
