"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    alert(
      "تم تسجيل الدخول\nالبريد: " + email
    );
  }


  return (
    <main className="page">

      <section className="container">

        <div className="card">

          <h1 className="title">
            🔐 تسجيل الدخول
          </h1>

          <p className="subtitle">
            ادخل حسابك للوصول إلى الكورسات
          </p>


          <form onSubmit={handleLogin}>

            <input
              className="input"
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />


            <input
              className="input"
              type="password"
              placeholder="كلمة السر"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />


            <button className="btn">
              دخول
            </button>

          </form>


          <br />

          <Link href="/register">
            ليس لديك حساب؟ إنشاء حساب
          </Link>

        </div>

      </section>

    </main>
  );
}
