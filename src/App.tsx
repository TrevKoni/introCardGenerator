import { useState } from "react";
import { HexColorPicker } from "react-colorful";

function App() {
  const [color, setColor] = useState("#000000");
  const [lewdness, setLewdness] = useState("50");
  const [variety, setVariety] = useState("50");
  const [comfy, setComfy] = useState("50");
  const [solo, setSolo] = useState("50");
  const [chillin, setChillin] = useState("50");

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
              />
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="Twitch"
              />
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="TikTok"
              />
              <input
                className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                type="text"
                placeholder="Other"
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
                  <input type="checkbox" />
                  <label> FPS || Shooters</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> MMORPGs</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Gacha || MOBAGE</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> MOBA</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Rythm Games</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Sandbox</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Horror</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> RPGS</label>
                </li>
                <li>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Other"
                  />
                </li>
              </ul>
              <h3 className="text-xl font-bold">Creative</h3>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label> Drawing || Painting</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Music Composing</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Live 2D Rigging</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Cooking</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Singing || Karaoke</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Softare Engineering || Game Development</label>
                </li>
                <li>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Other"
                  />
                </li>
              </ul>
              <h3 className="text-xl font-bold">Free Chat || Just Chatting</h3>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label> Yeah</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label> Nah</label>
                </li>
                <li>
                  <input
                    className="appearance-none bg-transparent border-none w-full text-cyan-300 py-1 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Other"
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
    </>
  );
}

export default App;
