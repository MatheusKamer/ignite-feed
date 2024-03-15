export function Sidebar() {
  return(
    <aside className="w-[256px] bg-gray-800 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-[72px] object-cover"
      />

      <div className="flex flex-col items-center">
        <strong>Matheus Kamer</strong>
        <span>FullStack Developer</span>
      </div>

      <footer className="flex justify-center border-t-[1px] border-gray-600 mt-6 p-8 pt-6">
        <a
          href="#"
          className="w-full flex items-center justify-center bg-transparent text-green-500 border border-green-500 px-6 pt-4 pb-[14px] rounded-lg"
        >
          <button>EDITAR PERFIL</button>
        </a>

      </footer>
    </aside>
  )
}
