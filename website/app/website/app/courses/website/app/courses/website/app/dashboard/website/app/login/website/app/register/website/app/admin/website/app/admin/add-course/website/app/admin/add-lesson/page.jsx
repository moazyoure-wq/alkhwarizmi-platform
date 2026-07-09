export default function AddLesson() {
  return (
    <main>
      <section>

        <h1>
          إضافة درس جديد 🎥
        </h1>

        <p>
          يا مستر ضيف تفاصيل الدرس هنا
        </p>

        <input
          type="text"
          placeholder="اسم الدرس"
        />

        <br /><br />

        <input
          type="number"
          placeholder="رقم الدرس"
        />

        <br /><br />

        <textarea
          placeholder="وصف الدرس"
        />

        <br /><br />

        <input
          type="text"
          placeholder="لينك فيديو الشرح"
        />

        <br /><br />

        <input
          type="text"
          placeholder="لينك ملف PDF أو الملزمة"
        />

        <br /><br />

        <button>
          حفظ الدرس ✅
        </button>

      </section>
    </main>
  );
}
