import { PlayCircle, Edit, Film, Star, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Film className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">Magistory</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Create Stunning Videos<br />with Ease
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Magistory is the ultimate video editor for creators, marketers, and businesses.
          Edit videos like a pro without the complexity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
            Start Editing Now
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
            Watch Demo
          </button>
        </div>

        {/* Hero Video Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <PlayCircle className="h-24 w-24 mx-auto mb-4" />
                <p className="text-lg">Video Editor Interface Preview</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-full p-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PlayCircle className="h-5 w-5 text-white" />
                <span className="text-white text-sm">Play Demo</span>
              </div>
              <div className="text-white text-sm">0:00 / 2:30</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to create professional videos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <Edit className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Intuitive Editing</h3>
              <p className="text-gray-600">Drag-and-drop interface makes video editing simple and fun for everyone.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <Film className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Templates</h3>
              <p className="text-gray-600">Hundreds of customizable templates for any type of video project.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Tools</h3>
              <p className="text-gray-600">Smart features that help you edit faster and create better content.</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Team Collaboration</h3>
              <p className="text-gray-600">Work together with your team in real-time on video projects.</p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Effects</h3>
              <p className="text-gray-600">Access to exclusive filters, transitions, and visual effects.</p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                <PlayCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">One-Click Export</h3>
              <p className="text-gray-600">Export your videos in any format with optimized settings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust Magistory for their video editing needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Film className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Magistory</span>
              </div>
              <p className="text-gray-400">The ultimate video editor for creators of all levels.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Magistory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
