import { useEffect, useState } from "react";
import "./Weather.css";
export default function WeatherApp() {
  const [input, setInput] = useState("");
  const [api, setApi] = useState<any | undefined>();
  const [background, setBackground] = useState("");
  function Capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async function wAApi() {
    await fetch(
      `http://api.weatherapi.com/v1/current.json?key=26aee365df904f70916125145232608&q=${input}&aqi=no`
    )
      .then(async (res) => {
        if (res.ok) {
          let data = await res.clone().json();
          setApi(data);
          console.log(res.clone().json());
        } else {
          alert("kos zadam dadash");
          setInput("");
          setApi(undefined);
        }
        return res.clone().json();
      })
      .catch((err) => console.log(err));
  }
  document.body.onkeydown = (e) => {
    e.code === "Enter" ? wAApi() : console.log("object");
  };
  useEffect(() => {
    if (!api) {
      setBackground("defaultWeather.jpg");
    } else {
      if (api.current.is_day === 1) {
        setBackground("cityDay.jpg");
      }
      if (api.current.is_day === 0) {
        setBackground("cityNight.jpg");
      }
    }
  }, [api]);
  return (
    <div
      className="WeatherApp_Container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="WeatherApp_Header">
        <div className="WeatherApp_Header2">
          <input
            placeholder="Search for weather of any cities"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const regex = /^[a-zA-Z_ ]*$/;
              if (e.target.value === "" || regex.test(e.target.value)) {
                setInput(Capitalize(e.target.value));
              }
            }}
          ></input>
          <button
            onClick={() => {
              wAApi();
            }}
          >
            <img
              src="search.png"
              style={{ height: 15, width: 15, filter: "invert(1)" }}
            />
            Search
          </button>
        </div>
      </div>
      <>
        {api && (
          <>
            <div className="WeatherApp_Body">
            <div className="WB_R">///
                <div className="WB_Country">
                  <div className="WBCo_L">
                    <img
                      src="country.png"
                      style={{ height: 50, width: 50, filter: "invert(1)" }}
                    />
                  </div>
                  <div className="WBCo_R">{api.location.country}</div>
                </div>
                <div className="WB_City">
                  <div className="WBCi_L">
                    <img
                      src="location.png"
                      style={{ height: 40, width: 40, filter: "invert(1)" }}
                    />
                  </div>
                  <div className="WBCi_R">{api.location.name}</div>
                </div>
                <div className="WB_Time">
                  <div className="WBTi_L">
                    <img
                      src="time.png"
                      style={{ height: 35, width: 35, filter: "invert(1)" }}
                    />
                  </div>
                  <div className="WBTi_R">{api.location.localtime}</div>
                </div>
              </div>
              <div className="WB_L">
                <div className="WBL_U">
                  <div className="WB_Temperture">
                    <div className="WBT_L">
                      <img
                        src={api.current.condition.icon}
                        style={{ height: 100, width: 100 }}
                      />
                    </div>
                    <div className="WBT_R" style={{ color: "white" }}>
                      {api.current.temp_c}°C
                    </div>
                  </div>
                </div>

                <div className="WB_Condition">
                  <img src="" />
                  {api.current.condition.text}
                </div>
              </div>

            </div>
          </>
        )}
      </>
    </div>
  );
}
