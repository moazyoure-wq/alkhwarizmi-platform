import Image from "next/image";

export default function Teacher() {
  return (
    <main>
      <section>
        <Image
          src="/teacher.jpg"
          width={200}
          height={200}
          alt="المستر"
        />

        <h1>مستر أمير طلعت</h1>

        <h2>مدرس رياضيات</h2>

        <p>
          مستر متخصص في شرح الرياضيات بطريقة سهلة وبسيطة
          لكل المراحل من ابتدائي لحد إعدادي.
        </p>

        <button>
          اشترك دلوقتي
        </button>

        <h3>الكورسات</h3>

        <ul>
          <li>رياضيات الصف الرابع</li>
          <li>رياضيات الصف الخامس</li>
          <li>رياضيات الصف السادس</li>
          <li>الصف الأول الإعدادي</li>
          <li>الصف الثاني الإعدادي</li>
          <li>الصف الثالث الإعدادي</li>
        </ul>

      </section>
    </main>
  );
}
