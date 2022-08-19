import styles from "../../../styles/Play.module.css";
import { useEffect, useState } from "react";
import { Door } from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Play() {
  const router = useRouter();

  const [validate, setValidate] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;

    const validateDoor = doors >= 3 && doors <= 50;
    const validateGift = haveGift >= 1 && haveGift <= doors;

    setValidate(validateDoor && validateGift);
    setDoors(createDoors(doors, haveGift));
  }, [router?.query]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;
    setDoors(createDoors(doors, haveGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.numberDoor}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }
  return (
    <div className={styles.play}>
      <div className={styles.doors}>
        {validate ? (
          renderDoors()
        ) : (
          <h2>
            A quantidade de portas tem que ser maior que de presente e presente
            não pode ser 0 ou negativo
          </h2>
        )}
      </div>
      <div className={styles.btn}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
