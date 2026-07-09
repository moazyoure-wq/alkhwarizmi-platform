"use client";

import { useState } from "react";

export default function Admin() {

  const [video, setVideo] = useState(null);
  const [pdf, setPdf] = useState(null);


  function uploadFiles(e) {
    e.preventDefault();

    alert(
      "تم تجهيز الملفات للرفع:\n" +
      "الفيديو: " + (video ? video.name : "لا يوجد") +
      "\nPDF: " + (pdf ? pdf.name : "لا يوجد")
    );
  }


  return (
    <main className="page">

      <section className="container">

        <div className="card">

          <h1 className="title">
            👨‍💻 لوحة الأدمن
          </h1>

          <p className="subtitle">
            رفع فيديوهات وملفات PDF للكورسات
          </p>


          <form onSubmit={uploadFiles}>


            <h3>
              🎥 رفع فيديو
            </h3>

            <input
              className="input"
              type="file"
              accept="video/*"
              onChange={(e)=>setVideo(e.target.files[0])}
            />


            <h3>
              📄 رفع ملف PDF
            </h3>

            <input
              className="input"
              type="file"
              accept="application/pdf"
              onChange={(e)=>setPdf(e.target.files[0])}
            />


            <button className="btn">
              رفع الملفات
            </button>


          </form>


        </div>

      </section>

    </main>
  );
}
