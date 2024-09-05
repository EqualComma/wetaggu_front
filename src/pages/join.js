import Header from "@/components/layout/Header";
import styles from "./join.module.scss";
import BasicBtn from "@/components/common/buttons/BasicBtn";

export default function Join() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p>Join</p>
        </div>
        <p className={styles.logo}>wetaggu</p>
        <div className={styles.btn_box}>
          <BasicBtn size="large">이메일로 회원가입</BasicBtn>
          <BasicBtn size="large" color="naver">
            네이버로 회원가입
          </BasicBtn>
          <BasicBtn size="large" color="kakao">
            카카오로 회원가입
          </BasicBtn>
          <BasicBtn size="large" color="x">
            X로 회원가입
          </BasicBtn>
        </div>
      </div>
    </div>
  );
}
