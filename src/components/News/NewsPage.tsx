/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useMemo } from 'react';
import { Search, Calendar, ArrowRight, Play, Download, ExternalLink, Award, Users, Mic, FileText } from 'lucide-react';

const newsData = [
  {
    id: 1,
    title: 'Amaraa Group Wins Sustainability Excellence Award 2024',
    description: 'Our commitment to environmental responsibility has been recognized with the prestigious Sustainability Excellence Award, highlighting our renewable energy initiatives and green building practices.',
    content: 'Full article content would go here...',
    category: 'Awards & Recognitions',
    date: '2024-12-15',
    author: 'Amaraa Communications',
    imageSrc: '/images/news/sustainability.jpg',
    videoUrl: 'https://www.youtube.com/',
    featured: true,
    tags: ['sustainability', 'award', 'environment']
  },
  {
    id: 2,
    title: 'Revolutionary Solar Project Launches in Dubai',
    description: 'Amaraa Group announces the launch of its largest solar installation project, capable of powering 50,000 homes with clean energy.',
    content: 'Full article content would go here...',
    category: 'Press Releases',
    date: '2024-12-10',
    author: 'Energy Division',
    imageSrc: '/images/news/solar.jpg',
    videoUrl: '',
    featured: true,
    tags: ['solar', 'dubai', 'renewable energy']
  },
  {
    id: 3,
    title: 'Global Tech Summit 2024 Keynote Presentation',
    description: 'CEO delivers groundbreaking keynote on the future of smart cities and sustainable urban development at the Global Tech Summit.',
    content: 'Full article content would go here...',
    category: 'Events & Conferences',
    date: '2024-12-05',
    author: 'Events Team',
    imageSrc: '/images/news/global.jpg',
    videoUrl: 'https://www.youtube.com/',
    featured: false,
    tags: ['tech summit', 'smart cities', 'keynote']
  },
  {
    id: 4,
    title: 'Forbes Features Amaraa Group in Top 100 Innovative Companies',
    description: 'Leading business magazine recognizes our technological innovations and market leadership in sustainable development.',
    content: 'Full article content would go here...',
    category: 'Media Coverage',
    date: '2024-11-28',
    author: 'Forbes Magazine',
    imageSrc: '/images/news/innovative.jpg',
    videoUrl: '',
    featured: false,
    tags: ['forbes', 'innovation', 'recognition']
  },
  {
    id: 5,
    title: 'Q3 2024 Financial Results Exceed Expectations',
    description: 'Strong performance across all business divisions with 35% revenue growth year-over-year, driven by successful international expansion.',
    content: 'Full article content would go here...',
    category: 'Press Releases',
    date: '2024-11-20',
    author: 'Finance Department',
    imageSrc: '/images/news/financial.jpg',
    videoUrl: '',
    featured: false,
    tags: ['financial', 'results', 'growth']
  },
  {
    id: 6,
    title: 'Smart City Project Wins Innovation Award',
    description: 'Our integrated smart city solution receives the Innovation Excellence Award at the International Urban Development Conference.',
    content: 'Full article content would go here...',
    category: 'Awards & Recognitions',
    date: '2024-11-15',
    author: 'Smart Cities Division',
    imageSrc: '/images/news/smartcity.jpg',
    videoUrl: '',
    featured: false,
    tags: ['smart city', 'innovation', 'award']
  },
  {
    id: 7,
    title: 'Real Estate Weekly Interviews CEO on Market Trends',
    description: 'Exclusive interview discussing the future of sustainable real estate development and emerging market opportunities.',
    content: 'Full article content would go here...',
    category: 'Media Coverage',
    date: '2024-11-10',
    author: 'Real Estate Weekly',
    imageSrc: '/images/news/realestate.jpg',
    videoUrl: 'https://www.youtube.com/',
    featured: false,
    tags: ['interview', 'real estate', 'market trends']
  },
  {
    id: 8,
    title: 'Annual Sustainability Conference 2024',
    description: 'Join us for our flagship sustainability conference featuring industry leaders, innovative solutions, and networking opportunities.',
    content: 'Full article content would go here...',
    category: 'Events & Conferences',
    date: '2024-11-05',
    author: 'Events Team',
    imageSrc: '/images/news/sustainability-1.jpg',
    videoUrl: '',
    featured: false,
    tags: ['conference', 'sustainability', 'networking']
  }
];

const categories = [
  { name: 'All', icon: FileText },
  { name: 'Press Releases', icon: FileText },
  { name: 'Media Coverage', icon: Mic },
  { name: 'Events & Conferences', icon: Users },
  { name: 'Awards & Recognitions', icon: Award }
];

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const filteredArticles = useMemo(() => {
    return newsData.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const totalPages = Math.ceil(regularArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = regularArticles.slice(startIndex, startIndex + articlesPerPage);

  const formatDate = (dateString: string | number | Date) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.icon : FileText;
  };

  return (
    <div className="min-h-screen bg-[#f0efe2] dark:bg-[#232323] transition-colors duration-300">
      <div className="bg-white dark:bg-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold font-bodoni text-[#232323] dark:text-white mb-6">
              News & Media
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-montserrat max-w-3xl mx-auto">
              Stay updated with the latest developments, achievements, and insights from Amaraa Group. 
              Discover our journey of innovation and excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-8 mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news, events, or press releases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 font-montserrat text-lg border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent bg-white dark:bg-[#232323] text-[#232323] dark:text-white placeholder-gray-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setCurrentPage(1);
                  }}
                  className={`flex cursor-pointer items-center gap-2 px-6 py-3 rounded-xl font-montserrat font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-[#c6a35d] text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 dark:bg-[#232323] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-bodoni text-[#232323] dark:text-white mb-8">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => {
                const IconComponent = getCategoryIcon(article.category);
                return (
                  <article
                    key={article.id}
                    className="group bg-white cursor-pointer dark:bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.imageSrc}
                        alt={article.title}
                        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#c6a35d] text-white text-sm font-montserrat font-medium rounded-full">
                          <IconComponent className="w-4 h-4" />
                          {article.category}
                        </span>
                      </div>
                      {article.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-[#c6a35d] fill-current ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-montserrat mb-3">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-xl font-bold font-bodoni text-[#232323] dark:text-white mb-3 group-hover:text-[#c6a35d] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-montserrat mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-montserrat">
                          By {article.author}
                        </span>
                        <button className="inline-flex items-center gap-2 text-[#c6a35d] font-montserrat font-semibold hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-3xl font-bold font-bodoni text-[#232323] dark:text-white mb-8">
            {selectedCategory === 'All' ? 'All News' : selectedCategory}
          </h2>
          {paginatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedArticles.map((article) => {
                const IconComponent = getCategoryIcon(article.category);
                return (
                  <article
                    key={article.id}
                    className="group bg-white cursor-pointer dark:bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.imageSrc}
                        alt={article.title}
                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#c6a35d] text-white text-sm font-montserrat font-medium rounded-full">
                          <IconComponent className="w-4 h-4" />
                          {article.category}
                        </span>
                      </div>
                      {article.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-[#c6a35d] fill-current ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-montserrat mb-3">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-lg font-bold font-bodoni text-[#232323] dark:text-white mb-3 group-hover:text-[#c6a35d] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-montserrat mb-4 line-clamp-3 text-sm">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-montserrat">
                          By {article.author}
                        </span>
                        <button className="inline-flex items-center gap-2 text-[#c6a35d] font-montserrat font-semibold text-sm hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-bold font-bodoni text-gray-600 dark:text-gray-400 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 dark:text-gray-500 font-montserrat">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white dark:bg-black text-[#232323] dark:text-white font-montserrat font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-montserrat font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-[#c6a35d] text-white'
                    : 'bg-white dark:bg-black text-[#232323] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white dark:bg-black text-[#232323] dark:text-white font-montserrat font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-bodoni text-[#232323] dark:text-white mb-4">
              Media Kit
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-montserrat">
              Access our brand assets, logos, and media contacts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Brand Guidelines', icon: FileText, size: '2.3 MB' },
              { name: 'Logo Package', icon: Download, size: '1.8 MB' },
              { name: 'Press Images', icon: Download, size: '12.5 MB' },
              { name: 'Media Contacts', icon: ExternalLink, size: 'PDF' }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-[#f0efe2] dark:bg-[#232323] rounded-xl p-6 hover:bg-[#c6a35d] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <item.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bodoni font-bold text-lg mb-2">{item.name}</h3>
                <p className="font-montserrat text-sm opacity-70">{item.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;