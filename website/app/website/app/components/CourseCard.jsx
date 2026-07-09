export default function CourseCard({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>
        دخول الكورس
      </button>
    </div>
  );
}
