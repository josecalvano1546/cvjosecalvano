"use client";

// NextJS
import Image from "next/image";

// Styles
import * as Styled from "./styles";

// SRC
import icon_1 from "../../../../../public/Ellipse1.svg";
import icon_2 from "../../../../../public/Ellipse2.svg";
import icon_3 from "../../../../../public/Ellipse3.svg";
import icon_4 from "../../../../../public/Ellipse4.svg";

import icon_5 from "../../../../../public/Polygon1.svg";
import icon_6 from "../../../../../public/Polygon2.svg";
import icon_7 from "../../../../../public/Polygon3.svg";
import icon_8 from "../../../../../public/Polygon4.svg";
import icon_9 from "../../../../../public/Polygon1.svg";
import icon_10 from "../../../../../public/Polygon3.svg";
import { useEffect } from "react";

const icons = [
  {
    icon: icon_1,
    top: "90%",
    left: "90%",
    speed: "3",
  },
  {
    icon: icon_2,
    top: "65%",
    left: "40%",
    speed: "9",
  },
  {
    icon: icon_3,
    top: "30%",
    left: "18%",
    speed: "2",
  },
  {
    icon: icon_4,
    top: "10%",
    left: "85%",
    speed: "3",
  },
  {
    icon: icon_5,
    top: "15%",
    left: "50%",
    speed: "6",
  },
  {
    icon: icon_6,
    top: "50%",
    left: "10%",
    speed: "-3",
  },
  {
    icon: icon_7,
    top: "5%",
    left: "20%",
    speed: "-8",
  },
  {
    icon: icon_8,
    top: "80%",
    left: "70%",
    speed: "8",
  },
  {
    icon: icon_9,
    top: "90%",
    left: "20%",
    speed: "-2",
  },
  {
    icon: icon_10,
    top: "50%",
    left: "75%",
    speed: "-4",
  },
];

type ParallaxFunction = (e: MouseEvent) => void;

const IconsBackground = () => {
  useEffect(() => {
    const parallax: ParallaxFunction = (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed: number = parseFloat(
          layer.getAttribute("data-speed") || "0",
        );
        const x = (window.innerWidth - e.clientX * speed) / 200;
        const y = (window.innerHeight - e.clientY * speed) / 200;
        const layerStyle = (layer as HTMLElement).style;
        layerStyle.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <>
      {icons.map((iconData, index) => (
        <Styled.IconContainer
          key={index}
          $iconTop={iconData.top}
          $iconLeft={iconData.left}
        >
          <Image
            src={iconData.icon}
            alt="Icon"
            height={30}
            width={35}
            className="layer"
            data-speed={iconData.speed}
          />
        </Styled.IconContainer>
      ))}
    </>
  );
};
export default IconsBackground;
