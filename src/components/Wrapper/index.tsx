import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Wrapper.module.css";
import { useOnScreen } from "../../hooks/useOnScreen";

interface Children {
  percent: number;
  setPercent: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  height?: string;
  children: ({ percent, setPercent }: Children) => any;
  topConnect?: boolean;
  bottomConnect?: boolean;
  zIndex?: number;
}

const Wrapper = ({
                   children,
                   height = "500vh",
                   topConnect = false,
                   bottomConnect = true,
                   zIndex
                 }: Props) => {
  const [percent, setPercent] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen: boolean = useOnScreen<HTMLDivElement>(ref, "500px");
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const el = ref.current;
      const total = el.offsetHeight;
      const start = el.offsetTop;
      const screenHeight = window.innerHeight;
      const stop = el.offsetTop + el.offsetHeight - screenHeight;

      if (window.scrollY >= start && window.scrollY <= stop) {
        el.style.opacity = "1";
        el.style.zIndex = "1";
        const scrollTop = window.scrollY - start;
        const scrollValid = total - screenHeight;
        const progress = (scrollTop / scrollValid) * 100;
        setPercent(progress);
      } else if (window.scrollY < start) {
        setPercent(0);
        el.style.opacity = "1";
        el.style.zIndex = "-1";
      } else if (window.scrollY > stop) {
        setPercent(100);
        if (topConnect === true && bottomConnect === true) {
          el.style.opacity = "0";
          el.style.transition = "all 0.5s";
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        height,
        marginTop: topConnect ? "-100vh" : "0px",
        zIndex: zIndex
      }}
      ref={ref}
    >
      <div className={styles.content}>
        {isOnScreen ? children({ percent, setPercent }) : null}
      </div>
    </div>
  );
};

export default Wrapper;
