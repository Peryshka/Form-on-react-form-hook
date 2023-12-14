import React from 'react';
import { Input } from 'antd';
import clsx from 'clsx';
import styles from "../input/styles.module.scss";


const AntInput = (props) => {
  const {
    label,
    type,
    star,
    hidden,
    onClick,
    value,
    onChange,
    className
  } = props;
  const condition = type === 'password' || type === 'text';
  const emptyField = value === '';
  const emptyInput = clsx(
    styles.input,
    className,
    {'emptyInput' : emptyField}
  )
  return(
    <div className={styles.inputWrap}>
      <label className={styles.label}>
        <div className={styles.labelText}>
          <span className={styles.labeltex}>{label}</span>
          <span className={styles.star}>{star}</span>
        </div>
        {condition && (
          <div>
            <img src={hidden} alt="hidden" className={styles.hidden} onClick={onClick} />
          </div>
        )}
        <Input
          type={type}
          value={value}
          onChange={onChange}
          size="large"
          className={emptyInput}

        />
      </label>
    </div>
  )
}

export default AntInput;