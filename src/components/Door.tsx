import styles from "../styles/Door.module.css";
import Gift from "./Gift";
import DoorModel from "../model/door";

type DoorProps = {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
};

export function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.selected && !door.openDoor ? styles.selected : "";

  const toggleSelection = (e) => props.onChange(door.toggleSelection());
  const opening = (e) => {
    e.stopPropagation();
    props.onChange(door.opening());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.numberDoor}>{door?.numberDoor}</div>
        <div className={styles.doorHandle} onClick={opening}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.frame} ${selected}`}>
        {door.closeDoor ? renderDoor() : door.haveGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
