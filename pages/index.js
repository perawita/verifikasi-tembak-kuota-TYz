import Head from 'next/head';
import { Inter } from "next/font/google";
import Content from '@/pages/tamplates/contents/';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aktifkan = process.env.NEXT_PUBLIC_AKTIVASI === 'true';


  return aktifkan ? (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Head>
        <title>Verifikasi Nomor</title>
      </Head>

      <Content />

      {/* Spacer */}
      <div className="mt-32"></div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-white dark:bg-black">
      <div className="w-full max-w-7xl px-4 mx-auto md:h-auto lg:flex lg:items-center">
        <div className="relative isolate overflow-hidden px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-16">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
              Oooops terjadi kesalahan
            </h2>
            <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
              Halaman ini sudah di tutup, harap bersabar admin mungkin saja sedang melakukan perbaikan untuk mengatasi masalah yang terjadi.
            </p>
          </div>

          <div className="relative mt-16 lg:mt-8 lg:flex-shrink-0 lg:w-1/2 lg:h-auto">
            <img
              alt="App screenshot"
              src="./undraw_server_down_s-4-lk.svg"
              className="w-50 h-50 object-contain sm:rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
