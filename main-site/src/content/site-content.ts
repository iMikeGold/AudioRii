export type ProductStatus =
  | "In development"
  | "Concept development"
  | "Research and development";

export type Product = {
  slug: string;
  name: string;
  category: string;
  statement: string;
  description: string;
  status: ProductStatus;
  image: string;
  imageAlt: string;
  accent: "cyan" | "blue" | "violet" | "amber" | "mixed";
  features: string[];
  controls: string[];
};

export const products: Product[] = [
  {
    slug: "riisign",
    name: "RiiSign",
    category: "Sine + signal instrument",
    statement: "Take the sine wave further.",
    description:
      "RiiSign gives you direct control over frequency, phase, polarity, tuning, movement and harmonic construction. Start with a pure sine, introduce partials and relationships, create beating and stereo movement, then shape the signal without losing sight of its fundamental.",
    status: "In development",
    image: "/assets/RiiSign.png",
    imageAlt: "Conceptual RiiSign plug-in interface and product box",
    accent: "cyan",
    features: [
      "Move between pure tone and complex harmonic structures.",
      "See note, frequency, phase and stereo relationships as they change.",
      "Create controlled drift, beating and movement from the fundamental.",
    ],
    controls: [
      "Fundamental frequency",
      "Note and hertz",
      "Fine tuning",
      "Phase and polarity",
      "Harmonic partials",
      "Stereo and binaural relationships",
      "Attack, release and output",
    ],
  },
  {
    slug: "riilinr",
    name: "RiiLinr",
    category: "Multi-source signal system",
    statement: "Bring every line into one connected view.",
    description:
      "RiiLinr centres on multi-source audio. Bring browser, application, hardware and network feeds into one place; route, monitor, record and align them while keeping direct control of every line, channel, phase and timing relationship.",
    status: "Concept development",
    image: "/assets/RiiLinr.png",
    imageAlt: "Conceptual RiiLinr multi-source routing interface and product box",
    accent: "blue",
    features: [
      "See complete signal routes instead of hunting through hidden menus.",
      "Keep each source independently reachable inside a larger configuration.",
      "Align timing and phase as part of the routing process.",
    ],
    controls: [
      "Multi-source inputs",
      "Line and channel control",
      "Phase alignment",
      "Timing alignment",
      "Local and network routing",
      "Monitoring paths",
      "Multichannel recording",
    ],
  },
  {
    slug: "riimix",
    name: "RiiMix",
    category: "Relationship mixer",
    statement: "Shape what connected sounds become together.",
    description:
      "RiiMix turns connected channels into a responsive mixing environment. Blend sources, shape bus relationships, create parallel paths, move energy between channels and recall complete configurations while every signal remains independently controllable.",
    status: "Concept development",
    image: "/assets/RiiMix.png",
    imageAlt: "Conceptual RiiMix relationship-mixing interface and product box",
    accent: "mixed",
    features: [
      "Mix relationships between sources rather than treating every channel alone.",
      "Move between direct, parallel and grouped signal paths.",
      "Shape the interaction without flattening every sound into the same chain.",
    ],
    controls: [
      "Input relationships",
      "Blend and balance",
      "Bus interaction",
      "Parallel paths",
      "Cross-source movement",
      "Output relationships",
      "Recallable states",
    ],
  },
  {
    slug: "riispace",
    name: "RiiSpace",
    category: "Spatial environment",
    statement: "Control where sound exists.",
    description:
      "RiiSpace gives you control over placement, depth, room identity and monitoring translation. Build environments for vocals, drums, instruments and complete mixes, then carry the same spatial intention across speakers and headphones.",
    status: "Research and development",
    image: "/assets/RiiSpace.png",
    imageAlt: "Conceptual RiiSpace spatial-audio interface and product box",
    accent: "amber",
    features: [
      "Place sound inside a defined acoustic environment.",
      "Shape distance, room character and perceived depth together.",
      "Translate the same space across headphone and speaker monitoring.",
    ],
    controls: [
      "Source placement",
      "Depth and distance",
      "Room dimensions",
      "Acoustic identity",
      "Headphone monitoring",
      "Speaker translation",
      "Spatial field",
    ],
  },
  {
    slug: "riiform",
    name: "RiiForm",
    category: "Form + dynamic processor",
    statement: "Reform the body and behaviour of sound.",
    description:
      "RiiForm is not another conventional channel-strip plug-in. Body, resonance, dynamics, parallel processing and formant relationships meet in one flexible environment for drums, vocals, buses and complete mixes.",
    status: "Research and development",
    image: "/assets/RiiForm.png",
    imageAlt: "Conceptual RiiForm body and resonance interface and product box",
    accent: "mixed",
    features: [
      "Reshape body, density and resonance from one connected surface.",
      "Move between direct and parallel dynamic structures.",
      "Treat formant, impact and recovery as parts of the same sound.",
    ],
    controls: [
      "Body and density",
      "Resonance",
      "Dynamic reforming",
      "Parallel layers",
      "Formant relationships",
      "Attack and recovery",
      "Wet and dry structure",
    ],
  },
  {
    slug: "riipulsiv",
    name: "RiiPulsiv",
    category: "Pulse + transient instrument",
    statement: "Shape the movement inside sound.",
    description:
      "RiiPulsiv brings pulse, transient behaviour, groove and envelope into one responsive surface. Control how a sound strikes, repeats, pushes, relaxes and moves through time.",
    status: "Concept development",
    image: "/assets/RiiPulsiv.png",
    imageAlt: "Conceptual RiiPulsiv pulse and transient interface and product box",
    accent: "violet",
    features: [
      "Turn transient shape into a playable part of the sound.",
      "Link pulse, groove and envelope without separating the movement.",
      "Control repetition and recovery from the same rhythmic view.",
    ],
    controls: [
      "Attack and decay",
      "Pulse shape",
      "Groove and timing",
      "Transient pressure",
      "Envelope behaviour",
      "Repetition and movement",
      "Drive and output",
    ],
  },
  {
    slug: "riisamplr",
    name: "RiiSamplr",
    category: "Sampling instrument",
    statement: "Capture it. Shape it. Play it.",
    description:
      "RiiSamplr combines a virtual instrument with RiiSampl, the sampling engine and library environment behind it. Capture your own material, edit and organise samples, map articulations, shape playback and build complete playable instruments in one place. The same instrument architecture extends toward dedicated pad controllers, keyboards, machines and synthesiser-style hardware.",
    status: "Research and development",
    image: "/assets/RiiSamplr.png",
    imageAlt: "Conceptual RiiSamplr software and hardware sampling instrument",
    accent: "mixed",
    features: [
      "RiiSampl handles capture, editing, mapping, organisation and library management.",
      "RiiSamplr turns that material into a playable virtual instrument.",
      "Soundbase connects the instrument to a wider public library and marketplace.",
    ],
    controls: [
      "Direct sampling",
      "Sample editing",
      "Regions and mapping",
      "Articulations and variation",
      "Pads, keys and performance controls",
      "Library and Soundbase access",
      "Software and hardware connection",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const secondarySections = {
  technology: {
    eyebrow: "Rii",
    title: "The Rii Engine",
    intro:
      "The Rii Engine carries AudioRii knowledge across frequency, signal movement, mixing relationships, space, form, pulse and sampling.",
    statement:
      "Reimagined. Responsive. Relational. Resonant. Intelligent.",
    items: [
      [
        "Signal as movement",
        "Routes, junctions, boundaries and transformations remain visible as sound moves through an AudioRii product.",
      ],
      [
        "Relationships first",
        "Frequency, phase, channels, space, dynamics, pulse and samples are treated through the relationships that make them musical.",
      ],
      [
        "Knowledge that grows",
        "As AudioRii knowledge and engineering deepen, products expand into broader systems or sharpen into more focused instruments without losing their identity.",
      ],
      [
        "Software into hardware",
        "The same ideas move naturally between plug-ins, virtual instruments, controllers, machines, keyboards and physical audio products.",
      ],
    ],
  },
  soundbase: {
    eyebrow: "AudioRii Soundbase",
    title: "Find the sound. Shape\u00A0the instrument.",
    intro:
      "Soundbase is the AudioRii library, discovery environment and marketplace for samples, playable instruments, sound packs, source recordings and sound profiles.",
    statement:
      "Browse it. Hear it. License it. RiiSampl it.",
    items: [
      [
        "Library",
        "Explore samples, instruments, packs, recordings and sound profiles through one dedicated audio environment.",
      ],
      [
        "Marketplace",
        "Discover and license sounds from AudioRii and selected creators with clear usage attached to every release.",
      ],
      [
        "RiiSamplr",
        "Move Soundbase material directly into RiiSampl for editing, mapping and playable instrument creation.",
      ],
      [
        "Creators",
        "Artist, producer, engineer and sound-designer releases sit alongside the sounds they contribute.",
      ],
    ],
  },
  about: {
    eyebrow: "AudioRii",
    title: "Reimagined audio instruments",
    intro:
      "AudioRii is a pro-audio product company where signal, sound and interface design meet across plug-ins, virtual instruments, sound systems and physical products.",
    statement:
      "Sound is understood through the relationships that make it move.",
    items: [
      [
        "Rii",
        "Reimagined. Responsive. Relational. Resonant. Intelligent. The meaning shifts with the instrument; the principle remains.",
      ],
      [
        "Signal",
        "Signal never teleports. It follows a route, meets other inputs, passes through boundaries and leaves transformed.",
      ],
      [
        "Instruments",
        "Every AudioRii product gives complex sound behaviour a clear, tactile and musical interface.",
      ],
      [
        "Connected evolution",
        "Each product stands independently while the knowledge across AudioRii allows new combinations, wider systems and more specialised instruments to emerge.",
      ],
    ],
  },
  beta: {
    eyebrow: "AudioRii Beta",
    title: "Test the next release.",
    intro:
      "Apply for the products you want to test, enter the private beta portal, download current builds and send feedback directly to the AudioRii product team.",
    statement:
      "Focused testing. Clear builds. Useful feedback.",
    items: [
      [
        "Apply",
        "Choose the AudioRii products that match your work, studio, host and operating system.",
      ],
      [
        "Access",
        "Approved testers receive private access to builds, installation notes, release information and known issues.",
      ],
      [
        "Test",
        "Use the product in real sessions and test the controls, sound, stability and workflow that matter.",
      ],
      [
        "Feedback",
        "Send product-specific reports with the build, host and system details already attached.",
      ],
    ],
  },
  documentation: {
    eyebrow: "AudioRii Documentation",
    title: "Learn the instrument.",
    intro:
      "Installation, controls, signal flow, compatibility, examples, release notes and known issues for every AudioRii product.",
    statement:
      "Everything needed to get from first launch to a complete session.",
    items: [
      [
        "Get started",
        "Install the product, authorise access and open it inside a supported host.",
      ],
      [
        "Controls",
        "Understand each parameter, mode, signal path and interaction.",
      ],
      [
        "Compatibility",
        "Check formats, operating systems, hosts and tested environments.",
      ],
      [
        "Release notes",
        "See what changed, what improved and which issues remain in each build.",
      ],
    ],
  },
  licensing: {
    eyebrow: "AudioRii Licensing",
    title: "Use AudioRii your way.",
    intro:
      "Product, Soundbase, commercial, creator and partner licensing for the way you make, release and distribute sound.",
    statement:
      "Clear terms for products, sounds and integrations.",
    items: [
      [
        "Products",
        "Licences for individual musicians, engineers, producers, studios and organisations.",
      ],
      [
        "Soundbase",
        "Usage rights stay attached to every sample, instrument, pack and sound profile.",
      ],
      [
        "Commercial use",
        "Choose the right terms for released music, media, installations, products and client work.",
      ],
      [
        "Partners",
        "Integration and distribution licensing for approved technology, content and product relationships.",
      ],
    ],
  },
  provenance: {
    eyebrow: "AudioRii Provenance",
    title: "Clear source. Clear history.",
    intro:
      "AudioRii keeps source material, data, processes, versions and decisions connected across research, Soundbase, product development and release history.",
    statement:
      "Every important transformation keeps its context.",
    items: [
      [
        "Source material and data",
        "The origin, context and permitted use of material remain attached to the work they support.",
      ],
      [
        "Process",
        "Key transformations record the method, tool and configuration behind the result.",
      ],
      [
        "Versions",
        "Product builds, sound assets and research records retain a clear history as they evolve.",
      ],
      [
        "Publication",
        "Public information presents the history that is useful to customers, creators, testers and partners.",
      ],
    ],
  },
  research: {
    eyebrow: "AudioRii Research",
    title: "Research that becomes sound.",
    intro:
      "Frequency, phase, routing, spatial environments, physical identity, pulse, sampling and reproduction shape the next AudioRii instrument.",
    statement:
      "Listen. Test. Refine. Play.",
    items: [
      [
        "Signal",
        "Frequency, phase, harmonic relationships and the movement of signal through connected stages.",
      ],
      [
        "Systems",
        "Multi-source routing, timing, monitoring and the connection of software, hardware and networked audio.",
      ],
      [
        "Space and form",
        "Acoustic environments, body, resonance, dynamics and the physical identity perceived inside sound.",
      ],
      [
        "Sampling",
        "Capture, mapping, playback, articulation and richer reproduction across software and physical instruments.",
      ],
    ],
  },
  developers: {
    eyebrow: "AudioRii Developers",
    title: "Connect AudioRii.",
    intro:
      "Developer access connects approved products and partners to AudioRii controls, Soundbase delivery, licensing and supported integrations.",
    statement:
      "Stable interfaces. Clear permissions. Direct integration.",
    items: [
      [
        "Product integration",
        "Connect supported controls, states and product functions inside approved workflows.",
      ],
      [
        "Soundbase delivery",
        "Deliver licensed samples, instruments, profiles and metadata into connected products.",
      ],
      [
        "Versioning",
        "Build against defined interfaces with clear compatibility between releases.",
      ],
      [
        "Partner access",
        "Documentation, credentials and support match the exact integration and licence.",
      ],
    ],
  },
  contact: {
    eyebrow: "Contact AudioRii",
    title: "Speak to the right team.",
    intro:
      "Product, beta, licensing, Soundbase, creator and partnership enquiries go directly to the people responsible.",
    statement: "General enquiries: hii@audiorii.com",
    items: [
      ["Products", "product@audiorii.com"],
      ["Beta", "beta@audiorii.com"],
      ["Licensing and Soundbase", "licensing@audiorii.com"],
      ["Research and partnerships", "research@audiorii.com"],
    ],
  },
} as const;

export type SecondarySectionSlug = keyof typeof secondarySections;
