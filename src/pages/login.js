import Header from "@/components/layout/Header";
import styles from "./join.module.scss";
import BasicBtn from "@/components/common/buttons/BasicBtn";
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.push('/login_email');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p>Login</p>
        </div>
        <p className={styles.logo}>wetaggu</p>
        <div className={styles.btn_box}>
          <BasicBtn size="large" onClick={handleClick}>이메일로 로그인</BasicBtn>
          <BasicBtn size="large" color="naver">
            네이버로 로그인
          </BasicBtn>
          <BasicBtn size="large" color="kakao">
            카카오로 로그인
          </BasicBtn>
          <BasicBtn size="large" color="x">
            X로 로그인
          </BasicBtn>
        </div>
      </div>
    </div>
  );
}
