import * as React from "react";
import useInput from "../../hooks/useInput";

const singupPage: React.FunctionComponent = () => {
  const [userId, onChangeId] = useInput("");
  const [password, onChangePasword] = useInput("");
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");

  return (
    <>
      <h1 className="text-red-800">회원가입</h1>
      <p className="text-green-600">This is the about Signup</p>
      <form>
        <div>
          <label htmlFor="Id">아이디 </label>
          <input value={userId} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="Password">비밀번호 </label>
          <input value={password} onChange={onChangePasword} />
        </div>
        <div>
          <label htmlFor="Name">이름 </label>
          <input value={name} onChange={onChangeName} />
        </div>
        <div>
          <label htmlFor="Name">이메일 </label>
          <input value={email} onChange={onChangeEmail} />
        </div>
      </form>
    </>
  );
};

export default singupPage;
