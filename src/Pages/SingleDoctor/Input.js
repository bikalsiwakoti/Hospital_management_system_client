import style from "./input.module.css";
import { ErrorMessage, useField } from "formik";

export default function Input(props) {
  return (
    <>
      <div className={style.inputLabel}>
        <label className={style.label} htmlFor={props.id}> {props.logo} {props.name} <span className={style.star}>*</span> </label>

        <input className={style.input}
          id={props.id}
          name={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          autoComplete="off"
          onBlur={props.onBlur}
        ></input>

        {(props.error) && (props.touch) ? (
          <p className={style.formError}>{props.error}</p>
        ) : null
        }
      </div>
    </>
  );
}