import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Baraat Invitation";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #062F26 0%, #0E5C52 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F6EEDC",
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ fontSize: 96 }}>Baraat Invitation</div>
          <div
            style={{
              height: 2,
              width: 300,
              background: "#F6EEDC",
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
