import Button3D from './Button3D'

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-yellow-200/70">© {new Date().getFullYear()} Advit Goel. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Button3D href="https://linkedin.com/in/advit-goel" target="_blank" rel="noreferrer" variant="outline">
              LinkedIn
            </Button3D>
            <Button3D href="#home">Back to top</Button3D>
          </div>
        </div>
      </div>
    </footer>
  )
}
