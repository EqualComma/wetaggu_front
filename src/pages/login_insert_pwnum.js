import Header from "@/components/layout/Header";
import styles from "./login.module.scss";
import BlockInput from "@/components/common/input/BlockInput";
import ShadowBtn from "@/components/common/buttons/ShadowBtn";
import { useState } from "react";

export default function InsertPwNumber() {
    const [number, setNumber] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleInsertNumChange = (e) => {
        const value = e.target.value;
        setNumber(value);
        // 입력값이 존재하면 유효성을 true로 설정
        setIsValid(value.trim().length > 0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <p>Login</p>
                </div>
                <p className={styles.main_txt}>비밀번호 찾기</p>
                <div className={styles.input_box}>
                    <BlockInput
                        type="text"
                        value={number}
                        onChange={handleInsertNumChange}
                        required
                        aria-invalid={!isValid}
                        aria-describedby="numberHelp"
                    >
                        인증번호
                    </BlockInput>
                </div>
                {/* <p id="numberHelp" className={styles.helpText}>
                    {isValid ? '' : 'Please enter a number.'}
                </p> */}
                <div className={styles.login_btn}>
                    <ShadowBtn
                        className={`${styles.login_btn} ${isValid ? styles.point : ''}`}
                        size="large"
                        color={isValid ? 'point' : 'disable'}
                        textColor={isValid ? '' : 'disable_txt'}
                        disabled={!isValid}
                        onClick={() => alert('인증번호 확인햇음!!!')}
                    >
                        인증하기
                    </ShadowBtn>
                </div>
            </div>
        </div>
    );
}
