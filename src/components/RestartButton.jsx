import React from "react";
import { useDispatch } from "react-redux";

export default function RestartButton() {
  const dispatch = useDispatch();
  return (
    <button
      className="button"
      onClick={() => {
        dispatch({ type: "restart" });
      }}
    >
      Remettre à zéro
    </button>
  );
}
