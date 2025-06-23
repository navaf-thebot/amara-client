"use client"

import React, { useState, useEffect, useRef, memo, Suspense, useMemo } from "react"
import { Card, CardContent } from "@/components/card/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Building2, Briefcase, Globe as GlobeIcon, Loader2 } from "lucide-react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars, Html } from "@react-three/drei"
import * as THREE from "three"

interface LocationPoint {
  country: string;
  flag: string;
  title: string;
  address: string;
  focus: string;
  icon: React.ElementType;
  location: [number, number];
  size: number;
}

const globalLocations: LocationPoint[] = [
    { country: "Luxembourg", flag: "🇱🇺", title: "Headquarters", address: "15 Rue Edward Steichen, L-2540 Luxembourg City, Grand Duchy of Luxembourg", focus: "Global Holding HQ; Strategic Governance; Corporate Control", icon: Building2, location: [49.6116, 6.1319], size: 0.1 },
    { country: "Switzerland", flag: "🇨🇭", title: "Swiss Operations", address: "Rue du Rhône 118, 1204 Geneva, Switzerland", focus: "High Horology Brand; Swiss Precision Manufacturing", icon: GlobeIcon, location: [46.2044, 6.1432], size: 0.1 },
    { country: "Singapore", flag: "🇸🇬", title: "Asia Pacific Hub", address: "80 Robinson Road, #10-01, Singapore 068898", focus: "Venture Capital, Innovation, Logistics Intelligence", icon: Briefcase, location: [1.3521, 103.8198], size: 0.1 },
    { country: "United Arab Emirates", flag: "🇦🇪", title: "Capital & MENA Region", address: "Unit 502, Level 5, Index Tower, Dubai International Financial Centre, Dubai, UAE", focus: "Capital Markets; M&A; Regional Investments", icon: Building2, location: [25.276987, 55.296249], size: 0.1 },
    { country: "United States", flag: "🇺🇸", title: "North American Investment Arm", address: "745 Fifth Avenue, Suite 500, New York, NY 10151, USA", focus: "US Strategic Equity, Partnerships, Deal Structuring", icon: Briefcase, location: [40.7128, -74.0060], size: 0.1 },
    { country: "United Kingdom", flag: "🇬🇧", title: "Family Office & Capital Markets", address: "1 Mayfair Place, London W1J 8AJ, United Kingdom", focus: "Family Office, Wealth Structuring, Asset Management", icon: GlobeIcon, location: [51.5072, -0.1276], size: 0.1 },
    { country: "India", flag: "🇮🇳", title: "Development & Strategic Talent", address: "10th floor Panchsil Business Park, Laxman Nagar, Baner, Pune 411045", focus: "Technology, ESG, Research, Compliance Back Office", icon: Building2, location: [18.5204, 73.8567], size: 0.1 },
    { country: "Ireland", flag: "🇮🇪", title: "IP & Patent Holding", address: "The Academy, 42 Pearse St, Dublin 2", focus: "IP-Patent Holding; Aircraft Leasing", icon: Briefcase, location: [53.3498, -6.2603], size: 0.1 }
];

type PhoneInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => void
  name?: string
}
const PhoneInput = ({ onChange, ...props }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState("+91")
  const [phoneNumber, setPhoneNumber] = useState("")
  const countryCodes = [ { code: "+1", flag: "🇺🇸" }, { code: "+44", flag: "🇬🇧" }, { code: "+352", flag: "🇱🇺" }, { code: "+41", flag: "🇨🇭" }, { code: "+65", flag: "🇸🇬" }, { code: "+971", flag: "🇦🇪" }, { code: "+91", flag: "🇮🇳" }, { code: "+353", flag: "🇮🇪" } ]

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, "")
    if (numbersOnly.length > 15) return
    setPhoneNumber(numbersOnly)
    onChange({ target: { name: props.name ?? "", value: `${countryCode} ${numbersOnly}` } })
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value
    setCountryCode(newCode)
    onChange({ target: { name: props.name ?? "", value: `${newCode} ${phoneNumber}` } })
  }

  return (
    <div className="flex">
      <select value={countryCode} onChange={handleCountryChange} className="px-3 py-1 border border-r-0 border-gray-300 dark:border-gray-700 rounded-l-md bg-[#f0efe2] dark:bg-[#2a2a2a] text-[#232323] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#c6a35d] focus:border-[#c6a35d]">
        {countryCodes.map((c) => (<option key={c.code} value={c.code}>{c.flag} {c.code}</option>))}
      </select>
      <Input {...props} value={phoneNumber} onChange={handlePhoneChange} className="rounded-l-none border-gray-300 dark:border-gray-700 focus:border-[#c6a35d] focus:ring-[#c6a35d] bg-[#f0efe2] dark:bg-[#2a2a2a] flex-1" placeholder="Phone number" />
    </div>
  )
}


function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Marker({ position, isSelected }: { position: THREE.Vector3; isSelected: boolean }) {
  return (
    <Html position={position} distanceFactor={3.5}>
      <div className="relative">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full animate-ping ${isSelected ? 'bg-white/75' : 'bg-[#c6a35d]/50'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${isSelected ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-[#c6a35d]'}`} />
      </div>
    </Html>
  );
}

function Earth({ targetLocation, selectedLocation }: { targetLocation: [number, number]; selectedLocation: LocationPoint }) {
  const earthRef = useRef<THREE.Group>(null!);
  const targetRotation = useRef(new THREE.Quaternion());
  const texture = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/land_ocean_ice_cloud_2048.jpg');
  
  const markers = useMemo(() => globalLocations.map(loc => ({
    key: loc.country,
    position: latLngToVector3(loc.location[0], loc.location[1], 2),
    isSelected: loc.country === selectedLocation.country,
  })), [selectedLocation]);
  
  useEffect(() => {
    const [lat, lng] = targetLocation;
    const phi = (lat * Math.PI) / 180;
    const theta = ((lng - 90) * Math.PI) / 180;
    const target = new THREE.Quaternion().setFromEuler(new THREE.Euler(phi, theta, 0, 'YXZ'));
    targetRotation.current = target;
  }, [targetLocation]);

  useFrame((state, delta) => {
    if (!earthRef.current.quaternion.equals(targetRotation.current)) {
      const step = 4 * delta;
      earthRef.current.quaternion.slerp(targetRotation.current, step);
    }
  });

  return (
    <group ref={earthRef}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.2} />
        {markers.map(marker => <Marker key={marker.key} position={marker.position} isSelected={marker.isSelected} />)}
      </mesh>
    </group>
  );
}

function Atmosphere() {
  return (
    <mesh scale={[1.05, 1.05, 1.05]}>
      <sphereGeometry args={[2, 64, 64]} />
      <shaderMaterial transparent vertexShader={`varying vec3 vNormal; void main() {vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);}`} fragmentShader={`varying vec3 vNormal; void main() {float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0); gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;}`} blending={THREE.AdditiveBlending} side={THREE.BackSide} />
    </mesh>
  );
}

const ThreeGlobe = memo(({ location, selectedLocation }: { location: [number, number]; selectedLocation: LocationPoint }) => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 bg-black/50">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <Stars radius={300} depth={50} count={10000} factor={7} saturation={0} fade speed={1} />
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={1.5} />
          <Earth targetLocation={location} selectedLocation={selectedLocation} />
          <Atmosphere />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI - Math.PI / 3} />
      </Canvas>
    </div>
  );
});
ThreeGlobe.displayName = "ThreeGlobe";


export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [selectedLocation, setSelectedLocation] = useState<LocationPoint>(globalLocations[0]);
  const [isGlobeVisible, setIsGlobeVisible] = useState(false);
  const globeContainerRef = useRef<HTMLDivElement>(null);

  const handleLocationClick = (location: LocationPoint) => {
    setSelectedLocation(location);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsGlobeVisible(true); observer.disconnect();
      }
    }, { threshold: 0.1 });
    if(globeContainerRef.current) { observer.observe(globeContainerRef.current); }
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="bg-[#f0efe2] dark:bg-[#232323] text-[#232323] dark:text-[#f0efe2] font-montserrat">
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="font-bodoni text-5xl sm:text-6xl font-bold text-[#c6a35d] mb-4">Global Presence</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Connect with House of Amaraa across our worldwide network of strategic locations.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
                <div className="lg:col-span-4">
                    <h2 className="font-bodoni text-3xl font-bold mb-6">Our Offices</h2>
                    <div className="space-y-3">
                        {globalLocations.map((location) => (
                            <button key={location.country} onClick={() => handleLocationClick(location)} className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${selectedLocation.country === location.country ? 'border-[#c6a35d] bg-white dark:bg-black/20 shadow-lg scale-105' : 'border-transparent bg-white/50 dark:bg-black/10 hover:bg-white hover:dark:bg-black/20'}`}>
                                <div className="flex items-center gap-4">
                                  <span className="text-3xl">{location.flag}</span>
                                  <div>
                                    <h3 className="font-semibold text-lg">{location.country}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{location.title}</p>
                                  </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div ref={globeContainerRef} className="lg:col-span-8 relative rounded-xl overflow-hidden min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                   {isGlobeVisible ? (
                        <div className="w-full h-full relative animate-fade-in">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#f0efe2]/50 to-transparent dark:from-[#232323]/50 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] pointer-events-none"></div>
                          <ThreeGlobe location={selectedLocation.location} selectedLocation={selectedLocation} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full"><Loader2 className="w-12 h-12 text-[#c6a35d] animate-spin" /></div>
                    )}
                    {selectedLocation && (
                        <div key={selectedLocation.country} className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto will-change-transform z-20">
                             <Card className="group bg-white/80 dark:bg-black/70 backdrop-blur-md border-2 border-[#c6a35d]/50 shadow-2xl animate-fade-in-up w-full max-w-sm sm:max-w-md">
                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                      <span className="text-4xl">{selectedLocation.flag}</span>
                                      <div>
                                        <h4 className="font-bodoni font-bold text-xl">{selectedLocation.country}</h4>
                                        <p className="text-[#c6a35d] font-semibold">{selectedLocation.title}</p>
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <div className="flex items-start space-x-3">
                                        <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{selectedLocation.address}</p>
                                      </div>
                                      <div className="pt-3 border-t border-gray-300/50 dark:border-gray-700/50">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">{selectedLocation.focus}</p>
                                      </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8 lg:pt-10">
                    <h2 className="font-bodoni text-4xl sm:text-5xl font-bold">Get in Touch</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">Ready to explore opportunities with House of Amaraa? Reach out for partnerships, investments, or general inquiries. Our team is ready to connect with you.</p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-lg"><div className="w-12 h-12 bg-[#c6a35d]/10 flex-shrink-0 rounded-full flex items-center justify-center"><Phone className="w-6 h-6 text-[#c6a35d]" /></div><div><h4 className="font-semibold text-lg">Phone</h4><p className="text-gray-600 dark:text-gray-400">+91 22 1234 5678</p></div></div>
                        <div className="flex items-center gap-4 p-4 bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-lg"><div className="w-12 h-12 bg-[#c6a35d]/10 flex-shrink-0 rounded-full flex items-center justify-center"><Mail className="w-6 h-6 text-[#c6a35d]" /></div><div><h4 className="font-semibold text-lg">Email</h4><p className="text-gray-600 dark:text-gray-400">info@amaraaglobal.com</p></div></div>
                    </div>
                </div>
                <div>
                    <Card className="border-gray-200/80 dark:border-gray-800/80 shadow-2xl bg-[#f0efe2]/50 dark:bg-black/20">
                        <CardContent className="p-8 sm:p-10">
                            <h3 className="font-bodoni text-3xl font-bold mb-8">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {['name', 'email'].map(field => (
                                    <div key={field}><label htmlFor={field} className="block text-sm font-semibold mb-2 capitalize">{field} *</label><Input id={field} name={field} type={field} value={formData[field as keyof typeof formData]} onChange={handleChange} className="h-12 bg-[#f0efe2] dark:bg-[#2a2a2a] border-gray-300 dark:border-gray-700 focus:border-[#c6a35d] focus:ring-[#c6a35d]" placeholder={`Your ${field}`} required/></div>
                                ))}
                                <div><label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number *</label><PhoneInput name="phone" onChange={handleChange} /></div>
                                <div><label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label><textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 bg-[#f0efe2] dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-700 rounded-md focus:border-[#c6a35d] focus:ring-[#c6a35d] resize-none" placeholder="Tell us about your inquiry..." required/></div>
                                <Button type="submit" className="w-full h-12 bg-[#c6a35d] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:bg-[#b8964f] transition-all duration-300 transform hover:-translate-y-0.5">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}