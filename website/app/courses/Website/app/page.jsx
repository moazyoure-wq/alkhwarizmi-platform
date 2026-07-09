import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page">

      <section className="container">

        <div className="card" style={{ textAlign: "center" }}>

          <Image
            src="/images/teacher.png"
            width={200}
            height={200}
            alt="مستر أمير طلعت"
            style={{ borderRadius: "50%", margin: "auto" }}
          />

          <h1 className="title">
            🧮 الخوارزمي
          </h1>

          <h2>
            منصة مستر أمير طلعت للرياضيات 👨‍🏫
          </h2>

          <p className="subtitle">
            منصة تعليمية لشرح الرياضيات
            <br />
            لكل المراحل:
            <br />
            ابتدائي - إعدادي - ثانوي
          </p>


          <div style={{ marginTop: "25px" }}>

            <Link href="/login">
              <button className="btn">
                🔐 تسجيل دخول
              </button>
            </Link>

            <Link href="/register">
              <button 
                className="btn"
                style={{ marginRight: "10px" }}
              >
                👨‍🎓 إنشاء حساب
              </button>
            </Link>

          </div>


          <div style={{ marginTop: "40px" }}>

            <h2>📚 الكورسات</h2>

            <Link href="/courses">
              <button className="btn">
                دخول الكورسات
              </button>
            </Link>


            <h2 style={{ marginTop: "30px" }}>
              💳 الاشتراكات
            </h2>

            <p className="subtitle">
              اشترك وابدأ مذاكرتك مع مستر أمير طلعت
            </p>

            <Link href="/subscription">
              <button className="btn">
                اشترك الآن
              </button>
            </Link>


            <h2 style={{ marginTop: "30px" }}>
              👨‍🏫 عن المستر
            </h2>

            <p>
              شرح مبسط ومتابعة للطلاب
              <br />
              وحل تدريبات وامتحانات
            </p>


            <Link href="/exams">
              <button className="btn">
                📝 الامتحانات
              </button>
            </Link>


            <br /><br />

            <Link href="/teacher">
              <button className="btn">
                صفحة المستر
              </button>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
