import { authClient } from '@/utils/auth-client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {

    const session = authClient.getSession()
  return <div>{session}</div>
}

function session ()
