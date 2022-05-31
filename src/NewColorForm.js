import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./NewColorForm.css";

function NewColorForm({ addColor }) {
  const [form, updateForm] = useState({ name: "", hex: "#ffffff" });
  const navigate = useNavigate();

  function handleChange(e) {
    updateForm((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    navigate("/color", { replace: true });
  }

  const { hex, name } = form;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name</label>
          <input
            name="name"
            id="name"
            placeholder="Color Name"
            onChange={handleChange}
            value={name}
            required
          />
        </div>
        <div>
          <label htmlFor="hex">Color</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <button>Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
