import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Industrial Coffee Bar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-block border border-primary/50 bg-black/30 backdrop-blur-sm px-4 py-1 mb-4">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Premium Coffee Catering</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] uppercase tracking-tight">
              Crafted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Experience</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed border-l-2 border-primary pl-6">
              We bring the third-wave coffee shop experience to your event. 
              Precision brewing, artisanal beans, and industrial aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/book">
                <Button className="btn-industrial text-lg px-8 py-6 h-auto">
                  Book Your Event
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" className="font-heading uppercase tracking-wider border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 h-auto rounded-none text-lg">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="group space-y-4">
              <div className="h-1 w-12 bg-primary group-hover:w-24 transition-all duration-500" />
              <h3 className="font-heading text-3xl text-white uppercase">Artisanal <br/>Quality</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                We source single-origin beans from sustainable farms and roast them in small batches to highlight unique flavor profiles.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="group space-y-4">
              <div className="h-1 w-12 bg-primary group-hover:w-24 transition-all duration-500" />
              <h3 className="font-heading text-3xl text-white uppercase">Expert <br/>Baristas</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Our team consists of certified professionals who understand the science of extraction and the art of hospitality.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="group space-y-4">
              <div className="h-1 w-12 bg-primary group-hover:w-24 transition-all duration-500" />
              <h3 className="font-heading text-3xl text-white uppercase">Mobile <br/>Setup</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Our modular coffee carts are designed with an industrial aesthetic to fit seamlessly into any premium event space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid / Services Teaser */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[60vh] md:h-[40vh]">
          <div className="relative group overflow-hidden">
            <img src="/images/service-espresso.jpg" alt="Espresso" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
              <h3 className="font-heading text-2xl text-white uppercase tracking-widest border-2 border-white px-4 py-2">Espresso Bar</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/images/service-pour-over.jpg" alt="Pour Over" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
              <h3 className="font-heading text-2xl text-white uppercase tracking-widest border-2 border-white px-4 py-2">Slow Bar</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/images/service-cold-brew.jpg" alt="Cold Brew" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
              <h3 className="font-heading text-2xl text-white uppercase tracking-widest border-2 border-white px-4 py-2">Cold Brew</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-zinc-900 flex flex-col items-center justify-center p-8 text-center border-l border-white/10">
            <h3 className="font-heading text-3xl text-primary uppercase mb-4">Custom Menu</h3>
            <p className="font-mono text-sm text-muted-foreground mb-8">Tailored drinks for your specific event theme and audience.</p>
            <Link href="/services">
              <Button variant="link" asChild className="text-white hover:text-primary uppercase tracking-widest font-bold flex items-center gap-2">
                <span>Explore Services <ArrowRight className="h-4 w-4" /></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zinc-900/50 border-y border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <img src="/images/catering-setup.jpg" alt="Catering Setup" className="w-full h-auto shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl text-white uppercase">Seamless <span className="text-primary">Execution</span></h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 h-fit rounded-sm border border-primary/20">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-white uppercase mb-2">Punctual Setup</h4>
                    <p className="text-muted-foreground font-mono text-sm">We arrive 90 minutes prior to service to ensure everything is dialed in perfectly.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 h-fit rounded-sm border border-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-white uppercase mb-2">Any Location</h4>
                    <p className="text-muted-foreground font-mono text-sm">From office lobbies to outdoor weddings, our self-contained carts can operate anywhere.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 h-fit rounded-sm border border-primary/20">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-white uppercase mb-2">All-Inclusive</h4>
                    <p className="text-muted-foreground font-mono text-sm">We handle everything: cups, condiments, milk alternatives, and cleanup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10 grayscale" />
        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-5xl md:text-7xl text-white uppercase mb-8">Ready to <span className="text-primary">Brew?</span></h2>
          <p className="font-mono text-muted-foreground max-w-xl mx-auto mb-12 text-lg">
            Secure your date and elevate your event with our premium coffee service.
          </p>
          <Link href="/book">
            <Button className="btn-industrial text-xl px-12 py-8 h-auto">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
