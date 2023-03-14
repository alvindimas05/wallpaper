import Nav from "./Nav";

const App = () =>
<>
  <Nav/>
  <div className="container mx-auto">
    <div className="mx-2 my-3">
      <div className="md:w-3/4 xl:w-2/4 h-[10rem] md:h-[12rem] lg:h-[15rem] mx-auto relative overflow-hidden">
        <div className="absolute mx-auto right-0 top-1/2 -translate-y-1/2 grid w-[300%] grid-cols-3 carousel">
          <img className="min-w-full" src="https://via.placeholder.com/800"/>
          <img className="min-w-full" src="https://via.placeholder.com/750"/>
          <img className="min-w-full" src="https://via.placeholder.com/800"/>
        </div>
      </div>
    </div>
    <div className="grid text-[17px] grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
    </div>
  </div>
</>,

Produk = () =>
<div className="mx-2 mt-2 hover:drop-shadow-lg cursor-pointer">
  <img alt="Produk" className="w-full" src="https://via.placeholder.com/300"/>
  <div className="p-2 border">
    <div className="font-semibold mt-1">Produk A</div>
    <div className="text-sm">Wallpaper Anak</div>
    <div className="text-sm text-gray-500 mt-2"><strike>Rp 150.000</strike></div>
    <div className="font-medium text-orange-500">Rp 100.000/roll</div>
    <button className="mt-2 text-center w-full bg-blue-500 text-white py-1 focus:bg-blue-400" onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=6285641631620&text=Saya%20ingin%20memesan%20produk%20ini"}><i className="fa fa-shopping-cart"/>&nbsp;Beli</button>
  </div>
</div>,

Search = () =>
<>
  <Nav/>
  <div className="container mx-auto">
    <div className="m-2 md:grid md:grid-cols-2">
      <div className="font-semibold text-lg">Hasil search "Cara menguasai dunia"</div>
      <div>
        <select className="md:float-right px-2 py-1 outline-0 rounded-md border border-gray-400">
          <option>Terbaru</option>
          <option>Harga Rendah ke Tinggi</option>
          <option>Harga Tinggi ke Rendah</option>
        </select>
      </div>
    </div>
    <div className="grid text-[17px] grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
    </div>
  </div>
</>,

View = () => 
<>
  <Nav/>
  <div className="container mx-auto">
    <div className="px-5 py-5 md:grid md:grid-cols-[40%_auto] lg:grid-cols-[30%_auto]">
      <img className="w-full" src="https://via.placeholder.com/300"/>
      <div className="pt-3 md:px-5 text-sm">
        <div className="font-semibold text-[25px]">Produk A</div>
        <div className="text-sm text-gray-500 mt-2"><strike>Rp 150.000</strike></div>
        <div className="text-xl mt-2 font-medium text-orange-500">Rp 100.000/roll</div>
        <div><button className="mt-2 py-1 px-10 bg-blue-500 text-white py-1 focus:bg-blue-400" onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=6285641631620&text=Saya%20ingin%20memesan%20produk%20ini"}><i className="fa fa-shopping-cart"/>&nbsp;Beli</button></div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum, ipsum non varius sagittis, dui augue porta quam, ut maximus arcu enim a lectus. Phasellus tempor vitae nibh eleifend dictum. In tellus ex, vulputate ornare aliquam quis, tincidunt sit amet eros. Fusce suscipit est a convallis lacinia.
        </div>
      </div>
    </div>
    <div className="text-lg px-5 font-semibold">Rekomendasi Wallpaper</div>
    <div className="grid text-[17px] px-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
      <Produk/>
    </div>
  </div>
</>;

export default View;