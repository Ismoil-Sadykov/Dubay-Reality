import { Button } from "@mui/material";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

export default function Contact() {
  return (
    <main className="bg-[#1e1e1e] text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-16 mb-8">Contact</h1>

      <div className="w-full max-w-6xl">
        <YMaps>
          <Map
            defaultState={{
              center: [38.5638858, 68.758828, 38],
              zoom: 19,
            }}
            className="w-full h-[400px] rounded-lg"
          >
            <Placemark geometry={[38.5637043, 68.7581341, 153]} />
          </Map>
        </YMaps>

        <div className="md:absolute md:top-70 md:left-20 ml-8 mt-5 bg-[#2a2a2a] p-6 rounded-lg w-80 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Академияи барномасозии <span className="text-yellow-400">Softclub</span>
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            улица Рахими 12, Душанбе 734013, Таджикистан
          </p>
          <p className="font-semibold mb-4">( +992 ) 558 70 09 00</p>
          <p className="text-gray-400 text-sm mb-2">
            <span className="font-semibold text-white">Email:</span>{" "}
            https://www.softclub.tj/
          </p>
          <p className="text-gray-400 text-sm mb-2">
            <span className="font-semibold text-white">Follow us:</span> —
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Work Hours:</span>{" "}
            Monday - Friday : 08:00 - 17:30
          </p>
        </div>
      </div>

      <section className="w-full max-w-5xl mt-16 px-6">
        <h2 className="text-2xl font-semibold mb-6">
          Be in touch <br /> <span className="text-yellow-400">with us</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border border-gray-600 px-4 py-2 w-full focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            placeholder="Email *"
            className="bg-transparent border border-gray-600 px-4 py-2 w-full focus:outline-none focus:border-yellow-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-transparent border border-gray-600 px-4 py-2 w-full focus:outline-none focus:border-yellow-400"
          />
        </div>
        <textarea
          placeholder="Message *"
          rows="6"
          className="w-full bg-transparent border border-gray-600 px-4 py-2 focus:outline-none focus:border-yellow-400 mt-[20px] mb-[20px]"
        ></textarea>
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "yellow", color: "black", padding: "8px 24px", fontWeight: "600", marginBottom: "20px" }}
        >
          SUBMIT
        </Button>
      </section>
    </main>
  );
}
