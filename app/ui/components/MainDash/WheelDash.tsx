"use client";

import { Input, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useReward } from "react-rewards";
import useSound from "use-sound";
import { colorPaletteWithArray, getColorByIndex } from "./colors";

const wheelSoundFile = "/assets/wheel-sound.wav";

const WheelDash = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [play, { stop }] = useSound(wheelSoundFile);
  const [spinDuration, setSpinDuration] = useState(1.45);
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti");
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } =
    useReward("balloonsReward", "balloons");

  const intervalRef = useRef<any>();
  const [wheelConfig, setWheelConfig] = useState<Record<string, any>>({
    textSize: 16,
    sizeRepeat: 1,
    spinTime: 3,
    fairMode: false,
    styleColorIndex: 1,
    slices: [
      {
        option: "Value",
        textColor: "",
        backgroundColor: "",
        image: "",
        weight: "",
      },
    ],
  });

  useEffect(() => {
    const data = [
      "soup",
      "sandwich",
      "steak",
      "chinese",
      "bbq",
      "pasta",
      "hotdog",
      "salad",
      "bacon",
      "sushi",
      "pizza",
    ];

    const fmtData = data.map((v, index) => {
      const bgColor = getColorByIndex(index, colorPaletteWithArray.rainbow);
      return {
        option: v,
        style: { textColor: "#fff", backgroundColor: bgColor },
        // image: {
        //   uri: "https://www.theworldnote.com/uploads/allimg/2004/1_200428095232_1.jpg",
        // },
      };
    });
    setWheelConfig((prev) => {
      return { ...prev, slices: fmtData };
    });
  }, []);

  const handleSpinClick = () => {
    clearInterval(intervalRef.current);
    if (!mustSpin) {
      play();
      const newPrizeNumber = Math.floor(
        Math.random() * wheelConfig.slices.length
      );
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const toastPrize = () => {
    let count = 0;
    intervalRef.current = setInterval(() => {
      count++;
      if (count > 10) {
        clearInterval(intervalRef.current);
      }
      confettiReward();
      balloonsReward();
    }, 500);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <Wheel
          radiusLineWidth={2}
          radiusLineColor={"gray"}
          outerBorderColor={"gray"}
          outerBorderWidth={2}
          spinDuration={spinDuration}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={wheelConfig.slices}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={() => {
            setMustSpin(false);
            toastPrize();
          }}
        />
      </div>
      <Space direction="vertical" className="w-full">
        <button className="w-full bg-green-300" onClick={handleSpinClick}>
          SPIN
        </button>
        <button
          className="w-full bg-red-300"
          onClick={() => setMustSpin(false)}
        >
          Stop
        </button>
        <Input
          className="hidden"
          type="number"
          value={spinDuration}
          onChange={(e) => {
            const value: string = e.currentTarget.value;
            setSpinDuration(parseFloat(value));
          }}
        />
        <div className="w-full flex justify-center z-10">
          <span id="confettiReward" />
          <span id="balloonsReward" />
        </div>
      </Space>
    </div>
  );
};

export default WheelDash;
