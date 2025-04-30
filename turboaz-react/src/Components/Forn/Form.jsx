import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import LiComponent from "../LiComponent/LiComponent";
import SelectedForm from "../SelectedForm/SelectedForm";

function Form() {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div style={{ paddingTop: 0 }} className="container">
        <div className="main-form">
          <div className="text-css">ELAN YERLƏŞDİRMƏK</div>
          <LiComponent />
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <SelectedForm control={methods.control} />
              <button
                className="button-selected"
                style={{ marginLeft: "25px" }}
                type="submit"
              >
                Davam et
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Form;
