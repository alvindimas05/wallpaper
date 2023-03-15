import Nav from "./Nav";
import { Produk } from "./Main";

const View = () => 
<>
  <Nav/>
  <div className="container mx-auto">
    <div className="px-5 py-5 md:grid md:grid-cols-[40%_auto] lg:grid-cols-[30%_auto]">
      <img className="w-full" alt="Produk" src="https://via.placeholder.com/300"/>
      <div className="pt-3 md:px-5 text-sm">
        <div className="font-semibold text-[25px]">Produk A</div>
        <div className="text-sm text-gray-500 mt-2"><strike>Rp 150.000</strike></div>
        <div className="text-xl mt-2 font-medium text-orange-500">Rp 100.000/roll</div>
        <div>
          <button className="mt-2 py-1 px-10 bg-blue-500 text-white py-1 focus:bg-blue-400" onClick={() => window.location.href="https://api.whatsapp.com/send/?phone=6285641631620&text=Saya%20ingin%20memesan%20produk%20ini"}><i className="fa fa-shopping-cart"/>&nbsp;Beli</button>
          {/* <select className="outline-0 border text-[17px] ml-2 rounded px-2">
            <option>Biru</option>
            <option>Merah</option>
          </select> */}
        </div>
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