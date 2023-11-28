import React, { useEffect, useState, useRef } from "react";

const Story = () => {
  const texttitleRef = useRef(null);
  const background = useRef(null);
  const mountain1 = useRef(null);
  const mountain2 = useRef(null);
  const sun = useRef(null);
  const leaf = useRef(null);

  const [doorFrame, setDoorFrame] = useState(1);
  const [fixedDoor, setFixedDoor] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      texttitleRef.current.style.marginTop = `${value * 1.25}px `;

      sun.current.style.top = `${value * -1}px`;
      sun.current.style.left = `${value * -1}px`;

      leaf.current.style.top = `${value * -1}px`;
      leaf.current.style.left = `${value * 1}px`;

      if (value > 100 && value < 150) {
        mountain1.current.style.left = `${value * 1.5}px`;
      }
      mountain2.current.style.left = `${value * -1.5}px`;

      console.log("value = ", value);
      if (value > 854 && value < 2000) {
        setFixedDoor(true);
        setDoorFrame(1);
        if (value > 1800) {
          setDoorFrame(5);
        } else if (value > 1600) {
          setDoorFrame(4);
        } else if (value > 1400) {
          setDoorFrame(3);
        } else if (value > 1200) {
          setDoorFrame(2);
        }
      } else {
        setFixedDoor(false);
      }
      if (value > 1500) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }

      console.log("Value =>", value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="parallax" id="Content0">
        <img src="/Images/background.png" ref={background} />
        <img src="/Images/mountain1.png" ref={mountain1} />
        <img src="/Images/mountain2.png" ref={mountain2} />
        <h2 className="texttitle" ref={texttitleRef}>
          One day with my dog
        </h2>
        <img src="/Images/sun.png" ref={sun} />
        <img src="/Images/leaf2.png" ref={leaf} />
        <img src="/Images/plant.png" />
      </section>

      <section className="section" id="Content1">
        
        {doorFrame >= 1 && doorFrame <= 5 && (
          <img
            src={`/Images/door/r${doorFrame}.png`}
            style={{
              position: fixedDoor ? "fixed" : "absolute",
              top: fixedDoor ? "5%" : isBottom ? "1100px" : "260px",
              left: "10%",
            }}
          />
        )}
        <img className=" fixed" src="/Images/plant.jpg" />
        <img src="/Images/plant.jpg" />
        <img src="/Images/plant.jpg" />
        <img src="/Images/plant.jpg" />
        
      </section>

      <section className="section" id="Content">
      <h1 className=" text-4xl text-white ">Lorem Ipsum</h1>
      </section>
    </div>
  );
};

export default Story;
