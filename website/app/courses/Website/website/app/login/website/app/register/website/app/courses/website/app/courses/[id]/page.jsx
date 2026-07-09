import Link from "next/link";

export default function CourseDetails({ params }) {

  const id = params.id;


  return (
    <main className="page">

      <section className="container">

        <div className="card">

          <h1 className="title">
            📘 تفاصيل الكورس رقم {id}
          </h1>


          <p className="subtitle">
            شرح الدرس + الفيديوهات + ملفات المراجعة
          </p>


          <div className="media-box">

            <h2>
              🎥 فيديو الدرس
            </h2>

            <video controls>

              <source 
                src="/videos/lesson.mp4"
                type="video/mp4"
              />

              المتصفح لا يدعم تشغيل الفيديو

            </video>

          </div>


          <div 
            className="media-box"
            style={{marginTop:"25px"}}
          >

            <h2>
              📄 ملف الشرح PDF
            </h2>


            <a 
              href="/files/lesson.pdf"
              target="_blank"
            >

              <button className="btn">
                فتح ملف PDF
              </button>

            </a>


          </div>


          <div style={{marginTop:"25px"}}>

            <Link href="/courses">
              العودة للكورسات
            </Link>

          </div>


        </div>

      </section>

    </main>
  );
}
