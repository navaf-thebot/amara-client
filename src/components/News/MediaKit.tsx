'use client';
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { Download, Globe, Building2, Briefcase, Award, Calendar, Users, Phone, Mail, ExternalLink, Copy, Check, FileText, Image as ImageIcon, Type } from 'lucide-react';
import { CompanyStats, Location, NewsItem } from '@/lib/type';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';



const MediaKit: React.FC = () => {
    const [copiedText, setCopiedText] = useState<string>('');

    const amaraaCompanies = [
        "Amaraa Agro Group Ltd.", "Amaraa Security Shield Ltd.", "Amaraa Auto Group Ltd.",
        "Amaraa IT Services Ltd.", "Amaraa Food & Beverages Ltd.", "Amaraa Marine Ltd.",
        "Amaraa Aviation Ltd.", "Amaraa Real Estate Ltd.", "Amaraa Energy Solutions Ltd.",
        "Amaraa Healthcare Ltd.", "Amaraa Education Foundation", "Amaraa Logistics Ltd.",
        "Amaraa Manufacturing Ltd.", "Amaraa Global Trading Ltd.", "Amaraa Financial Services Ltd.",
        "Amaraa Hospitality Ltd.", "Amaraa Media & Communications Ltd.", "Amaraa Sports & Recreation Ltd.", "Amaraa Consulting Ltd."
    ];

    const globalLocations: Location[] = [
        {
            country: "Luxembourg",
            flag: "🇱🇺",
            title: "Headquarters",
            company: "Amaraa Global Corporation Ltd.",
            address: "15 Rue Edward Steichen, L-2540 Luxembourg City, Grand Duchy of Luxembourg",
            focus: "Global Holding HQ; Strategic Governance; Corporate Control",
            icon: Building2
        },
        {
            country: "Switzerland",
            flag: "🇨🇭",
            title: "Swiss Operations",
            address: "Rue du Rhône 118, 1204 Geneva, Switzerland",
            focus: "High Horology Brand; Swiss Precision Manufacturing",
            icon: Globe
        },
        {
            country: "Singapore",
            flag: "🇸🇬",
            title: "Asia Pacific Hub",
            address: "80 Robinson Road, #10-01, Singapore 068898",
            focus: "Venture Capital, Innovation, Logistics Intelligence",
            icon: Briefcase
        },
        {
            country: "United Arab Emirates",
            flag: "🇦🇪",
            title: "Capital & MENA Region",
            address: "Unit 502, Level 5, Index Tower, Dubai International Financial Centre, Dubai, UAE",
            focus: "Capital Markets; M&A; Regional Investments",
            icon: Building2
        },
        {
            country: "United States",
            flag: "🇺🇸",
            title: "North American Investment Arm",
            address: "745 Fifth Avenue, Suite 500, New York, NY 10151, USA",
            focus: "US Strategic Equity, Partnerships, Deal Structuring",
            icon: Briefcase
        },
        {
            country: "United Kingdom",
            flag: "🇬🇧",
            title: "Family Office & Capital Markets",
            address: "1 Mayfair Place, London W1J 8AJ, United Kingdom",
            focus: "Family Office, Wealth Structuring, Asset Management",
            icon: Globe
        },
        {
            country: "India",
            flag: "🇮🇳",
            title: "Development & Strategic Talent",
            address: "10th floor Panchsil Business Park, Laxman Nagar, Baner, Pune 411045",
            focus: "Technology, ESG, Research, Compliance Back Office",
            icon: Building2
        },
        {
            country: "Ireland",
            flag: "🇮🇪",
            title: "IP & Patent Holding",
            address: "The Academy, 42 Pearse St, Dublin 2",
            focus: "IP-Patent Holding; Aircraft Leasing",
            icon: Briefcase
        }
    ];

    const companyStats: CompanyStats[] = [
        { value: "15+", label: "Years Legacy", icon: Calendar },
        { value: "8", label: "Countries", icon: Globe },
        { value: "1M+", label: "Lives Impacted", icon: Users },
        { value: "19", label: "Business Divisions", icon: Building2 }
    ];

    const newsData: NewsItem[] = [
        {
            id: 1,
            title: 'Amaraa Group Wins Sustainability Excellence Award 2024',
            description: 'Our commitment to environmental responsibility has been recognized with the prestigious Sustainability Excellence Award, highlighting our renewable energy initiatives and green building practices.',
            category: 'Awards & Recognitions',
            date: '2024-12-15',
            author: 'Amaraa Communications',
            featured: true,
            tags: ['sustainability', 'award', 'environment']
        },
        {
            id: 2,
            title: 'Revolutionary Solar Project Launches in Dubai',
            description: 'Amaraa Group announces the launch of its largest solar installation project, capable of powering 50,000 homes with clean energy.',
            category: 'Press Releases',
            date: '2024-12-10',
            author: 'Energy Division',
            featured: true,
            tags: ['solar', 'dubai', 'renewable energy']
        },
        {
            id: 3,
            title: 'Forbes Features Amaraa Group in Top 100 Innovative Companies',
            description: 'Leading business magazine recognizes our technological innovations and market leadership in sustainable development.',
            category: 'Media Coverage',
            date: '2024-11-28',
            author: 'Forbes Magazine',
            featured: false,
            tags: ['forbes', 'innovation', 'recognition']
        },
        {
            id: 4,
            title: 'Q3 2024 Financial Results Exceed Expectations',
            description: 'Strong performance across all business divisions with 35% revenue growth year-over-year, driven by successful international expansion.',
            category: 'Press Releases',
            date: '2024-11-20',
            author: 'Finance Department',
            featured: false,
            tags: ['financial', 'results', 'growth']
        }
    ];

    const leaders = [
        {
            name: "Rajesh Mehra",
            title: "Chairperson",
            image: "/images/leader-rajesh.jpg",
            bio: "With over 30 years of experience in global business leadership, Rajesh has guided House of Amaraa through strategic growth and diversification.",
            accent: "from-yellow-400 to-yellow-600"
        },
        {
            name: "Anita Kapoor",
            title: "Chief Executive Officer",
            image: "/images/leader-anita.jpg",
            bio: "Anita brings innovative vision and operational excellence to HOA, driving sustainable growth across all business verticals.",
            accent: "from-yellow-500 to-yellow-700"
        },
        {
            name: "Vikram Singh",
            title: "Chief Financial Officer",
            image: "/images/leader-vikram.jpg",
            bio: "Vikram oversees the financial strategy and operations, ensuring robust financial health and strategic investments.",
            accent: "from-yellow-400 to-yellow-600"
        },
        {
            name: "Priya Sharma",
            title: "Chief Operating Officer",
            image: "/images/leader-priya.jpg",
            bio: "Priya leads operational excellence across all business units, optimizing processes and driving efficiency.",
            accent: "from-yellow-500 to-yellow-700"
        },
        {
            name: "Arjun Patel",
            title: "Chief Technology Officer",
            image: "/images/leader-arjun.jpg",
            bio: "Arjun spearheads technological innovation and digital transformation initiatives across the organization.",
            accent: "from-yellow-400 to-yellow-600"
        },
        {
            name: "Meera Gupta",
            title: "Chief Human Resources Officer",
            image: "/images/leader-meera.jpg",
            bio: "Meera develops and implements people strategies that align with our values and business objectives.",
            accent: "from-yellow-500 to-yellow-700"
        },
    ];

    const brandAssets = [
        {
            name: "Primary Logo",
            format: "PNG",
            size: "2048x512px",
            download: "/images/logo/logo.png",
            icon: ImageIcon
        },
        {
            name: "White Logo",
            format: "JPG",
            size: "2048x512px",
            download: "/images/logo/white-logo.png",
            icon: ImageIcon
        },
        {
            name: "Black Logo",
            format: "PNG",
            size: "2048x512px",
            download: "/images/logo/black-logo.png",
            icon: ImageIcon
        },
        {
            name: "Brand Guidelines",
            format: "PDF",
            size: "15MB",
            download: "/brand-guidelines.pdf",
            icon: FileText
        }
    ];

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(''), 2000);
    };

    const downloadAsset = (url: string, filename: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const generateComprehensivePDF = () => {
        const doc = new jsPDF();
        let y = 15;

        const checkPageBreak = (neededHeight = 10) => {
            if (y + neededHeight > 280) {
                doc.addPage();
                y = 15;
            }
        };


        const addTitle = (title: string) => {
            checkPageBreak(20);
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text(title, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
            y += 15;
        };


        const addSection = (title: string, content: string | string[], options: { isList?: boolean } = {}) => {
            const { isList = false } = options;
            checkPageBreak(15);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text(title, 14, y);
            y += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');

            let contentToProcess = content;
            if (isList && Array.isArray(content)) {
                contentToProcess = content.map(item => `• ${item}`).join('\n');
            }

            const lines = doc.splitTextToSize(contentToProcess as string, 180);
            checkPageBreak(lines.length * 5);
            doc.text(lines, 14, y);
            y += lines.length * 5;
            y += 10;
        };


        addTitle('AMARAA GROUP - COMPREHENSIVE MEDIA KIT');

        const overviewContent = `Founded: 2009
Headquarters: Luxembourg City, Luxembourg
Industries: Multi-sector conglomerate
Global Presence: 8 countries
Business Units: 19 divisions`;
        addSection('COMPANY OVERVIEW', overviewContent);

        const missionContent = `A legacy born from vision, nurtured by wisdom, and destined for greatness. The House of Amaraa stands as a testament to the power of dreams transformed into reality.`;
        addSection('MISSION', missionContent);

        addSection('BUSINESS DIVISIONS', amaraaCompanies, { isList: true });

        checkPageBreak(15);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('GLOBAL LOCATIONS', 14, y);
        y += 8;
        doc.setFontSize(10);
        globalLocations.forEach(location => {
            checkPageBreak(25);
            doc.setFont('helvetica', 'bold');
            doc.text(`${location.flag} ${location.country} - ${location.title}`, 14, y);
            y += 5;
            doc.setFont('helvetica', 'normal');
            if (location.company) {
                const companyLines = doc.splitTextToSize(location.company, 175);
                doc.text(companyLines, 18, y);
                y += companyLines.length * 5;
            }
            const addressLines = doc.splitTextToSize(location.address, 175);
            doc.text(addressLines, 18, y);
            y += addressLines.length * 5;
            const focusLines = doc.splitTextToSize(`Focus: ${location.focus}`, 175);
            doc.text(focusLines, 18, y);
            y += focusLines.length * 5;
            y += 8;
        });

        checkPageBreak(15);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('KEY EXECUTIVES', 14, y);
        y += 8;
        doc.setFontSize(10);
        leaders.forEach(leader => {
            checkPageBreak(20);
            doc.setFont('helvetica', 'bold');
            doc.text(`${leader.name} - ${leader.title}`, 14, y);
            y += 5;
            doc.setFont('helvetica', 'normal');
            const bioLines = doc.splitTextToSize(leader.bio, 175);
            doc.text(bioLines, 18, y);
            y += bioLines.length * 5;
            y += 5;
        });

        checkPageBreak(15);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('RECENT NEWS', 14, y);
        y += 8;
        doc.setFontSize(10);
        newsData.forEach(news => {
            checkPageBreak(25);
            doc.setFont('helvetica', 'bold');
            doc.text(news.title, 14, y);
            y += 5;
            doc.setFont('helvetica', 'normal');
            doc.text(`Category: ${news.category} | Date: ${news.date}`, 18, y);
            y += 5;
            const descLines = doc.splitTextToSize(news.description, 175);
            doc.text(descLines, 18, y);
            y += descLines.length * 5;
            y += 5;
        });

        const contactContent = `Press Inquiries: info@amaraaglobal.com
Media Hotline: +91 22 1234 5678
General Info: info@amaraaglobal.com`;
        addSection('CONTACT INFORMATION', contactContent);

        const brandContent = `BRAND COLORS
Primary: #c6a35d
Secondary: #f0efe2
Dark: #232323

TYPOGRAPHY
Primary Font: Bodoni Moda (Headings & Branding)
Secondary Font: Montserrat (Body text)`;
        addSection('BRAND IDENTITY', brandContent);

        doc.save('amaraa-group-comprehensive-media-kit.pdf');
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#f0efe2' }}>
            <div className="relative bg-gradient-to-br" style={{ background: 'linear-gradient(135deg, #232323 0%, #c6a35d 100%)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <div className="  rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <Image src="/images/logo/logo.png" alt="Logo" width={180} height={180} />
                            </div>
                            <div className="text-white">
                                <h1 className="text-5xl font-bold font-bodoni mb-2 tracking-wide">
                                    House of Amaraa
                                </h1>
                                <p className="text-xl font-montserrat opacity-90">
                                    Media Kit & Press Resources
                                </p>
                                <div className="flex items-center space-x-4 mt-4">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c6a35d' }}></div>
                                    <span className="text-sm font-montserrat opacity-75">Excellence. Innovation. Legacy.</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={generateComprehensivePDF}
                            className="flex items-center space-x-3 px-8 py-4 rounded-xl font-montserrat font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                            style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}
                        >
                            <Download size={24} />
                            <span>Download Complete Media Kit</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-bodoni mb-4" style={{ color: '#232323' }}>
                            Company Overview
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c6a35d' }}></div>
                    </div>
                    <div className="bg-white rounded-3xl p-10 shadow-2xl border" style={{ borderColor: '#c6a35d', borderWidth: '1px' }}>
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold font-bodoni mb-6" style={{ color: '#232323' }}>
                                    About House of Amaraa
                                </h3>
                                <p className="font-montserrat text-lg leading-relaxed mb-8" style={{ color: '#232323' }}>
                                    A legacy born from vision, nurtured by wisdom, and destined for greatness. The House of Amaraa stands as a testament to the power of dreams transformed into reality, spanning across industries and continents with unwavering commitment to excellence.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {companyStats.map((stat, index) => {
                                        const IconComponent = stat.icon;
                                        return (
                                            <div key={index} className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1" style={{ backgroundColor: '#f0efe2' }}>
                                                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}>
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="text-3xl font-bold font-bodoni mb-2" style={{ color: '#232323' }}>
                                                    {stat.value}
                                                </div>
                                                <div className="text-sm font-montserrat font-medium" style={{ color: '#232323', opacity: 0.7 }}>
                                                    {stat.label}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-bodoni mb-6" style={{ color: '#232323' }}>
                                    Business Divisions
                                </h3>
                                <div className="space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                    {amaraaCompanies.map((company, index) => (
                                        <div key={index} className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 hover:shadow-md transform hover:translate-x-2" style={{ backgroundColor: '#f0efe2' }}>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c6a35d' }}>
                                                <Building2 className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="font-montserrat font-medium" style={{ color: '#232323' }}>
                                                {company}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-bodoni mb-4" style={{ color: '#232323' }}>
                            Global Presence
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c6a35d' }}></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {globalLocations.map((location, index) => {
                            const IconComponent = location.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border" style={{ borderColor: '#c6a35d', borderWidth: '1px' }}>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-4xl">{location.flag}</span>
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-bodoni mb-2" style={{ color: '#232323' }}>
                                        {location.country}
                                    </h3>
                                    <p className="text-sm font-montserrat font-semibold mb-4" style={{ color: '#c6a35d' }}>
                                        {location.title}
                                    </p>
                                    {location.company && (
                                        <p className="text-sm font-montserrat font-bold mb-3" style={{ color: '#232323' }}>
                                            {location.company}
                                        </p>
                                    )}
                                    <p className="text-sm font-montserrat mb-4 leading-relaxed" style={{ color: '#232323', opacity: 0.8 }}>
                                        {location.address}
                                    </p>
                                    <div className="pt-4 border-t" style={{ borderColor: '#f0efe2' }}>
                                        <p className="text-xs font-montserrat font-medium" style={{ color: '#c6a35d' }}>
                                            {location.focus}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-bodoni mb-4" style={{ color: '#232323' }}>
                            Brand Assets & Visual Identity
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c6a35d' }}></div>
                    </div>
                    <div className="bg-white rounded-3xl p-10 shadow-2xl border" style={{ borderColor: '#c6a35d', borderWidth: '1px' }}>
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold font-bodoni mb-8" style={{ color: '#232323' }}>
                                    Logo & Downloads
                                </h3>
                                <div className="rounded-2xl p-4 mb-8 text-center" style={{ background: 'linear-gradient(135deg, #f0efe2 0%, #e8e6d9 100%)' }}>
                                    <div className="w-72 h-44 mx-auto flex items-center justify-center rounded-xl">
                                        <Image src="/images/logo/logo.png" alt="Logo" width={400} height={300} className="w-full h-full object-contain" />
                                    </div>
                                    <p className="text-sm font-montserrat font-medium mt-6" style={{ color: '#232323', opacity: 0.7 }}>
                                        Primary Logo Preview
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {brandAssets.map((asset, index) => {
                                        const IconComponent = asset.icon;
                                        return (
                                            <div key={index} className="flex items-center justify-between p-5 border-2 rounded-xl transition-all duration-200 hover:shadow-md" style={{ borderColor: '#f0efe2', backgroundColor: '#f0efe2' }}>
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c6a35d' }}>
                                                        <IconComponent className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <span className="font-montserrat font-bold block" style={{ color: '#232323' }}>
                                                            {asset.name}
                                                        </span>
                                                        <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.6 }}>
                                                            {asset.format} • {asset.size}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                                                    style={{ backgroundColor: '#c6a35d' }}
                                                    onClick={() => downloadAsset(asset.download, asset.name)}
                                                >
                                                    <Download className="w-5 h-5 text-white" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-bodoni mb-8" style={{ color: '#232323' }}>
                                    Brand Colors & Typography
                                </h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-montserrat font-bold mb-6 text-lg" style={{ color: '#232323' }}>
                                            Brand Colors
                                        </h4>
                                        <div className="grid grid-cols-3 gap-6">
                                            {[
                                                { name: 'Primary', color: '#c6a35d', label: 'Amaraa Gold' },
                                                { name: 'Secondary', color: '#f0efe2', label: 'Cream Elegance' },
                                                { name: 'Dark', color: '#232323', label: 'Sophisticated Black' }
                                            ].map((colorItem, index) => (
                                                <div key={index} className="text-center">
                                                    <div
                                                        className="w-full h-20 rounded-xl mb-3 cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 border-2"
                                                        style={{ backgroundColor: colorItem.color, borderColor: index === 1 ? '#c6a35d' : 'transparent' }}
                                                        onClick={() => copyToClipboard(colorItem.color, colorItem.name)}
                                                    ></div>
                                                    <div className="text-sm">
                                                        <p className="font-montserrat font-bold mb-1" style={{ color: '#232323' }}>
                                                            {colorItem.label}
                                                        </p>
                                                        <p className="font-montserrat font-mono text-xs" style={{ color: '#232323', opacity: 0.7 }}>
                                                            {colorItem.color}
                                                        </p>
                                                        {copiedText === colorItem.name && (
                                                            <div className="flex items-center justify-center mt-2" style={{ color: '#c6a35d' }}>
                                                                <Check size={12} className="mr-1" />
                                                                <span className="text-xs font-montserrat font-medium">Copied!</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-montserrat font-bold mb-6 text-lg" style={{ color: '#232323' }}>
                                            Typography
                                        </h4>
                                        <div className="space-y-4">
                                            <div className="p-6 border-2 rounded-xl" style={{ borderColor: '#f0efe2', backgroundColor: '#f0efe2' }}>
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <Type className="w-5 h-5" style={{ color: '#c6a35d' }} />
                                                    <span className="font-montserrat font-bold" style={{ color: '#c6a35d' }}>Primary Font</span>
                                                </div>
                                                <p className="text-2xl font-bodoni mb-2" style={{ color: '#232323' }}>
                                                    Bodoni Moda
                                                </p>
                                                <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>
                                                    Used for headings, branding, and elegant displays
                                                </p>
                                            </div>
                                            <div className="p-6 border-2 rounded-xl" style={{ borderColor: '#f0efe2', backgroundColor: '#f0efe2' }}>
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <Type className="w-5 h-5" style={{ color: '#c6a35d' }} />
                                                    <span className="font-montserrat font-bold" style={{ color: '#c6a35d' }}>Secondary Font</span>
                                                </div>
                                                <p className="text-2xl font-montserrat mb-2" style={{ color: '#232323' }}>
                                                    Montserrat
                                                </p>
                                                <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>
                                                    Used for body text, descriptions, and modern content
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-bodoni mb-4" style={{ color: '#232323' }}>
                            Leadership Team
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c6a35d' }}></div>
                        <p className="text-lg font-montserrat mt-6 max-w-3xl mx-auto" style={{ color: '#232323', opacity: 0.8 }}>
                            Our visionary leaders drive innovation and excellence across all our global operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leaders.map((leader, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl text-center transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-4 border-2 hover:border-opacity-100 border-opacity-30 overflow-hidden relative" style={{ borderColor: '#c6a35d' }}>
                                <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 50% 50%, #c6a35d 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>

                                <div className="relative mb-8 z-10">
                                    <div className="relative">
                                        <div className={`w-32 h-32 rounded-full mx-auto bg-gradient-to-br ${leader.accent} p-1 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br" style={{ background: `linear-gradient(135deg, #c6a35d20 0%, #c6a35d40 100%)` }}></div>
                                                <span className="text-3xl font-bold font-bodoni text-white relative z-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                                    <Image src={leader.image} alt={leader.name} width={200} height={200} className="w-full h-full object-cover rounded-full" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border-3 border-white shadow-lg group-hover:rotate-180 transition-transform duration-700" style={{ backgroundColor: '#c6a35d' }}></div>
                                        <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full border-2 border-white shadow-lg group-hover:rotate-180 transition-transform duration-700" style={{ backgroundColor: '#232323' }}></div>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold font-bodoni mb-2 group-hover:text-opacity-100 transition-all duration-300" style={{ color: '#232323' }}>
                                            {leader.name}
                                        </h3>
                                        <div className="inline-block px-4 py-2 rounded-full text-sm font-montserrat font-bold text-white shadow-lg" style={{ background: `linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)` }}>
                                            {leader.title}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <p className="text-sm font-montserrat leading-relaxed group-hover:text-opacity-100 transition-all duration-300" style={{ color: '#232323', opacity: 0.8 }}>
                                            {leader.bio}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-opacity-20" style={{ borderColor: '#c6a35d' }}>
                                        <div className="flex justify-center space-x-4">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#c6a35d' }}>
                                                <Mail className="w-4 h-4" style={{ color: '#c6a35d' }} />
                                            </div>
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#c6a35d' }}>
                                                <ExternalLink className="w-4 h-4" style={{ color: '#c6a35d' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-bodoni mb-4" style={{ color: '#232323' }}>
                            Latest News & Press Releases
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c6a35d' }}></div>
                        <p className="text-lg font-montserrat mt-6 max-w-3xl mx-auto" style={{ color: '#232323', opacity: 0.8 }}>
                            Stay updated with our latest achievements, innovations, and industry developments
                        </p>
                    </div>

                    <div className="space-y-8">
                        {newsData.map((news) => (
                            <div key={news.id} className={`group bg-white rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border-2 overflow-hidden ${news.featured ? 'border-opacity-100' : 'border-opacity-30'}`} style={{ borderColor: '#c6a35d' }}>
                                <div className="p-10">
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-4 mb-6">
                                                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-montserrat font-bold text-white shadow-lg ${news.featured ? 'animate-pulse' : ''}`} style={{ background: news.featured ? 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' : 'linear-gradient(135deg, #232323 0%, #404040 100%)' }}>
                                                    {news.featured && <Award className="w-4 h-4 mr-2" />}
                                                    {news.category}
                                                </span>
                                                <div className="flex items-center space-x-2 text-sm font-montserrat" style={{ color: '#232323', opacity: 0.6 }}>
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl lg:text-3xl font-bold font-bodoni mb-4 group-hover:text-opacity-100 transition-all duration-300" style={{ color: '#232323' }}>
                                                {news.title}
                                            </h3>

                                            <p className="text-lg font-montserrat leading-relaxed mb-6" style={{ color: '#232323', opacity: 0.8 }}>
                                                {news.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c6a35d' }}>
                                                        <span className="text-xs font-bold text-white font-montserrat">
                                                            {news.author.split(' ').map(n => n[0]).join('')}
                                                        </span>
                                                    </div>
                                                    <span className="text-sm font-montserrat font-medium" style={{ color: '#232323', opacity: 0.7 }}>
                                                        {news.author}
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {news.tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex} className="px-3 py-1 rounded-full text-xs font-montserrat font-medium border" style={{ color: '#c6a35d', borderColor: '#c6a35d', backgroundColor: 'rgba(198, 163, 93, 0.1)' }}>
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:w-48 lg:flex-shrink-0">
                                            <div className={`w-full h-32 lg:h-48 rounded-2xl relative overflow-hidden ${news.featured ? 'shadow-2xl' : 'shadow-lg'}`} style={{ background: `linear-gradient(135deg, #c6a35d20 0%, #c6a35d40 100%)` }}>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c6a35d' }}>
                                                            <FileText className="w-8 h-8 text-white" />
                                                        </div>
                                                        <p className="text-sm font-montserrat font-bold" style={{ color: '#232323' }}>
                                                            Press Release
                                                        </p>
                                                    </div>
                                                </div>
                                                {news.featured && (
                                                    <div className="absolute top-4 right-4">
                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: '#c6a35d' }}>
                                                            <Award className="w-4 h-4 text-white" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href={'/media/news'} className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-montserrat font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group" style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}>
                            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            <span>View All News & Updates</span>
                        </Link >
                    </div>
                </section>

                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-bodoni mb-4" style={{ color: '#232323' }}>
                            Media Contacts & Information
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c6a35d' }}></div>
                        <p className="text-lg font-montserrat mt-6 max-w-3xl mx-auto" style={{ color: '#232323', opacity: 0.8 }}>
                            For press inquiries, interviews, and media collaborations
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2" style={{ borderColor: '#c6a35d' }}>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}>
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-bodoni" style={{ color: '#232323' }}>
                                            Press Inquiries
                                        </h3>
                                        <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>
                                            Media Relations Team
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div
                                        className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md group"
                                        style={{ backgroundColor: '#f0efe2' }}
                                        onClick={() => copyToClipboard('info@amaraaglobal.com', 'Press Email')}
                                    >
                                        <span className="font-montserrat font-medium" style={{ color: '#232323' }}>
                                            info@amaraaglobal.com
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            {copiedText === 'Press Email' ? (
                                                <>
                                                    <Check className="w-4 h-4" style={{ color: '#c6a35d' }} />
                                                    <span className="text-xs font-montserrat font-medium" style={{ color: '#c6a35d' }}>Copied!</span>
                                                </>
                                            ) : (
                                                <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" style={{ color: '#c6a35d' }} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2" style={{ borderColor: '#c6a35d' }}>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #232323 0%, #404040 100%)' }}>
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-bodoni" style={{ color: '#232323' }}>
                                            Media Hotline
                                        </h3>
                                        <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>
                                            24/7 Press Support
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div
                                        className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md group"
                                        style={{ backgroundColor: '#f0efe2' }}
                                        onClick={() => copyToClipboard('+91 22 1234 5678', 'Phone Number')}
                                    >
                                        <span className="font-montserrat font-medium" style={{ color: '#232323' }}>
                                            +91 22 1234 5678
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            {copiedText === 'Phone Number' ? (
                                                <>
                                                    <Check className="w-4 h-4" style={{ color: '#c6a35d' }} />
                                                    <span className="text-xs font-montserrat font-medium" style={{ color: '#c6a35d' }}>Copied!</span>
                                                </>
                                            ) : (
                                                <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" style={{ color: '#c6a35d' }} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2" style={{ borderColor: '#c6a35d' }}>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}>
                                        <Building2 className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-bodoni" style={{ color: '#232323' }}>
                                            General Information
                                        </h3>
                                        <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>
                                            Corporate Communications
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div
                                        className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md group"
                                        style={{ backgroundColor: '#f0efe2' }}
                                        onClick={() => copyToClipboard('info@amaraaglobal.com', 'General Email')}
                                    >
                                        <span className="font-montserrat font-medium" style={{ color: '#232323' }}>
                                            info@amaraaglobal.com
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            {copiedText === 'General Email' ? (
                                                <>
                                                    <Check className="w-4 h-4" style={{ color: '#c6a35d' }} />
                                                    <span className="text-xs font-montserrat font-medium" style={{ color: '#c6a35d' }}>Copied!</span>
                                                </>
                                            ) : (
                                                <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" style={{ color: '#c6a35d' }} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-opacity-30" style={{ borderColor: '#c6a35d' }}>
                                <h3 className="text-2xl font-bold font-bodoni mb-8 text-center" style={{ color: '#232323' }}>
                                    Quick Resources
                                </h3>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #f0efe2 0%, #e8e6d9 100%)' }}>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <FileText className="w-8 h-8" style={{ color: '#c6a35d' }} />
                                            <div>
                                                <h4 className="font-montserrat font-bold" style={{ color: '#232323' }}>Fact Sheet</h4>
                                                <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>Key company information</p>
                                            </div>
                                        </div>
                                        <button
                                            className="w-full cursor-pointer py-3 rounded-xl font-montserrat font-bold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                                            style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}
                                            onClick={generateComprehensivePDF}
                                        >
                                            Download PDF
                                        </button>
                                    </div>

                                    <div className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #f0efe2 0%, #e8e6d9 100%)' }}>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <ImageIcon className="w-8 h-8" style={{ color: '#c6a35d' }} />
                                            <div>
                                                <h4 className="font-montserrat font-bold" style={{ color: '#232323' }}>High-Res Images</h4>
                                                <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>Leadership photos & facilities</p>
                                            </div>
                                        </div>
                                        <button
                                            className="w-full cursor-pointer py-3 rounded-xl font-montserrat font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2"
                                            style={{ color: '#c6a35d', borderColor: '#c6a35d', backgroundColor: 'transparent' }}
                                        >
                                            Request Access
                                        </button>
                                    </div>

                                    <div className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #f0efe2 0%, #e8e6d9 100%)' }}>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <Award className="w-8 h-8" style={{ color: '#c6a35d' }} />
                                            <div>
                                                <h4 className="font-montserrat font-bold" style={{ color: '#232323' }}>Awards & Recognition</h4>
                                                <p className="text-sm font-montserrat" style={{ color: '#232323', opacity: 0.7 }}>Our achievements & accolades</p>
                                            </div>
                                        </div>
                                        <Link href={'/media/news'}>
                                        <button
                                            className="w-full cursor-pointer py-3 rounded-xl font-montserrat font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 border-2"
                                            style={{ color: '#c6a35d', borderColor: '#c6a35d', backgroundColor: 'transparent' }}
                                        >
                                            Explore News
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-opacity-30" style={{ borderColor: '#c6a35d' }}>
                                <h3 className="text-2xl font-bold font-bodoni mb-8 text-center" style={{ color: '#232323' }}>
                                    Digital Presence
                                </h3>
                                <div className="space-y-4">
                                    <Link href={'/'} className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:shadow-md" style={{ backgroundColor: '#f0efe2' }}>
                                        <div className="flex items-center space-x-3">
                                            <Globe className="w-6 h-6" style={{ color: '#c6a35d' }} />
                                            <span className="font-montserrat font-medium" style={{ color: '#232323' }}>Official Website</span>
                                        </div>
                                        <ExternalLink className="w-5 h-5 cursor-pointer" style={{ color: '#c6a35d' }} />
                                    </Link>

                                    <div className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:shadow-md" style={{ backgroundColor: '#f0efe2' }}>
                                        <a href={'https://www.linkedin.com/company/amara-global/'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full space-x-3">
                                            <div className="flex items-center space-x-3"> 
                                                <Users className="w-6 h-6" style={{ color: '#c6a35d' }} />
                                                <span className="font-montserrat font-medium" style={{ color: '#232323' }}>LinkedIn</span>
                                            </div>
                                            <ExternalLink className="w-5 h-5 cursor-pointer" style={{ color: '#c6a35d' }} />
                                        </a>
                                    </div>

                                    <Link href={'/media/news'} className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:shadow-md" style={{ backgroundColor: '#f0efe2' }}>
                                        <div className="flex items-center space-x-3">
                                            <Building2 className="w-6 h-6" style={{ color: '#c6a35d' }} />
                                            <span className="font-montserrat font-medium" style={{ color: '#232323' }}>Press Portal</span>
                                        </div>
                                        <ExternalLink className="w-5 h-5" style={{ color: '#c6a35d' }} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <div className="bg-white rounded-3xl p-12 shadow-2xl text-center border-2" style={{ borderColor: '#c6a35d' }}>
                        <div className="max-w-4xl mx-auto">
                            <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}>
                                <Download className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold font-bodoni mb-6" style={{ color: '#232323' }}>
                                Ready to Tell Our Story?
                            </h2>
                            <p className="text-xl font-montserrat mb-10 max-w-3xl mx-auto" style={{ color: '#232323', opacity: 0.8 }}>
                                Download our comprehensive media kit and access all the resources you need to share the House of Amaraa story with the world.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button
                                    onClick={generateComprehensivePDF}
                                    className="inline-flex cursor-pointer items-center space-x-3 px-10 py-5 rounded-2xl font-montserrat font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                                    style={{ background: 'linear-gradient(135deg, #c6a35d 0%, #b8935a 100%)' }}
                                >
                                    <Download className="w-6 h-6 group-hover:animate-bounce" />
                                    <span>Download Complete Media Kit</span>
                                </button>
                                <Link href={'/contact'}
                                    className="inline-flex items-center space-x-3 px-10 py-5 rounded-2xl font-montserrat font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2"
                                    style={{ color: '#c6a35d', borderColor: '#c6a35d', backgroundColor: 'transparent' }}
                                >
                                    <Mail className="w-6 h-6" />
                                    <span>Contact Media Team</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default MediaKit