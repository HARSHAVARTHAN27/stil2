import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
          <p className="mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">Home</Link> / Contact
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Get in Touch With Us</h2>
            <p className="text-muted-foreground mb-6">
              For any inquiries or support, please don't hesitate to contact us. We're here to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-muted-foreground">123 StillProfit Plaza, New York, NY 10001, USA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Working Time</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 max-w-md mx-auto w-full">
            <form className="space-y-4">
              <Input type="text" placeholder="Your name" aria-label="Your name" />
              <Input type="email" placeholder="Your email address" aria-label="Your email address" />
              <Input type="text" placeholder="Subject" aria-label="Subject" />
              <Textarea placeholder="Message" rows={4} aria-label="Message" />
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      </main>

      <div className="bg-muted py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { title: "High Quality", description: "Certified Products" },
            { title: "Warranty Protection", description: "Over 2 Years" },
            { title: "Free Shipping", description: "Order over $200" },
            { title: "24/7 Support", description: "Dedicated Support" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image 
                src="/placeholder.svg"
                alt={item.title} 
                width={48} 
                height={48} 
                className="mb-2" 
              />
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">About Us</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="#" className="hover:underline">Our Story</Link></li>
                <li><Link href="#" className="hover:underline">Team</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Customer Service</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="#" className="hover:underline">FAQ</Link></li>
                <li><Link href="#" className="hover:underline">Returns</Link></li>
                <li><Link href="#" className="hover:underline">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="space-y-1 text-sm">
                <li><Link href="#" className="hover:underline">Facebook</Link></li>
                <li><Link href="#" className="hover:underline">Twitter</Link></li>
                <li><Link href="#" className="hover:underline">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 StillProfit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}