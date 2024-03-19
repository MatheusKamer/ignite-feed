import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />

      <div className="flex max-w-[1120px] mx-auto my-8 px-0 py-4 grid-cols-2 gap-8 items-start">
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
