import { useNavigate } from "react-router-dom";

function HomeworkVideo() {
  const navigate = useNavigate();

  return (
    <div
      id="video2"
      className="flex flex-col items-center justify-center content-section w-full"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">فيديو الواجب</h2>
      <div className="aspect-video w-full max-w-4xl mx-auto">
        <video controls className="w-full h-full rounded">
          <source src="" type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو.
        </video>
      </div>
      <div className="flex justify-center mt-9">
        <button
          onClick={() => navigate("/media/lesson-exam")}
          className="relative rounded cursor-pointer px-5 py-2.5 w-56 text-center bg-blue-500 hover:bg-blue-600 transition duration-300 text-white"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12"></span>
          <span className="relative text-base font-semibold">
            الصفحة التالية
          </span>
        </button>
      </div>
    </div>
  );
}
export default HomeworkVideo;
