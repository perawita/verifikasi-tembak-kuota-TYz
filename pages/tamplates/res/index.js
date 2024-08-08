export default function Response({ message }) {
    return (
        <>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{message ? "Verifikasi nomor anda selesai dilakukan" : "What's wrong"}</h2>

                <p className="mt-2 text-lg leading-8 text-gray-600">{message ?? 'Lakukan verifikasi terlebih dahulu! '}</p>

                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kembali ke menu verifikasi</a>
                </div>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}
