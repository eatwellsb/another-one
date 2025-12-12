import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  eventType: z.string().min(1, { message: "Please select an event type." }),
  date: z.date(),
  guestCount: z.string().min(1, { message: "Please estimate guest count." }),
  package: z.string().optional(),
  message: z.string().optional(),
});

export default function Book() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guestCount: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Booking request received!", {
      description: "We'll be in touch shortly to confirm details.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background flex flex-col lg:flex-row">
        {/* Left Side - Image & Info */}
        <div className="lg:w-1/2 relative hidden lg:block">
          <div className="absolute inset-0">
            <img 
              src="/images/catering-setup.jpg" 
              alt="Coffee Catering" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center p-16 text-white">
            <h2 className="font-heading text-6xl uppercase mb-6">Let's Brew <br/>Something <br/><span className="text-primary">Special</span></h2>
            <p className="font-mono text-lg text-gray-300 max-w-md mb-12">
              Tell us about your event, and we'll craft the perfect coffee experience for you and your guests.
            </p>
            <div className="space-y-4 font-mono text-sm text-gray-400 border-t border-white/20 pt-8">
              <p>Direct Contact:</p>
              <p className="text-white">bookings@brewforge.com</p>
              <p className="text-white">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="lg:hidden mb-12">
            <h1 className="font-heading text-4xl text-white uppercase mb-4">Book Your Event</h1>
            <p className="font-mono text-muted-foreground">Fill out the form below to get a quote.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-white/20 text-white font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-white/20 text-white font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-white/20 text-white font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="guestCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Guest Count</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 50-100" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-white/20 text-white font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus:ring-0 focus:border-primary text-white font-mono">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/10 text-white font-mono">
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-0 text-left font-mono bg-transparent border-0 border-b border-white/20 rounded-none hover:bg-transparent hover:text-primary",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-card border-white/10" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            className="bg-card text-white font-mono"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Interested Package</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus:ring-0 focus:border-primary text-white font-mono">
                          <SelectValue placeholder="Select package (optional)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-white/10 text-white font-mono">
                        <SelectItem value="essential">The Essential</SelectItem>
                        <SelectItem value="signature">The Signature</SelectItem>
                        <SelectItem value="experience">The Experience</SelectItem>
                        <SelectItem value="custom">Custom / Unsure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-heading uppercase tracking-wider text-muted-foreground">Additional Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us more about your event needs..." 
                        {...field} 
                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-white/20 text-white font-mono min-h-[100px] resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="btn-industrial w-full text-lg py-6 mt-8">
                Submit Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
