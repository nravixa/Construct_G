import { Project, HotspotItem, Testimonial } from '@/types';

export const HERO_HOTSPOTS: HotspotItem[] = [
  {
    id: 'civil-construction',
    title: 'CIVIL RCC SUPERSTRUCTURES',
    subtitle: 'High-Rise Architectural Engineering',
    badge: '25+ Lakh Sq. Ft. Delivered',
    description: 'Precision civil execution across Pune: 22+ storey residential towers, corporate IT campuses, and luxury estates built to seismic Zone III specifications.',
    statsValue: '25L+',
    statsLabel: 'Sq. Ft. Built & Handed Over',
    bgImage: '/images/luxury_residential.jpg',
    foregroundTag: 'Monolithic RCC & Luxury Living'
  },
  {
    id: 'piling-engineering',
    title: 'HEAVY ROTARY PILING',
    subtitle: 'Geotechnical Rock Anchoring',
    badge: 'SANY SR285R • MAT • AUGUR',
    description: 'Drilling up to 1200mm diameter cast-in-situ piles deep into Pune’s basalt rock bed for zero-differential settlement under extreme high-rise loads.',
    statsValue: '15+',
    statsLabel: 'Heavy Rotary Rigs Owned In-House',
    bgImage: '/images/piling_rig_basalt.jpg',
    foregroundTag: 'Basalt Strata Deep Foundation'
  },
  {
    id: 'landmark-developments',
    title: 'MARQUEE CLIENT PORTFOLIO',
    subtitle: 'Trusted by Maharashtra Developers',
    badge: 'GK Associates • SNBP • GS Builders',
    description: 'Direct partner for Pune’s major developers, handling turnkey structural packages from borehole rock excavation to final structural handover.',
    statsValue: '700+',
    statsLabel: 'Skilled Workforce & Engineers',
    bgImage: '/images/commercial_tech_park.jpg',
    foregroundTag: 'Institutional & Corporate Hubs'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'horizon-luxury-residence',
    title: 'The Sahyadri Crest Luxury Estate',
    category: 'Residential',
    location: 'Lonavala-Pune Foothills, Maharashtra',
    client: 'Private Architectural Commission',
    rating: 5.0,
    reviewsCount: 24,
    specs: {
      area: '48,000 Sq. Ft.',
      duration: '18 Months',
      scope: 'Cantilevered Coastal White Overhangs & Infinity Pool',
      rigsUsed: 'Custom Tripod Micro-Piling Rigs',
      status: 'Completed'
    },
    priceRange: 'Bespoke Architectural Commission',
    description: 'A coastal-inspired luxury villa masterwork featuring cantilevered coastal white concrete overhangs, limestone beige travertine terraces, and an infinity pool with seafoam turquoise water reflecting golden hour skies. Anchored with deep micro-piles into hillside bedrock.',
    keyFeatures: [
      'Self-compacting fair-faced architectural concrete finish',
      'Curved infinity pool with seafoam turquoise reflection basin',
      'Panoramic floor-to-ceiling thermally isolated structural glazing',
      'Travertine limestone terraces with integrated sunset conversation lounge'
    ],
    mainImage: '/images/hero_coastal_villa.jpg',
    galleryImages: [
      '/images/hero_coastal_villa.jpg',
      '/images/villa_cantilever_deck.jpg',
      '/images/villa_travertine_terrace.jpg'
    ]
  },
  {
    id: 'gk-royal-palms',
    title: 'GK Royal Palms High-Rise Towers',
    category: 'Residential',
    location: 'Ravet & Punawale Corridor, Pune',
    client: 'GK Associates',
    rating: 5.0,
    reviewsCount: 54,
    specs: {
      area: '6,80,000 Sq. Ft.',
      duration: '26 Months',
      scope: 'Twin 22-Storey RCC Towers & Basalt Foundation Piling',
      rigsUsed: 'SANY SR285R Hydraulic Rotary & Hydra Cranes',
      status: 'Completed'
    },
    priceRange: '₹75 Cr Structural Contract',
    description: 'Twin 22-storey luxury residential towers delivered ahead of schedule for GK Associates. Over 350 socketed piles were cast into hard basalt strata to anchor the twin towers, followed by rapid aluminum formwork monolithic RCC construction and landscaped water arrival courts.',
    keyFeatures: [
      'Over 350 socketed piles embedded 18m into basalt rock',
      'Cantilevered landscaped sky gardens with seafoam glass railings',
      'Grand arrival court with reflective pool and fluted limestone columns',
      'Commended by GK Associates for on-time handover'
    ],
    mainImage: '/images/project_gk_royal_palms.jpg',
    galleryImages: [
      '/images/project_gk_royal_palms.jpg',
      '/images/towers_seafoam_balconies.jpg',
      '/images/towers_arrival_plaza.jpg'
    ]
  },
  {
    id: 'sany-basalt-deep-piling',
    title: 'Metro Transit Corridor Heavy Piling',
    category: 'Piling',
    location: 'Pune-Nashik Arterial & Chakan Corridor',
    client: 'Infrastructure Development Authority',
    rating: 4.9,
    reviewsCount: 41,
    specs: {
      area: '18 Linear Kilometers',
      duration: 'Ongoing',
      scope: 'Deep Borehole Rotary Piling & Pier Castings',
      rigsUsed: 'SANY SR285R & MAT Heavy Hydraulic Rigs',
      status: 'Ongoing'
    },
    priceRange: 'Geotechnical Heavy Package',
    description: 'High-torque hydraulic boring through hard basalt rock to support elevated transit piers and heavy industrial overpasses. Executed with 100% in-house rotary machinery and live ultrasonic pile integrity verification under clean site protocols.',
    keyFeatures: [
      '1200mm diameter cast-in-situ piles socketed to 24m depth',
      'Continuous ultrasonic crosshole pile integrity testing (PIT)',
      'High-speed drilling through 180 MPa unconfined compressive strength rock',
      'Zero traffic stoppage on adjacent active high-speed corridors'
    ],
    mainImage: '/images/project_piling_metro.jpg',
    galleryImages: [
      '/images/project_piling_metro.jpg',
      '/images/piling_rebar_cage_rig.jpg',
      '/images/piling_geotechnical_survey.jpg'
    ]
  },
  {
    id: 'gs-pinnacle-business-park',
    title: 'GS Pinnacle Commercial Tech Park',
    category: 'Commercial',
    location: 'Hinjawadi Phase 1, Pune',
    client: 'GS Builders',
    rating: 4.8,
    reviewsCount: 29,
    specs: {
      area: '3,50,000 Sq. Ft.',
      duration: '18 Months',
      scope: 'Post-Tensioned Slabs & Commercial Glass Façade',
      rigsUsed: 'MAT Piling Rig & Mobile Cranes',
      status: 'Completed'
    },
    priceRange: '₹38 Cr Contract Value',
    description: 'An iconic Grade-A corporate development in Hinjawadi featuring white cantilevered rooflines, limestone vertical sun fins, seafoam low-E glass curtain walls, and landscaped reflection waterways for high-density tech enterprises.',
    keyFeatures: [
      'Post-tensioned slab system enabling 11m wide column-free floor plates',
      'Seafoam tinted low-E high performance thermal glass envelope',
      'Landscaped stone promenade with central reflection pool and fountains',
      'Handed over 4 weeks ahead of developer lease agreements'
    ],
    mainImage: '/images/project_gs_pinnacle.jpg',
    galleryImages: [
      '/images/project_gs_pinnacle.jpg',
      '/images/techpark_glass_facade.jpg',
      '/images/techpark_reflection_water.jpg'
    ]
  },
  {
    id: 'snbp-corporate-campus',
    title: 'SNBP World School & Academic Complex',
    category: 'Institutional',
    location: 'Wakad & Pimpri-Chinchwad, Pune',
    client: 'SNBP Group',
    rating: 4.9,
    reviewsCount: 38,
    specs: {
      area: '4,20,000 Sq. Ft.',
      duration: '22 Months',
      scope: 'Turnkey Institutional Civil RCC & Deep Foundations',
      rigsUsed: 'SANY SR285R & MAT Piling Rigs',
      status: 'Completed'
    },
    priceRange: '₹48 Cr Contract Value',
    description: 'A landmark institutional complex combining sweeping coastal white colonnades with limestone porticos, double-height academic atriums, and sunlit green recreational courtyards. Handled turnkey from rock boring to structural completion.',
    keyFeatures: [
      'Engineered for 75-year structural design life',
      'High-span column-free sports auditorium and performance atrium',
      'Limestone colonnades with integrated natural daylighting corridors',
      'Zero lost-time safety incidents across 500,000 contractor man-hours'
    ],
    mainImage: '/images/project_snbp_campus.jpg',
    galleryImages: [
      '/images/project_snbp_campus.jpg',
      '/images/campus_limestone_colonnade.jpg',
      '/images/campus_atrium_hall.jpg'
    ]
  },
  {
    id: 'shree-ganesh-mandir',
    title: 'Heritage Limestone Temple Sanctuary',
    category: 'Institutional',
    location: 'Alandi & Dehu Spiritual Corridor, Pune',
    client: 'Heritage Trust Foundation',
    rating: 5.0,
    reviewsCount: 61,
    specs: {
      area: '85,000 Sq. Ft.',
      duration: '16 Months',
      scope: 'Carved Limestone Foundations & Monolithic Shikhara',
      rigsUsed: 'Custom Micro-Piling Rigs',
      status: 'Completed'
    },
    priceRange: 'Heritage Cultural Commission',
    description: 'A spiritual sanctuary engineered for centuries with hand-chiselled limestone and sandstone masonry, ornate pillared porticos, shikhara spires glowing in sunset gold, and a serene water reflection tank.',
    keyFeatures: [
      '100-year rust-proof epoxy coated reinforcement steel',
      'Hand-dressed limestone beige stonework with carved lotus capitals',
      'Serene reflection pool mirroring sunset gold skies',
      'Precision monolithic concrete pours preventing micro-fissures'
    ],
    mainImage: '/images/project_heritage_sanctuary.jpg',
    galleryImages: [
      '/images/project_heritage_sanctuary.jpg',
      '/images/sanctuary_carved_pillars.jpg',
      '/images/sanctuary_golden_court.jpg'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Gaurav K.',
    clientRole: 'Managing Director',
    company: 'GK Associates',
    avatar: '/images/towers_seafoam_balconies.jpg',
    rating: 5,
    quote: 'G&J Buildcon is our most dependable civil partner in Pune. On GK Royal Palms, their in-house SANY rigs and organized workforce completed the deep basalt foundation piling and RCC structure 30 days ahead of schedule.',
    projectDelivered: 'GK Royal Palms (6.8 Lakh Sq. Ft.)'
  },
  {
    id: 'test-2',
    clientName: 'Dr. S. Bhosale',
    clientRole: 'Executive Chairman',
    company: 'SNBP Group',
    avatar: '/images/campus_limestone_colonnade.jpg',
    rating: 5,
    quote: 'Their combination of heavy geotechnical rotary rigs and organized structural labor eliminated all subcontractor delays for our campus. From deep borehole rock anchoring to the finished towers, quality was uncompromising.',
    projectDelivered: 'SNBP World School & Academic Complex'
  },
  {
    id: 'test-3',
    clientName: 'Girish Sharma',
    clientRole: 'Principal Partner',
    company: 'GS Builders',
    avatar: '/images/techpark_glass_facade.jpg',
    rating: 5,
    quote: 'For our Hinjawadi commercial tech park, G&J Buildcon executed high-span post-tensioned slabs and deep piling with exceptional structural precision. Their founder Mr. Umesh Gatkal is personally committed to every site.',
    projectDelivered: 'GS Pinnacle Tech Park'
  },
  {
    id: 'test-4',
    clientName: 'Dr. Ramesh Patil',
    clientRole: 'Director of Infrastructure',
    company: 'Rainbow Healthcare Group',
    avatar: '/images/towers_arrival_plaza.jpg',
    rating: 5,
    quote: 'Executing medical infrastructure requires zero vibration tolerance near sensitive diagnostics. G&J Buildcon executed hydraulic bored cast-in-situ piles with surgical precision and exceptional cleanliness.',
    projectDelivered: 'Rainbow Multi-Specialty Hospital Wing'
  }
];

