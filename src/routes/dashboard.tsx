
import { authClient } from '@/utils/auth-client';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})



function RouteComponent() {
  const [session, setSession] = useState(" ");

  useEffect(() => {
    async function fetchSession() {
      const s = await authClient.getSession();
      console.log(s);
      if (s.data && s.data.user) {
        setSession(s.data.user.name);
      }
    }

    fetchSession();
  }, []);
   
  return <div>Hello {session}</div>
}


