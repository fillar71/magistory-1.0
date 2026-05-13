import { Button } from "../components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "../components/ui/card"

export default function TestComponents() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">shadcn/ui Components Test</h1>

        <div className="space-y-8">
          {/* Button Examples */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Button Components</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small Button</Button>
              <Button size="lg">Large Button</Button>
              <Button size="icon">Icon Button</Button>
            </div>
          </div>

          {/* Card Examples */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Card Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>This is a basic card component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card content goes here. You can put any content inside the card.</p>
                </CardContent>
                <CardFooter>
                  <Button>Card Footer Button</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>Showcase your features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Feature 1</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Feature 2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Feature 3</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
