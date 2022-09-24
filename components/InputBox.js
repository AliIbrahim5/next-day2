import Image from "next/image";
import { useSession } from "next-auth/react";
import { RiEmotionHappyLine } from "react-icons/ri";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import firebase from "firebase/app"
import { db } from "firebase/app"


function InputBox() {
  const { session } = useSession();
  const inputRaf = useRef(null)
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRaf.current.value) return;
    db.collection('posts').add({
      message: inputRaf.current.value,
      name:  session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    inputRaf.current.value = '';
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        {/* <Image
          className="rounded-full"
          src={sessionStorage.user.image}
          width={40}
          height={40}
          layout="fixed"
        /> */}
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRaf}
            placeholder={`what's on your mind ? `}
          />
          <button hidden type="submit" onClick={sendPost}></button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400 " />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div className="inputIcon">
          <RiEmotionHappyLine className="h-7 text-red-500  " />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
