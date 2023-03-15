import { useState } from "react";
import Nav from "./Nav";

const Kategori = () =>
<>
    <Nav/>
    <div className="container mx-auto px-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ">
        <table className="mt-2 table-kategori w-full" cellPadding="7" border="1">
            <thead>
                <tr>
                    <th>Kategori</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <Row value="Wallpaper A"/>
            </tbody>
        </table>
    </div>
</>;

function Row({ value }){
    const [isEdit, setIsEdit] = useState(false),
    [val, setVal] = useState(value);
    return (
    <tr>
        <td>
            <span style={{ display:isEdit ? "none" : "" }}>{val}</span>
            <input className="outline-0" onChange={e => setVal(e.currentTarget.value)}
            defaultValue={val} style={{ display:isEdit ? "" : "none" }} ref={inp => inp && isEdit && inp.focus()}/>
        </td>
        <td align="center">
            <button className="px-4 py-1 rounded bg-yellow-400" onClick={() => setIsEdit(!isEdit)}>Edit</button>
            <button className="px-4 py-1 ml-2 rounded text-white bg-red-500">Hapus</button>
        </td>
    </tr>
    );
}

export default Kategori;