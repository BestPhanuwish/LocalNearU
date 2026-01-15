import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Users, Shield, MessageCircle, Zap, Globe } from "lucide-react";
import { useState } from "react";

/**
 * LocalNearU Landing Page
 * Design: Modern Authentic Minimalism
 * - Warm coral primary (#E8704A) for energy & connection
 * - Deep teal secondary (#1B6B6B) for trust & stability
 * - Poppins for headlines, Inter for body, Playfair for taglines
 */

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LN</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">LocalNearU</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#why" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline">Why Us</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
            <Button className="btn-primary text-sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  🌏 Travel Differently
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Travel Like a Local,
                <span className="gradient-text block">Feel Like a Friend</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-lg">
                Connect with verified local friends in Bangkok for authentic experiences. No tours, no commissions—just genuine friendship and cultural exchange.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-primary">
                  Start Your Journey
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button className="btn-outline">
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 pt-8 text-sm">
                <div>
                  <p className="font-bold text-primary">32.4M</p>
                  <p className="text-foreground/60">Annual Visitors</p>
                </div>
                <div>
                  <p className="font-bold text-secondary">Bangkok</p>
                  <p className="text-foreground/60">#1 Most Visited</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/hero-bangkok-friends.jpg"
                alt="Friends enjoying authentic Bangkok experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gradient-to-b from-white to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem with Travel Today</h2>
            <p className="text-lg text-foreground/70">
              Traditional travel experiences leave you disconnected, isolated, and stuck in repetitive itineraries designed for profit, not passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Impersonal & Repetitive",
                desc: "Group tours offer cookie-cutter itineraries with no sense of belonging to the local community."
              },
              {
                icon: "💰",
                title: "Misaligned Incentives",
                desc: "Tour guides prioritize commission-based shops over authentic experiences you actually want."
              },
              {
                icon: "😔",
                title: "Isolation & Risk",
                desc: "Solo travelers struggle with loneliness and lack verified means to meet locals safely."
              }
            ].map((item, idx) => (
              <div key={idx} className="feature-card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src="/images/feature-temple-walk.jpg"
                alt="Local guide showing traveler around Bangkok temple"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet LocalNearU
              </h2>
              <p className="tagline text-primary">
                The platform for authentic friendship and cultural exchange
              </p>
              <p className="text-lg text-foreground/70">
                We enable meaningful meetups that transform travel into personal, memorable friendships. Connect with verified local friends, not tour guides.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { icon: Shield, title: "Verified Local Friends", desc: "Real, verified locals with ratings and reviews" },
                  { icon: MessageCircle, title: "Pre-Meeting Chat", desc: "Build trust and plan before you meet" },
                  { icon: Zap, title: "Activity-Based Matching", desc: "Connect over shared interests like food, temples, photography" },
                  { icon: MapPin, title: "Flexible Scheduling", desc: "On-demand or planned meetups that fit your itinerary" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-white to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Authentic Bangkok</h2>
            <p className="text-lg text-foreground/70">
              Discover the city through the eyes of locals who know it best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/feature-night-market.jpg",
                icon: "🌙",
                title: "Night Market Buddy",
                desc: "Explore vibrant night markets with a local guide who knows all the best street food and hidden gems."
              },
              {
                image: "/images/feature-cultural-connection.jpg",
                icon: "🙏",
                title: "Temple Walk & Culture",
                desc: "Learn about Thai culture and spirituality from locals who can share authentic insights and traditions."
              },
              {
                image: "/images/feature-temple-walk.jpg",
                icon: "🍜",
                title: "Food Tour Experience",
                desc: "Taste authentic Thai cuisine and learn cooking secrets from locals who grew up with these flavors."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-3xl">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LocalNearU Section */}
      <section id="why" className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why LocalNearU?</h2>
            <p className="text-lg text-foreground/70">
              We're different from traditional tour platforms and social apps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                competitor: "Tour Platforms (Klook, GetYourGuide)",
                issue: "Focus on transactions and rigid itineraries",
                localnearu: "Genuine friendship + flexible personal meetups"
              },
              {
                competitor: "Social Apps (Tinder, Couchsurfing)",
                issue: "Not travel-focused or lack income models for locals",
                localnearu: "Travel-focused with fair compensation for hosts"
              },
              {
                competitor: "Traditional Travel",
                issue: "Impersonal, commission-driven, lonely",
                localnearu: "Authentic, human-centered, community-focused"
              },
              {
                competitor: "Generic Platforms",
                issue: "One-size-fits-all approach",
                localnearu: "Activity-based matching for real connections"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <p className="text-sm text-primary font-semibold mb-2">vs {item.competitor}</p>
                <p className="text-foreground/60 text-sm mb-3">{item.issue}</p>
                <p className="font-semibold text-foreground">✓ {item.localnearu}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="bg-gradient-to-b from-white to-background py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70">
              Simple, transparent pricing that benefits both travelers and locals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💳", title: "Subscription", price: "$79.99/month", desc: "Unlimited access to local friend matching" },
              { icon: "🎁", title: "Gifting", price: "30% commission", desc: "Send digital or physical gifts to hosts" },
              { icon: "📞", title: "Premium Calls", price: "20% per minute", desc: "Video/voice calls with local friends" },
              { icon: "📅", title: "Booking", price: "20% commission", desc: "Commission on confirmed meetups" }
            ].map((model, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{model.icon}</div>
                <h3 className="font-bold text-lg mb-2">{model.title}</h3>
                <p className="text-primary font-bold text-xl mb-2">{model.price}</p>
                <p className="text-sm text-foreground/70">{model.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Year 1 Projections (Thailand Only)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                <p className="text-sm text-foreground/70 mb-2">Conservative Estimate</p>
                <p className="text-3xl font-bold text-primary mb-1">$1.42M</p>
                <p className="text-sm text-foreground/70">0.05% market share (17,750 users)</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                <p className="text-sm text-foreground/70 mb-2">Growth Target</p>
                <p className="text-3xl font-bold text-secondary mb-1">$2.83M</p>
                <p className="text-sm text-foreground/70">0.1% market share (35,500 users)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/cta-join-community.jpg"
                alt="Community of friends from around the world"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Vision
              </h2>
              <p className="tagline text-primary">
                Connect. Experience. Belong.
              </p>
              <p className="text-lg text-foreground/70">
                We're building the "Airbnb of Local Friendship Travel," starting in Bangkok and expanding across Southeast Asia.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">🇹🇭</div>
                  <div>
                    <h4 className="font-semibold">Phase 1: Bangkok Launch</h4>
                    <p className="text-sm text-foreground/70">Validate MVP and build community in the world's most visited city</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">🌏</div>
                  <div>
                    <h4 className="font-semibold">Phase 2: Thailand Expansion</h4>
                    <p className="text-sm text-foreground/70">Expand to Chiang Mai, Phuket, and Pattaya</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">🌍</div>
                  <div>
                    <h4 className="font-semibold">Phase 3: Southeast Asia</h4>
                    <p className="text-sm text-foreground/70">Vietnam, Indonesia, Philippines, and beyond</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">🌐</div>
                  <div>
                    <h4 className="font-semibold">Phase 4: Global Platform</h4>
                    <p className="text-sm text-foreground/70">Authentic local connections worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Travel Differently?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join the community of travelers and locals building authentic connections
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-3 rounded-lg bg-white text-foreground placeholder-foreground/50 flex-1 sm:flex-none focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Get Early Access
              </Button>
            </div>

            <p className="text-sm text-white/70">
              We'll keep you updated on our Bangkok launch and exclusive opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">LN</span>
                </div>
                <span className="font-bold">LocalNearU</span>
              </div>
              <p className="text-white/70 text-sm">Travel like a local, feel like a friend.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="mailto:contact@localnearu.com" className="hover:text-white transition-colors">contact@localnearu.com</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
              <p>&copy; 2025 LocalNearU. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
