import React from "react";

function InputText({ name, tag, label }) {
  return (
    <div className="input-group mb-2">
      <label htmlFor={tag} className="input-group-text">
        {label}
      </label>
      <input
        className="form-control col-sm-6"
        type="text"
        name={tag}
        id={tag}
        required
      />
    </div>
  );
}

export default InputText;
