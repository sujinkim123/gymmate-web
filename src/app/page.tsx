'use client'

import {useEffect, useState} from "react";
import {apiFetch} from "@/lib/api";

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    apiFetch('/api/test')
        .then(data => setMessage(data.message))
        .catch(console.error);
  }, []);

  return <div>🚀 백엔드에서 온 메시지: {message}</div>
}
