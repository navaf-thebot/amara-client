import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  name: string
  href?: string
}

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
  breadcrumbs?: BreadcrumbItem[]
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=400&width=1920",
  className,
  breadcrumbs = [],
}: PageBannerProps) {
  return (
    <div className={cn("relative h-80 md:h-96 flex items-center justify-center overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-hoa-charcoal/90 via-hoa-charcoal/70 to-hoa-gold/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center space-x-2 mb-6 text-sm">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 dark:text-white/50 text-black/50" />
                {item.href ? (
                  <Link href={item.href} className="dark:text-white/70 text-black/70 hover:text-hoa-gold transition-colors duration-300">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-hoa-gold font-medium text-black">{item.name}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 font-serif tracking-wide animate-fade-in-up">
          {title}
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoa-gold to-transparent mx-auto mb-6 animate-fade-in-up animation-delay-200" />

        {subtitle && (
          <p className="text-xl md:text-2xl text-black/90 dark:text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 border border-hoa-gold/30 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-hoa-gold/20 rounded-full animate-pulse animation-delay-1000" />
    </div>
  )
}