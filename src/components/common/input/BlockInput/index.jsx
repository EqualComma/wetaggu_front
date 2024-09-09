import React from 'react';
import styles from './BlockInput.module.scss';

const BlockInput = ({ children, className = "", size = "large", type = "text", onChange, value }) => {
    return (
        <div className={`${styles.input_box} ${className}`}>
            <div className={`${styles.title_box} ${className}`}>
                <p className={`${styles.title}`}>{children}</p>
            </div>
            <input
                className={`${styles.block_input} ${styles[size]}`}
                type={type}
                onChange={onChange}
                value={value}
                required
            />
        </div>
    );
};

export default BlockInput;
