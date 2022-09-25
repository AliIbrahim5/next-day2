import Image from "next/image";
import { useSession } from "next-auth/react";
import { RiEmotionHappyLine } from "react-icons/ri";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import firebase from "firebase/app";
import { db } from "firebase/app";

function InputBox() {
  const { session } = useSession();
  const inputRaf = useRef(null);
  const filepickerRef = useRef(null);
  const [ImageTopost, setImagetopost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRaf.current.value) return;
    db.collection("posts").add({
      message: inputRaf.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRaf.current.value = "";
  };
  // sohw image to files
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImagetopost(readerEvent.target.result);
    };
  };

  // remove To image
  const removeImage = (e) => {
    setImagetopost();
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

        {ImageTopost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition 
            duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={ImageTopost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400 " />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
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
