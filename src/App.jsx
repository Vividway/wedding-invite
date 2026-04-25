import groomFamily from "./assets/images/groom-family.jpg";
import brideFamily from "./assets/images/bride-family.jpg";
import ganeshaImg from "./assets/images/ganesha.png";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const SHEETDB_RSVP_URL = "https://sheetdb.io/api/v1/biaf2v3jlmlyc";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Heart,
  ChevronDown,
  ChevronUp,
  Phone,
  Users,
  Camera,
  Car,
  Shirt,
  Gift,
  BedDouble,
  MessageCircle,
  Sparkles,
  Copy,
  X,
  ArrowLeft,
  ArrowRight,
  Menu,
} from "lucide-react";

const weddingDate = new Date("2026-05-07T22:38:00+05:30");


const config = {
  couple: {
    groom: "Koushik",
    bride: "Niharika",
    hashtag: "#KoushikWedsNiharika",
    mantra: "శ్రీ వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ । నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ॥",
    subline:
      "Two hearts, one sacred promise, and a celebration wrapped in tradition, joy, and far too much good food.",
  },
  parents: {
    groom: "Bhimavarapu Kodanda Srinivasa Rao & Smt. Kavitha",
    bride:
      "Sri Viswanadhuni Krishna Kishore & Smt. Venkata Padmavathi",
  },
  contact: {
    whatsappRSVP:
      "https://wa.me/919999999999?text=Namaskaram!%20I%20would%20love%20to%20RSVP%20for%20the%20wedding%20celebrations.",
    groomFamilyWhatsapp:
      "https://wa.me/919999999999?text=Namaskaram!%20RSVP%20from%20Groom%20Family%20guest.",
    brideFamilyWhatsapp:
      "https://wa.me/919999999998?text=Namaskaram!%20RSVP%20from%20Bride%20Family%20guest.",
    phone: "+91 99999 99999",
    instagram: "https://instagram.com/yourhandle",
    supportText:
      "Need directions, parking help, room details, or a last-minute update? Reach out anytime.",
  },
  media: {
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
        alt: "Pre-wedding memory 1",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
        alt: "Pre-wedding memory 2",
      },
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
        alt: "Pre-wedding memory 3",
      },
      {
        src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
        alt: "Pre-wedding memory 4",
      },
      {
        src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
        alt: "Pre-wedding memory 5",
      },
      {
        src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
        alt: "Pre-wedding memory 6",
      },
    ],
  },
  events: [
    {
      id: "wedding",
      title: "Wedding · Muhurtham",
      family: "both",
      dateLabel: "Thursday, 07th May 2026",
      timeLabel: "7:00 PM onwards",
      venue: "Veduka Hall, Bandlamudi Gardens",
      address: "Amaravati Road, Guntur",
      mapsUrl:
        "https://maps.google.com/?q=Veduka%20Hall%20Bandlamudi%20Gardens%20Amaravati%20Road%20Guntur",
      blurb:
        "Join us as we begin this sacred journey, filled with blessings, traditions, and moments that will stay with us forever.",
      programme: [
        "Guest arrival & welcome",
        "Pre-Wedding Reception at 7:00 PM onwards",
        "Traditional rituals and blessings",
        "Muhurtham at 10:38 PM",
        "Family photographs & greetings",
      ],
      accent: "from-rose-700 via-red-800 to-amber-600",
    },
    {
      id: "reception",
      title: "Reception · Dinner",
      family: "both",
      dateLabel: "Saturday, 09th May 2026",
      timeLabel: "6:00 PM onwards",
      venue: "K Convention Hall",
      address: "Aswaraopeta Road, Jangareddygudem",
      mapsUrl:
        "https://maps.google.com/?q=K%20Convention%20Hall%20Aswaraopeta%20Road%20Jangareddygudem",
      blurb:
        "An evening of celebration, laughter, and togetherness with good food, warm company, and memories to take home.",
      programme: [
        "Guest welcome",
        "Meet the couple",
        "Family greetings & photos",
        "Grand dinner",
      ],
      accent: "from-fuchsia-700 via-pink-700 to-orange-500",
    },
  ],
  infoTabs: [
    {
      id: "parking",
      label: "Parking",
      icon: Car,
      content:
        "Dedicated parking assistance can be arranged near both venues. Elderly guests will have priority drop-off access close to the entrance.",
    },
    {
      id: "stay",
      label: "Stay",
      icon: BedDouble,
      content:
        "Stay details for family and outstation guests will be shared directly on WhatsApp. Support contacts will also be available here for your convenience.",
    },
    {
      id: "dress",
      label: "Dress Code",
      icon: Shirt,
      content:
        "Traditional Indian festive wear is warmly encouraged. Think vibrant, graceful, camera-friendly, and comfortable enough to survive a full wedding day.",
    },
    {
      id: "food",
      label: "Food",
      icon: Sparkles,
      content:
        "Expect a generous spread of traditional favourites. You may come for the blessings, but you will remember the food.",
    },
    {
      id: "gifts",
      label: "Gifts",
      icon: Gift,
      content:
        "Your presence and blessings mean the most. If you still insist on bringing something, bring your smile, your appetite, and your best wishes.",
    },
    {
      id: "hashtag",
      label: "Hashtag",
      icon: Camera,
      content:
        "Use #KoushikWedsNiharika for your photos, reels, stories, and those very serious family selfies.",
    },
  ],
};

const sectionIds = [
  { id: "home", label: "Home" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "families", label: "Families" },
  { id: "info", label: "Info" },
  { id: "rsvp", label: "RSVP" },
];

const validViews = new Set(["all", "groom-family", "bride-family"]);

function formatCountdown(target) {
  const diff = target.getTime() - new Date().getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function copyText(text) {
  if (typeof navigator === "undefined") return Promise.resolve(false);
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(() => false);
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return Promise.resolve(success);
  } catch {
    return Promise.resolve(false);
  }
}

function GaneshaMotif() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 blur-2xl bg-amber-200/10 rounded-full" />
      <img
        src={ganeshaImg}
        alt="Lord Ganesha"
        className="relative z-10 h-28 w-28 object-contain drop-shadow-[0_14px_40px_rgba(255,200,120,0.45)] sm:h-32 sm:w-32 md:h-44 md:w-44"
      />
    </div>
  );
}

function Mandala() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
        className="h-[28rem] w-[28rem] rounded-full border border-amber-200/40"
      >
        <div className="relative h-full w-full rounded-full border border-amber-300/30">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-amber-200/60"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-220px) translateX(-50%)`,
                transformOrigin: "center 220px",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FloatingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: -40, x: `${(i * 7) % 100}vw`, opacity: 0.25, rotate: 0 }}
          animate={{
            y: "110vh",
            x: `calc(${(i * 7) % 100}vw + ${i % 2 === 0 ? 40 : -35}px)`,
            rotate: i % 2 === 0 ? 180 : -180,
            opacity: [0.15, 0.3, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 11 + (i % 6),
            ease: "linear",
            delay: i * 0.55,
          }}
          className="absolute top-0 text-xl"
        >
          🌸
        </motion.span>
      ))}
    </div>
  );
}

function CountdownBlock({ target }) {
  const [countdown, setCountdown] = useState(formatCountdown(target));

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(formatCountdown(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const blocks = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {blocks.map((block) => (
        <motion.div
          key={block.label}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-amber-200/20 bg-white/8 px-3 py-3 text-center shadow-2xl backdrop-blur-md md:rounded-3xl md:px-4 md:py-4"
        >
          <div className="text-2xl font-bold text-amber-100 md:text-4xl">
            {String(block.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.35em] text-amber-200/80">
            {block.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-800">
        <Sparkles className="h-4 w-4" /> {eyebrow}
      </div>
      <h2
        className="text-4xl font-semibold text-stone-900 md:text-5xl"
        style={{ fontFamily: "serif" }}
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-stone-600 md:text-lg">{subtitle}</p>
    </div>
  );
}

function EventCard({ event }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_25px_80px_rgba(80,20,20,0.12)]"
    >
      <div className={`bg-gradient-to-r ${event.accent} p-1`}>
        <div className="rounded-[1.85rem] bg-white/90 p-6 backdrop-blur-sm md:p-7">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900">
                <CalendarDays className="h-4 w-4" /> {event.title}
              </div>
              <p className="mt-4 max-w-xl text-stone-600">{event.blurb}</p>
            </div>
            <div className="hidden rounded-full bg-rose-50 p-3 text-rose-700 md:block">
              <Heart className="h-5 w-5" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-white to-rose-100/60 p-5 shadow-sm">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-rose-500">
                Date
              </div>
              <div className="flex items-center gap-2 text-base font-semibold text-stone-900">
                <CalendarDays className="h-4 w-4 text-rose-500" />
                {event.dateLabel}
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-5 shadow-sm">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-amber-500">
                Time
              </div>
              <div className="flex items-center gap-2 text-base font-semibold text-stone-900">
                <Clock3 className="h-4 w-4 text-amber-500" />
                {event.timeLabel}
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-orange-100/60 p-5 shadow-sm md:col-span-2">
              <div className="mb-2 text-xs uppercase tracking-[0.25em] text-orange-500">
                Venue
              </div>
              <div className="flex items-start gap-2 text-base font-semibold text-stone-900">
                <MapPin className="mt-1 h-4 w-4 text-orange-500" />
                <div>
                  <div>{event.venue}</div>
                  <div className="mt-1 text-sm text-stone-600">{event.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${event.title}\n${event.dateLabel}\n${event.timeLabel}\n${event.venue}, ${event.address}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-800 transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Share on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-medium text-amber-900 transition hover:scale-[1.02]"
            >
              {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              Programme Details
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-5 rounded-3xl border border-dashed border-amber-300 bg-amber-50/80 p-5">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-900">
                    Ceremony Flow
                  </div>
                  <ul className="space-y-2 text-stone-700">
                    {event.programme.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function FamilyCard({ side, title, parentText, whatsappUrl, image }) {
  return (
    <motion.div whileHover={{ y: -6 }}>
      <div className="relative overflow-hidden rounded-[2.2rem] border border-amber-200/40 bg-gradient-to-br from-[#fff7f2] via-[#fff1e8] to-[#ffe7dc] p-8 shadow-[0_30px_100px_rgba(80,20,20,0.12)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,120,0.15),transparent_50%)]" />

        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-800 shadow-sm">
            <Users className="h-4 w-4" /> {side}
          </div>

          <h3
            className="text-2xl md:text-3xl font-semibold text-stone-900"
            style={{ fontFamily: "serif" }}
          >
            {title}
          </h3>

          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-rose-500">
            With blessings from
          </p>

          <p className="mt-3 text-lg md:text-xl leading-8 text-stone-900 font-medium">
            {parentText}
          </p>

          <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

          <div className="mt-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Send Blessings on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-[1.8rem] shadow-[0_20px_60px_rgba(80,20,20,0.14)]">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 hover:scale-105 md:h-72"
        />
      </div>
    </motion.div>
  );
}

function InfoTabs() {
  const [active, setActive] = useState(config.infoTabs[0]?.id ?? "");
  const current =
    config.infoTabs.find((tab) => tab.id === active) ?? config.infoTabs[0];
  const Icon = current?.icon ?? Sparkles;

  if (!current) {
    return null;
  }

  return (
    <div className="rounded-[2rem] border border-amber-100 bg-white p-4 shadow-[0_25px_80px_rgba(80,20,20,0.1)] md:p-6">
      <div className="flex flex-wrap gap-3">
        {config.infoTabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition ${isActive
                ? "bg-stone-900 text-white shadow-lg"
                : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                }`}
            >
              <TabIcon className="h-4 w-4" /> {tab.label}
            </button>
          );
        })}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 rounded-[1.75rem] bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 p-6"
      >
        <div className="flex items-center gap-3 text-stone-900">
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-xl font-semibold">{current.label}</div>
        </div>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
          {current.content}
        </p>
      </motion.div>
    </div>
  );
}

function Lightbox({ images, index, onClose, setIndex }) {
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setIndex((previous) => (previous + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((previous) => (previous - 1 + images.length) % images.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose, setIndex]);

  if (!images.length || index == null || index < 0 || index >= images.length) {
    return null;
  }

  const currentImage = images[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => setIndex((previous) => (previous - 1 + images.length) % images.length)}
        className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-8"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <motion.img
        key={currentImage.src}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        src={currentImage.src}
        alt={currentImage.alt}
        className="max-h-[85vh] max-w-[90vw] rounded-[2rem] object-cover shadow-2xl"
      />
      <button
        type="button"
        onClick={() => setIndex((previous) => (previous + 1) % images.length)}
        className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-8"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </motion.div>
  );
}

export default function WeddingInvitePage() {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => { });
    }
  };
  const [progress, setProgress] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState(["wedding", "reception"]);
  const [view, setView] = useState("all");
  const [copyStatus, setCopyStatus] = useState("");
  const [rsvp, setRsvp] = useState({
    name: "",
    phone: "",
    attending: "Both Events",
    guests: 2,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const pageView = params.get("view") || "all";
    const normalizedView = validViews.has(pageView) ? pageView : "all";
    const eventsFromUrl = params.get("events");

    setView(normalizedView);

    if (eventsFromUrl) {
      const allowedEventIds = new Set(config.events.map((event) => event.id));
      const parsed = eventsFromUrl
        .split(",")
        .map((item) => item.trim())
        .filter((item) => allowedEventIds.has(item));
      if (parsed.length > 0) {
        setSelectedEvents(Array.from(new Set(parsed)));
      }
    }
  }, []);

  useEffect(() => {
    function onScroll() {
      const total = document.body.scrollHeight - window.innerHeight;
      const scrolled = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(scrolled);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!copyStatus) return undefined;
    const timer = window.setTimeout(() => setCopyStatus(""), 2200);
    return () => window.clearTimeout(timer);
  }, [copyStatus]);

  const visibleFamilies = useMemo(() => {
    if (view === "groom-family") {
      return [
        {
          side: "Groom Family",
          title: "Bhimavarapu Family",
          parentText: config.parents.groom,
          whatsappUrl: config.contact.groomFamilyWhatsapp,
          viewKey: "groom-family",
        },
      ];
    }

    if (view === "bride-family") {
      return [
        {
          side: "Bride Family",
          title: "Viswanadhuni Family",
          parentText: config.parents.bride,
          whatsappUrl: config.contact.brideFamilyWhatsapp,
          viewKey: "bride-family",
        },
      ];
    }

    return [
      {
        side: "Groom Family",
        title: "Bhimavarapu Family",
        parentText: config.parents.groom,
        whatsappUrl: config.contact.groomFamilyWhatsapp,
        viewKey: "groom-family",
      },
      {
        side: "Bride Family",
        title: "Viswanadhuni Family",
        parentText: config.parents.bride,
        whatsappUrl: config.contact.brideFamilyWhatsapp,
        viewKey: "bride-family",
      },
    ];
  }, [view]);

  const filteredEvents = useMemo(() => {
    return config.events.filter((event) => selectedEvents.includes(event.id));
  }, [selectedEvents]);

  const customLink = useMemo(() => {
    const params = new URLSearchParams();
    params.set("events", selectedEvents.join(","));
    if (view !== "all") {
      params.set("view", view);
    }
    const queryString = params.toString();
    if (typeof window === "undefined") {
      return queryString ? `?${queryString}` : "";
    }
    const base = `${window.location.origin}${window.location.pathname}`;
    return queryString ? `${base}?${queryString}` : base;
  }, [selectedEvents, view]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const handleEventSelection = (eventId) => {
    setSelectedEvents((previous) => {
      if (previous.includes(eventId)) {
        if (previous.length === 1) return previous;
        return previous.filter((id) => id !== eventId);
      }
      return [...previous, eventId];
    });
  };

  const handleCopyLink = async (url) => {
    const success = await copyText(url);
    setCopyStatus(success ? "Invite link copied" : "Could not copy link");
  };

  const handleRSVPSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(SHEETDB_RSVP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Name: rsvp.name,
            Phone: rsvp.phone,
            Event: rsvp.attending,
            Guests: rsvp.guests,
            Message: rsvp.message,
            SubmittedAt: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save RSVP");
      }

      setSubmitted(true);
    } catch (error) {
      alert("Sorry, RSVP could not be saved. Please try WhatsApp RSVP.");
      console.error(error);
    }
  };

  const summaryTitle =
    view === "groom-family"
      ? "Groom Family Invite"
      : view === "bride-family"
        ? "Bride Family Invite"
        : "Wedding Invite";

  return (
    <div
      onClick={playMusic}
      className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50 text-stone-900"
    >
      <audio ref={audioRef} loop>
        <source src="/wedding-music.mp3" type="audio/mpeg" />
      </audio>
      <FloatingPetals />

      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-rose-600 via-amber-500 to-orange-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 px-3 py-3 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-amber-200/40 bg-[rgba(255,255,255,0.65)] px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl">          <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="rounded-full bg-gradient-to-br from-amber-100 to-rose-100 p-2">
            <Heart className="h-4 w-4 text-rose-700" />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-[10px] uppercase tracking-[0.4em] text-amber-500/80 font-medium">
              Wedding Invite
            </div>

            <div className="rose-shine-text text-lg md:text-xl font-semibold" style={{ fontFamily: "serif" }}>
              Koushik & Niharika
            </div>
          </div>
        </button>

          <nav className="hidden items-center gap-6 md:flex">
            {sectionIds.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-stone-700 transition hover:text-rose-700"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={config.contact.whatsappRSVP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
            >
              RSVP on WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full bg-stone-900 p-2 text-white md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/30 bg-white/90 p-4 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="grid gap-2">
                {sectionIds.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-2xl px-4 py-3 text-left text-stone-800 hover:bg-amber-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="relative isolate overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pt-32">
        <div className="absolute inset-0 -z-10">
          <img
            src={config.media.heroImage}
            alt="Wedding background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,180,0.25),transparent_30%),linear-gradient(180deg,rgba(55,10,10,0.72),rgba(35,5,5,0.82))]" />
        </div>
        <Mandala />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-8 md:text-left">
                <div className="shrink-0">
                  <GaneshaMotif />
                </div>

                <div className="max-w-2xl pt-1 md:pt-0">
                  <div
                    className="text-[1.15rem] leading-8 text-amber-100 sm:text-xl md:text-[1.3rem] md:leading-[2.5rem]"
                    style={{ fontFamily: "serif" }}
                  >
                    శ్రీ వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ ।
                    <br />
                    నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ॥
                  </div>
                </div>
              </div>

              <h1
                className="mt-5 text-center text-[2.6rem] font-semibold leading-[1.05] text-white sm:text-5xl md:text-left md:text-7xl"
                style={{ fontFamily: "serif" }}
              >
                <span className="block bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent md:inline">
                  {config.couple.groom}
                </span>

                <span className="block text-rose-200 md:mx-4 md:inline">
                  &
                </span>

                <span className="block bg-gradient-to-r from-rose-200 via-pink-100 to-amber-100 bg-clip-text text-transparent md:inline">
                  {config.couple.bride}
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-md text-center text-base leading-7 text-white/85 md:mx-0 md:max-w-2xl md:text-left md:text-xl md:leading-8">
                With hearts full of joy and families full of excitement, we invite you to
                celebrate our wedding and reception. Come for the blessings, stay for the
                memories, and absolutely do not skip dinner.
              </p>

              <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3 md:mx-0 md:max-w-none md:flex-row md:flex-wrap">
                <button
                  type="button"
                  onClick={() => scrollToSection("events")}
                  className="w-full rounded-full bg-gradient-to-r from-rose-600 to-orange-500 px-6 py-3 text-center text-sm font-medium text-white shadow-xl transition hover:scale-[1.02] md:w-auto"
                >
                  Explore Events
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("rsvp")}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15 md:w-auto"
                >
                  RSVP Now
                </button>

                <a
                  href={config.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15 md:w-auto"
                >
                  Follow Updates
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-8 rounded-[1.8rem] border border-white/15 bg-white/10 p-4 shadow-[0_25px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl md:mt-0 md:rounded-[2.25rem] md:p-7"
            >
              <div className="rounded-[1.85rem] border border-amber-100/15 bg-black/15 p-6">
                <div className="mb-4 text-center text-xs uppercase tracking-[0.4em] text-amber-100/80">
                  Countdown to Muhurtham
                </div>
                <CountdownBlock target={weddingDate} />

                <div className="mt-6 rounded-[1.5rem] bg-white/10 p-5 text-white/90">
                  <div className="text-sm uppercase tracking-[0.3em] text-amber-200">
                    Quick Summary
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-1 h-5 w-5 text-amber-200" />
                      <div>
                        <div className="font-medium text-white">
                          Wedding · Thursday, 07th May 2026
                        </div>
                        <div className="text-white/75">10:38 PM · Guntur</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CalendarDays className="mt-1 h-5 w-5 text-amber-200" />
                      <div>
                        <div className="font-medium text-white">
                          Reception · Saturday, 09th May 2026
                        </div>
                        <div className="text-white/75">
                          6:00 PM onwards · Jangareddygudem
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-6 md:px-8 mt-8 md:mt-10">
        <div className="mx-auto max-w-7xl -mt-10 md:-mt-16 relative z-10">
          <div className="rounded-[2rem] border border-amber-200/50 bg-white/80 p-5 shadow-[0_25px_60px_rgba(80,20,20,0.08)] backdrop-blur-xl md:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">
                  Watch Live
                </div>

                <p className="mt-2 max-w-2xl text-stone-600">
                  Can’t make it in person? Join us virtually and be part of our special moments, live from wherever you are.                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02]"
                >
                  🎥 Wedding Live
                </a>

                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02]"
                >
                  🎥 Reception Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="events" className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Celebration Timeline"
            title="The Events"
            subtitle="Two beautiful moments, one unforgettable celebration"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Pre-Wedding Highlight"
            title="A Little Glimpse Before the Big Day"
            subtitle="A glimpse of our story — the laughter, the moments, and everything that led us here."
          />

          <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-amber-100 bg-white p-5 shadow-[0_25px_60px_rgba(80,20,20,0.08)] md:flex-row">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-rose-600">
                Share the Celebration
              </div>
              <div className="mt-2 text-lg font-semibold text-stone-900">
                {config.couple.hashtag}
              </div>
              <div className="mt-1 text-sm text-stone-500">
                Tag your moments and be part of our story
              </div>
            </div>
            <a
              href={config.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-600 to-orange-500 px-5 py-3 text-sm font-medium text-white shadow-lg"
            >
              <Camera className="h-4 w-4" /> Follow Our Journey
            </a>
          </div>

          <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
            {config.media.gallery.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                whileHover={{ scale: 1.01 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative block w-full overflow-hidden rounded-[1.75rem]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-[1.75rem] object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-stone-900 opacity-0 shadow-lg transition group-hover:opacity-100">
                  Open photo
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="families" className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Families"
            title="Two Families, One Celebration"
            subtitle="Bound by love, blessings, and togetherness - our families are at the heart of this celebration."
          />
          <div className={`grid gap-6 ${visibleFamilies.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>
            {visibleFamilies.map((family) => (
              <FamilyCard
                key={family.viewKey}
                side={family.side}
                title={family.title}
                parentText={family.parentText}
                whatsappUrl={family.whatsappUrl}
                image={family.viewKey === "groom-family" ? groomFamily : brideFamily}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="info" className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Guest Information"
            title="Everything Guests Need, In One Elegant Place"
            subtitle="From parking to dress code, here’s everything to help you plan your visit with ease."
          />
          <InfoTabs />
        </div>
      </section>

      <section id="rsvp" className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2.25rem] bg-gradient-to-br from-rose-700 via-red-800 to-orange-600 p-8 text-white shadow-[0_25px_100px_rgba(80,20,20,0.28)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-100">
                <MessageCircle className="h-4 w-4" /> RSVP & Contact
              </div>
              <h3 className="mt-6 text-4xl font-semibold" style={{ fontFamily: "serif" }}>
                Let Us Know You’re Coming
              </h3>
              <p className="mt-4 max-w-xl text-white/85 leading-8">
                We’d love to know if you’ll be joining us for the celebrations.
              </p>
              <div className="mt-8 space-y-4 text-white/90">
                <a
                  href={config.contact.whatsappRSVP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-[1.5rem] bg-white/10 p-4 backdrop-blur-md"
                >
                  <MessageCircle className="mt-1 h-5 w-5 text-amber-200" />
                  <div>
                    <div className="font-medium">WhatsApp RSVP</div>
                    <div className="text-white/75">
                      Quick fallback option for instant confirmations
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-[1.5rem] bg-white/10 p-4 backdrop-blur-md">
                  <Phone className="mt-1 h-5 w-5 text-amber-200" />
                  <div>
                    <div className="font-medium">Help Desk</div>
                    <div className="text-white/75">{config.contact.phone}</div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-4 text-white/75 backdrop-blur-md">
                  {config.contact.supportText}
                </div>
              </div>
            </div>

            <div className="rounded-[2.25rem] border border-amber-100 bg-white p-6 shadow-[0_25px_80px_rgba(80,20,20,0.1)] md:p-8">
              {!submitted ? (
                <form onSubmit={handleRSVPSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Your Name
                    </label>
                    <input
                      value={rsvp.name}
                      onChange={(event) => setRsvp({ ...rsvp, name: event.target.value })}
                      className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none ring-0 transition focus:border-rose-400"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Phone Number
                    </label>
                    <input
                      value={rsvp.phone}
                      onChange={(event) => setRsvp({ ...rsvp, phone: event.target.value })}
                      className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none ring-0 transition focus:border-rose-400"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-700">
                        Which Event?
                      </label>
                      <select
                        value={rsvp.attending}
                        onChange={(event) => setRsvp({ ...rsvp, attending: event.target.value })}
                        className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-rose-400"
                      >
                        <option>Both Events</option>
                        <option>Wedding Only</option>
                        <option>Reception Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-stone-700">
                        Guests
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={rsvp.guests}
                        onChange={(event) => {
                          const nextValue = Number(event.target.value);
                          setRsvp({
                            ...rsvp,
                            guests: Number.isNaN(nextValue)
                              ? 1
                              : Math.min(10, Math.max(1, nextValue)),
                          });
                        }}
                        className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-rose-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-stone-700">
                      Message
                    </label>
                    <textarea
                      value={rsvp.message}
                      onChange={(event) => setRsvp({ ...rsvp, message: event.target.value })}
                      rows={4}
                      className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none focus:border-rose-400"
                      placeholder="Blessings, travel details, special requests, etc."
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className="rounded-full bg-gradient-to-r from-rose-600 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-lg"
                    >
                      Submit RSVP
                    </button>
                    <a
                      href={config.contact.whatsappRSVP}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-800"
                    >
                      RSVP via WhatsApp
                    </a>
                  </div>
                  <p className="text-sm leading-7 text-stone-500">

                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[2rem] bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 p-8"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 shadow-sm">
                    <Heart className="h-4 w-4" /> RSVP Received
                  </div>
                  <h3
                    className="mt-5 text-3xl font-semibold text-stone-900"
                    style={{ fontFamily: "serif" }}
                  >
                    Thank you, {rsvp.name || "dear guest"}.
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-stone-700">
                    Your response has been noted for <span className="font-semibold">{rsvp.attending}</span>. We can’t wait to celebrate with you.
                  </p>
                  <div className="mt-6 rounded-[1.5rem] bg-white p-5 shadow-sm">
                    <div className="text-sm uppercase tracking-[0.3em] text-stone-500">
                      Summary
                    </div>
                    <div className="mt-3 space-y-2 text-stone-700">
                      <div>Name: {rsvp.name || "—"}</div>
                      <div>Phone: {rsvp.phone || "—"}</div>
                      <div>Guests: {rsvp.guests}</div>
                      <div>Event: {rsvp.attending}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="live" className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-sm uppercase tracking-[0.3em] text-rose-600 mb-2">
              Watch Live
            </div>

            <h2
              className="text-2xl md:text-3xl font-semibold text-stone-900"
              style={{ fontFamily: "serif" }}
            >
              Join the Celebrations Virtually
            </h2>

            <p className="mt-2 text-sm md:text-base text-stone-600 max-w-xl mx-auto">
              Can’t make it in person? Be part of our special moments live from wherever you are.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Wedding Live */}
            <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-xs uppercase tracking-[0.3em] text-rose-500 mb-2">
                Wedding Live
              </div>

              <div className="text-lg font-semibold text-stone-900 mb-2">
                Muhurtham Ceremony
              </div>

              <p className="text-sm text-stone-600 mb-4">
                Live stream will be available here on the wedding day.
              </p>

              <button
                disabled
                className="w-full rounded-full bg-rose-300 px-5 py-3 text-sm font-medium text-white cursor-not-allowed"
              >
                Streaming here on the big day
              </button>
            </div>

            {/* Reception Live */}
            <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-xs uppercase tracking-[0.3em] text-orange-500 mb-2">
                Reception Live
              </div>

              <div className="text-lg font-semibold text-stone-900 mb-2">
                Evening Reception
              </div>

              <p className="text-sm text-stone-600 mb-4">
                Live stream will be available here on the reception day.
              </p>

              <button
                disabled
                className="w-full rounded-full bg-orange-300 px-5 py-3 text-sm font-medium text-white cursor-not-allowed"
              >
                Streaming here on the big day
              </button>
            </div>

          </div>
        </div>
      </section>
      <footer className="px-4 pb-16 pt-8 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-stone-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-amber-300">
                With Love & Blessings
              </div>
              <h3 className="mt-4 text-4xl font-semibold text-white" style={{ fontFamily: "serif" }}>
                {config.couple.groom} & {config.couple.bride}
              </h3>
              <p className="mt-4 max-w-xl text-white/70 leading-8">
                Thank you for being part of our joyous celebration.
                <br />
                Your love and blessings mean the world to us.
              </p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-amber-300">
                Event Snapshot
              </div>
              <div className="mt-4 space-y-4 text-white/80">
                <div>
                  <div className="font-medium text-white">Wedding</div>
                  <div>07 May 2026 · 7:00 PM onwards</div>
                  <div>Veduka Hall, Guntur</div>
                </div>
                <div>
                  <div className="font-medium text-white">Reception</div>
                  <div>09 May 2026 · 6:00 PM onwards</div>
                  <div>K Convention Hall, Jangareddygudem</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-amber-300">
                Quick Links
              </div>
              <div className="mt-4 flex flex-col gap-3 text-white/80">
                <a
                  href={config.contact.whatsappRSVP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> RSVP on WhatsApp
                </a>
                <a
                  href={config.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Camera className="h-4 w-4" /> Instagram Updates
                </a>
                <button
                  type="button"
                  onClick={() => handleCopyLink(customLink)}
                  className="inline-flex items-center gap-2 text-left hover:text-white"
                >
                  <Copy className="h-4 w-4" /> Copy Invite Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <Lightbox
            images={config.media.gallery}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            setIndex={setLightboxIndex}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
