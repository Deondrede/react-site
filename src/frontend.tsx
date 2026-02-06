import React from 'react';
import ReactDOM from 'react-dom/client';
import DarkVeil from './component/DarkVeil';
import GlassSurface from './component/GlassSurface';
import DecryptedText from './component/DecryptedText';
import './index.css';
import '@fontsource/montserrat/400.css';

function Frontend() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Background - DarkVeil fills entire screen */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Glass Header - overlaid on top */}
      <div id="glass-header" style={{ position: 'relative', zIndex: 10, width: '70%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '15px' }}>
        <GlassSurface
          width={'100%'}
          height={50}
          borderRadius={50}
          opacity={0.85}
          brightness={80}
          blur={15}
          displace={0.3}
        >
          <div style={{ 
            padding: '20px 40px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            color: 'white'
          }}>
            <p id="header">Deondre De Freitas | DevOps Engineer | Assistant Vice President</p>
          </div>
        </GlassSurface>
      </div>

      <div style={{ position: 'relative', zIndex: 20, marginTop: '4rem', color: 'white' }}>
      <DecryptedText
        text="This text animates when in view"
        animateOn="view"
        revealDirection="start"
        sequential
        useOriginalCharsOnly={false}
      />
    </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Frontend />);