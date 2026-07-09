"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    alert(
      "تم إنشاء الحساب بنجاح\nالاسم: " + name
    );
  }


  return (
    <main className="page">

      <section className="container">

        <div className="card">

          <h1 className="title">
            👨‍🎓 إنشاء حساب
          </h1>

          <p className="subtitle">
            سجل الآن وابدأ التعلم
          </p>


          <form onSubmit={handleRegister}>

            <input
              className="input"
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />


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
              إنشاء الحساب
            </button>

          </form>


          <br />

          <Link href="/login">
            لديك حساب؟ تسجيل الدخول
          </Link>


        </div>

      </section>

    </main>
  );
}
