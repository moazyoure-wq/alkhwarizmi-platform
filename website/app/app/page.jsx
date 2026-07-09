export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        background: "#f5f5f5",
      }}
    >
      <h1>منصة الخوارزمي</h1>

      <p>أهلاً بك في المنصة التعليمية</p>

      <button
        style={{
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        ابدأ التعلم
      </button>
    </main>
  );
}
