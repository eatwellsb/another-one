import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowDownRight, ArrowUpRight, Calendar, Coffee, DollarSign, Users } from "lucide-react";

// Mock Data
const revenueData = [
  { month: "Jan", revenue: 4500 },
  { month: "Feb", revenue: 5200 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6100 },
  { month: "May", revenue: 7500 },
  { month: "Jun", revenue: 8200 },
  { month: "Jul", revenue: 7800 },
  { month: "Aug", revenue: 9100 },
  { month: "Sep", revenue: 10500 },
  { month: "Oct", revenue: 11200 },
  { month: "Nov", revenue: 12800 },
  { month: "Dec", revenue: 14500 },
];

const packageData = [
  { name: "The Essential", value: 35, color: "var(--chart-1)" },
  { name: "The Signature", value: 45, color: "var(--chart-2)" },
  { name: "The Experience", value: 20, color: "var(--chart-3)" },
];

const popularDrinksData = [
  { name: "Oat Latte", count: 1240 },
  { name: "Cold Brew", count: 980 },
  { name: "Cappuccino", count: 850 },
  { name: "Espresso", count: 620 },
  { name: "Matcha", count: 450 },
];

const eventTypeData = [
  { subject: "Corporate", A: 120, fullMark: 150 },
  { subject: "Wedding", A: 98, fullMark: 150 },
  { subject: "Private", A: 86, fullMark: 150 },
  { subject: "Conference", A: 99, fullMark: 150 },
  { subject: "Pop-up", A: 65, fullMark: 150 },
  { subject: "Festival", A: 40, fullMark: 150 },
];

export default function Analytics() {
  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24 pt-8">
        <div className="container space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
            <div>
              <h1 className="font-heading text-4xl text-white uppercase">Business <span className="text-primary">Analytics</span></h1>
              <p className="font-mono text-muted-foreground mt-2">
                Explore data intuitively, understand trends better, and track performance.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="bg-card border border-white/10 px-4 py-2 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-mono text-sm text-white">Last 12 Months</span>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-card border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium font-mono text-muted-foreground uppercase">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white font-heading">$102,200</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-mono">+20.1%</span>
                  <span className="ml-1 font-mono">from last year</span>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium font-mono text-muted-foreground uppercase">Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white font-heading">145</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-mono">+12.5%</span>
                  <span className="ml-1 font-mono">from last year</span>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium font-mono text-muted-foreground uppercase">Cups Served</CardTitle>
                <Coffee className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white font-heading">12,450</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-mono">+8.2%</span>
                  <span className="ml-1 font-mono">from last year</span>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium font-mono text-muted-foreground uppercase">Avg. Guest Count</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white font-heading">85</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  <span className="text-red-500 font-mono">-2.4%</span>
                  <span className="ml-1 font-mono">from last year</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Charts Area */}
          <Tabs defaultValue="revenue" className="space-y-4">
            <TabsList className="bg-card border border-white/10 p-1">
              <TabsTrigger value="revenue" className="font-mono text-xs uppercase data-[state=active]:bg-primary data-[state=active]:text-black">Revenue Trends</TabsTrigger>
              <TabsTrigger value="packages" className="font-mono text-xs uppercase data-[state=active]:bg-primary data-[state=active]:text-black">Package Distribution</TabsTrigger>
              <TabsTrigger value="drinks" className="font-mono text-xs uppercase data-[state=active]:bg-primary data-[state=active]:text-black">Popular Items</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue" className="space-y-4">
              <Card className="bg-card border-white/10">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-white uppercase">Monthly Revenue Growth</CardTitle>
                  <CardDescription className="font-mono text-xs text-muted-foreground">
                    Visualizing the upward trend in catering sales over the fiscal year.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                        <XAxis 
                          dataKey="month" 
                          stroke="#888888" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false}
                          fontFamily="var(--font-mono)"
                        />
                        <YAxis 
                          stroke="#888888" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false}
                          tickFormatter={(value) => `$${value}`}
                          fontFamily="var(--font-mono)"
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff' }}
                          itemStyle={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}
                          formatter={(value) => [`$${value}`, "Revenue"]}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="var(--primary)" 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill="url(#colorRevenue)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="packages" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-card border-white/10">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-white uppercase">Package Preference</CardTitle>
                    <CardDescription className="font-mono text-xs text-muted-foreground">
                      Distribution of booking packages selected by clients.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={packageData}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                          >
                            {packageData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff' }}
                            itemStyle={{ fontFamily: 'var(--font-mono)' }}
                          />
                          <Legend 
                            verticalAlign="bottom" 
                            height={36}
                            formatter={(value) => <span className="text-white font-mono text-xs ml-2">{value}</span>}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-white/10">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-white uppercase">Event Types</CardTitle>
                    <CardDescription className="font-mono text-xs text-muted-foreground">
                      Breakdown of catering events by category.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={eventTypeData} layout="vertical" margin={{ left: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                          <XAxis type="number" hide />
                          <YAxis 
                            dataKey="subject" 
                            type="category" 
                            stroke="#888888" 
                            fontSize={12} 
                            tickLine={false} 
                            axisLine={false}
                            width={80}
                            fontFamily="var(--font-mono)"
                          />
                          <Tooltip 
                            cursor={{fill: 'rgba(255,255,255,0.05)'}}
                            contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff' }}
                            itemStyle={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}
                          />
                          <Bar dataKey="A" name="Events" fill="var(--primary)" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="drinks" className="space-y-4">
              <Card className="bg-card border-white/10">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-white uppercase">Top Consumption Items</CardTitle>
                  <CardDescription className="font-mono text-xs text-muted-foreground">
                    Most requested beverages across all events.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={popularDrinksData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                        <XAxis 
                          dataKey="name" 
                          stroke="#888888" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false}
                          fontFamily="var(--font-mono)"
                        />
                        <YAxis 
                          stroke="#888888" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false}
                          fontFamily="var(--font-mono)"
                        />
                        <Tooltip 
                          cursor={{fill: 'rgba(255,255,255,0.05)'}}
                          contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff' }}
                          itemStyle={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}
                        />
                        <Bar dataKey="count" name="Cups Served" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
