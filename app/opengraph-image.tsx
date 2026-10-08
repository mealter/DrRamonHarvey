import { ImageResponse } from 'next/og'

export const alt = 'Dr Ramon Harvey \u2014 Islamic Theology, Philosophy and Qur\u2019anic Studies'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f6f1e7',
          color: '#2b2622',
          padding: '72px 88px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 6, color: '#7a2632', fontFamily: 'sans-serif' }}>
          RAMONHARVEY.COM
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 132, lineHeight: 1, letterSpacing: -3 }}>Ramon Harvey</div>
          <div style={{ marginTop: 28, fontSize: 40, fontStyle: 'italic', color: '#5c544b' }}>
            Islamic Theology, Philosophy and Qur&apos;anic Studies
          </div>
        </div>
        <div style={{ display: 'flex', height: 1, background: '#2b262233' }} />
      </div>
    ),
    size,
  )
}
