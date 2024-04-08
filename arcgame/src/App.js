import React, { useState } from 'react';
import './App.css';
import GridComponent from './Js/Grid';
import json from './jasonFiles/TopBottom3D1.json';

function App() {
  const [jsonData, setJsonData] = useState(json);
  const [width, setWidth] = useState(json.train.length);
  const [width1, setWidth1] = useState(json.test.length);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [outputArrays, setOutputArrays] = useState({});

  const handleOutputArrayChange = (id, newoutputArray) => {
    setOutputArrays(prevoutputArrays => ({
      ...prevoutputArrays,
      [id]: newoutputArray
    }));
  };
  const [inputArrays, setInputArrays] = useState({});

  const handleInputArrayChange = (id, newInputArray) => {
    setInputArrays(prevInputArrays => ({
      ...prevInputArrays,
      [id]: newInputArray
    }));
  };

  const [width4, setWidth4] = useState({}); // Default width
  const handleWidthChange = (id, newwidth) => {
    setWidth4(prevwidths => ({
      ...prevwidths,
      [id]: newwidth
    }));
  };
  const [width6, setWidth6] = useState({}); // Default width
  const handleWidthChange2 = (id, newwidth) => {
    setWidth6(prevwidths => ({
      ...prevwidths,
      [id]: newwidth
    }));
  };
  const [width7, setWidth7] = useState({}); // Default width
  const handleWidthChange3 = (id, newwidth) => {
    setWidth7(prevwidths => ({
      ...prevwidths,
      [id]: newwidth
    }));
  };
  const [width5 ,setWidth5] = useState({}); // Default width
  const handleWidthChange1 = (id, newwidth) => {
    setWidth5(prevwidths => ({
      ...prevwidths,
      [id]: newwidth
    }));
  };

  
  const [outputArrays1, setOutputArrays1] = useState({});

  const handleOutputArrayChange1 = (id, newoutputArray) => {
    setOutputArrays1(prevoutputArrays => ({
      ...prevoutputArrays,
      [id]: newoutputArray
    }));
  };
  const [inputArrays1, setInputArrays1] = useState({});

  const handleInputArrayChange1 = (id, newInputArray) => {
    setInputArrays1(prevInputArrays => ({
      ...prevInputArrays,
      [id]: newInputArray
    }));
  };




  const handleFileUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
    setJsonData(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        setJsonData(json);
        setWidth(json.train.length);
        setWidth1(json.test.length);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        alert('Error parsing JSON. Check the console for more details.');
      }
    };
    reader.readAsText(selectedFile);
  };
  const exportToJson = () => {
    // Check if inputArrays and outputArrays exist
    if (!inputArrays || !outputArrays) {
      alert('Input or output arrays are missing!');
      return;
    }
  
    // Initialize the data to export
    const dataToExport = {
      train: [],
      test: []
    };
  
    // Iterate over train sets
    Object.keys(inputArrays).forEach(key => {
      const inputArray = inputArrays[key];
      const outputArray = outputArrays[key];
      const width68 = width4[key];
      const width = width6[key];
      if (!inputArray || inputArray.length === 0 || !outputArray || outputArray.length === 0) {
        alert(`Input or output array for ${key} is empty!`);
        return;
      }
      
      const gridSize =width68;
      const gridSize1 =width;

      const transformedInput = [];
      const transformedOutput = [];
      for (let i = 0; i < inputArray.length; i += gridSize) {
        const gridInput = inputArray.slice(i, i + gridSize);
        while (gridInput.length < gridSize) {
          gridInput.push(new Array(gridSize).fill(0));
        }
        transformedInput.push(gridInput);
      }
      for (let i = 0; i < outputArray.length; i += gridSize1) {
        const gridOutput = outputArray.slice(i, i + gridSize1);
        while (gridOutput.length < gridSize1) {
          gridOutput.push(new Array(gridSize1).fill(0));
        }
        transformedOutput.push(gridOutput);
      }
      dataToExport.train.push({ input: transformedInput, output: transformedOutput });
    });

    Object.keys(inputArrays1).forEach(key => {
      const inputArray = inputArrays1[key];
      const outputArray = outputArrays1[key];
      const width6 = width5[key];
      const width = width7[key];

      if (!inputArray || inputArray.length === 0 || !outputArray || outputArray.length === 0) {
        alert(`Input or output array for ${key} is empty!`);
        return;
      }
      const gridSize = width6;
      const gridSize1 = width;
      const transformedInput = [];
      const transformedOutput = [];
      for (let i = 0; i < inputArray.length; i += gridSize) {
        const gridInput = inputArray.slice(i, i + gridSize);
        while (gridInput.length < gridSize) {
          gridInput.push(new Array(gridSize).fill(0));
        }
        transformedInput.push(gridInput);
      }
      for (let i = 0; i < outputArray.length; i += gridSize1) {
        const gridOutput = outputArray.slice(i, i + gridSize1);
        while (gridOutput.length < gridSize1) {
          gridOutput.push(new Array(gridSize1).fill(0));
        }
        transformedOutput.push(gridOutput);
      }
      dataToExport.test.push({ input: transformedInput, output: transformedOutput });
    });
  
    
    // Convert dataToExport to JSON string
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dataToExport));
  
    // Create a download link and trigger the download
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'exported_data.json');
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  
  
  
  return (
    <div className="App" style={{ overflow: 'auto' }}>
      <header className="App-header">
        <h1 style={{ position: 'absolute', left: '630px', bottom: '650px' }}>ARC Game</h1>

        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', left: '590px', bottom: '650px' }}>
          <input type="file" accept=".json" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>Upload JSON</button>
          <button onClick={exportToJson}>Export JSON</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', left: '590px', bottom: '600px' }}>
          {['blue', 'red', 'green', 'yellow', 'gray', 'pink', 'orange', 'lightblue', 'darkred'].map((color) => (
            <button
              key={color}
              className={`grid-item ${color}`}
              onClick={() => setSelectedColor(color)}
              style={{ marginRight: '5px', borderRadius: '100px', padding: 15 }} // Added border radius for rounded buttons
              onMouseOver={(e) => e.currentTarget.style.opacity = 0.7} // Make button hover
              onMouseOut={(e) => e.currentTarget.style.opacity = 1} // Return to normal when not hovering
            ></button>
          ))}
        </div>

        {jsonData && (
          <>
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: '200px' }}>
              <label style={{ fontSize: 50 }}>Demonstrations</label>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  id="width-input"
                  type="number"
                  value={width}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setWidth(value >= 1 && value <= 100 ? value : 1);
                  }}
                  style={{ width: '30px', color: 'white', textAlign: 'center', backgroundColor: "#282c34", marginBottom: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <label htmlFor="width-input" style={{ color: 'white', fontSize: '10px', textAlign: 'center' }}>Demonstrations</label>
              </div>
              {Array.from({ length: width }, (_, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <GridComponent
                      id={`train ${index}`}
                      input={jsonData.train[index % jsonData.train.length].input}
                      output={jsonData.train[index % jsonData.train.length].output}
                      color={selectedColor || ''}
                      onInputArrayChange={(newInputArray) => handleInputArrayChange(`train ${index}`, newInputArray)}
                      onOutputArrayChange={(newOutputArray) => handleOutputArrayChange(`train ${index}`, newOutputArray)}
                      onWidthChange={(newwidth) => handleWidthChange(`train ${index}`, newwidth)}
                      onWidthChange1={(newwidth) => handleWidthChange2(`train ${index}`, newwidth)}
                    />
                </div>
              ))}

            <div >

              <label style={{ fontSize: 50 }}>Tests</label>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                <input
                  id="width-input"
                  type="number"
                  value={width1}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setWidth1(value >= 1 && value <= 100 ? value : 1);
                  }}
                  style={{ width: '30px', color: 'white', textAlign: 'center', backgroundColor: "#282c34", marginBottom: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <label htmlFor="width-input" style={{ color: 'white', fontSize: '10px', textAlign: 'center' }}>Tests</label>
              </div>
              {Array.from({ length: width1 }, (_, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <GridComponent
                      id={`test ${index}`}
                      input={jsonData.test[index % jsonData.test.length].input}
                      output={jsonData.test[index % jsonData.test.length].output}
                      color={selectedColor || ''}
                      onInputArrayChange={(newInputArray) => handleInputArrayChange1(`test ${index}`, newInputArray)}
                      onOutputArrayChange={(newOutputArray) => handleOutputArrayChange1(`test ${index}`, newOutputArray)}
                      onWidthChange={(newwidth) => handleWidthChange1(`test ${index}`, newwidth)}
                      onWidthChange1={(newwidth) => handleWidthChange3(`test ${index}`, newwidth)}
                    />
                </div>
              ))}
            </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
