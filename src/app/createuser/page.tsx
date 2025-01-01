import { createUser } from "@/actions/createUser";

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
      <div>
        <label htmlFor="name">あなたの名前:</label>
        <input id="name" name="name" type="text" required />
      </div>
      <button formAction={createUser}>createUser</button>
    </form>
  );
}
