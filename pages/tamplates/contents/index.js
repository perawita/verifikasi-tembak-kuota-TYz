'use client'

import { useState } from 'react'
import Response from '@/pages/tamplates/res/'

export default function Content() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [file, setFile] = useState('');
    const [phoneDetail, setPhoneDetail] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState({ filename: '', number: '' });
    const [done, setDone] = useState(false);

    const apiUrl = 'https://webstore.mitunnel.id';

    const handleInputNumber = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${apiUrl}/api/send-number/${phoneNumber}`, {
                method: 'GET',
            });

            const result = await response.json();

            if (result) {
                setMessage('OTP has been sent to your phone.');
                setData(result.body);
                setFile(result.body.filename);
                setPhoneDetail(result.body.number);
            } else {
                setMessage('Failed to send OTP.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Error sending OTP.');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${apiUrl}/api/send-otp/${phoneDetail}/${otp}/${file}`, {
                method: 'GET',
            });

            const result = await response.json();

            if (result) {
                setMessage(result.body);
            } else {
                setMessage('Failed to verify OTP.');
            }
            setDone(true);
        } catch (error) {
            console.error(error);
            setMessage('Error verifying OTP.');
        }
    };

    return done !== true ? (
        <>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold text-white tracking-tight sm:text-5xl">
                    Verifikasi Nomor Anda
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                    Verifikasi nomor Anda untuk memudahkan admin melakukan pembelian.
                </p>
                {message && <p className="mt-4 text-lg text-yellow-400">{message}</p>}
            </div>

            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* Input Nomor */}
                    <div className="sm:col-span-2">
                        <label htmlFor="nomor" className="block text-sm font-semibold text-white">
                            XL Phone Number
                        </label>
                        <form onSubmit={handleInputNumber}>
                            <div className="mt-4 flex items-center">
                                <input
                                    id="nomor"
                                    name="nomor"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="0819xxxxx"
                                    className="flex-grow block w-full rounded-md border-2 border-white bg-transparent text-white px-3.5 py-2 text-lg shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="ml-4 flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                                >
                                    Minta OTP
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Input OTP */}
                    <div className="sm:col-span-2">
                        <label htmlFor="otp" className="block text-sm font-semibold text-white">
                            Input OTP
                        </label>
                        <form onSubmit={handleOtpSubmit}>
                            <div className="mt-4 flex items-center">
                                <input
                                    id="filename"
                                    name="filename"
                                    type="hidden"
                                    value={data.filename}
                                    readOnly
                                />
                                <input
                                    id="number"
                                    name="number"
                                    type="hidden"
                                    value={data.number}
                                    readOnly
                                />
                                <input
                                    id="otp"
                                    name="otp"
                                    type="text"
                                    autoComplete="off"
                                    className="flex-grow block w-full rounded-md border-2 border-white bg-transparent text-white px-3.5 py-2 text-lg shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="ml-4 flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                                >
                                    Verifikasi OTP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .background {
                    background: linear-gradient(45deg, #ff6f61, #d7d3d3, #ffccff);
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    backdrop-filter: blur(10px);
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </>
    ) : (
        <Response message={message} />
    );
}
