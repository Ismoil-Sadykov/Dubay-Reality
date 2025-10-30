import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardProducts from "./cardProducts";

export default function Blog() {
    return (
        <div className="bg-[#272727] text-white font-sans min-h-screen">
            <section className="max-w-6xl mx-auto px-5 py-10">
                <div className="md:flex justify-between">
                    <h1 className="text-4xl font-bold mb-8">Blog</h1>

                    <div className="flex items-center bg-[#272727] rounded-md px-3 py-2 w-full md:w-1/2 mb-10 border border-gray">
                        <InputBase
                            placeholder="Search..."
                            className="text-white w-full px-2"
                            sx={{ color: "white" }}
                        />
                        <IconButton>
                            <SearchIcon className="text-gray-400" />
                        </IconButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardProducts />
                </div>
            </section>
        </div>
    );
}
