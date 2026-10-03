import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>King</CardTitle>
          <CardDescription>
            React + Vite + Tailwind CSS + shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Get started</Button>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
