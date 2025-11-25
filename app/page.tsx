import Link from "next/link";
import { FarmerScene } from "@/components/FarmerScene";
import { clsx } from "clsx";

const highlights = [
  {
    title: "पारंपरिक खेती",
    description:
      "दो स्वस्थ बैलों के सहारे किसान मिट्टी को पलट कर अगली बुआई की तैयारी कर रहा है।"
  },
  {
    title: "सुबह की उजास",
    description:
      "उगते सूरज की किरणें धान के खेत पर सुनहरी चमक बिखेरती हैं, मेहनत की नई शुरुआत।"
  },
  {
    title: "गांव की धड़कन",
    description:
      "हल की लकड़ी और मिट्टी की खुशबू, भारतीय कृषि की आत्मा को ज़िंदा रखती है।"
  }
];

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-amber-50">
      <div className="absolute inset-y-0 right-0 w-[28rem] bg-gradient-to-l from-amber-200/60 via-transparent blur-3xl" />
      <div className="absolute inset-0 bg-[url('/grain.svg')] opacity-10 mix-blend-overlay" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-16 lg:flex-row lg:gap-16">
        <section className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-earth-200 bg-white/40 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-earth-500 shadow-sm backdrop-blur">
            ग्रामीण किसान गाथा
          </span>
          <h1 className="mt-6 font-display text-4xl leading-tight text-earth-900 sm:text-5xl lg:text-6xl">
            हल चलाते किसान की जीवंत झलक
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-earth-700">
            भारतीय कृषि की आत्मा को सजीव करता यह दृश्य, जिसमें मेहनती किसान दो
            बैलों के साथ खेत में हल चला रहा है। यह चित्र मेहनत, आशा और धरती से
            जुड़ाव को नए रंगों में अमर करता है।
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-earth-100 bg-white/60 p-5 text-left shadow-sm backdrop-blur"
              >
                <h2 className="font-display text-xl text-earth-800">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-earth-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="#gallery"
              className={clsx(
                "inline-flex items-center rounded-full bg-earth-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-earth-500/30 transition-transform",
                "hover:-translate-y-0.5 hover:bg-earth-600 focus:outline-none focus:ring-2 focus:ring-earth-400"
              )}
            >
              दृश्य देखें
            </Link>
            <a
              href="https://en.wikipedia.org/wiki/Plough"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-earth-300 bg-transparent px-7 py-3 text-base font-semibold text-earth-700 transition-colors hover:border-earth-500 hover:text-earth-900 focus:outline-none focus:ring-2 focus:ring-earth-300"
            >
              कृषि परंपरा जानें
            </a>
          </div>
        </section>
        <section
          id="gallery"
          className="relative mt-12 w-full max-w-[540px] shrink-0 overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur"
        >
          <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-amber-200/60 blur-3xl" />
          <div className="absolute right-6 bottom-6 h-16 w-16 rounded-full bg-sky-300/60 blur-2xl" />
          <FarmerScene className="relative z-10 h-full w-full drop-shadow-xl" />
          <div className="relative z-10 mt-6 rounded-2xl bg-earth-900/90 p-4 text-sm text-amber-100 shadow-lg">
            <p>
              “धरती के संग मेहनत का रिश्ता, किसान और बैलों की जुगलबंदी को यह
              चित्र आधुनिक रंगों में रेखांकित करता है।”
            </p>
            <p className="mt-2 text-right font-semibold text-amber-200">
              — ग्रामीण जीवन दस्तावेज़
            </p>
          </div>
        </section>
      </div>
      <footer className="relative z-10 border-t border-earth-100/60 bg-white/70 py-6 text-center text-sm text-earth-500 backdrop-blur">
        <p>
          प्रेरित ग्रामीण दृश्य | निर्मित आधुनिक वेब तकनीक से | वितरण हेतु तैयार
          Vercel पर
        </p>
      </footer>
    </main>
  );
}
