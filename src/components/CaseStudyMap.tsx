import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./ui/Section";
import { caseStudies } from "../data/caseStudies";
import type { Theme } from "../data/findings";

const THEME_COLOR: Record<Theme, string> = {
  environment: "#199e70",
  health: "#e66767",
  water: "#3987e5",
  economy: "#c98500",
  justice: "#9085e9",
  seismicity: "#d95926",
};

export function CaseStudyMap() {
  const { lang, t } = useLanguage();

  return (
    <Section id="map" eyebrow={t.map.eyebrow} title={t.map.title} intro={t.map.intro}>
      <div className="overflow-hidden rounded-md border border-ink-hairline">
        <MapContainer
          center={[38, -98]}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: 480, width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {caseStudies.map((cs) => (
            <CircleMarker
              key={cs.id}
              center={[cs.lat, cs.lng]}
              radius={cs.precision === "site" ? 8 : 10}
              pathOptions={{
                color: THEME_COLOR[cs.theme],
                fillColor: THEME_COLOR[cs.theme],
                fillOpacity: cs.precision === "site" ? 0.85 : 0.35,
                weight: cs.precision === "site" ? 2 : 1,
                dashArray: cs.precision === "region" ? "3 3" : undefined,
              }}
            >
              <Popup>
                <div className="min-w-[200px] font-body">
                  <p className="font-display text-sm font-medium">{cs.place}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted">
                    {t.map.paperLabel} {cs.paperId} · {cs.topic[lang]}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed">{cs.summary[lang]}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-wide text-ink-muted">
                    {t.map.precisionLabel}: {cs.precision === "site" ? t.map.precisionCounty : t.map.precisionState}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">{t.map.legendTitle}:</span>
        {(Object.keys(THEME_COLOR) as Theme[]).map((theme) => (
          <span key={theme} className="flex items-center gap-1.5 text-xs text-ink-secondary">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: THEME_COLOR[theme] }} />
            {t.findings.themes[theme]}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink-muted">{t.common.pendingCoordinates}</p>
    </Section>
  );
}
