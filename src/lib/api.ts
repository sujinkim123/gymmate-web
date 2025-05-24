const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://api.gymmate.com'
        : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function apiFetch(path: string, options?: RequestInit) {
    const res = await fetch(`${BASE_URL}${path}`, options);

    if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
}