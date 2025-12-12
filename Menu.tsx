import Layout from "@/components/Layout";

export default function Menu() {
  const menuCategories = [
    {
      title: "Espresso Bar",
      items: [
        { name: "Espresso", desc: "Double shot of our house blend", price: "Included" },
        { name: "Americano", desc: "Espresso with hot water", price: "Included" },
        { name: "Macchiato", desc: "Espresso with a dash of foam", price: "Included" },
        { name: "Cortado", desc: "Equal parts espresso and steamed milk", price: "Included" },
        { name: "Cappuccino", desc: "Espresso, steamed milk, and foam", price: "Included" },
        { name: "Latte", desc: "Espresso with steamed milk", price: "Included" },
        { name: "Flat White", desc: "Espresso with microfoam", price: "Included" },
      ]
    },
    {
      title: "Filter & Cold",
      items: [
        { name: "Batch Brew", desc: "Rotating single-origin selection", price: "Included" },
        { name: "Pour Over", desc: "Hand-brewed V60 (Add-on)", price: "+$2" },
        { name: "Cold Brew", desc: "Steeped for 24 hours", price: "Included" },
        { name: "Nitro Cold Brew", desc: "Infused with nitrogen (Add-on)", price: "+$3" },
      ]
    },
    {
      title: "Non-Coffee",
      items: [
        { name: "Hot Chocolate", desc: "Valrhona chocolate with steamed milk", price: "Included" },
        { name: "Chai Latte", desc: "Spiced tea concentrate with milk", price: "Included" },
        { name: "Matcha Latte", desc: "Ceremonial grade matcha", price: "+$1" },
        { name: "Loose Leaf Tea", desc: "Earl Grey, Green, Peppermint", price: "Included" },
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <div className="relative py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/service-pour-over.jpg" 
              alt="Pour Over Coffee" 
              className="w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          </div>
          <div className="relative z-10 text-center container">
            <h1 className="font-heading text-6xl md:text-8xl text-white uppercase tracking-tighter mb-4">
              The <span className="text-primary">Menu</span>
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-6" />
            <p className="font-mono text-muted-foreground max-w-xl mx-auto">
              Sourced responsibly, roasted carefully, and brewed precisely.
            </p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="container pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <h2 className="font-heading text-3xl text-white uppercase border-b border-white/10 pb-4 flex items-center gap-4">
                  <span className="text-primary text-4xl">0{idx + 1}.</span> {category.title}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-heading text-xl text-gray-200 uppercase tracking-wide group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-mono text-sm text-primary/80">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-xs text-muted-foreground">{item.desc}</p>
                        <div className="flex-grow border-b border-dotted border-white/10 h-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Milk Options Box */}
            <div className="border border-primary/30 bg-primary/5 p-8 flex flex-col justify-center">
              <h3 className="font-heading text-2xl text-primary uppercase mb-6 text-center">Milk Options</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 border border-white/10 bg-black/20">
                  <span className="font-heading text-white uppercase tracking-wider">Whole</span>
                </div>
                <div className="p-4 border border-white/10 bg-black/20">
                  <span className="font-heading text-white uppercase tracking-wider">Oat</span>
                </div>
                <div className="p-4 border border-white/10 bg-black/20">
                  <span className="font-heading text-white uppercase tracking-wider">Almond</span>
                </div>
                <div className="p-4 border border-white/10 bg-black/20">
                  <span className="font-heading text-white uppercase tracking-wider">Soy</span>
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground text-center mt-6">
                *Oat milk is our standard dairy alternative. Others available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
