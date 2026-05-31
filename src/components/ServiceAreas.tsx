import { MapPin, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const serviceRegions = [
  {
    label: 'Core DFW',
    cities: ['Dallas', 'Fort Worth', 'Arlington'],
  },
  {
    label: 'North Dallas & Collin County',
    cities: ['Plano', 'Frisco', 'McKinney', 'Allen', 'Prosper', 'Celina'],
  },
  {
    label: 'Tarrant & Denton County',
    cities: ['Southlake', 'Flower Mound', 'Keller', 'Colleyville', 'Mansfield'],
  },
  {
    label: 'Growing DFW Suburbs',
    cities: ['The Colony', 'Little Elm', 'Wylie', 'Murphy', 'Sachse', 'Richardson', 'Carrollton'],
  },
];

const localStrengths = [
  'Landscape design built for North Texas heat, clay soil, and seasonal weather swings',
  'Hardscaping, patio extensions, and outdoor living spaces for DFW homes and communities',
  'Irrigation, drainage-aware planting, and low-maintenance landscape upgrades',
  'HOA entrance, median, common-area, residential, and commercial landscaping projects',
];

const faqs = [
  {
    question: 'Do you provide landscaping services in Dallas and Fort Worth?',
    answer:
      'Yes. JP Landscapes serves residential, commercial, and HOA landscaping clients throughout the Dallas-Fort Worth metroplex, including Dallas, Fort Worth, Arlington, Plano, Frisco, McKinney, and nearby North Texas communities.',
  },
  {
    question: 'Which North Texas suburbs does JP Landscapes serve?',
    answer:
      'Common service areas include Plano, Frisco, McKinney, Allen, Prosper, Southlake, Flower Mound, Keller, Colleyville, Mansfield, The Colony, Little Elm, Wylie, Murphy, Sachse, Richardson, and Carrollton.',
  },
  {
    question: 'What landscaping services are best for North Texas yards?',
    answer:
      'North Texas landscapes benefit from climate-aware planting, efficient irrigation, durable hardscaping, seasonal maintenance, and lighting plans designed for long, hot summers and shifting soil conditions.',
  },
  {
    question: 'Can JP Landscapes handle HOA and commercial common-area work?',
    answer:
      'Yes. JP Landscapes handles HOA entrances, subdivision signage beds, median islands, commercial planting areas, and residential outdoor living projects across the DFW area.',
  },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 sm:mb-16">
            <span className="inline-block text-xs font-body font-medium tracking-[0.2em] uppercase text-terra-400 mb-4">
              Service Areas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-bark-700 leading-tight">
              DFW & North Texas Landscaping
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-terra-300" />
            <p className="font-body text-base sm:text-lg text-bark-400 max-w-2xl mx-auto mt-5">
              JP Landscapes provides professional landscape design, hardscaping, irrigation,
              planting, lighting, and maintenance services across Dallas-Fort Worth and nearby
              North Texas communities.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {serviceRegions.map((region, i) => (
            <Reveal key={region.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-cream-300/70 bg-cream-50 p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-forest-600" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-bark-700">
                    {region.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-sage-200 bg-white px-3 py-1.5 font-body text-sm text-bark-400"
                    >
                      {city}, TX
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl bg-forest-700 p-7 sm:p-8 text-white h-full">
              <h3 className="font-display text-2xl font-semibold mb-5">
                Built for North Texas
              </h3>
              <div className="space-y-4">
                {localStrengths.map((strength) => (
                  <div key={strength} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage-200 flex-shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-white/70 leading-relaxed">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={120}>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-cream-300/70 bg-cream-50 p-6">
                  <h3 className="font-display text-xl font-semibold text-bark-700 mb-2">
                    {faq.question}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-bark-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
