import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>

        <Image
          src="/images/teacher.png"
          width={200}
          height={200}
          alt="مستر أمير طلعت"
        />

        <h1>
          🧮 الخوارزمي
        </h1>

        <h2>
          منصة مستر أمير طلعت للرياضيات 👨‍🏫
        </h2>

        <p>
          منصة تعليمية لشرح الرياضيات
          <br />
          لكل المراحل:
          <br />
          ابتدائي - إعدادي - ثانوي
        </p>


        <div>
          <Link href="/login">
            <button>
              🔐 تسجيل دخول
            </button>
          </Link>

          <Link href="/register">
            <button>
              👨‍🎓 إنشاء حساب
            </button>
          </Link>
        </div>


        <h2>
          📚 الكورسات
        </h2>

        <Link href="/courses">
          <button>
            دخول الكورسات
          </button>
        </Link>


        <h2>
          💳 الاشتراكات
        </h2>

        <p>
          اشترك وابدأ مذاكرتك مع مستر أمير طلعت
        </p>

        <Link href="/subscription">
          <button>
            اشترك الآن
          </button>
        </Link>


        <h2>
          👨‍🏫 عن المستر
        </h2>

        <p>
          شرح مبسط ومتابعة للطلاب
          وحل تدريبات وامتحانات
        </p>


        <Link href="/exams">
          <button>
            📝 الامتحانات
          </button>
        </Link>


        <Link href="/teacher">
          <button>
            صفحة المستر
          </button>
        </Link>


      </section>
    </main>
  );
}
