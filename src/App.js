import React from 'react';
import DownloadPDF from './DownloadPDF'

export default class App extends React.Component {
  render() {
    return (
      <div id="capture">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SX679_.jpg" alt="Alternate" />
        <div>First Statement</div>
        <div>Second Statement</div>
        <DownloadPDF 
          selector="#capture" 
          label="Download Me" 
          fileName="main-page"
          containerClass=""
          buttonClass=""
        />
      </div>
    )
  }
    
}
