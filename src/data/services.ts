import { ServiceItem } from '@/types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'civil-construction',
    title: 'Civil & RCC High-Rise Towers',
    tagline: 'Precision Concrete Monoliths & Luxury Living',
    description: 'Turnkey structural contracting from basement rock excavation to 22+ storey superstructure completion. We manage aluminum mivan formwork, M40/M50 grade design mixes, masonry, waterproofing, and structural finishing with zero tolerance for defects.',
    stats: '25+ Lakh Sq. Ft. Delivered in Pune',
    icon: 'Building2',
    equipment: ['Mivan Aluminium Formwork', 'Batching Plant Logistics', 'High-Rise Concrete Boom Placers', 'Self-Climbing Tower Cranes'],
    deliverables: ['Twin 22-Storey Towers', 'Commercial IT Parks', 'Township Infrastructure', 'Seismic Zone III Certifications'],
    image: '/images/service_superstructures_civil.jpg'
  },
  {
    id: 'deep-piling',
    title: 'Heavy Foundation & Rotary Piling',
    tagline: 'IS 2911 Compliant Basalt Rock Socketing',
    description: 'Geotechnical foundation engineering handling complex soil profiles, dense black cotton strata, and hard basalt rock layers. Equipped with high-torque hydraulic rotary rigs for diameters from 600mm to 1500mm and depths exceeding 24 meters.',
    stats: '15,000+ Basalt Piles Socketed',
    icon: 'Hammer',
    equipment: ['SANY SR285R Hydraulic Rotary Rig', 'MAT Deep Borehole Systems', 'Tripod Rotary Units', 'Tractor Augur Piling Rigs'],
    deliverables: ['Cast-In-Situ Bored Piles', 'Secant & Contiguous Pile Walls', 'Rock Socketing up to 24m', 'Ultrasonic Crosshole PIT Testing'],
    image: '/images/service_deep_rotary_piling.jpg'
  },
  {
    id: 'institutional-commercial',
    title: 'Institutional Campuses & Tech Parks',
    tagline: 'Large-Span Column-Free Structural Engineering',
    description: 'Specialized institutional contracting designed to meet complex acoustic, post-tensioned, and high-occupancy requirements. Delivered campuses for SNBP World School and corporate IT hubs across Hinjawadi and Wakad.',
    stats: '12+ Educational & Corporate Complexes',
    icon: 'GraduationCap',
    equipment: ['Hydra Mobile Cranes', 'Precision Laser Levels', 'Vibration Isolator Mounts'],
    deliverables: ['Column-Free Atriums', 'Radiation-Shielded Medical Wings', 'High-Load Server Basements', 'LEED-Grade Construction'],
    image: '/images/service_commercial_complex.jpg'
  },
  {
    id: 'temple-heritage',
    title: 'Temple Architecture & Heritage Sanctuaries',
    tagline: 'Centuries-Proof Monolithic Basalt Stone Engineering',
    description: 'Combining traditional shilpa-shastra geometric principles with high-strength composite RCC foundations. Engineered for a 100+ year durability with non-corrosive reinforcement and hand-chiselled basalt stone cladding.',
    stats: '100-Year Structural Lifespan',
    icon: 'Landmark',
    equipment: ['Diamond Cutters', 'Heavy Stone Gantry', 'Specialized Slag Cement Mixers'],
    deliverables: ['Monolithic Shikhara Towers', 'High-Ceiling Sabha Mandap', 'Carved Stone Basalt Foundations', 'Earthquake Resistant Mandirs'],
    image: '/images/service_heritage_restoration.jpg'
  }
];

export interface FleetMachineryItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  telemetry: string;
  liveStatus: string;
  features: string[];
  badge: string;
  image: string;
  specs: {
    torqueOrPower: string;
    maxDepth: string;
    unitsOwned: string;
  };
}

export const MACHINERY_FLEET: FleetMachineryItem[] = [
  {
    id: 'fleet-1',
    name: 'SANY Hydraulic Rotary Piling Rig (SR285R)',
    category: 'Hard Basalt Rock Socketing',
    capacity: 'Depths up to 35m | Diameter up to 1500mm',
    telemetry: '285 kN·m Torque • 180 MPa Rock Penetration',
    liveStatus: 'Active on Hinjawadi Tech Corridor',
    features: [
      'High-torque multi-stage telescopic Kelly bar',
      'Digital mast plumb control & live depth telemetry',
      'IS 2911 compliant deep basalt rock socketing',
    ],
    badge: 'Flagship Heavy Rig',
    image: '/images/fleet_sany_sr285_rig.jpg',
    specs: {
      torqueOrPower: '285 kN·m',
      maxDepth: '35 Meters',
      unitsOwned: '4 Dedicated Units',
    },
  },
  {
    id: 'fleet-2',
    name: 'MAT Specialized Rotary Piling Rig',
    category: 'High-Density Urban Piling',
    capacity: 'Continuous rock socketing & rapid casing driving',
    telemetry: 'Zero Soil Collapse • High Penetration Rate',
    liveStatus: 'Mobilized at Pimple Saudagar Yard',
    features: [
      'Compact footprint for tight urban construction',
      'Low noise emission & high-torque drive motor',
      'Integrated hydraulic casing oscillator system',
    ],
    badge: 'Urban High-Density',
    image: '/images/fleet_mat_continuous_auger.jpg',
    specs: {
      torqueOrPower: '180 kN·m',
      maxDepth: '28 Meters',
      unitsOwned: '3 Heavy Units',
    },
  },
  {
    id: 'fleet-3',
    name: 'Hydra Heavy Mobile Cranes (15T – 25T)',
    category: 'Rebar Cage Placement & Rig Logistics',
    capacity: '15 to 25 Metric Ton Safe Working Load',
    telemetry: '360° All-Terrain Articulation • 32m Reach',
    liveStatus: 'Active on Ravet Campus Site',
    features: [
      'Rapid cylindrical steel rebar cage placement',
      'High-stability 4-point hydraulic outriggers',
      'Heavy casing tube handling & tremie pipe lifting',
    ],
    badge: 'Material Logistics',
    image: '/images/fleet_hydra_mobile_crane.jpg',
    specs: {
      torqueOrPower: '25 Ton SWL',
      maxDepth: '32m Boom Reach',
      unitsOwned: '5 Mobile Cranes',
    },
  },
  {
    id: 'fleet-4',
    name: 'Schwing Stetter 36M Concrete Boom Placers',
    category: 'Continuous Monolithic Pouring',
    capacity: 'Up to 36m vertical placement reach',
    telemetry: '160 m³/hr Continuous Output Rate',
    liveStatus: 'Operational at Baner High-Rise',
    features: [
      'Rapid M40/M50 structural slab compaction',
      'Zero cold-joint continuous pour guarantee',
      'Remote proportional hydraulic boom articulation',
    ],
    badge: 'Monolithic Casting',
    image: '/images/fleet_concrete_boom_placer.jpg',
    specs: {
      torqueOrPower: '160 m³/hr',
      maxDepth: '36m Vertical',
      unitsOwned: '3 Boom Units',
    },
  },
  {
    id: 'fleet-5',
    name: 'Heavy Crawler Lattice Boom Cranes (50T)',
    category: 'Deep Foundation Rig Support',
    capacity: '50 Metric Ton Heavy Lifting Moment',
    telemetry: 'Wide Crawler Tracks • Max Wind Stability',
    liveStatus: 'Stationed at GK Royal Palms Site',
    features: [
      'Heavy geotechnical piling mast assembly',
      'High-tonnage grab bucket diaphragm trenching',
      'Heavy modular aluminum formwork hoisting',
    ],
    badge: 'Heavy Lifting',
    image: '/images/fleet_crawler_lattice_crane.jpg',
    specs: {
      torqueOrPower: '50 Ton SWL',
      maxDepth: '42m Mast Height',
      unitsOwned: '2 Crawler Units',
    },
  },
  {
    id: 'fleet-6',
    name: 'Ultrasonic Crosshole PIT & Geotechnical Testing Unit',
    category: 'Geotechnical Audit & Quality Control',
    capacity: 'IS 2911 & ASTM D5882 Compliant Testing',
    telemetry: 'Crosshole Ultrasonic PIT • Real-time Sonar',
    liveStatus: 'Quality QA on 100% Cast Piles',
    features: [
      'Shaft diameter profile acoustic tomography',
      'Deep rock socket contact verification',
      'Immediate digital structural load certificates',
    ],
    badge: 'NDT Quality Assurance',
    image: '/images/fleet_geotechnical_survey_rig.jpg',
    specs: {
      torqueOrPower: 'ASTM D5882',
      maxDepth: 'Full Pile Length',
      unitsOwned: 'In-House Laboratory',
    },
  },
];

export const COMPANY_HERITAGE = {
  founder: 'Mr. Umesh Gatkal',
  title: 'Founder & Managing Director',
  journey: [
    {
      year: '2008',
      title: 'Foundational Industry Experience',
      description: 'Mr. Umesh Gatkal began his journey in large-scale infrastructure construction, managing high-complexity engineering projects with multinational construction giants.'
    },
    {
      year: '2015',
      title: 'Aditya Construction Infrastructure',
      description: 'Ventured into entrepreneurial engineering by partnering with Aditya Construction, delivering premier residential and commercial civil developments across Pune.'
    },
    {
      year: '2021',
      title: 'G&J Constructions Piling Division',
      description: 'Established G&J Constructions as specialized deep foundation piling contractors, acquiring high-torque SANY and MAT rotary drill rigs.'
    },
    {
      year: '2025',
      title: 'G&J Buildcon Turnkey Powerhouse',
      description: 'Rebranded as G&J Buildcon, delivering full-scope turnkey civil RCC construction, deep geotechnical foundations, and architectural landmarks across Maharashtra.'
    }
  ]
};
