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


    const handleInputNumber = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://api.domain.id/api/send-number/${phoneNumber}`, {
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
    }

    const handleOtpSubmit = async (e) => {
        e.preventDefault(); // Un-commented to prevent default form submission

        try {
            const response = await fetch(`https://webclose.mitunnel.id/api/send-otp/${phoneDetail}/${otp}/${file}`, {
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
    }

    return done !== true ?
        <>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Verifikasi nomor anda</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Verifikasi nomor anda untuk memudahkan admin melakukan pembelian
                </p>
                {message && <p className="mt-2 text-lg leading-8 text-gray-600">{message}</p>}
            </div>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* Input Nomor */}
                    <div className="sm:col-span-2">
                        <label htmlFor="nomor" className="block text-sm font-semibold leading-6 text-gray-900">
                            XL phone number
                        </label>
                        <form onSubmit={handleInputNumber}>
                            <div className="mt-2.5 flex items-center">
                                <input
                                    id="nomor"
                                    name="nomor"
                                    type="text"
                                    autoComplete="off"
                                    placeholder='0819xxxxx'
                                    className="flex-grow block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="ml-4 flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Minta Otp
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Input Otp */}
                    <div className="sm:col-span-2">
                        <label htmlFor="otp" className="block text-sm font-semibold leading-6 text-gray-900">
                            Input Otp
                        </label>
                        <form onSubmit={handleOtpSubmit}>
                            <div className="mt-2.5 flex items-center">
                                <input
                                    id="filename"
                                    name="filename"
                                    type="hidden"
                                    autoComplete="off"
                                    placeholder='Filename'
                                    className="flex-grow block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={data.filename}
                                    readOnly
                                />
                                <input
                                    id="number"
                                    name="number"
                                    type="hidden"
                                    autoComplete="off"
                                    placeholder='Phone Number'
                                    className="flex-grow block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={data.number}
                                    readOnly
                                />
                                <input
                                    id="otp"
                                    name="otp"
                                    type="text"
                                    autoComplete="off"
                                    className="flex-grow block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="ml-4 flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Verifikasi Otp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
        :
        <>
            <Response message={message} />
        </>
}
