"use client";

import { Button } from "antd";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import useSound from "use-sound";

const wheelSoundFile = "/assets/wheel-sound.wav";

const WheelDash = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [play, { stop }] = useSound(wheelSoundFile);

  const data = Array(10)
    .fill(0)
    .map((_, index) => {
      return {
        option: `Value-${index}`,
        style: { backgroundColor: "", textColor: "#fff" },
      };
    });

  const handleSpinClick = () => {
    if (!mustSpin) {
      play();
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>

      <button className="bg-red-300" onClick={handleSpinClick}>
        SPIN
      </button>
    </div>
  );
};

export default WheelDash;
