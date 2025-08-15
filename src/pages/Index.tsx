import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Palette, Search, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Piattaforma</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#servizi" className="text-gray-600 hover:text-gray-900">Servizi</a>
              <a href="#contatti" className="text-gray-600 hover:text-gray-900">Contatti</a>
              <Button size="sm">Inizia Ora</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovazione <span className="text-blue-600">Digitale</span>
              <br />per il Futuro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Trasformiamo le tue idee in soluzioni digitali innovative. 
              Creiamo esperienze uniche che accelerano la crescita del tuo business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Inizia il Tuo Progetto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-4 w-4" />
                Guarda Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Offriamo soluzioni complete per la tua presenza digitale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sviluppo Web</h3>
              <p className="text-gray-600">Siti web moderni e performanti</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design UI/UX</h3>
              <p className="text-gray-600">Interfacce intuitive e coinvolgenti</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO & Marketing</h3>
              <p className="text-gray-600">Ottimizzazione e visibilità online</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">App Mobile</h3>
              <p className="text-gray-600">Applicazioni native e PWA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Piattaforma</h3>
              <p className="text-gray-300">
                Soluzioni innovative per la tua crescita digitale.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contatti</h4>
              <div className="space-y-2">
                <p className="text-gray-300">info@piattaforma.it</p>
                <p className="text-gray-300">+39 02 1234 5678</p>
                <p className="text-gray-300">Milano, Italia</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Link</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-300 hover:text-white block">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white block">Termini di Servizio</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2024 Piattaforma. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;