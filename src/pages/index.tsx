import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import UGM from "../../public/logos/ugm.png";
import Damkar from "../../public/logos/damkar.png";
import Pemkot from "../../public/logos/pemkot.png";
import Background from "@/../public/Landing.jpg";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
// import usePostDistance from "@/hooks/usePostDistance";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  // const closestPost = usePostDistance();

  const Login = (e: any): void => {
    e.preventDefault();
    try {
      if (!isUsernameValid) throw new Error("Username tidak boleh kosong");
      if (!isPasswordValid) throw new Error("Password tidak boleh kosong");
      const toastLoading = toast.loading("Sedang memproses login...");
      axios
        .post(
          process.env.NEXT_PUBLIC_API_URL + "users/login",
          {
            username,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http//:localhost:3000",
              "Access-Control-Allow-Credentials": true,
            },
          }
        )
        .then(() => {
          toast.update(toastLoading, {
            render: "Login berhasil!",
            type: "success",
            isLoading: false,
          });
          // ! Change to "/dashboard" if dashboard is ready
          router.push(
            "/dashboard/peta-dasar"
          );
        })
        .catch((err) => {
          const statusCode = err?.response?.status;
          if (!statusCode)
            return toast.update(toastLoading, {
              render: "Terjadi kesalahan!",
              type: "error",
              isLoading: false,
            });
          toast.update(toastLoading, {
            render:
              statusCode === 401
                ? "Username atau password salah!"
                : statusCode === 404
                  ? "User tidak ditemukan"
                  : "Terjadi kesalahan!",
            type: "error",
            isLoading: false,
          });
        })
        .finally(() => {
          setTimeout(() => {
            toast.dismiss(toastLoading);
          }, 3000);
        });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "users/data", {
        withCredentials: true,
      })
      .then(() => {
        router.push(
          "/dashboard/peta-dasar"
        );
        toast.info("Anda sudah login, mengarahkan ke dashboard...");
      })
      .catch(() => {
        // do nothing
      });
  }, []);

  return (
    <main className="flex min-h-screen bg-white max-w-[100vw]">
      <section className="w-full min-h-screen bg-neutral-100 grid place-items-center">
        <form
          className="flex flex-col justify-center items-center max-w-[410px] min-w-[300px] h-full gap-7 w-1/2"
          onSubmit={(e) => Login(e)}
        >
          <h1 className="text-[24px] font-semibold">Login RISPKP</h1>

          <label className="flex flex-col w-full">
            <span className="text-neutral-400/80 text-[14px]">Username</span>
            <input
              type="text"
              className={
                "w-full py-1 px-2 bg-transparent transition border-b-2 border-green-300/80 focus:border-green-200 !outline-none " +
                (isUsernameValid ? "" : "!border-red-500")
              }
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setIsUsernameValid(e.target.value.length > 1);
              }}
            />
          </label>

          <label className="flex flex-col w-full">
            <span className="text-neutral-400/80 text-[14px]">Password</span>
            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                className={
                  "w-full py-1 px-2 bg-transparent transition border-b-2 border-green-300/80 focus:border-green-200 !outline-none " +
                  (isPasswordValid ? "" : "!border-red-500")
                }
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsPasswordValid(e.target.value.length > 1);
                }}
              />
              <button
                type="button"
                className="absolute right-[10px] top-[5px] text-green-400 text-[20px]"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
              >
                <FaEye />
              </button>
            </div>
          </label>

          {/* <div className="flex flex-col justify-center items-center">
            {isNaN(closestPost.distance) ||
            closestPost.post.Nama == "" ||
            isNaN(closestPost.post.Pos) ? (
                <h1>Gagal mendapatkan lokasi</h1>
              ) : (
                <>
                  <h1>
                  Post Terdekat: {closestPost.post.Nama} (Pos{" "}
                    {closestPost.post.Pos})
                  </h1>
                  <h1>Jarak: {closestPost.distance.toFixed(2)} km</h1>
                </>
              )}
          </div> */}

          <button
            type="submit"
            className="bg-green-300 w-full py-3 text-white font-semibold rounded-[5px] mt-2"
          >
            Login
          </button>
        </form>
      </section>

      <section className="w-1/2 flex-shrink-0 relative hidden md:flex flex-col justify-center items-center overflow-hidden">
        <Image
          src={Background}
          alt="Background"
          className="w-full h-full absolute z-[3] min-w-[800px] min-h-[1064px] aspect-[600/375]"
          priority
          placeholder="blur"
        />
        <div className="w-full h-full absolute z-[5] top-0 bg-gradient-to-tr from-green-300/60 to-navy/60 backdrop-blur-[2px]" />
        <div className="absolute flex flex-col justify-center items-center gap-10 z-[6]">
          <div className="flex gap-5 items-center">
            <Image
              src={Pemkot}
              priority
              alt="Pemkot"
              className="w-[50px] lg:w-[80px]"
              placeholder="blur"
            />
            <Image
              src={Damkar}
              priority
              alt="Damkar"
              className="w-[70px] lg:w-[100px]"
              placeholder="blur"
            />
            <Image
              src={UGM}
              priority
              alt="UGM"
              className="w-[70px] lg:w-[100px]"
              placeholder="blur"
            />
          </div>
          <h1 className="max-w-[90%] lg:max-w-[80%] text-center font-bold text-white text-[25px] lg:text-[28px]">
            RENCANA INDUK SISTEM PROTEKSI KEBAKARAN DAN PENYELAMATAN (RISPKP)
            <br />
            KOTA YOGYAKARTA
          </h1>
        </div>
      </section>
    </main>
  );
}
