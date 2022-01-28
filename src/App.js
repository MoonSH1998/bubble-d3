import React from "react";
import "./styles.css";
import BubbleChart from "@weknow/react-bubble-chart-d3";  
import useScreenSize from "use-screen-size";




export default function App() {

  const data =  [
    { label: "돼지국밥", value: 16 },
    { label: "곱창", value: 15 },
    { label: "삼겹살", value: 14 },
    { label: "비빔국수", value: 13 },
    { label: "막창", value: 12 },
    { label: "소고기 맛집", value: 11 },
    { label: "밀면", value: 10 },
    { label: "카페거리", value: 9 },
    { label: "카페", value: 8 },
    { label: "경치", value: 7 },
    { label: "피시방", value: 6 },
    { label: "볼링장", value: 5 },
    { label: "산책로", value: 4 },
    { label: "수제맥주", value: 3 },
    { label: "술집", value: 2 },
    { label: "데이트코스", value: 1 }
  ];

  console.log(data)
   const size = useScreenSize();
  // const bubbleClick = (label) => {
  //   console.log("Custom bubble click func");
  // };
  // const legendClick = (label) => {
  //   console.log("Customer legend click func");
  // };
 

  return (
    <div>

      
      <BubbleChart data={data}
        graph={{
          zoom: 1
        }}
        width={size.width/1.3}
        height={size.height}

        padding={0} // optional value, number that set the padding between bubbles
        showLegend={false} // optional value, pass false to disable the legend.
        //showLabel={false}
        legendPercentage={20} // number that represent the % of with that legend going to use.
        legendFont={{
          family: "Arial",
          size: 12,
          color: "#000",
          weight: "bold",
        }}

        valueFont={{
          size: 0,
        }}

        labelFont={{
          size: 10,
          color: "#fff",
          weight: "bold",
        }}

        //Custom bubble/legend click functions such as searching using the label, redirecting to other page
        //bubbleClickFunc={bubbleClick()}
        //legendClickFun={legendClick()}
        

      />
    </div>
  );
}
