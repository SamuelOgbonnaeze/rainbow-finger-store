"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

interface SignInToastProps {
  message: string;
}

const SignInToast: React.FC<SignInToastProps> = ({ message }) => {
  const router = useRouter();
  const hasShownToast = useRef(false); 

  useEffect(() => {

    if (!hasShownToast.current) {
      toast.error(message);
      hasShownToast.current = true; 
    }


    const timer = setTimeout(() => {
      router.push("/lesson");
    }, 2000); // 2-second delay before redirecting

  
    return () => clearTimeout(timer);
  }, [message, router]);

  return null;
};

export default SignInToast;
