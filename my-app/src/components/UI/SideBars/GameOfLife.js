import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import classes from "./GameOfLife.module.css";

const generateRandomGrid = (numRows, numCols) => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(
      Array.from(Array(numCols), () => {
        return Math.random() > 0.85 ? 1 : 0;
      })
    );
  }
  return rows;
};

function GameOfLife() {
  const myRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [grid, setGrid] = useState([]);
  const size = 17;
  const timeInterval = 80;
  const overlap = 1.5;

  // Helper function to check the state of a cell
  const countNeighbors = (grid, x, y) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const row = (x + i + grid.length) % grid.length;
        const col = (y + j + grid[0].length) % grid[0].length;
        count += grid[row][col];
      }
    }
    count -= grid[x][y];
    return count;
  };

  useEffect(() => {
    //console logs inside this use effect do not work

    const intervalId = setInterval(() => {
      if (!grid || !grid[0]) {
        return;
      }
      if (
        grid.length !== Math.floor((width / size) * overlap) ||
        grid[0].length !== Math.floor((height / size) * overlap)
      ) {
        setGrid(
          generateRandomGrid(
            Math.floor((width / size) * overlap),
            Math.floor((height / size) * overlap)
          )
        );
      }
      setGrid((prevTwoArray) => {
        if (!prevTwoArray.length || !prevTwoArray[0].length) {
          return prevTwoArray;
        }
        let tempArray = generateRandomGrid(
          prevTwoArray.length,
          prevTwoArray[0].length
        );
        for (let i = 0; i < prevTwoArray.length; i++) {
          for (let j = 0; j < prevTwoArray[0].length; j++) {
            const neighbors = countNeighbors(prevTwoArray, i, j);
            if (prevTwoArray[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
              tempArray[i][j] = 0;
            } else if (prevTwoArray[i][j] === 0 && neighbors === 3) {
              tempArray[i][j] = 1;
            } else {
              tempArray[i][j] = prevTwoArray[i][j];
            }
          }
        }
        return tempArray;
      });
    }, timeInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [height, width, grid]);

  useLayoutEffect(() => {
    const height = myRef.current.offsetHeight;
    const width = myRef.current.offsetWidth;
    setHeight(height);
    setWidth(width);
    setGrid(
      generateRandomGrid(
        Math.floor((width / size) * overlap),
        Math.floor((height / size) * overlap)
      )
    );
    console.log("Height:", height);
    console.log("Width:", width);
  }, []);

  const getListSize = () => {
    const newWidth = myRef.current.offsetWidth;
    setWidth(newWidth);

    const newHeight = myRef.current.offsetHeight;
    setHeight(newHeight);
    console.log("Height:", newHeight);
    console.log("Width:", newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getListSize);
  }, []);

  // console.log("rerender");
  let cells = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        cells.push(
          <>
            <div
              className={classes.mobileHide}
              style={{
                display: "inline - block",
                backgroundColor: "#5f43b2",
                opacity: "0.2",
                zIndex: "-100",
                position: "fixed",
                width: `${size}px`,
                height: `${size}px`,
                left: `${(i * size) / overlap}px`,
                bottom: `${(j * size) / overlap}px`,
              }}
            ></div>
            <div
              className={classes.mobileHide}
              style={{
                display: "inline - block",
                backgroundColor: "#5f43b2",
                opacity: "0.2",
                zIndex: "-100",
                position: "fixed",
                width: `${size}px`,
                height: `${size}px`,
                right: `${(i * size) / overlap}px`,
                bottom: `${(j * size) / overlap}px`,
              }}
            ></div>
          </>
        );
      }
    }
  }

  return (
    <>
      <div
        className={classes.mobileHide}
        ref={myRef}
        style={{
          height: "100vh",
          width: "20vw",
          position: "fixed",
          zIndex: "2",
          backgroundColor: "#f5f5f5",
        }}
      >
        {cells}
      </div>
      <div
        className={classes.mobileHide}
        ref={myRef}
        style={{
          height: "100vh",
          width: "20vw",
          position: "fixed",
          zIndex: "-200",
          backgroundColor: "#f5f5f5",
          right: "0",
        }}
      ></div>
    </>
  );
}

export default GameOfLife;
