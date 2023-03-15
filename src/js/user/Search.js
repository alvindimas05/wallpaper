import Nav from "./Nav";
import { Produk } from "./Main";

const Search = () =>
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
</>;

export default Search;