import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Link from "../../node_modules/next/link";
import InputNumber from "../components/InputNumber";
import { useState } from "react";

export default function Home() {
  const [qtdeDoors, setQtdeDoors] = useState(3);
  const [haveGift, setHaveGift] = useState(1);

  return (
    <div className={styles.home}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber
            text="Qtde de Portas?"
            value={qtdeDoors}
            onChange={(newQtdeDoors) => setQtdeDoors(newQtdeDoors)}
          />{" "}
        </Card>
      </div>

      <div>
        <Card>
          <InputNumber
            text="Porta com Presente?"
            value={haveGift}
            onChange={(newDoorsGift) => setHaveGift(newDoorsGift)}
          />{" "}
        </Card>

        <Card bgColor="#28a085">
          <Link href={`/play/${qtdeDoors}/${haveGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
