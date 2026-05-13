import { PlayCircle, Edit, Film, Star, Users, Zap, ChevronRight, ArrowRight, Sparkles, Award, Clock, Share2 } from 'lucide-react';
import { Button } from 'magistory/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'magistory/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
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
           <Button className="bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-md">
             Get Started
           </Button>
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
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Start Editing Now <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-blue-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all">
            Watch Demo
          </Button>
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
      <section id="features" className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full mb-6">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create professional videos with ease</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Intuitive Editing */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-blue-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-blue-100 rounded-lg mb-4">
                  <Edit className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Intuitive Editing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Drag-and-drop interface makes video editing simple and fun for everyone.</p>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 2 - Professional Templates */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-purple-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-purple-100 rounded-lg mb-4">
                  <Film className="h-7 w-7 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Professional Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Hundreds of customizable templates for any type of video project.</p>
                <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 3 - AI-Powered Tools */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-indigo-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-indigo-100 rounded-lg mb-4">
                  <Zap className="h-7 w-7 text-indigo-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">AI-Powered Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Smart features that help you edit faster and create better content.</p>
                <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 4 - Team Collaboration */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-green-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-green-100 rounded-lg mb-4">
                  <Users className="h-7 w-7 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Work together with your team in real-time on video projects.</p>
                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 5 - Premium Effects */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-yellow-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-yellow-100 rounded-lg mb-4">
                  <Star className="h-7 w-7 text-yellow-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Premium Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Access to exclusive filters, transitions, and visual effects.</p>
                <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 6 - One-Click Export */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-red-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-red-100 rounded-lg mb-4">
                  <PlayCircle className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">One-Click Export</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Export your videos in any format with optimized settings.</p>
                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 7 - Smart Timeline */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-teal-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-teal-100 rounded-lg mb-4">
                  <Clock className="h-7 w-7 text-teal-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Smart Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Automatically organizes your clips for faster editing.</p>
                <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 8 - Social Sharing */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-pink-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-pink-100 rounded-lg mb-4">
                  <Share2 className="h-7 w-7 text-pink-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Social Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Share your videos directly to social media platforms.</p>
                <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 9 - Cloud Storage */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-orange-50/50">
              <CardHeader>
                <div className="inline-flex items-center justify-center h-14 w-14 bg-orange-100 rounded-lg mb-4">
                  <Award className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Cloud Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Store all your projects in the cloud for easy access.</p>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-white/20 rounded-full mb-8">
            <Film className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of creators who trust Magistory for their video editing needs.
            Start creating professional-quality videos in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Get Started Free <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 hover:text-white transition-all"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Film className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Magistory</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">The ultimate video editor for creators of all levels. Create stunning videos with ease and share your story with the world.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Features <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Pricing <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Templates <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Integrations <ChevronRight className="h-4 w-4 ml-1" /></a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">About Us <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Blog <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Careers <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Contact <ChevronRight className="h-4 w-4 ml-1" /></a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Tutorials <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Help Center <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Community <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">API Docs <ChevronRight className="h-4 w-4 ml-1" /></a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Privacy Policy <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Terms of Service <ChevronRight className="h-4 w-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">Cookie Policy <ChevronRight className="h-4 w-4 ml-1" /></a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Magistory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}