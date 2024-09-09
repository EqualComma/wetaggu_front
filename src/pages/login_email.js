import Header from "@/components/layout/Header";
import styles from "./login.module.scss";
import BlockInput from "@/components/common/input/BlockInput";
import ShadowBtn from "@/components/common/buttons/ShadowBtn";
import { useRouter } from "next/navigation";


export default function LoginEmail() {
  const router = useRouter();

  const handleClickPw = (event) => {
    event.preventDefault();
    router.push('/login_find_pw');
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p>Login</p>
        </div>
        <p className={styles.main_txt}>이메일로 로그인</p>
        <div className={styles.input_box}>
          <BlockInput>이메일</BlockInput>
        </div>
        <div className={styles.input_box}>
          <BlockInput>비밀번호</BlockInput>
        </div>
        <p className={styles.pw_found} onClick={handleClickPw}>비밀번호를 잊으셨나요?</p>
        <div className={styles.login_btn}>
          <ShadowBtn className={styles.login_btn} size="large" color="point">로그인</ShadowBtn>
        </div>
      </div>
    </div>
  );
}
