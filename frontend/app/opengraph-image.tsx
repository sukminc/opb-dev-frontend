import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "onepercentbetter — Small apps. Fast loops.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f5f3ef",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: "2px solid #111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#111111",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            1%
          </div>
          <span style={{ color: "#6b655d", fontSize: "18px", letterSpacing: "0.05em" }}>
            onepercentbetter
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Small apps.
            <span style={{ color: "#6b655d" }}> Fast loops.</span>
          </div>
          <div style={{ fontSize: "24px", color: "#6b655d", maxWidth: "760px", lineHeight: 1.4 }}>
            A minimal product studio for learning in public, shipping quickly,
            and getting one percent better on every cycle.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#fbfaf7",
              border: "1px solid #d9d2c8",
              borderRadius: "8px",
              padding: "12px 20px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid #111111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111111",
                fontSize: "11px",
                fontWeight: 700,
              }}
            >
              SY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ color: "#111111", fontSize: "14px", fontWeight: 600 }}>
                Chris S. Yoon
              </span>
              <span style={{ color: "#6b655d", fontSize: "12px" }}>
                Product studio · funding page · linkedin.com/in/sukminyoon
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "32px" }}>
            {[
              { value: "ship", label: "small ideas" },
              { value: "learn", label: "fast loops" },
            ].map((s) => (
              <div
                key={s.label}
                style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}
              >
                <span style={{ color: "#111111", fontSize: "22px", fontWeight: 700, fontFamily: "monospace" }}>
                  {s.value}
                </span>
                <span style={{ color: "#8a8378", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
