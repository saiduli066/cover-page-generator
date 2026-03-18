import { useRef, useCallback, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingInput from "../components/FloatingInput";
import InstructorAutocomplete from "../components/InstructorAutocomplete";
import CoverPagePreview from "../components/CoverPagePreview";
import { parseStudentId } from "../utils/parseStudentId";

export default function CoverPageGenerator() {
  const navigate = useNavigate();
  const previewRef = useRef(null);

  const { register, watch, setValue, control } = useForm({
    defaultValues: {
      name: "",
      studentId: "",
      year: "",
      term: "",
      session: "",
      courseTitle: "",
      courseCode: "",
      instructorName: "",
      instructorDesignation: "",
      submissionDate: "",
    },
  });

  const formValues = watch();

  const handleIdChange = useCallback(
    (e) => {
      const id = e.target.value;
      setValue("studentId", id);
      const parsed = parseStudentId(id);
      if (parsed) {
        setValue("session", parsed.session);
        setValue("year", parsed.year);
        setValue("term", parsed.term);
      }
    },
    [setValue],
  );

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
  };

  const handleDownloadPdf = useCallback(async () => {
    const el = previewRef.current;
    if (!el) return;

    // Clone preview off-screen at full A4 size so CSS scale doesn't affect capture
    const clone = el.cloneNode(true);
    Object.assign(clone.style, {
      position: "fixed",
      left: "-9999px",
      top: "0",
      width: "595px",
      maxWidth: "595px",
      border: "none",
      borderRadius: "0",
      transform: "none",
    });
    document.body.appendChild(clone);

    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);

    const canvas = await html2canvas(clone, {
      scale: 3,
      useCORS: true,
      letterRendering: true,
    });

    document.body.removeChild(clone);

    const imgData = canvas.toDataURL("image/jpeg", 0.98);
    const pdf = new jsPDF("portrait", "mm", "a4");
    pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
    pdf.save(`Cover_Page_${formValues.name || "NSTU"}.pdf`);
  }, [formValues.name]);

  const previewData = {
    ...formValues,
    submissionDate: formatDate(formValues.submissionDate),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.35 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      style={{ minHeight: "100dvh", background: "#F0F4F8" }}
    >
      {/* ── Header ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(240,244,248,0.85)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 16px",
            height: 56,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "6px 12px",
              borderRadius: 10,
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              color: "#64748B",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E8F0F8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
          <div style={{ width: 1, height: 20, background: "#D1DAE4" }} />
          <img
            src="/nstu-icon.png"
            alt=""
            style={{
              width: 26,
              height: 26,
              objectFit: "contain",
              borderRadius: "50%",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "#0B3C5D",
            }}
          >
            Cover Page Generator
          </span>
          <div style={{ flex: 1 }} />
          <span
            style={{
              padding: "4px 12px",
              borderRadius: 99,
              background: "#0B3C5D",
              color: "#fff",
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            ICE
          </span>
        </div>
      </header>

      {/* ── Main ── */}
      <main
        style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px 48px" }}
      >
        <div
          className="gen-layout"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Form */}
          <div className="gen-form" style={{ width: "100%" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 22,
                padding: "24px 22px",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(11,60,93,0.06)",
                border: "1px solid #E8EEF4",
              }}
            >
              <Section num={1} title="Student Information">
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <FloatingInput
                    label="Full Name"
                    id="name"
                    {...register("name")}
                  />
                  <FloatingInput
                    label="Student ID (e.g. MUH2211031M)"
                    id="studentId"
                    {...register("studentId")}
                    onChange={handleIdChange}
                  />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                    }}
                  >
                    <FloatingInput
                      label="Year"
                      id="year"
                      {...register("year")}
                    />
                    <FloatingInput
                      label="Term"
                      id="term"
                      {...register("term")}
                    />
                  </div>
                  <FloatingInput
                    label="Session"
                    id="session"
                    {...register("session")}
                  />
                </div>
              </Section>

              <Section num={2} title="Course Information">
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <FloatingInput
                    label="Course Title"
                    id="courseTitle"
                    {...register("courseTitle")}
                  />
                  <FloatingInput
                    label="Course Code"
                    id="courseCode"
                    {...register("courseCode")}
                  />
                </div>
              </Section>

              <Section num={3} title="Instructor">
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <Controller
                    name="instructorName"
                    control={control}
                    render={({ field }) => (
                      <InstructorAutocomplete
                        value={field.value}
                        onChange={(val) => field.onChange(val)}
                        onDesignationSelect={(d) =>
                          setValue("instructorDesignation", d)
                        }
                      />
                    )}
                  />
                  <FloatingInput
                    label="Designation"
                    id="instructorDesignation"
                    {...register("instructorDesignation")}
                  />
                </div>
              </Section>

              <Section num={4} title="Submission" last>
                <FloatingInput
                  label="Date of Submission"
                  id="submissionDate"
                  type="date"
                  {...register("submissionDate")}
                />
              </Section>
            </div>
          </div>

          {/* Preview + Download */}
          <div className="gen-preview" style={{ width: "100%" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 22,
                padding: "20px 16px",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(11,60,93,0.06)",
                border: "1px solid #E8EEF4",
                marginBottom: 16,
              }}
            >
              {/* Label bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#1d6fa4",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Live Preview
                </span>
                <div style={{ flex: 1, height: 1, background: "#EEF3F9" }} />
              </div>

              {/* Preview with scale-to-fit */}
              <ScaledPreview>
                <CoverPagePreview ref={previewRef} data={previewData} />
              </ScaledPreview>
            </div>

            {/* Download */}
            <button
              onClick={handleDownloadPdf}
              style={{
                width: "100%",
                padding: "18px 24px",
                borderRadius: 18,
                background: "linear-gradient(135deg, #0B3C5D, #1d6fa4)",
                border: "none",
                color: "#fff",
                fontSize: 15,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                boxShadow: "0 6px 24px rgba(11,60,93,0.3)",
                transition: "transform 0.18s, box-shadow 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 32px rgba(11,60,93,0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(11,60,93,0.3)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download as PDF
            </button>
          </div>
        </div>
      </main>

      {/* Desktop layout */}
      <style>{`
        @media (min-width: 1024px) {
          .gen-layout {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
          .gen-form { width: 400px !important; flex-shrink: 0; position: sticky; top: 76px; }
          .gen-preview { flex: 1 !important; }
        }
      `}</style>
    </motion.div>
  );
}

function Section({ num, title, children, last }) {
  return (
    <div style={{ marginBottom: last ? 0 : 26 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
          paddingBottom: 10,
          borderBottom: "1.5px solid #EEF3F9",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 9,
            background: "linear-gradient(135deg, #0B3C5D, #1a5a84)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {num}
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 13.5,
            fontWeight: 700,
            color: "#0B3C5D",
          }}
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function ScaledPreview({ children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const PREVIEW_WIDTH = 595;
  const PREVIEW_HEIGHT = PREVIEW_WIDTH * (297 / 210);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setScale(Math.min(width / PREVIEW_WIDTH, 1));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#F0F4F8",
        borderRadius: 14,
        padding: 14,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: PREVIEW_HEIGHT * scale,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: PREVIEW_WIDTH,
            transformOrigin: "top center",
            transform: `scale(${scale})`,
            flexShrink: 0,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
