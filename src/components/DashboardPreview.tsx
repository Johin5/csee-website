import React, { useRef } from 'react';
import { FloatingDock } from './ui/floating-dock';
import { AnimatedBeam } from './ui/animated-beam';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { 
  Users, 
  Search, 
  FileText, 
  Share2, 
  TrendingUp, 
  MapPin, 
  Star 
} from "lucide-react";

const LAPTOP_START_Y_PCT = 45;
const CARD_HEIGHT_PCT = 6;

const DESKTOP_NODES = [
  { id: 'n1', label: ['INFLUENCER', 'MARKETING'], x: 15, y: 5, targetX: 30, delay: 0.2, icon: <Users className="w-4 h-4" /> },
  { id: 'n2', label: ['SEO &', 'SEARCH'], x: 38, y: 5, targetX: 40, delay: 1.8, icon: <Search className="w-4 h-4" /> },
  { id: 'n3', label: ['CONTENT', 'PRODUCTION'], x: 62, y: 5, targetX: 60, delay: 0.9, icon: <FileText className="w-4 h-4" /> },
  { id: 'n4', label: ['SOCIAL', 'MEDIA'], x: 85, y: 5, targetX: 70, delay: 2.5, icon: <Share2 className="w-4 h-4" /> },
  { id: 'n5', label: ['PERFORMANCE', 'MEDIA'], x: 25, y: 22, targetX: 35, delay: 1.3, icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'n6', label: ['LOCAL', 'PRESENCE'], x: 50, y: 22, targetX: 50, delay: 3.1, icon: <MapPin className="w-4 h-4" /> },
  { id: 'n7', label: ['REPUTATION', 'MGMT'], x: 75, y: 22, targetX: 65, delay: 0.5, icon: <Star className="w-4 h-4" /> },
];

const MOBILE_NODES = [
  { id: 'm1', label: ['INFLUENCER', 'MARKETING'], x: 25, y: 5, targetX: 25, delay: 0.2, icon: <Users className="w-3 h-3" /> },
  { id: 'm2', label: ['SEO &', 'SEARCH'], x: 75, y: 5, targetX: 75, delay: 1.8, icon: <Search className="w-3 h-3" /> },
  { id: 'm3', label: ['CONTENT', 'PRODUCTION'], x: 25, y: 17, targetX: 30, delay: 0.9, icon: <FileText className="w-3 h-3" /> },
  { id: 'm4', label: ['SOCIAL', 'MEDIA'], x: 75, y: 17, targetX: 70, delay: 2.5, icon: <Share2 className="w-3 h-3" /> },
  { id: 'm5', label: ['PERFORMANCE', 'MEDIA'], x: 25, y: 29, targetX: 35, delay: 1.3, icon: <TrendingUp className="w-3 h-3" /> },
  { id: 'm6', label: ['LOCAL', 'PRESENCE'], x: 75, y: 29, targetX: 65, delay: 3.1, icon: <MapPin className="w-3 h-3" /> },
  { id: 'm7', label: ['REPUTATION', 'MGMT'], x: 50, y: 41, targetX: 50, delay: 0.5, icon: <Star className="w-3 h-3" /> },
];

const MOBILE_MOCKUP_Y = 54;

const DashboardPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const desktopNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileNodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "#",
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-secondary-blue pt-12 md:pt-24 pb-32 md:pb-40 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8 md:mb-12 relative z-10">
        <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
          Unified <span className="text-primary">Intelligence</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
          All your marketing channels converging into one powerful source of truth.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:block w-full">
        <div className="relative w-full max-w-[1600px] mx-auto h-[1000px]">
          <div className="absolute inset-0 z-20 pointer-events-none">
            {DESKTOP_NODES.map((node, idx) => (
              <div 
                key={node.id} 
                className="absolute transform -translate-x-1/2 pointer-events-auto" 
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                ref={(el) => (desktopNodeRefs.current[idx] = el)}
              >
                <div className="relative group cursor-default">
                  <div className="bg-secondary-green border border-white/10 px-6 py-5 shadow-2xl backdrop-blur-md min-w-[180px] text-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(52,204,50,0.4)] group-hover:-translate-y-1 flex flex-col items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                      {node.icon}
                    </div>
                    <div>
                      {node.label.map((line, i) => (
                        <div key={i} className={`text-[10px] font-display font-semibold tracking-widest uppercase leading-tight ${i === 0 ? 'text-white' : 'text-primary'}`}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={mockupRef} className="absolute left-1/2 -translate-x-1/2 w-[60%] z-30 top-[45%]">
            <div className="relative w-full">
              <img src="https://www.convergensee.ai/assets/img/platfrom-mock.png" alt="Platform Dashboard" className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.8)]" />
              <div className="absolute inset-0 bg-primary/5 blur-[80px] -z-10"></div>
            </div>
            <div className="mt-12 flex justify-center">
              <FloatingDock items={links} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full">
        <div className="relative w-full max-w-[500px] mx-auto h-[700px]">
          <div className="absolute inset-0 z-20 pointer-events-none">
            {MOBILE_NODES.map((node, idx) => (
              <div 
                key={node.id} 
                className="absolute transform -translate-x-1/2 pointer-events-auto" 
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                ref={(el) => (mobileNodeRefs.current[idx] = el)}
              >
                <div className="relative group cursor-default">
                  <div className="bg-secondary-green border border-white/10 px-2 py-2 shadow-2xl backdrop-blur-md min-w-[90px] text-center transition-all duration-300 group-hover:border-primary flex flex-col items-center gap-1">
                    <div className="text-primary">
                      {node.icon}
                    </div>
                    <div>
                      {node.label.map((line, i) => (
                        <div key={i} className={`text-[8px] font-display font-semibold tracking-wider uppercase leading-tight ${i === 0 ? 'text-white' : 'text-primary'}`}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[95%] z-30 top-[60%]">
            <div className="relative w-full">
              <img src="https://www.convergensee.ai/assets/img/platfrom-mock.png" alt="Platform Dashboard" className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]" />
              <div className="absolute inset-0 bg-primary/5 blur-[60px] -z-10"></div>
            </div>
            <div className="mt-8 flex justify-center">
              <FloatingDock items={links} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        {DESKTOP_NODES.map((node, idx) => (
          <AnimatedBeam
            key={`desktop-beam-${node.id}`}
            containerRef={containerRef}
            fromRef={{ current: desktopNodeRefs.current[idx] }}
            toRef={mockupRef}
            curvature={-50}
            duration={3}
            delay={node.delay}
            pathColor="rgba(52, 204, 50, 0.15)"
            gradientStartColor="#34CC32"
            gradientStopColor="#34CC32"
            pathWidth={2.5}
          />
        ))}
      </div>
      <div className="block md:hidden">
        {MOBILE_NODES.map((node, idx) => (
          <AnimatedBeam
            key={`mobile-beam-${node.id}`}
            containerRef={containerRef}
            fromRef={{ current: mobileNodeRefs.current[idx] }}
            toRef={mockupRef}
            curvature={-30}
            duration={3}
            delay={node.delay}
            pathColor="rgba(52, 204, 50, 0.15)"
            gradientStartColor="#34CC32"
            gradientStopColor="#34CC32"
            pathWidth={2}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardPreview;
