import "./Cars.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function cars() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const resp = await fetch("/data.json");
        if (!resp.ok) throw new Error("Failed");
        const data = await resp.json();
        // console.log(data);

        const datas = data.map((item) => ({
          ...item,
        }));
        setItems(datas);
      } catch (error) {
        console.error("error");
      }
    }
    FetchData();
  }, []);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/CarDetalist/${id}`);
  };

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div
            className="col-3"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <div className="data">
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                <img src={item.Image} alt="" />
                <h1>{item.Qiymet}</h1>
                <p>
                  {item.Marka} {item.Model}
                </p>
                <p>
                  {item.BuraxilisIli} {item.Muherrik.MuherrikHecm} {item.Yurus}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default cars;
