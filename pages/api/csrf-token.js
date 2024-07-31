// export default async function GET(req, res) {
//     try {
//         const res = await fetch('http://127.0.0.1:8000/api/csrf-token', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//         });

//         if (!res.ok) {
//             throw new Error('Failed to fetch CSRF token');
//         }

//         const data = await res.json();
//         res.status(200).json({ csrfToken: data.csrfToken });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({massage: 'Error fetching CSRF token'});
//     }
// }
