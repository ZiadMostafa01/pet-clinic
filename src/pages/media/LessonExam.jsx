import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/exam.png";

function LessonExam() {
  const navigate = useNavigate();

  const [startExam, setStartExam] = useState(false);

  return (
    <>
      {!startExam && (
        <div
          id="quiz"
          className="flex flex-col items-center justify-center content-section text-center mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 mt-5">امتحان الحصة</h2>
          <div className="flex justify-center items-center mx-4 px-10 py-16 md:px-36 md:py-20 gap-5 shadow-md bg-gray-300 rounded-md">
            <span className="font-semibold text-lg sm:text-2xl">
              مدة الامتحان: 15 دقيقة
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="Time"
              className="w-20 h-20"
            >
              <path
                fill="#53d86a"
                d="M346 467.5H166s54-63 90-63 90 63 90 63zm-108-126a5 5 0 0 1-5-5v-10a5 5 0 1 1 10 0v10a5 5 0 0 1-5 5zm0-30a5 5 0 0 1-5-5v-10a5 5 0 1 1 10 0v10a5 5 0 0 1-5 5zm36 66c-2.763 0-5-2.237-5-5v-10c0-2.762 2.237-5 5-5a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5zm0-30c-2.763 0-5-2.237-5-5v-10c0-2.762 2.237-5 5-5a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5zm-18-32a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5c2.762 0 5-2.237 5-5v-10a5 5 0 0 0-5-5zm0 60a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5c2.762 0 5-2.237 5-5v-10a5 5 0 0 0-5-5zm0-30a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5c2.762 0 5-2.237 5-5v-10a5 5 0 0 0-5-5zm0-60a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5c2.762 0 5-2.237 5-5v-10a5 5 0 0 0-5-5zm44.141-107.334c-45-18-63-27-81-18-16.15 8.08-39.56 1.66-70.21 26.29 20.14 28.38 48.36 53.75 87.85 67.85l14.304 5.344a5.06 5.06 0 0 0-.085.85v10a5 5 0 0 0 5 5c2.762 0 5-2.237 5-5v-10a4.98 4.98 0 0 0-.234-1.436l12.735-4.758 4.439-1.65.2-.08c45.22-17.55 75.15-50.12 94.93-84.43-19.778 10.45-47.759 20.09-72.929 10.02z"
                className="color2cdd91 svgShape"
              ></path>
              <path
                fill="#595bd4"
                d="M427 175.5a5 5 0 0 0 5-5V47.492c5.35-2.866 9-8.509 9-14.992v-3c0-9.374-7.626-17-17-17H88c-.875 0-1.725.064-2.467.182C77.248 13.882 71 21.112 71 29.5v3c0 4.577 1.79 8.871 5.041 12.092A16.985 16.985 0 0 0 80 47.513V170a5 5 0 0 0 10 0V49.5h8.211c.925 15.752 5.863 66.297 31.935 115.768 4.705 8.94 9.942 17.49 15.567 25.414v.001c20.997 29.586 47.331 51.388 78.402 64.962-25.167 11.032-47.177 27.543-65.546 49.23-16.873 19.918-30.71 44.197-41.128 72.161-14.396 38.641-18.193 73.084-19.14 85.463H90V341a5 5 0 1 0-10 0v123.508c-5.35 2.867-9 8.51-9 14.992v3c0 9.374 7.626 17 17 17h336c9.374 0 17-7.626 17-17v-3c0-6.482-3.65-12.125-9-14.992V341.5c0-2.762-2.238-5-5-5s-5 2.238-5 5v121h-8.299c-.948-12.379-4.745-46.822-19.141-85.463-10.418-27.964-24.256-52.243-41.128-72.161-18.368-21.685-40.377-38.196-65.542-49.228 37.371-16.318 67.75-44.431 90.371-83.671l.003-.006a241.626 241.626 0 0 0 9.415-18.093c21.355-45.665 25.385-89.809 26.145-104.377H422v121a5 5 0 0 0 5 4.999zM81 29.5c0-3.453 2.565-6.429 6.029-6.931.289-.046.617-.069.971-.069h336c3.859 0 7 3.14 7 7v3c0 3.86-3.141 7-7 7H88a6.937 6.937 0 0 1-4.92-2.012A6.968 6.968 0 0 1 81 32.5v-3zm350 453c0 3.859-3.141 7-7 7H88c-3.86 0-7-3.141-7-7v-3c0-3.859 3.14-7 7-7h336c3.859 0 7 3.141 7 7v3zm-52.376-332.863a232.853 232.853 0 0 1-9.021 17.341l-.004.004c-22.866 39.665-53.956 67.343-92.455 82.285l-4.524 1.686c-.065.024-.12.064-.185.091a5.205 5.205 0 0 0-.475.232 4.998 4.998 0 0 0-.401.24 4.798 4.798 0 0 0-.387.298c-.124.104-.247.208-.359.322s-.214.238-.316.363a4.794 4.794 0 0 0-.294.39 5.1 5.1 0 0 0-.236.408 5.065 5.065 0 0 0-.223.471c-.027.065-.066.123-.091.19-.028.081-.036.164-.061.245a4.875 4.875 0 0 0-.186 1.966 4.9 4.9 0 0 0 .207.976c.024.078.032.157.062.235.03.081.074.153.107.232.043.099.087.196.136.293.097.19.206.369.323.542.047.068.088.14.139.205.179.237.373.459.588.658.025.023.056.041.082.064.196.174.406.33.626.471.077.049.157.092.237.137.201.113.408.211.623.296.05.02.092.05.144.068 51.766 18.488 89.586 58.832 112.411 119.911 13.611 36.424 17.518 69.767 18.561 82.24H108.35c1.043-12.474 4.95-45.816 18.561-82.24 22.825-61.079 60.646-101.423 112.411-119.911.053-.019.097-.05.148-.07.213-.085.419-.182.618-.294.084-.047.168-.094.249-.146.199-.127.387-.27.567-.426.046-.039.097-.073.142-.114.214-.199.41-.419.589-.657.044-.059.079-.123.121-.184a5.13 5.13 0 0 0 .339-.568c.048-.096.088-.192.13-.29.04-.094.09-.181.125-.277.025-.07.031-.142.053-.213.052-.17.093-.342.127-.517.03-.154.056-.305.071-.458.017-.165.021-.328.021-.495 0-.166-.004-.329-.021-.492a4.854 4.854 0 0 0-.071-.459 5.292 5.292 0 0 0-.128-.518c-.021-.07-.027-.142-.052-.211-.027-.076-.071-.139-.101-.212a4.946 4.946 0 0 0-.76-1.272 5.064 5.064 0 0 0-.323-.361 4.989 4.989 0 0 0-.358-.321 4.671 4.671 0 0 0-.795-.534 5.266 5.266 0 0 0-.48-.228c-.073-.03-.136-.073-.21-.1-34.298-12.246-63.049-34.463-85.454-66.035v-.001c-5.37-7.563-10.373-15.734-14.874-24.287-24.57-46.616-29.7-95.511-30.739-111.106h295.53c-.852 14.339-5.018 57.063-25.162 100.137z"
                className="color3a3a3a svgShape"
              ></path>
              <g fill="#53d86a" className="color2cdd91 svgShape">
                <path
                  d="M76 170h18v171H76zM418 170.5h18v171h-18z"
                  fill="#fe9526"
                  className="color000000 svgShape"
                ></path>
              </g>
            </svg>
          </div>

          <div className="flex justify-center mt-9">
            <button
              onClick={() => setStartExam(true)}
              className="relative rounded px-5 py-2.5 w-56 text-center bg-blue-500 hover:bg-blue-600 transition duration-300 text-white"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12"></span>
              <span className="relative text-base font-semibold">
                ابدأ الامتحان
              </span>
            </button>
          </div>
        </div>
      )}
      {startExam && (
        <div id="quiz" className="content-section w-full my-10">
          <div className="flex items-center justify-center">
            <div className="bg-white border-2 border-gray-300 shadow-lg rounded-xl px-6 py-4 text-center">
              <div
                className="flex gap-4 text-2xl font-bold text-blue-600"
                id="exam-countdown"
              >
                <div className="flex flex-col items-center">
                  <span id="seconds">46</span>
                  <span className="text-sm text-gray-500">ثانية</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                  <span id="minutes">23</span>
                  <span className="text-sm text-gray-500">دقيقة</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                  <span id="hours">01</span>
                  <span className="text-sm text-gray-500">ساعة</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pr-10 mt-5 md:mt-10">
            <h2 className="text-xl md:text-2xl font-semibold">
              اختر الاجابة الصحيحة
            </h2>

            <div className="md:pr-10 mt-5 md:mt-16 md:space-y-5 space-y-2">
              <div>
                <div className="flex text-lg md:text-xl font-medium">
                  <span>1.</span>
                  <h4>
                    كم ساعة في اليوم يقضيها مستخدموا الانترنت في تايلاند
                    والفلبين والبرازيل علي وسائل التواصل الاجتماعي؟
                  </h4>
                </div>
                <form action="" method="POST">
                  <div className="grid grid-cols-1 text-lg md:text-xl font-medium p-6 gap-y-5">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        أ
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        ب
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        ج
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        د
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:pr-10 mt-5 md:mt-16 md:space-y-5 space-y-2">
              <div>
                <div className="flex text-lg md:text-xl font-medium">
                  <span>1.</span>
                  <h4>
                    كم ساعة في اليوم يقضيها مستخدموا الانترنت في تايلاند
                    والفلبين والبرازيل علي وسائل التواصل الاجتماعي؟
                  </h4>
                </div>
                <form action="" method="POST">
                  <div className="grid grid-cols-1 text-lg md:text-xl font-medium p-6 gap-y-5">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        أ
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        ب
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        ج
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        د
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:pr-10 mt-5 md:mt-16 md:space-y-5 space-y-2">
              <div>
                <img src={img} alt="" className="w-full h-full" />

                <form action="" method="POST">
                  <div className="grid grid-cols-1 text-lg md:text-xl font-medium p-6 gap-y-5">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        أ
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        ب
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        ج
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="option"
                        className="hidden peer"
                      />
                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-sm font-bold hover:bg-blue-200 transition duration-300 cursor-pointer">
                        د
                      </span>
                      <span>ست ساعات ونصف</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <button
              onClick={() => navigate("/media/lesson-file")}
              className="relative rounded cursor-pointer px-5 py-2.5 w-56 text-center bg-blue-500 hover:bg-blue-600 transition duration-300 text-white"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12"></span>
              <span className="relative text-base font-semibold">
                الصفحة التالية
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default LessonExam;
