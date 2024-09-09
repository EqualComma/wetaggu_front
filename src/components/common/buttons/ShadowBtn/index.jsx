import React from 'react';
import styles from './ShadowBtn.module.scss';

const ShadowBtn = ({ children, className = "", size = "", color = "default", textColor = "default", onClick }) => {
    return (
        <button
            className={`${styles.shadow_btn} ${styles[size]} ${styles[color]} ${styles[textColor]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ShadowBtn;
