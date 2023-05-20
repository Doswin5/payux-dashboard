import { useRouter } from 'next/router';

export default function Home() {
  // const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }

  const router = useRouter()
  
  return (
    <div className="flex flex-col w-full h-full items-center justify-center text-center dark:text-gray-100 text-gray-600">
      <h3 className="font-normal text-lg w-[80%] mb-6">
        Welcome to Payux, this project's main focus was on its Payments Page. You can either navigate to the Payments Page by clicking the button below or clicking the Payments link on the sidebar.
      </h3>
      <button
        className="flex gap-2 items-center text-white bg-[#4A46FF] font-medium text-sm rounded-lg py-2 px-4" 
        onClick={() => router.push('/payments')}
      >
        Move to Payments Page
      </button>
    </div>
  )
}
