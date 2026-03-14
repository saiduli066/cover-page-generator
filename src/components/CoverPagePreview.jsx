import { forwardRef } from "react";

const NAVY = "#0C2D48";
const CREAM = "#F5F0E8";
const TRACE = "#A09078";
const GOLD = "#C9A84C";
const BLUE_B = "#3B82F6";
const ORANGE_B = "#D97B2A";
const CODE_BLUE = "#1D6FA4";

const CoverPagePreview = forwardRef(function CoverPagePreview({ data }, ref) {
  const {
    name = "",
    studentId = "",
    year = "",
    term = "",
    session = "",
    courseTitle = "",
    courseCode = "",
    instructorName = "",
    instructorDesignation = "",
    submissionDate = "",
  } = data || {};

  const v = (val, fb) => val || fb;

  const titleLen = courseTitle.length || 12;
  const titleSize = titleLen > 40 ? 20 : titleLen > 30 ? 24 : titleLen > 20 ? 28 : 34;

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        maxWidth: 595,
        margin: "0 auto",
        aspectRatio: "210 / 297",
        background: CREAM,
        fontFamily: "'Georgia', 'Times New Roman', Times, serif",
        color: "#111",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ═══ SVG Circuit Board Traces ═══ */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 595 842"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ══ Traces radiating FROM logo area (logo center ~475,155) ══ */}

        {/* ── Bottom-right: vertical trunk descending from logo area ── */}
        <line x1="530" y1="250" x2="530" y2="400" stroke={TRACE} strokeWidth="2.2" />
        <circle cx="530" cy="250" r="3.5" fill={TRACE} />
        {/* Branch right at 300 */}
        <line x1="530" y1="300" x2="578" y2="300" stroke={TRACE} strokeWidth="2" />
        <circle cx="578" cy="300" r="4.5" fill={TRACE} />
        {/* Branch right at 355 */}
        <line x1="530" y1="355" x2="562" y2="355" stroke={TRACE} strokeWidth="2" />
        <circle cx="562" cy="355" r="3.5" fill={TRACE} />

        {/* Continue trunk down */}
        <line x1="530" y1="400" x2="530" y2="550" stroke={TRACE} strokeWidth="2.2" />
        <circle cx="530" cy="400" r="3" fill={TRACE} />
        {/* Branch right at 440 */}
        <line x1="530" y1="440" x2="580" y2="440" stroke={TRACE} strokeWidth="2" />
        <circle cx="580" cy="440" r="4.5" fill={TRACE} />
        {/* Branch right at 500 */}
        <line x1="530" y1="500" x2="568" y2="500" stroke={TRACE} strokeWidth="2" />
        <circle cx="568" cy="500" r="3.5" fill={TRACE} />

        {/* Continue trunk further down */}
        <line x1="530" y1="550" x2="530" y2="720" stroke={TRACE} strokeWidth="2.2" />
        <circle cx="530" cy="550" r="3" fill={TRACE} />
        {/* Branch right at 600 */}
        <line x1="530" y1="600" x2="575" y2="600" stroke={TRACE} strokeWidth="2" />
        <circle cx="575" cy="600" r="4" fill={TRACE} />
        {/* Branch right at 660 */}
        <line x1="530" y1="660" x2="580" y2="660" stroke={TRACE} strokeWidth="2" />
        <circle cx="580" cy="660" r="4.5" fill={TRACE} />
        {/* Branch right at 720 */}
        <line x1="530" y1="720" x2="565" y2="720" stroke={TRACE} strokeWidth="2" />
        <circle cx="565" cy="720" r="3.5" fill={TRACE} />

        {/* ── Left-side upper traces ── */}
        <line x1="25" y1="320" x2="25" y2="410" stroke={TRACE} strokeWidth="2" />
        <circle cx="25" cy="320" r="3.5" fill={TRACE} />
        <circle cx="25" cy="410" r="4" fill={TRACE} />
        <line x1="25" y1="360" x2="75" y2="360" stroke={TRACE} strokeWidth="2" />
        <circle cx="75" cy="360" r="4" fill={TRACE} />
        <line x1="55" y1="360" x2="55" y2="325" stroke={TRACE} strokeWidth="2" />
        <circle cx="55" cy="325" r="3" fill={TRACE} />

        {/* ── Left-side lower traces ── */}
        <line x1="30" y1="600" x2="30" y2="700" stroke={TRACE} strokeWidth="2" />
        <circle cx="30" cy="600" r="3.5" fill={TRACE} />
        <circle cx="30" cy="700" r="4" fill={TRACE} />
        <line x1="30" y1="650" x2="12" y2="650" stroke={TRACE} strokeWidth="2" />
        <circle cx="12" cy="650" r="4" fill={TRACE} />
        <line x1="30" y1="675" x2="72" y2="675" stroke={TRACE} strokeWidth="2" />
        <circle cx="72" cy="675" r="3.5" fill={TRACE} />

        {/* ── Flame icon (right side, below logo traces) ── */}
        <g transform="translate(548, 280) scale(1.8)">
          <path d="M6,22 C1,18 -1,12 2,6 C3,8 5,4 6,0 C7,4 9,8 10,6 C13,12 11,18 6,22Z" fill={GOLD} opacity="0.7" />
          <path d="M6,22 C3,19 2,15 4,10 C5,12 6,9 6,6 C6,9 7,12 8,10 C10,15 9,19 6,22Z" fill="#E8913A" opacity="0.75" />
        </g>

        {/* ── Atom icon (right side, mid-page along trunk) ── */}
        <g transform="translate(545, 460) scale(1.5)">
          <ellipse cx="10" cy="10" rx="14" ry="5.5" stroke={TRACE} strokeWidth="1.5" fill="none" transform="rotate(30,10,10)" />
          <ellipse cx="10" cy="10" rx="14" ry="5.5" stroke={TRACE} strokeWidth="1.5" fill="none" transform="rotate(-30,10,10)" />
          <ellipse cx="10" cy="10" rx="14" ry="5.5" stroke={TRACE} strokeWidth="1.5" fill="none" transform="rotate(90,10,10)" />
          <circle cx="10" cy="10" r="3" fill={TRACE} />
        </g>

        {/* ── Resistor icon (left side) ── */}
        <g transform="translate(15, 430) scale(1.3)">
          <line x1="0" y1="10" x2="5" y2="10" stroke={TRACE} strokeWidth="1.5" />
          <polyline points="5,10 7,4 9,16 11,4 13,16 15,4 17,16 19,10" stroke={TRACE} strokeWidth="1.4" fill="none" />
          <line x1="19" y1="10" x2="24" y2="10" stroke={TRACE} strokeWidth="1.5" />
        </g>

        {/* ── Capacitor icon (left side lower) ── */}
        <g transform="translate(50, 625) scale(1.3)">
          <line x1="10" y1="0" x2="10" y2="7" stroke={TRACE} strokeWidth="1.5" />
          <line x1="4" y1="7" x2="16" y2="7" stroke={TRACE} strokeWidth="2" />
          <line x1="4" y1="11" x2="16" y2="11" stroke={TRACE} strokeWidth="2" />
          <line x1="10" y1="11" x2="10" y2="18" stroke={TRACE} strokeWidth="1.5" />
        </g>

        {/* ══ Center area electronics designs ══ */}

        {/* ── IC Chip (center area) ── */}
        <g transform="translate(210, 400)" opacity="0.55">
          <rect x="0" y="0" width="40" height="55" rx="3" stroke={TRACE} strokeWidth="2" fill="none" />
          {/* Pins left */}
          <line x1="-10" y1="10" x2="0" y2="10" stroke={TRACE} strokeWidth="1.8" />
          <line x1="-10" y1="22" x2="0" y2="22" stroke={TRACE} strokeWidth="1.8" />
          <line x1="-10" y1="34" x2="0" y2="34" stroke={TRACE} strokeWidth="1.8" />
          <line x1="-10" y1="46" x2="0" y2="46" stroke={TRACE} strokeWidth="1.8" />
          {/* Pins right */}
          <line x1="40" y1="10" x2="50" y2="10" stroke={TRACE} strokeWidth="1.8" />
          <line x1="40" y1="22" x2="50" y2="22" stroke={TRACE} strokeWidth="1.8" />
          <line x1="40" y1="34" x2="50" y2="34" stroke={TRACE} strokeWidth="1.8" />
          <line x1="40" y1="46" x2="50" y2="46" stroke={TRACE} strokeWidth="1.8" />
          {/* Notch */}
          <path d="M16,0 A4,4 0 0,0 24,0" stroke={TRACE} strokeWidth="1.5" fill="none" />
        </g>

        {/* ── AND gate (center-left) ── */}
        <g transform="translate(105, 440)" opacity="0.5">
          <line x1="0" y1="8" x2="12" y2="8" stroke={TRACE} strokeWidth="1.8" />
          <line x1="0" y1="22" x2="12" y2="22" stroke={TRACE} strokeWidth="1.8" />
          <path d="M12,0 L12,30 Q32,30 32,15 Q32,0 12,0 Z" stroke={TRACE} strokeWidth="1.8" fill="none" />
          <line x1="32" y1="15" x2="44" y2="15" stroke={TRACE} strokeWidth="1.8" />
        </g>

        {/* ── Horizontal circuit traces across center ── */}
        <line x1="80" y1="490" x2="320" y2="490" stroke={TRACE} strokeWidth="1.8" opacity="0.4" />
        <circle cx="80" cy="490" r="3.5" fill={TRACE} opacity="0.4" />
        <circle cx="160" cy="490" r="3" fill={TRACE} opacity="0.4" />
        <circle cx="240" cy="490" r="3" fill={TRACE} opacity="0.4" />
        <circle cx="320" cy="490" r="3.5" fill={TRACE} opacity="0.4" />
        {/* Vertical branch down */}
        <line x1="200" y1="490" x2="200" y2="530" stroke={TRACE} strokeWidth="1.8" opacity="0.4" />
        <circle cx="200" cy="530" r="3" fill={TRACE} opacity="0.4" />
        {/* Vertical branch up */}
        <line x1="280" y1="490" x2="280" y2="460" stroke={TRACE} strokeWidth="1.8" opacity="0.4" />
        <circle cx="280" cy="460" r="3" fill={TRACE} opacity="0.4" />

        {/* ── LED symbol (center-right) ── */}
        <g transform="translate(310, 410)" opacity="0.5">
          <polygon points="0,0 0,20 16,10" stroke={TRACE} strokeWidth="1.6" fill="none" />
          <line x1="16" y1="0" x2="16" y2="20" stroke={TRACE} strokeWidth="1.6" />
          <line x1="-8" y1="10" x2="0" y2="10" stroke={TRACE} strokeWidth="1.5" />
          <line x1="16" y1="10" x2="24" y2="10" stroke={TRACE} strokeWidth="1.5" />
          {/* Light arrows */}
          <line x1="10" y1="-3" x2="16" y2="-9" stroke={TRACE} strokeWidth="1.3" />
          <line x1="14" y1="-1" x2="20" y2="-7" stroke={TRACE} strokeWidth="1.3" />
          <polygon points="15,-9 16,-9 16,-5" fill={TRACE} />
          <polygon points="19,-7 20,-7 20,-3" fill={TRACE} />
        </g>

        {/* ── Inductor / coil (lower center) ── */}
        <g transform="translate(130, 525)" opacity="0.45">
          <line x1="0" y1="10" x2="6" y2="10" stroke={TRACE} strokeWidth="1.5" />
          <path d="M6,10 Q10,0 14,10 Q18,0 22,10 Q26,0 30,10 Q34,0 38,10" stroke={TRACE} strokeWidth="1.5" fill="none" />
          <line x1="38" y1="10" x2="44" y2="10" stroke={TRACE} strokeWidth="1.5" />
        </g>

        {/* ── PCB solder pad grid (center) ── */}
        <circle cx="360" cy="440" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="375" cy="440" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="390" cy="440" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="405" cy="440" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="360" cy="455" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="375" cy="455" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="390" cy="455" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="405" cy="455" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="360" cy="470" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="375" cy="470" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="390" cy="470" r="2.5" fill={TRACE} opacity="0.35" />
        <circle cx="405" cy="470" r="2.5" fill={TRACE} opacity="0.35" />

        {/* ── Transistor symbol (right of center) ── */}
        <g transform="translate(420, 480)" opacity="0.45">
          <line x1="10" y1="0" x2="10" y2="30" stroke={TRACE} strokeWidth="2" />
          <line x1="10" y1="8" x2="24" y2="0" stroke={TRACE} strokeWidth="1.6" />
          <line x1="10" y1="22" x2="24" y2="30" stroke={TRACE} strokeWidth="1.6" />
          <line x1="0" y1="15" x2="10" y2="15" stroke={TRACE} strokeWidth="1.6" />
          <polygon points="20,27 24,30 20,30" fill={TRACE} />
        </g>

        {/* ── OR gate (far left center) ── */}
        <g transform="translate(55, 480)" opacity="0.45">
          <line x1="0" y1="7" x2="10" y2="7" stroke={TRACE} strokeWidth="1.6" />
          <line x1="0" y1="23" x2="10" y2="23" stroke={TRACE} strokeWidth="1.6" />
          <path d="M6,0 Q16,15 6,30 Q26,30 34,15 Q26,0 6,0 Z" stroke={TRACE} strokeWidth="1.6" fill="none" />
          <line x1="34" y1="15" x2="46" y2="15" stroke={TRACE} strokeWidth="1.6" />
        </g>

        {/* ── Connecting traces between center components ── */}
        <line x1="149" y1="455" x2="190" y2="455" stroke={TRACE} strokeWidth="1.5" opacity="0.35" />
        <line x1="260" y1="428" x2="302" y2="420" stroke={TRACE} strokeWidth="1.5" opacity="0.35" />
        <line x1="334" y1="420" x2="360" y2="440" stroke={TRACE} strokeWidth="1.5" opacity="0.35" />
      </svg>

      {/* ═══ Content layer ═══ */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "18px 22px 18px",
        }}
      >
        {/* ── Inner border box ── */}
        <div
          style={{
            border: "1.5px solid #888",
            borderRadius: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "14px 20px 12px",
          }}
        >
        {/* ── Gold deco line top ── */}
        <div
          style={{
            width: 55,
            height: 2.5,
            margin: "0 auto 10px",
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            borderRadius: 2,
          }}
        />

        {/* ── University Name ── */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: NAVY,
            textAlign: "center",
            lineHeight: 1.35,
            fontStyle: "italic",
            letterSpacing: "0.01em",
            marginBottom: 6,
            whiteSpace: "nowrap",
          }}
        >
          Noakhali Science and Technology University
        </div>

        {/* ── Gold deco line bottom ── */}
        <div
          style={{
            width: 80,
            height: 2,
            margin: "8px auto 50px",
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            borderRadius: 2,
            
          }}
        />

        {/* ── Logo + Course Title Row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            minHeight: 180,
          }}
        >
          {/* Left: Course Info */}
          <div style={{ flex: 1, paddingRight: 8 }}>
            <div
              style={{
                fontSize: titleSize,
                fontWeight: 800,
                color: NAVY,
                lineHeight: 1.18,
                letterSpacing: "-0.015em",
                marginBottom: 14,
                fontFamily: "'Poppins', sans-serif",
                wordBreak: "break-word",
              }}
            >
              {v(courseTitle, "Course Title")}
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: CODE_BLUE,
                letterSpacing: "0.02em",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {v(courseCode, "ICE-0000")}
            </div>
          </div>
          {/* Right: Logo + NSTU */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: 0,
              width: 180,
              marginRight:17,
            }}
          >
            <img
              src="/nstu-icon-removebg.png"
              alt="NSTU"
              style={{ width: 175, height: 175, objectFit: "contain" }}
            />
            <div
              style={{
                marginTop: 6,
                fontSize: 16,
                fontWeight: 800,
                color: NAVY,
                letterSpacing: "0.25em",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              NSTU
            </div>
          </div>
        </div>

        {/* ── Spacer to push boxes to bottom portion ── */}
        <div style={{ flex: 1, minHeight: 40 }} />

        {/* ── "Submitted by" / "Submitted to" boxes ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
        >
          {/* ── Left: Submitted by ── */}
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: NAVY,
                marginBottom: 8,
                paddingLeft: 4,
                fontStyle: "italic",
              }}
            >
              Submitted by:
            </div>
            <div
              style={{
                padding: 2.5,
                borderRadius: 16,
                background: `linear-gradient(150deg, ${BLUE_B} 0%, rgba(59,130,246,0.35) 35%, rgba(59,130,246,0.08) 65%, transparent 100%)`,
              }}
            >
              <div
                style={{
                  background: CREAM,
                  borderRadius: 13,
                  padding: "16px 16px 14px",
                }}
              >
                <InfoRow label="Name" value={v(name, "Student Name")} />
                <InfoRow label="ID" value={v(studentId, "Student ID")} />
                <div style={{ marginBottom: 6, fontSize: 12.5 }}>
                  <span style={{ fontWeight: 700, color: NAVY }}>Year: </span>
                  <span>{v(year, "—")}</span>
                  <span style={{ fontWeight: 700, color: NAVY }}>
                    , &nbsp;Term:{" "}
                  </span>
                  <span>{v(term, "—")}</span>
                </div>
                <InfoRow label="Session" value={v(session, "20XX-20XX")} />
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: NAVY,
                  }}
                >
                  Department: ICE, NSTU
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Submitted to ── */}
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: NAVY,
                marginBottom: 8,
                paddingLeft: 4,
                fontStyle: "italic",
              }}
            >
              Submitted to:
            </div>
            <div
              style={{
                padding: 2.5,
                borderRadius: 16,
                background: `linear-gradient(210deg, ${ORANGE_B} 0%, rgba(217,123,42,0.35) 35%, rgba(217,123,42,0.08) 65%, transparent 100%)`,
              }}
            >
              <div
                style={{
                  background: CREAM,
                  borderRadius: 13,
                  padding: "16px 16px 14px",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#111",
                    marginBottom: 8,
                  }}
                >
                  {v(instructorName, "Instructor Name")}
                </div>
                <div style={{ marginBottom: 6, fontSize: 12.5, color: "#111" }}>
                  {v(instructorDesignation, "Designation")}
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: NAVY,
                  }}
                >
                  Department: ICE, NSTU
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom: Date ── */}
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <div
            style={{
              width: "70%",
              height: 2,
              background: NAVY,
              margin: "0 auto 14px",
              borderRadius: 1,
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {/* Left diamonds */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {[3.5, 5, 6.5].map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: s,
                    height: s,
                    background: i === 2 ? GOLD : TRACE,
                    transform: "rotate(45deg)",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                fontSize: 13.5,
                fontWeight: 700,
                color: NAVY,
                fontStyle: "italic",
              }}
            >
              Date of Submission:{" "}
              <span style={{ fontWeight: 400, fontStyle: "normal" }}>
                {v(submissionDate, "DD-MM-YYYY")}
              </span>
            </div>
            {/* Right diamonds */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {[6.5, 5, 3.5].map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: s,
                    height: s,
                    background: i === 0 ? GOLD : TRACE,
                    transform: "rotate(45deg)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
});

function InfoRow({ label, value }) {
  return (
    <div style={{ marginBottom: 6, fontSize: 12.5 }}>
      <span style={{ fontWeight: 700, color: "#0C2D48" }}>{label}: </span>
      <span style={{ color: "#111" }}>{value}</span>
    </div>
  );
}

export default CoverPagePreview;
