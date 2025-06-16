import { createFileRoute } from '@tanstack/react-router'
import { createAuthClient } from 'better-auth/client'

export const Route = createFileRoute('/')({
  component: App,
})

const authClient = createAuthClient({
  baseURL: "http://localhost:3000"
})

const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",

  })

}

function App() {


  return (
    <div className="text-center">
      <button className='bg-black text-amber-50 ' onClick={signIn}>signin </button>

    </div>
  )
}
