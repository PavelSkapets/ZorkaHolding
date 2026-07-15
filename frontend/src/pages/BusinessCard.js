import { useCallback, useEffect } from "react";

/**
 * Zorka Holding — Business Card
 * Standard EU size: 85mm x 55mm
 * Front: brand + WE BUY headline + criteria
 * Back: contact information (Paul Skapets)
 */

export default function BusinessCard() {
  useEffect(() => {
    document.title = "Zorka Holding — Business Card";
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#F3F4F6] text-[#30343B] antialiased"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Screen-only toolbar */}
      <div
        data-testid="card-toolbar"
        className="no-print sticky top-0 z-20 border-b border-[#E5E7EB] bg-white/90 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="/"
            data-testid="card-back-home"
            className="flex items-baseline gap-2 select-none"
          >
            <span className="text-[#0F2742] text-lg md:text-xl font-light tracking-[0.22em]">
              ZORKA
            </span>
            <span className="h-4 w-px bg-[#0F2742]/30" />
            <span className="text-[#30343B]/70 text-[10px] font-medium tracking-[0.3em] uppercase">
              Holding
            </span>
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.28em] text-[#30343B]/60">
              Business Card · 85 × 55 mm
            </span>
            <button
              type="button"
              onClick={handlePrint}
              data-testid="print-card-btn"
              className="text-[11px] uppercase tracking-[0.24em] font-medium bg-[#0F2742] text-white px-5 py-2.5 hover:bg-[#B38B45] transition-colors duration-300"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      {/* Preview area */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="no-print mb-12 md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#B38B45] font-medium mb-4">
            Preview
          </p>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[#0F2742] leading-[1.1]">
            Zorka Holding — Business Card
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base font-light text-[#30343B]/70 leading-relaxed">
            Front and back shown at true size (85 × 55 mm). Click{" "}
            <span className="text-[#0F2742]">Print / Save PDF</span> and choose
            &quot;Save as PDF&quot; in your browser dialog for a print-ready
            file with 3 mm bleed.
          </p>
        </div>

        <div className="print-sheet flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 lg:gap-14">
          <CardFront />
          <CardBack />
        </div>

        <div className="no-print mt-16 max-w-2xl text-xs md:text-sm font-light text-[#30343B]/60 leading-relaxed space-y-2">
          <p>
            <span className="text-[#0F2742] font-medium">Printing tip:</span>{" "}
            in the print dialog, set paper size to A4 or Letter, disable
            headers/footers, and choose &quot;Fit&quot; or 100% scale for
            accurate physical size.
          </p>
          <p>
            <span className="text-[#0F2742] font-medium">Production:</span>{" "}
            for a professional print run, send this PDF to a print shop and
            request 350 gsm matte or uncoated stock with optional gold foil on
            accent lines.
          </p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Front --------------------------------- */
function CardFront() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        data-testid="card-front"
        className="business-card bg-white text-[#0F2742] relative overflow-hidden"
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-6 w-px bg-[#B38B45]" />
        <div className="absolute top-0 left-0 w-6 h-px bg-[#B38B45]" />
        <div className="absolute bottom-0 right-0 h-6 w-px bg-[#B38B45]" />
        <div className="absolute bottom-0 right-0 w-6 h-px bg-[#B38B45]" />

        <div className="relative h-full w-full p-[4.5mm] flex flex-col justify-between">
          {/* Top brand */}
          <div>
            <p className="text-[6pt] uppercase tracking-[0.28em] text-[#B38B45] font-medium">
              Commercial Real Estate Investments
            </p>
            <div className="mt-[1.8mm] flex items-baseline gap-[1.4mm]">
              <span className="text-[16pt] leading-none font-light tracking-[0.22em] text-[#0F2742]">
                ZORKA
              </span>
              <span
                aria-hidden
                className="inline-block h-[9pt] w-px bg-[#0F2742]/30"
              />
              <span className="text-[7pt] font-medium tracking-[0.3em] uppercase text-[#30343B]/70">
                Holding
              </span>
            </div>
          </div>

          {/* Center headline */}
          <div className="text-left">
            <p className="text-[9pt] leading-tight tracking-tight font-light text-[#0F2742] uppercase">
              We Buy
            </p>
            <p className="text-[13pt] leading-tight tracking-tight font-light italic text-[#0F2742]">
              Commercial Real Estate
            </p>
            <div className="mt-[2mm] h-px w-[10mm] bg-[#B38B45]" />
          </div>

          {/* Bottom criteria */}
          <div className="flex items-baseline gap-[2.8mm] text-[6pt] tracking-[0.2em] uppercase font-medium text-[#30343B] whitespace-nowrap">
            <span>Industrial</span>
            <span className="text-[#B38B45]">·</span>
            <span>Retail</span>
            <span className="text-[#B38B45]">·</span>
            <span>Flex</span>
            <span className="text-[#B38B45]">·</span>
            <span className="text-[#B38B45]">Value-Add</span>
          </div>
        </div>
      </div>
      <p className="no-print text-[10px] uppercase tracking-[0.28em] text-[#30343B]/50 font-medium">
        Front
      </p>
    </div>
  );
}

/* --------------------------------- Back ---------------------------------- */
function CardBack() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        data-testid="card-back"
        className="business-card bg-[#0F2742] text-white relative overflow-hidden"
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-6 w-px bg-[#B38B45]" />
        <div className="absolute top-0 left-0 w-6 h-px bg-[#B38B45]" />
        <div className="absolute bottom-0 right-0 h-6 w-px bg-[#B38B45]" />
        <div className="absolute bottom-0 right-0 w-6 h-px bg-[#B38B45]" />

        <div className="relative h-full w-full p-[4.5mm] flex flex-col justify-between">
          {/* Top: brand mark */}
          <div className="flex items-baseline gap-[1.4mm]">
            <span className="text-[9pt] font-light tracking-[0.22em] text-white">
              ZORKA
            </span>
            <span aria-hidden className="inline-block h-[6pt] w-px bg-white/30" />
            <span className="text-[6pt] font-medium tracking-[0.3em] uppercase text-white/70">
              Holding
            </span>
          </div>

          {/* Center: name + title */}
          <div className="text-left">
            <p className="text-[6pt] uppercase tracking-[0.28em] text-[#B38B45] font-medium">
              Acquisitions Partner
            </p>
            <p className="mt-[1.2mm] text-[14pt] leading-tight font-light tracking-tight text-white">
              Paul Skapets
            </p>
            <div className="mt-[2mm] h-px w-[10mm] bg-[#B38B45]" />
          </div>

          {/* Bottom: contact */}
          <div className="text-[7pt] font-light leading-[1.55] text-white/90 tracking-tight">
            <p>917 · 293 · 7621</p>
            <p>acquisitions@zorkaholding.com</p>
            <p className="text-[#E4C68A]">zorkaholding.com</p>
          </div>
        </div>
      </div>
      <p className="no-print text-[10px] uppercase tracking-[0.28em] text-[#30343B]/50 font-medium">
        Back
      </p>
    </div>
  );
}
