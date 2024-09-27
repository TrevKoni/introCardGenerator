import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import VtuberCard from "./components/VtuberCard";

function App() {
  // Name and Image Section
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // Where can we find you Section
  const [youtube, setYoutube] = useState("");
  const [twitch, setTwitch] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [otherPlace, setOtherPlace] = useState("");

  // Describe yourself with Section
  const [oshiMark, setOshiMark] = useState("");
  const [color, setColor] = useState("#000000");
  const [loot, setLoot] = useState("");

  // Are you Section
  const [lewdness, setLewdness] = useState("50");
  const [variety, setVariety] = useState("50");
  const [comfy, setComfy] = useState("50");
  const [solo, setSolo] = useState("50");
  const [chillin, setChillin] = useState("50");

  // What do you stream Section
  // Games
  const [shooter, setShooter] = useState(false);
  const [mmorpg, setMmorpg] = useState(false);
  const [gacha, setGacha] = useState(false);
  const [moba, setMoba] = useState(false);
  const [rythm, setRythm] = useState(false);
  const [sandbox, setSandbox] = useState(false);
  const [horror, setHorror] = useState(false);
  const [rpg, setRpg] = useState(false);
  const [otherGames, setOtherGames] = useState("");

  // Creative
  const [drawing, setDrawing] = useState(false);
  const [composing, setComposing] = useState(false);
  const [rigging, setRigging] = useState(false);
  const [cooking, setCooking] = useState(false);
  const [singing, setSinging] = useState(false);
  const [developing, setDeveloping] = useState(false);
  const [otherCreative, setOtherCreative] = useState("");

  // Free Chat || Just Chatting
  const [yeah, setYeah] = useState(false);
  const [nah, setNah] = useState(false);
  const [otherFreeChat, setOtherFreeChat] = useState("");

  return (
    <>
      <div className="container mx-auto text-white">
        <div>
          <h1 className="text-6xl font-bold">
            VTuber Intro Card Generator && Work in Progress
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4">
          <div>
            <h2 className="text-3xl font-bold">Name and Image</h2>
            <div className="mx-4">
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="vtuber_image"
              >
                Upload your VTuber image
              </label>
              <input
                className="block w-full text-sm text-cyan-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="vtuber_image"
                type="file"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Where can we find you?</h2>
            <div className="mx-4">
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="YouTube"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="Twitch"
                value={twitch}
                onChange={(e) => setTwitch(e.target.value)}
              />
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="TikTok"
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
              />
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="Other"
                value={otherPlace}
                onChange={(e) => setOtherPlace(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Describe yourself with...</h2>
            <div className="mx-4">
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="oshi_mark"
                >
                  An emoji or your oshi mark
                </label>
                <input
                  className="block w-full text-sm text-cyan-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="oshi_mark"
                  type="file"
                  onChange={(e) => setOshiMark(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="drop_item"
                >
                  Choose a color
                </label>
                <HexColorPicker color={color} onChange={setColor} />
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="drop_item"
                >
                  Item you would drop as loot in a game
                </label>
                <input
                  className="block w-full text-sm text-cyan-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="drop_item"
                  type="file"
                  onChange={(e) => setLoot(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Are you?</h2>
            <div className="mx-4">
              <p>Lewd to Wholesome</p>
              <input
                type="range"
                min="0"
                max="100"
                value={lewdness}
                onChange={(e) => setLewdness(e.target.value)}
              />
              <p>Variety Streamer to Staple Games</p>
              <input
                type="range"
                min="0"
                max="100"
                value={variety}
                onChange={(e) => setVariety(e.target.value)}
              />
              <p>Comfy && Cozy Vibes to Energetic && Hype Vibes</p>
              <input
                type="range"
                min="0"
                max="100"
                value={comfy}
                onChange={(e) => setComfy(e.target.value)}
              />
              <p>Prefer Solo to Prefer Collab</p>
              <input
                type="range"
                min="0"
                max="100"
                value={solo}
                onChange={(e) => setSolo(e.target.value)}
              />
              <p>OOC Chillin to Always in Character</p>
              <input
                type="range"
                min="0"
                max="100"
                value={chillin}
                onChange={(e) => setChillin(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">What do you stream?</h2>
            <div className="mx-4">
              <h3 className="text-xl font-bold">Games</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setShooter(e.target.checked)}
                  />
                  <label> FPS || Shooters</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setMmorpg(e.target.checked)}
                  />
                  <label> MMORPGs</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setGacha(e.target.checked)}
                  />
                  <label> Gacha || MOBAGE</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setMoba(e.target.checked)}
                  />
                  <label> MOBA</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setRythm(e.target.checked)}
                  />
                  <label> Rythm Games</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setSandbox(e.target.checked)}
                  />
                  <label> Sandbox</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setHorror(e.target.checked)}
                  />
                  <label> Horror</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setRpg(e.target.checked)}
                  />
                  <label> RPGS</label>
                </li>
                <li>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Other"
                    value={otherGames}
                    onChange={(e) => setOtherGames(e.target.value)}
                  />
                </li>
              </ul>
              <h3 className="text-xl font-bold">Creative</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setDrawing(e.target.checked)}
                  />
                  <label> Drawing || Painting</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setComposing(e.target.checked)}
                  />
                  <label> Music Composing</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setRigging(e.target.checked)}
                  />
                  <label> Live 2D Rigging</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setCooking(e.target.checked)}
                  />
                  <label> Cooking</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setSinging(e.target.checked)}
                  />
                  <label> Singing || Karaoke</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setDeveloping(e.target.checked)}
                  />
                  <label> Softare Engineering || Game Development</label>
                </li>
                <li>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Other"
                    value={otherCreative}
                    onChange={(e) => setOtherCreative(e.target.value)}
                  />
                </li>
              </ul>
              <h3 className="text-xl font-bold">Free Chat || Just Chatting</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setYeah(e.target.checked)}
                  />
                  <label> Yeah</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => setNah(e.target.checked)}
                  />
                  <label> Nah</label>
                </li>
                <li>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Other"
                    value={otherFreeChat}
                    onChange={(e) => setOtherFreeChat(e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download Intro Card
              </span>
            </button>
          </div>
        </div>
      </div>
      <VtuberCard
        name={name}
        image={image}
        youtube={youtube}
        twitch={twitch}
        tiktok={tiktok}
        otherPlace={otherPlace}
        oshiMark={oshiMark}
        color={color}
        loot={loot}
        lewdness={lewdness}
        variety={variety}
        comfy={comfy}
        solo={solo}
        chillin={chillin}
        shooter={shooter}
        mmorpg={mmorpg}
        gacha={gacha}
        moba={moba}
        rythm={rythm}
        sandbox={sandbox}
        horror={horror}
        rpg={rpg}
        otherGames={otherGames}
        drawing={drawing}
        composing={composing}
        rigging={rigging}
        cooking={cooking}
        singing={singing}
        developing={developing}
        otherCreative={otherCreative}
        yeah={yeah}
        nah={nah}
        otherFreeChat={otherFreeChat}
      />
    </>
  );
}

export default App;
