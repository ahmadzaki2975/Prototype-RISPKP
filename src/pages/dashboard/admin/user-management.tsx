import Layout from "@/components/Layout";
import CreateUserModal from "@/components/modals/CreateUserModal";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UserManagementPage() {
  interface User {
    _id: string;
    role: string;
    username: string;
  }

  const [users, setUsers] = useState([] as User[]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [refetchTrigger, setRefetchTrigger] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false); 
  const router = useRouter();

  const getUsers = () => {
    const toastLoading = toast.loading("Mengambil data...");
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "users", {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data);
        if(loaded) {
          toast.dismiss(toastLoading);
        } else {
          toast.update(toastLoading, {
            render: "Berhasil",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
        }
        setLoaded(true);
        return;
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          if(loaded) {
            toast.dismiss(toastLoading);
          } else {
            toast.update(toastLoading, {
              render: "Autentikasi gagal!",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          }
          // ! Change to "/dashboard" if dashboard is ready
          router.push("/dashboard/wilayah-manajemen-kebakaran/peta-waktu-tanggap");
          return;
        }
        toast.update(toastLoading, {
          render: "Gagal",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  };

  const deleteUser = (id: string) => {
    const toastLoading = toast.loading("Menghapus user...");
    axios
      .delete(process.env.NEXT_PUBLIC_API_URL + "users/" + id, {
        withCredentials: true,
      })
      .then(() => {
        toast.update(toastLoading, {
          render: "Berhasil Menghapus User",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        setRefetchTrigger(!refetchTrigger);
      })
      .catch(() => {
        toast.update(toastLoading, {
          render: "Gagal Menghapus User",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      });
  };

  useEffect(() => {
    if (isModalOpen === false) getUsers();
  }, [isModalOpen, refetchTrigger]);

  return (
    <>
      {isModalOpen && <CreateUserModal setIsOpen={setIsModalOpen} />}
      <Layout>
        <main className="w-full">
          <section className="flex justify-between flex-wrap items-center mb-5">
            <h1 className="text-xl sm:text-2xl font-bold">User Management</h1>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="px-3 py-2 transition rounded-md bg-blue-500 hover:bg-blue-800 text-white mr-5"
            >
              Buat User
            </button>
          </section>
          <section className="w-full">
            <div className="flex flex-row items-center justify-between w-full border-t border-gray-300" />
            {users.map((user) => (
              <div
                key={user._id}
                className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-gray-300"
              >
                <div className="flex flex-row items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-sm text-gray-500">Role: {user.role}</p>
                    <p className="text-sm text-gray-500">ID: {user._id}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="px-3 py-1 transition rounded-md bg-red-500 hover:bg-red-800 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </Layout>
    </>
  );
}
