const Nav = () =>
<nav className="bg-blue-500 text-white">
    <div className="container grid p-3 mx-auto grid-cols-[auto_65%] md:grid-cols-[auto_55%] lg:grid-cols-[auto_40%]">
        <div className="flex items-center">
            <a href="/"><span className="text-lg font-semibold">Lorem Ipsum</span></a>
        </div>
        <div className="grid float-right rounded-lg border-[2px] border-blue-400 overflow-hidden grid-cols-[auto_2rem] md:grid-cols-[auto_3rem]">
            <input className="py-1 px-2 text-black outline-0" placeholder="Cari Produk"/>
            <button><i className="fa-solid fa-magnifying-glass"/></button>
        </div>
    </div>
</nav>

export default Nav;