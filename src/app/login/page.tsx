import { login, signup } from "@/actions/login";

export default function LoginPage() {
  return (
    <form>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="password">パスワード:</label>
        <input id="password" name="password" type="password" required />
      </div>
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
