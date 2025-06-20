import { signIn } from '@/utils/auth-client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})


function App() {
  return (
    <div className="text-center">
      <button className='bg-black text-amber-50 ' onClick={signIn}>signin </button>
    </div>
  )
}
