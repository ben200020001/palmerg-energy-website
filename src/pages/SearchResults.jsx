import React, { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Search, Loader2, ChevronRight, Home, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationBar from "@/components/FooterLocationBar";
import { motion } from "framer-motion";
import { searchSite } from "@/utils/siteSearch";

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    if (query) {
      setSearchInput(query);
      fetchResults(query);
    }
  }, [query]);

  const fetchResults = (q) => {
    if (!q.trim()) return;
    setLoading(true);
    setResults(null);
    try {
      const data = searchSite(q);
      setResults(data);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchInput.trim();
    if (q) {
      navigate(`/SearchResults?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-accent text-white pt-[180px] md:pt-44 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link to="/Home" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span>Search</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            {query ? `Results for "${query}"` : "Search Palmerg Energy"}
          </h1>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for services, products, locations..."
              className="w-full px-5 py-4 pr-14 rounded-xl text-foreground bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
            <p className="text-muted-foreground text-sm">Generating results for "{query}"...</p>
          </div>
        )}

        {!loading && !query && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Enter a search term to get started.</p>
          </div>
        )}

        {!loading && results && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {results.did_you_mean && (
              <div className="mb-6 text-sm text-muted-foreground">
                Did you mean:{" "}
                <Link
                  to={`/SearchResults?q=${encodeURIComponent(results.did_you_mean)}`}
                  className="text-primary font-medium hover:underline"
                >
                  {results.did_you_mean}
                </Link>
                ?
              </div>
            )}

            {/* Summary Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wide">Search summary</p>
                <p className="text-foreground text-sm leading-relaxed">{results.summary}</p>
              </div>
            </div>

            {/* Result Cards */}
            <p className="text-sm text-muted-foreground mb-4">{results.results?.length} result(s) found</p>
            <div className="space-y-4">
              {results.results?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.page_path}
                    className="block bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full mb-2 inline-block">
                          {item.category}
                        </span>
                        <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        <span className="text-xs text-primary/60 mt-2 inline-block">
                          palmergenergy.com{item.page_path}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <FooterLocationBar />

      <Footer />
    </div>
  );
}