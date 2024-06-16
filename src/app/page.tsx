import Image from "next/image";
import { AuthPopup } from "@/app/feat/auth/auth-popup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthPopup />
    </main>
  );
}
