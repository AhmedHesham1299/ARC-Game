import React, { useState, useEffect } from 'react';
import '../CSS/Grid.css';

const Grid = ({id, input, output , color, onInputArrayChange, onOutputArrayChange, onWidthChange, onWidthChange1}) => {
 

  const [clicked, setClicked] = useState(Array(input[0].length - 1).fill(false));
  const [clicked1, setClicked1] = useState(Array(output[0].length - 1).fill(false));
  const [blue, setBlue] = useState(Array(input[0].length - 1).fill(false));
  const [red, setRed] = useState(Array(input[0].length - 1).fill(false));
  const [green, setGreen] = useState(Array(input[0].length - 1).fill(false));
  const [yellow, setYellow] = useState(Array(input[0].length - 1).fill(false));
  const [gray, setGray] = useState(Array(input[0].length - 1).fill(false));
  const [pink, setPink] = useState(Array(input[0].length - 1).fill(false));
  const [orange, setOrange] = useState(Array(input[0].length - 1).fill(false));
  const [lightblue, setLightblue] = useState(Array(input[0].length - 1).fill(false));
  const [darkred, setDarkred] = useState(Array(input[0].length - 1).fill(false));
  const [updatedArray , setUpdatedArray] = useState(Array(input[0].length *input.length).fill(0));


  const [blue1, setBlue1] = useState(Array(output[0].length - 1).fill(false));
  const [red1, setRed1] = useState(Array(output[0].length - 1).fill(false));
  const [green1, setGreen1] = useState(Array(output[0].length - 1).fill(false));
  const [yellow1, setYellow1] = useState(Array(output[0].length - 1).fill(false));
  const [gray1, setGray1] = useState(Array(output[0].length - 1).fill(false));
  const [pink1, setPink1] = useState(Array(output[0].length - 1).fill(false));
  const [orange1, setOrange1] = useState(Array(output[0].length - 1).fill(false));
  const [lightblue1, setLightblue1] = useState(Array(output[0].length - 1).fill(false));
  const [darkred1, setDarkred1] = useState(Array(output[0].length - 1).fill(false));
  const [updatedArray1 , setUpdatedArray1] = useState(Array(output[0].length * output.length).fill(0));


  
  const [width, setWidth] = useState(input[0].length); // Default width
  const [height, setHeight] = useState(input.length); // Default height
  const [width1, setWidth1] = useState(output[0].length); // Default width
  const [height1, setHeight1] = useState(output.length); // Default height


  useEffect(() => {
    // Update the parent component with the current outputArray whenever it changes
    onOutputArrayChange(updatedArray1);
    onInputArrayChange(updatedArray);
    onWidthChange(width);
    onWidthChange1(width1);
  }, [updatedArray1, onOutputArrayChange,updatedArray, onInputArrayChange ,width, onWidthChange,width1, onWidthChange1 ]);

  useEffect(() => {
     GridFilling();
   
    GridFilling1();
  }, []); // Empty dependency array to run only once when the component mounts


  if (!input || !output || input.length === 0 || output.length === 0) {
    return null; // Or handle the case where input or output is not valid
  }
  const handleBoxClick = (index) => {
   

    const newClicked = [...clicked];
    const newBlue = [...blue];
    const newRed = [...red];
    const newgreen = [...green];
    const newyellow = [...yellow];
    const newgray = [...gray];
    const newpink = [...pink];
    const neworange = [...orange];
    const newlightblue = [...lightblue];
    const newdarkred = [...darkred];
    const newupdatedArray = [...updatedArray];
    switch (color) {
      case "blue":
        newBlue[index] = true;
        setBlue(newBlue);            
        newupdatedArray[index]= 1;  break;
      case "red":
        newRed[index] = true;
        setRed(newRed);  
        newupdatedArray[index]= 2;            break;
      case "green":
        newgreen[index] = true;
        setGreen(newgreen);  
        newupdatedArray[index]= 3;            break;
      case "yellow":
        newyellow[index] = true;
        setYellow(newyellow); 
        newupdatedArray[index]= 4;             break;
      case "gray":
        newgray[index] = true;
        setGray(newgray);     
        newupdatedArray[index]= 5;         break;
      case "pink":
        newpink[index] = true;
        setPink(newpink);     
        newupdatedArray[index]= 6;         break;
      case "orange":
        neworange[index] = true;
        setOrange(neworange);   
        newupdatedArray[index]= 7;           break;
      case "lightblue":
        newlightblue[index] = true;
        setLightblue(newlightblue);   
        newupdatedArray[index]= 8;           break;
      case "darkred":
        newdarkred[index] = true;
        setDarkred(newdarkred);   
        newupdatedArray[index]= 9;           break;
      default:
        break;
    }
    newClicked[index] = true;
    setClicked(newClicked);

    setUpdatedArray(newupdatedArray);
    

    
  };

  const GridFilling = () => {
    const newClicked = [...clicked];
    const newBlue = [...blue];
    const newRed = [...red];
    const newgreen = [...green];
    const newyellow = [...yellow];
    const newgray = [...gray];
    const newpink = [...pink];
    const neworange = [...orange];
    const newlightblue = [...lightblue];
    const newdarkred = [...darkred];
    
    
    let count = 0;
   

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] > 0) {
          switch (input[i][j]) {
            case 1:
              newBlue[count] = true;
              setBlue(newBlue);              break;
            case 2:
              newRed[count] = true;
              setRed(newRed);              break;
            case 3:
              newgreen[count] = true;
              setGreen(newgreen);              break;
            case 4:
              newyellow[count] = true;
              setYellow(newyellow);              break;
            case 5:
              newgray[count] = true;
              setGray(newgray);              break;
            case 6:
              newpink[count] = true;
              setPink(newpink);              break;
            case 7:
              neworange[count] = true;
              setOrange(neworange);              break;
            case 8:
              newlightblue[count] = true;
              setLightblue(newlightblue);              break;
            case 9:
              newdarkred[count] = true;
              setDarkred(newdarkred);              break;
            default:
              break;
          }
          newClicked[count] = true;
          setClicked(newClicked);

        } else {
          newClicked[count] = false;
        }
        count++;
      }
    }
    
  };

  const GridFilling1 = () => {
    const newClicked = [...clicked1];

    const newBlue = [...blue1];
    const newRed = [...red1];
    const newgreen = [...green1];
    const newyellow = [...yellow1];
    const newgray = [...gray1];
    const newpink = [...pink1];
    const neworange = [...orange1];
    const newlightblue = [...lightblue1];
    const newdarkred = [...darkred1];
    let count1 = 0;

    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < output[i].length; j++) {
        if (output[i][j] > 0) {

          switch (output[i][j]) {
            case 1:
              newBlue[count1] = true;
              setBlue1(newBlue);              break;
            case 2:
              newRed[count1] = true;
              setRed1(newRed);              break;
            case 3:
              newgreen[count1] = true;
              setGreen1(newgreen);              break;
            case 4:
              newyellow[count1] = true;
              setYellow1(newyellow);              break;
            case 5:
              newgray[count1] = true;
              setGray1(newgray);              break;
            case 6:
              newpink[count1] = true;
              setPink1(newpink);              break;
            case 7:
              neworange[count1] = true;
              setOrange1(neworange);              break;
            case 8:
              newlightblue[count1] = true;
              setLightblue1(newlightblue);              break;
            case 9:
              newdarkred[count1] = true;
              setDarkred1(newdarkred);              break;
            default:
              break;
          }
          newClicked[count1] = true;
          setClicked1(newClicked);
        }
        count1++;
      }
    }
  };

  const handleBoxClick1 = (index) => {
   
    const newClicked = [...clicked1];

    const newBlue = [...blue1];
    const newRed = [...red1];
    const newgreen = [...green1];
    const newyellow = [...yellow1];
    const newgray = [...gray1];
    const newpink = [...pink1];
    const neworange = [...orange1];
    const newlightblue = [...lightblue1];
    const newdarkred = [...darkred1];
    const newupdatedArray = [...updatedArray1];

    
    switch (color) {
      case "blue":
        newBlue[index] = true;
        setBlue1(newBlue);  
        newupdatedArray[index]= 1;            break;
       
      case "red":
        newRed[index] = true;
        setRed1(newRed);    
        newupdatedArray[index]= 2;          break;
      case "green":
        newgreen[index] = true;
        setGreen1(newgreen);  
        newupdatedArray[index]= 3;            break;
      case "yellow":
        newyellow[index] = true;
        setYellow1(newyellow);    
        newupdatedArray[index]= 4;          break;
      case "gray":
        newgray[index] = true;
        setGray1(newgray);    
        newupdatedArray[index]= 5;          break;
      case "pink":
        newpink[index] = true;
        setPink1(newpink);       
        newupdatedArray[index]= 6;       break;
      case "orange":
        neworange[index] = true;
        setOrange1(neworange);   
        newupdatedArray[index]= 7;           break;
      case "lightblue":
        newlightblue[index] = true;
        setLightblue1(newlightblue);    
        newupdatedArray[index]= 8;          break;
      case "darkred":
        newdarkred[index] = true;
        setDarkred1(newdarkred);    
        newupdatedArray[index]= 9;          break;
      default:
        break;
    }
    newClicked[index] = true;
    setClicked1(newClicked);

    setUpdatedArray1(newupdatedArray);

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <div className="grid-wrapper">
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 47 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginBottom: '10px' }}>
            <input
              id="width-input"
              type="number"
              value={width}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setWidth(value >= 1 && value <= 100 ? value : 3);
              }}
              style={{ width: '30px', color: 'white', textAlign: 'center', backgroundColor: "#282c34", marginBottom: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label htmlFor="width-input" style={{ color: 'white', fontSize: '10px', textAlign: 'center' }}>Width</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
            <input
              id="height-input"
              type="number"
              value={height}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setHeight(value >= 1 && value <= 100 ? value : 3);
              }}
              style={{ width: '30px', color: 'white', textAlign: 'center', backgroundColor: "#282c34", marginBottom: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label htmlFor="height-input" style={{ color: 'white', fontSize: '10px', textAlign: 'center' }}>Height</label>
          </div>
        </div>
        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: `repeat(${width}, 25px)`, gridTemplateRows: `repeat(${height}, 25px)`, gap: '2px', backgroundColor: 'rgba(255, 255, 255, 0.801)', border: '1px solid rgba(255, 255, 255, 0.801)' }}>
          {Array.from({ length: width * height }, (_, index) => (
            <div
              key={index}
              className={`grid-item ${clicked[index] ? (blue[index] ? 'blue' : red[index] ? 'red' : green[index] ? 'green' : yellow[index] ? 'yellow' : gray[index] ? 'gray' : pink[index] ? 'pink' : orange[index] ? 'orange' : lightblue[index] ? 'lightblue' : darkred[index] ? 'darkred' : '') : ''}`}
              onClick={() => handleBoxClick(index)}
            >
              {/* Content */}
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: '20px' }}></div>
      <div className="grid-wrapper">
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 47 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginBottom: '10px' }}>
            <input
              id="width-input"
              type="number"
              value={width1}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setWidth1(value >= 1 && value <= 100 ? value : 3);
              }}
              style={{ width: '30px', color: 'white', textAlign: 'center', backgroundColor: "#282c34", marginBottom: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label htmlFor="width-input" style={{ color: 'white', fontSize: '10px', textAlign: 'center' }}>Width</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
            <input
              id="height-input"
              type="number"
              value={height1}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setHeight1(value >= 1 && value <= 100 ? value : 3);
              }}
              style={{ width: '30px', color: 'white', textAlign: 'center', backgroundColor: "#282c34", marginBottom: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label htmlFor="height-input" style={{ color: 'white', fontSize: '10px', textAlign: 'center' }}>Height</label>
          </div>
        </div>
        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: `repeat(${width1}, 25px)`, gridTemplateRows: `repeat(${height1}, 25px)`, gap: '2px', backgroundColor: 'rgba(255, 255, 255, 0.801)', border: '1px solid rgba(255, 255, 255, 0.801)' }}>
          {Array.from({ length: width1 * height1 }, (_, index) => (
            <div
              key={index}
              className={`grid-item ${clicked1[index] ? (blue1[index] ? 'blue' : red1[index] ? 'red' : green1[index] ? 'green' : yellow1[index] ? 'yellow' : gray1[index] ? 'gray' : pink1[index] ? 'pink' : orange1[index] ? 'orange' : lightblue1[index] ? 'lightblue' : darkred1[index] ? 'darkred' : '') : ''}`}
              onClick={() => handleBoxClick1(index)}
            >
              {/* Content */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
