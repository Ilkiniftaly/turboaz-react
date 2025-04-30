import "./SelectedForm.css";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

function SelectedForm({ control }) {
  const selectedsMarka = [
    { name: "Secin", value: "Secin" },
    { name: "BMW", value: "BMW" },
    { name: "Nissan", value: "Nissan" },
    { name: "Lexus", value: "Lexus" },
    { name: "Toyota", value: "Toyota" },
    { name: "Hyundai", value: "Hyundai" },
    { name: "Mercedes", value: "Mercedes" },
    { name: "Land Rover", value: "Land Rover" },
  ];

  const selectedsModel = [
    { name: "Secin", value: "Secin" },
    { name: "M5", value: "M5" },
    { name: "530", value: "530" },
    { name: "Patrol", value: "Patrol" },
    { name: "LX 600", value: "LX 600" },
    { name: "Camry", value: "Camry" },
    { name: "Grandeur", value: "Grandeur" },
    { name: "GLE 350 4MATIC", value: "GLE 350 4MATIC" },
    { name: "Defender", value: "Defender" },
  ];
  return (
    <div>
      <div className="container">
        <div className="main-selected">
          <div style={{ display: "flex" }} className="marka-selected-flex">
            <p className="name-selected-css"> Marka</p>
            <Controller
              control={control}
              name="marka"
              render={({ field }) => (
                <select className="controller-name-css" {...field}>
                  {selectedsMarka.map((marka) => (
                    <option key={marka.value} value={marka.value}>
                      {marka.name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div style={{ display: "flex" }} className="model-selected-flex">
            <p className="name-selected-css">Model</p>
            <Controller
              control={control}
              name="model"
              render={({ field }) => (
                <select className="controller-name-css" {...field}>
                  {selectedsModel.map((model) => (
                    <option key={model.value} value={model.value}>
                      {model.name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedForm;
