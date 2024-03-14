import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header />

      <div className="flex max-w-[1120px] mx-auto my-8 px-0 py-4 grid-cols-2 gap-8 items-start">
        <aside className="w-[256px]">
          sidebar
        </aside>
        <main>
          main
        </main>
      </div>
    </>
  )
}

export default App
