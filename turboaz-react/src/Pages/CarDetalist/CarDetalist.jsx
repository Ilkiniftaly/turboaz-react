import "./CarDetalist";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CarDetalist() {
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
        {items.map((item) => (
          <div key={item.id}>
            <div className="mainBuy-flex">
              <div className="main-info">
                <h2>
                  {item.Marka} {item.Model}, {item.BuraxilisIli} il,{" "}
                  {item.Yurus}
                </h2>
                <img src={item.Image} alt="" />
                <p>{item.Marka}</p>
                <p>{item.Model}</p>
                <p>{item.BuraxilisIli}</p>
                <p>{item.Reng}</p>
                <p>
                  {item.Muherrik.MuherrikHecm} / {item.Muherrik.Muherriknovu}
                </p>
                <p>{}</p>
              </div>
              <div className="buy">{item.Qiymet}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarDetalist;
