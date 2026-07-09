export default function AdminSubscription() {
  return (
    <main>
      <section>

        <h1>
          إعدادات الاشتراكات 💰
        </h1>

        <p>
          يا مستر حدد سعر الاشتراك اللي يناسبك
        </p>

        <input
          type="number"
          placeholder="سعر الاشتراك الشهري"
        />

        <br /><br />

        <input
          type="number"
          placeholder="سعر اشتراك الترم"
        />

        <br /><br />

        <button>
          حفظ الأسعار ✅
        </button>

      </section>
    </main>
  );
}
