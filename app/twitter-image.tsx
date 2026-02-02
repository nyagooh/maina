import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ann Maina - Product Designer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Background Text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '140px',
            fontWeight: 'bold',
            color: 'transparent',
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
            letterSpacing: '-0.05em',
          }}
        >
          ANN MAINA
        </div>

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Top Hello Text */}
          <div
            style={{
              position: 'absolute',
              top: '-250px',
              left: '-400px',
              fontSize: '14px',
              letterSpacing: '0.3em',
              color: '#ea580c',
              fontWeight: 'bold',
            }}
          >
            (HELLO! I'M ANN)
          </div>

          {/* Phone Mockup Representation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#2a2a2a',
              borderRadius: '40px',
              padding: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
                width: '280px',
                height: '500px',
                borderRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '24px',
                position: 'relative',
              }}
            >
              {/* Portfolio Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(26, 26, 26, 0.7)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                (PORTFOLIO)
              </div>

              {/* Text at bottom */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(26, 26, 26, 0.8)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  padding: '20px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    color: 'white',
                    letterSpacing: '0.2em',
                    marginBottom: '8px',
                  }}
                >
                  UI/UX
                </div>
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}
                >
                  PRODUCT<br />DESIGNER
                </div>
              </div>
            </div>
          </div>

          {/* Tagline - Bottom Right */}
          <div
            style={{
              position: 'absolute',
              bottom: '-220px',
              right: '-350px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#ea580c',
              maxWidth: '300px',
              textAlign: 'right',
              lineHeight: 1.3,
              letterSpacing: '0.05em',
            }}
          >
            SOLVING PROBLEMS WITH AESTHETICS AND EMPATHY
          </div>
        </div>

        {/* Bottom Elements */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50px',
            right: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: 'white',
              color: '#1a1a1a',
              padding: '12px 24px',
              borderRadius: '16px',
              fontSize: '14px',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
            }}
          >
            RESUME
          </div>
          
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            01
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
