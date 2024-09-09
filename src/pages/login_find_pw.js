import Header from "@/components/layout/Header";
import styles from "./login.module.scss";
import BlockInput from "@/components/common/input/BlockInput";
import ShadowBtn from "@/components/common/buttons/ShadowBtn";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FindPW() {
  const router = useRouter();
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // HTML5의 기본 유효성 검사를 사용하여 이메일 형식 검증
        const emailInput = e.target;
        setIsValid(emailInput.checkValidity());
    };


    const handleInsertNumber = (event) => {
      event.preventDefault();
      router.push('/login_insert_pwnum');
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
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                        aria-invalid={!isValid}
                        aria-describedby="emailHelp"
                    >
                        이메일
                    </BlockInput>
                </div>
                {/* <p id="emailHelp" className={styles.helpText}>
                    {isValid ? '' : 'Please enter a valid email address.'}
                </p> */}
                <div className={styles.login_btn}>
                    <ShadowBtn
                        className={`${styles.login_btn} ${isValid ? styles.point : ''}`}
                        size="large"
                        color={isValid ? 'point' : 'disable'}
                        textColor={isValid ? '' : 'disable_txt'}
                        disabled={!isValid}
                        onClick={handleInsertNumber} // 버튼 클릭 시 동작
                    >
                        인증번호 발송
                    </ShadowBtn>
                </div>
            </div>
        </div>
    );
}
