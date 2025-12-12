import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Services() {
  const packages = [
    {
      name: "The Essential",
      price: "$500",
      description: "Perfect for small meetings and intimate gatherings.",
      features: [
        "2 Hours of Service",
        "1 Professional Barista",
        "Espresso & Americano",
        "Whole Milk & Oat Milk",
        "Up to 50 Guests"
      ]
    },
    {
      name: "The Signature",
      price: "$950",
      description: "Our most popular package for corporate events and weddings.",
      features: [
        "4 Hours of Service",
        "2 Professional Baristas",
        "Full Espresso Menu (Lattes, Cappuccinos)",
        "3 Milk Options",
        "Housemade Syrups",
        "Up to 150 Guests"
      ],
      featured: true
    },
    {
      name: "The Experience",
      price: "$1,800",
      description: "A complete coffee immersion for large scale events.",
      features: [
        "6+ Hours of Service",
        "3+ Professional Baristas",
        "Espresso Bar + Pour Over Station",
        "Cold Brew on Tap",
        "Custom Branded Cups",
        "Signature Event Drink",
        "Unlimited Guests"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24">
        {/* Header */}
        <div className="bg-zinc-900 py-24 border-b border-white/10">
          <div className="container text-center">
            <h1 className="font-heading text-5xl md:text-6xl text-white uppercase mb-6">Our <span className="text-primary">Services</span></h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              We offer tailored packages to suit events of all sizes. From intimate office meetings to grand wedding receptions.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="container -mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col bg-card border ${pkg.featured ? 'border-primary shadow-[0_0_30px_rgba(192,117,51,0.15)]' : 'border-white/10'} p-8 transition-transform hover:-translate-y-2 duration-300`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-heading uppercase text-sm font-bold px-4 py-1 tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8 text-center">
                  <h3 className="font-heading text-2xl text-white uppercase mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="font-mono text-sm text-muted-foreground">starting at</span>
                    <span className="font-heading text-4xl text-primary">{pkg.price}</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed px-4">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-sans text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/book">
                  <Button className={`w-full ${pkg.featured ? 'btn-industrial' : 'variant-outline border-white/20 text-white hover:bg-white hover:text-black rounded-none uppercase font-heading tracking-wider py-6'}`}>
                    Select Package
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="container mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-white uppercase mb-8">Custom <span className="text-primary">Add-Ons</span></h2>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-heading text-xl text-white uppercase">Branded Cups</h4>
                    <span className="font-mono text-primary">+$150</span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">Your company logo or event monogram stamped on every cup.</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-heading text-xl text-white uppercase">Pastry Assortment</h4>
                    <span className="font-mono text-primary">+$8/person</span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">Curated selection of croissants, muffins, and scones from local bakeries.</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-heading text-xl text-white uppercase">Nitro Cold Brew</h4>
                    <span className="font-mono text-primary">+$200</span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">Velvety, nitrogen-infused cold brew served on tap.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] border border-white/10 p-4">
              <div className="absolute inset-0 bg-[url('/images/service-cold-brew.jpg')] bg-cover bg-center opacity-50 grayscale" />
              <div className="relative z-10 h-full border border-white/20 flex items-center justify-center">
                <div className="text-center p-8 bg-black/80 backdrop-blur-sm border border-primary/30 max-w-xs">
                  <h3 className="font-heading text-2xl text-white uppercase mb-4">Need something specific?</h3>
                  <p className="font-mono text-sm text-muted-foreground mb-6">We love creative challenges. Let us know what you have in mind.</p>
                  <Link href="/book">
                    <Button variant="link" asChild className="text-primary hover:text-white uppercase tracking-widest">
                      <span>Contact Us</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
