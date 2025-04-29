import "./CarDetalist.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function carDetalist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        const resp = await fetch("/data.json");
        if (!resp.ok) throw new Error("error");
        const data = await resp.json();
        const datas = data.map((item) => ({
          ...item,
        }));
        setItems(datas);
      } catch (error) {
        console.log("error");
      }
    }
    FetchData();
  }, []);

  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <div>Masin tapilmadi</div>;
  }
  console.log("Alınan ID:", id);

  return (
    <div>
      <div className="container">
        <div key={item.id}>
          <div className="mainBuy-flex">
            <div className="main-info">
              <h2>
                {item.Marka} {item.Model}, {item.BuraxilisIli} il, {item.Yurus}
              </h2>
              <img src={item.Image} alt="" />
              <hr className="hr-cardetalist" />
              <p>
                <span className="carDetalist-text-css">Marka</span>
                {item.Marka}
              </p>
              <p>
                <span className="carDetalist-text-model-css">Model</span>{" "}
                {item.Model}
              </p>
              <p>
                <span className="carDetalist-text-css-BuraxIli">
                  Buraxili ili
                </span>
                {item.BuraxilisIli}
              </p>
              <p>
                <span className="carDetalist-text-css">Reng</span> {item.Reng}
              </p>
              <p className="muhHecm-Yanacag-css">
                <span className="carDetalist-text-css-Yanacag">Muherrik</span>
                {item.Muherrik.MuherrikHecm} / {item.Muherrik.Muherriknovu}
              </p>
            </div>
            <div className="buy">{item.Qiymet}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default carDetalist;
